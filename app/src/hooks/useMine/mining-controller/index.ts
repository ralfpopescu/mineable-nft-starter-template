import { createWorkerFactory, terminate } from "@shopify/web-worker";
import { Web3Provider } from "@ethersproject/providers";
import { BigNumber } from "ethers";
import { randomBytes } from "@ethersproject/random";

const createWorker = createWorkerFactory(() => import("../mine"));

type MiningControllerConstructorArgs = {
  library: Web3Provider;
  address: string;
  difficultyTarget: BigNumber;
  onFound: (nonce: BigNumber) => void;
  updateHashRate: (rate: number) => void;
};

export default class MiningController {
  args: MiningControllerConstructorArgs;
  workers: Array<ReturnType<typeof createWorker>> = [];
  startTime: number = 0;
  hashes: BigNumber = BigNumber.from(0);
  terminated: boolean = false;

  constructor(_args: MiningControllerConstructorArgs) {
    this.args = _args;
    this.startTime = Math.floor(Date.now() / 1000);
  }

  async start(): Promise<void> {
    console.log("Starting miner");
    let lastFetchTime = Date.now() / 1000;
    const workerCount = window.navigator?.hardwareConcurrency || 4;
    const startingNonce = BigNumber.from(randomBytes(32)).shr(200);

    for (var i = 0; i < workerCount; i++) {
      const worker = createWorker();
      this.workers.push(worker);
    }

    const rangeLength = BigNumber.from("0x0000000007ab5b000100000").div(this.workers.length);

    const notificationRate = 25000;

    for (
      var rangeBegin = BigNumber.from(0);
      rangeBegin.lt(rangeLength);
      rangeBegin = rangeBegin.add(notificationRate)
    ) {
      if (this.terminated) {
        break;
      }

      let now = Date.now() / 1000;
      if (now - lastFetchTime > 5) {
        console.log("Refreshing mining data...");
        lastFetchTime = now;
      }

      const workerThreads = [];

      for (var workerIndex = 0; workerIndex < this.workers.length; workerIndex++) {
        const worker = this.workers[workerIndex];

        workerThreads.push(
          worker.mine(
            rangeLength
              .mul(workerIndex)
              .add(rangeBegin)
              .add(startingNonce || 0),
            rangeLength
              .mul(workerIndex)
              .add(rangeBegin)
              .add(startingNonce || 0)
              .add(notificationRate),
            BigNumber.from(this.args.address),
            BigNumber.from(this.args.difficultyTarget)
          )
        );
      }

      const results = await Promise.all(workerThreads);

      this.hashes = this.hashes.add(notificationRate * this.workers.length);

      if (!this.terminated) {
        this.args.updateHashRate(this.getHashRate());
      }

      const validResults = results.filter((result) => {
        return BigNumber.from(result).gte(0);
      });

      if (validResults.length > 0) {
        console.log({ validResults });
        this.args.onFound(BigNumber.from(validResults[0]));
        break;
      }
    }
  }

  terminate(): void {
    console.log("Terminating...");
    this.terminated = true;
    for (var worker in this.workers) {
      terminate(worker);
      console.log("Terminated");
    }
  }

  getHashRate(): number {
    const secondsPassed = Math.floor(Date.now() / 1000) - this.startTime;
    const hashRate = this.hashes.div(secondsPassed || 1);
    return hashRate.toNumber();
  }
}

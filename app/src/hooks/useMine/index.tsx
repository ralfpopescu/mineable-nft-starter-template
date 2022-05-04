import { useEffect, useState } from "react";
import { BigNumber } from "@ethersproject/bignumber";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import MiningController from "./mining-controller";

type MiningConfig = {
  difficultyTarget?: BigNumber;
  miningStatus: MiningStatus;
  setMiningStatus: (status: MiningStatus) => void;
};

export enum MiningStatus {
  WAITING_TO_START,
  STARTED,
  WAITING_TO_STOP,
  STOPPED,
}

export const useMine = ({ difficultyTarget, miningStatus, setMiningStatus }: MiningConfig) => {
  const { library, account } = useWeb3React<Web3Provider>();
  const [found, setFound] = useState<BigNumber | null>(null);
  const [hashRate, setHashRate] = useState<number>(0);
  const [miningController, setMiningController] = useState<MiningController | null>(null);

  useEffect(() => {
    const stop = () => {
      miningController?.terminate();
      setMiningController(null);
      setMiningStatus(MiningStatus.STOPPED);
      setHashRate(0);
    };
    const onFound = (nonce: BigNumber) => {
      stop();
      setFound(nonce);
    };

    if (!difficultyTarget) {
      console.log("No difficulty target.");
      return;
    }

    if (miningStatus === MiningStatus.WAITING_TO_STOP) {
      stop();
    } else if (miningStatus === MiningStatus.WAITING_TO_START) {
      console.log({
        library: library!,
        address: account!,
        onFound,
        difficultyTarget,
        updateHashRate: setHashRate,
      });
      const controller = new MiningController({
        library: library!,
        address: account!,
        onFound,
        difficultyTarget: difficultyTarget!,
        updateHashRate: setHashRate,
      });

      setMiningController(controller);
      controller.start().catch((e) => {
        console.log("Error mining: " + e);
        stop();
      });

      setMiningStatus(MiningStatus.STARTED);
    }

    return () => {
      miningController?.terminate();
    };
  }, [miningStatus, library, account, miningController, difficultyTarget, setMiningStatus]);

  return { found, hashRate };
};

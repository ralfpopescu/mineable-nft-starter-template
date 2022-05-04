import { useState } from "react";
import { BigNumber } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

import { useMine, MiningStatus } from "./hooks/useMine";
import { ConnectButton } from "./components/ConnectButton";

const difficultyTarget = BigNumber.from(
  "0x00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);

const getMiningStatus = (status: number) => {
  if (status === MiningStatus.WAITING_TO_START || status === MiningStatus.STARTED) return "started";
  return "stopped";
};

const App = () => {
  const provider = useWeb3React<Web3Provider>();
  const { active } = provider;
  const [miningStatus, setMiningStatus] = useState<MiningStatus>(MiningStatus.STOPPED);
  const { found, hashRate } = useMine({ difficultyTarget, miningStatus, setMiningStatus });

  return (
    <div className="App">
      <ConnectButton />
      <button disabled={!active} onClick={() => setMiningStatus(MiningStatus.WAITING_TO_START)}>
        start
      </button>
      <button disabled={!active} onClick={() => setMiningStatus(MiningStatus.WAITING_TO_STOP)}>
        stop
      </button>
      <div>mining status:{getMiningStatus(miningStatus)}</div>
      <div>found:{found ? found._hex : "no nonce found yet."}</div>
      <div>hashRate:{hashRate} hashes per second</div>
    </div>
  );
};

export default App;

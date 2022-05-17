import { useState, useEffect } from "react";
import { BigNumber } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { getDifficulty, mint, renderAllTokens } from "./web3/methods";
import { useMine, MiningStatus } from "./hooks/useMine";
import { ConnectButton } from "./components/ConnectButton";

const getMiningStatus = (status: number) => {
  if (status === MiningStatus.WAITING_TO_START || status === MiningStatus.STARTED) return "started";
  return "stopped";
};

const App = () => {
  const provider = useWeb3React<Web3Provider>();
  const { library, active } = provider;
  const [miningStatus, setMiningStatus] = useState<MiningStatus>(MiningStatus.STOPPED);
  const [difficultyTarget, setDifficultyTarget] = useState<BigNumber>(BigNumber.from(0));
  const { found, hashRate } = useMine({ difficultyTarget, miningStatus, setMiningStatus });

  useEffect(() => {
    const setDifficulty = async () => {
      const difficulty = await getDifficulty(library!);
      setDifficultyTarget(difficulty);
    };
    setDifficulty();
  });

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
      {found && active && <button onClick={() => mint(library!, found)}>mint</button>}
      <div>hashRate:{hashRate} hashes per second</div>
    </div>
  );
};

export default App;

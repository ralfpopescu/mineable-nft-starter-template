import { useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector, networkConnector } from "../../web3/connectors";

export const ConnectButton = () => {
  const provider = useWeb3React<Web3Provider>();
  const { library, active, activate, account } = provider;

  const [connected, setConnected] = useState(false);

  const connect = () => {
    if (!account || !active || !library) {
      setConnected(false);
      injectedConnector.isAuthorized().then((isAuthorized: boolean) => {
        function activateNetwork() {
          activate(networkConnector, (e) => {
            console.log("Error connecting to network web3: " + e);
            setConnected(false);
          }).then(() => {
            console.log("Successfully connected to network web3");
            setConnected(true);
          });
        }

        if (isAuthorized) {
          activate(injectedConnector, (e) => {
            console.log("Falling back to network connector due to error: " + e);
            activateNetwork();
          }).then(() => {
            console.log("Successfully connected to injected web3");
            setConnected(true);
          });
        } else {
          console.log("Falling back to network connector (no injected found)...");
          activateNetwork();
        }
      });
    } else {
      setConnected(true);
    }
  };

  return (
    <button disabled={connected} onClick={() => connect()}>
      {connected ? "already connected" : "connect to get mining"}
    </button>
  );
};

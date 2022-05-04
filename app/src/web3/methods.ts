import { Web3Provider } from "@ethersproject/providers";
import { MyMineableNFT__factory } from "./contracts/my-mineable-nft";
import { BigNumber } from "ethers";
import { CONTRACT_ADDRESS } from ".";

export const attemptMint = async function (lib: Web3Provider, nonce: BigNumber): Promise<string> {
  const contract = MyMineableNFT__factory.connect(CONTRACT_ADDRESS, lib);
  try {
    const signer = lib.getSigner();
    const tx = await contract.connect(signer).mint(nonce.toHexString());

    return tx.hash;
  } catch (e: any) {
    console.log(e);
    throw e;
  }
};

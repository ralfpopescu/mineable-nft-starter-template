import { Web3Provider } from "@ethersproject/providers";
import { MyMineableNFT__factory } from "./contract/typechain";
import { BigNumber } from "ethers";
import { CONTRACT_ADDRESS } from ".";

export const mint = async function (lib: Web3Provider, nonce: BigNumber): Promise<string> {
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

export const getDifficulty = async function (lib: Web3Provider): Promise<BigNumber> {
  const contract = MyMineableNFT__factory.connect(CONTRACT_ADDRESS, lib);
  try {
    return await contract.difficulty();
  } catch (e: any) {
    console.log(e);
    throw e;
  }
};

export const renderAllTokens = async function (lib: Web3Provider): Promise<string[]> {
  const contract = MyMineableNFT__factory.connect(CONTRACT_ADDRESS, lib);
  try {
    const totalSupply = await contract.totalSupply();
    const tokenIds = new Array(totalSupply).fill(null).map((_, i) => i);
    const svgs = await Promise.all(tokenIds.map((tokenId) => contract.render(tokenId)));
    return svgs;
  } catch (e: any) {
    console.log(e);
    throw e;
  }
};

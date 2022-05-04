import { Web3Provider } from "@ethersproject/providers";
import { MGear__factory } from "./contracts/mineablegear";
import { BigNumber, utils } from "ethers";
import { MINEABLEGEAR_ADDR } from ".";

export const attemptMint = async function (
  lib: Web3Provider,
  nonce: BigNumber,
  rarity: BigNumber,
  mwordIndex?: number,
  nameFormat?: number
): Promise<string> {
  if (nameFormat !== undefined) {
    if (nameFormat < 0 || nameFormat > 1) {
      throw new Error("bad format");
    }
  }

  const contract = MGear__factory.connect(MINEABLEGEAR_ADDR, lib);
  try {
    const signer = lib.getSigner();

    const value = utils.parseEther("0.02");

    console.log({ signer, value });

    const tx = await contract
      .connect(signer)
      .mint(nonce.toHexString(), rarity, mwordIndex || 0, nameFormat || 0, {
        value,
      });

    console.log({ tx });

    return tx.hash;
  } catch (e: any) {
    console.log(e);
    throw e;
  }
};

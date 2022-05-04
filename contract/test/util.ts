import { ethers } from "hardhat";
import { BigNumber } from "@ethersproject/bignumber";

type HashInput = { address: BigNumber; nonce: BigNumber };

export const hash = ({ address, nonce }: HashInput): BigNumber => {
  const hash = ethers.utils.solidityKeccak256(
    ["uint160", "uint96"],
    [address, nonce]
  );
  return BigNumber.from(hash);
};

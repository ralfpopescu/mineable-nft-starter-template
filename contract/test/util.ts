import { ethers } from "hardhat";
import { BigNumber } from "ethers";

type HashInput = { address: BigNumber; nonce: BigNumber };

export const hash = ({ address, nonce }: HashInput): BigNumber => {
  const hash = ethers.utils.solidityKeccak256(
    ["uint160", "uint96"],
    [address, nonce]
  );
  return BigNumber.from(hash);
};

export const deploy = async (difficulty: BigNumber) => {
  const MyMineableNFT = await ethers.getContractFactory("MyMineableNFT");
  const myMineableNFT = await MyMineableNFT.deploy(difficulty);
  await myMineableNFT.deployed();
  return myMineableNFT;
};

import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { hash, deploy } from "./util";

const difficulty = BigNumber.from(
  "0x00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);

describe("Mineable NFT", function () {
  it("Should mint a mineable NFT with a good nonce", async function () {
    const contract = await deploy(difficulty);

    const [miner] = await ethers.getSigners();
    let nonce = BigNumber.from(0);
    let minerHash = hash({ address: BigNumber.from(miner.address), nonce });

    while (minerHash.gt(difficulty)) {
      nonce = nonce.add(1);
      minerHash = hash({ address: BigNumber.from(miner.address), nonce });
    }

    await contract.mint(nonce);
    const supply = await contract.totalSupply();
    expect(supply).to.equal(1);
  });

  it("Should fail to mint a mineable NFT with a bad nonce", async function () {
    const contract = await deploy(difficulty);

    const [miner] = await ethers.getSigners();
    let nonce = BigNumber.from(0);
    let minerHash = hash({ address: BigNumber.from(miner.address), nonce });

    while (minerHash.lt(difficulty)) {
      nonce = nonce.add(1);
      minerHash = hash({ address: BigNumber.from(miner.address), nonce });
    }

    try {
      await contract.mint(nonce);
      throw Error("This error should not be reached.");
    } catch (e: any) {
      expect(e.message).to.equal(
        "VM Exception while processing transaction: reverted with reason string 'Difficulty not met.'"
      );
    }
  });
});

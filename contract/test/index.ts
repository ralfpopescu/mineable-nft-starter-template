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

  it("Should render a color", async function () {
    const contract = await deploy(difficulty);

    const [miner] = await ethers.getSigners();
    let nonce = BigNumber.from(0);
    let minerHash = hash({ address: BigNumber.from(miner.address), nonce });

    while (minerHash.gt(difficulty)) {
      nonce = nonce.add(1);
      minerHash = hash({ address: BigNumber.from(miner.address), nonce });
    }

    await contract.mint(nonce);

    // render new tokenId 0
    const rendered = await contract.render(0);
    expect(rendered).to.equal(
      "data:application/json;base64,eyJuYW1lIjogIk15TWluZWFibGVORlQgIzAiLCAiZGVzY3JpcHRpb24iOiAiVGhpcyBpcyBvbiBvbi1jaGFpbiBtaW5lYWJsZSBORlQgYmFzZWQgb24gY29sb3JzLiIsICJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVEF3SWlCb1pXbG5hSFE5SWpFd01DSWdkbWxsZDBKdmVEMGlNQ0F3SURFd01DQXhNREFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhKbFkzUWdlRDBpTUNJZ2VUMGlNQ0lnZDJsa2RHZzlJakV3TUNVaUlHaGxhV2RvZEQwaU1UQXdKU0lnWm1sc2JEMGlJMlF6TmpRMVlpSXZQand2YzNablBnPT0iIH0="
    );
  });
});

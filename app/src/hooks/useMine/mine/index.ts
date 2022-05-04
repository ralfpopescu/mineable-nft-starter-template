import { solidityKeccak256 } from "ethers/lib/utils";
import { BigNumber } from "@ethersproject/bignumber";

type HashInput = { address: BigNumber; nonce: BigNumber };

export const hash = ({ address, nonce }: HashInput): BigNumber => {
  const hash = solidityKeccak256(["uint160", "uint96"], [address, nonce]);
  return BigNumber.from(hash);
};

export function mine(
  _rangeStart: BigNumber,
  _rangeEnd: BigNumber,
  _address: BigNumber,
  _difficultyTarget: BigNumber
): BigNumber {
  const rangeStart = BigNumber.from(_rangeStart);
  const rangeEnd = BigNumber.from(_rangeEnd);
  const address = BigNumber.from(_address);
  const difficultyTarget = BigNumber.from(_difficultyTarget);

  for (let i = rangeStart; i.lt(rangeEnd); i = i.add(1)) {
    const attempt = hash({ address, nonce: i });

    if (attempt.lt(difficultyTarget)) {
      return BigNumber.from(i);
    }
  }

  return BigNumber.from(-1);
}

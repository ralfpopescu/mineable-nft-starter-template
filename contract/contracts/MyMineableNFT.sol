// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

import "./ERC721Enumerable.sol";
import "./Ownable.sol";

contract MyMineableNFT is ERC721Enumerable, Ownable {
uint256 difficulty;

  constructor(uint256 _difficulty) ERC721("MyMineableNFT", "MY_MINEABLE_NFT") Ownable() {
    difficulty = _difficulty;
  }

  function encodeNonce(address sender, uint96 nonce) internal pure returns (uint256) {
    return uint256(keccak256(abi.encodePacked(uint160(sender), nonce)));
  }

  function mint(uint96 nonce) external payable {
    uint256 token = encodeNonce(msg.sender, nonce);
    require(token < difficulty, "Difficulty not met.");
    ERC721Enumerable._safeMint(msg.sender, token);
  }
}

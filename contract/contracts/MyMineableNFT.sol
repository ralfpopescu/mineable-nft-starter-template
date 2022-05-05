// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

import "./ERC721Enumerable.sol";
import "./Ownable.sol";
import "./Base64Encode.sol";
import "./Strings.sol";

contract MyMineableNFT is ERC721Enumerable, Ownable {
  uint256 public difficulty;
  uint256[] public tokenIdToData;

  constructor(uint256 _difficulty) ERC721("MyMineableNFT", "MY_MINEABLE_NFT") Ownable() {
    difficulty = _difficulty;
  }

  function encodeNonce(address sender, uint96 nonce) internal pure returns (uint256) {
    return uint256(keccak256(abi.encodePacked(uint160(sender), nonce)));
  }

  function mint(uint96 nonce) external payable {
    uint256 tokenData = encodeNonce(msg.sender, nonce);
    require(tokenData < difficulty, "Difficulty not met.");
    ERC721._safeMint(msg.sender, tokenIdToData.length);
    tokenIdToData.push(tokenData);
  }

  function render(uint256 tokenId) public view returns (string memory) {
    return
      string(
        abi.encodePacked(
          "data:application/json;base64,",
          Base64Encode.encode(
            bytes(
              abi.encodePacked(
                '{"name": "MyMineableNFT #',
                Strings.toString(tokenId),
                '", "description": "This is on on-chain mineable NFT based on colors.", "image": "data:image/svg+xml;base64,',
                Base64Encode.encode(
                  bytes(
                    abi.encodePacked(
                      '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100%" height="100%" fill="#',
                      Strings.toHexString(tokenIdToData[tokenId] & 0xFFFFFF),
                      '"/></svg>'
                    )
                  )
                ),
                '" }'
              )
            )
          )
        )
      );
  }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(ERC721._exists(tokenId), "token does not exist");
        return render(tokenId);
    }
}

//SPDX-Licence-Identifier : MIT
 pragma solidity ^0.8.14;

 import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
 import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
 import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;
    constructor(address marketPlaceAddress) ERC721("Yash Tokens", "YST"){
        contractAddress = marketPlaceAddress;
    }

}
/**
 *@type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks:{
    hardhat: {},
    rinkeby:{
    url:'https://speedy-nodes-nyc.moralis.io/5994c1d73829497f1c9e424d/eth/rinkeby',
    accounts:["3aaf25724408ee89faa2d191db1bee758a3a9b3288a6177294f027292fdec3bc"]
     }
  }
};

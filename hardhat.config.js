/**
 *@type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("ethers");
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks:{
    hardhat: {},
    rinkeby:{
    url:'https://speedy-nodes-nyc.moralis.io/5994c1d73829497f1c9e424d/eth/rinkeby',
    accounts:PRIVATE_KEY
     }
  }
};

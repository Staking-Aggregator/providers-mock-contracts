// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const StETH = await hre.ethers.getContractFactory("contracts/Lido/stETH.sol:stETH");
  const stETH = await StETH.deploy();

  await stETH.deployed();

  const Lido = await hre.ethers.getContractFactory("Lido");
  const lido = await Lido.deploy(stETH.address)

  console.log("stETH address: ",stETH.address);
  console.log("Lido smart contract address: ",lido.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

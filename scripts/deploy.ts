import { ethers, upgrades } from "hardhat";

async function main() {

  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying proxy, box implementation and proxy admin ...");
  const boxProxy = await upgrades.deployProxy(Box, [42], { initializer: "store" });
  console.log(`Box proxy deployed to ${boxProxy.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

import { ethers, upgrades } from "hardhat";

async function main() {

    const BoxV2 = await ethers.getContractFactory("BoxV2");
    let box = await upgrades.upgradeProxy("0x049D0C5F3fbefB4Cc889EeE56B6c631f2597eA96", BoxV2);
    console.log(`Upgrades finished! You'll now be interacting with ${box.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

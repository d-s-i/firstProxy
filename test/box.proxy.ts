import { ethers, upgrades } from "hardhat";
import assert from "assert";
import { Contract, ContractFactory } from "@ethersproject/contracts";

let Box: ContractFactory;
let box: Contract;

describe("Box (proxy)", function() {
  beforeEach(async function() {
    Box = await ethers.getContractFactory("Box");
    box = await upgrades.deployProxy(Box, [42], { initializer: "store" });
  });

  it("return the value previously initialized", async function(){
    assert.equal(await box.retrieve().toString(), "42")
  });
});

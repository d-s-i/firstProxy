//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract BoxV2 {
    uint256 private value;

    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(value);
    }

    function retrive() public view returns(uint256) {
        return value;
    }

    function increment() public {
        value++;
        emit ValueChanged(value);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeting {
    string public greeting;

    // Constructor to initialize the greeting
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    // Function to set a new greeting
    function setGreeting(string memory _newGreeting) public {
        greeting = _newGreeting;
    }

    // Function to get the current greeting
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract stETH is ERC20 {
    constructor() ERC20("Lido stETH", "wstETH") {}

    function mint(address _to,uint _amount) public {
        _mint(_to, _amount);
    }
    function burn(address _from,uint _amount) public {
        _burn(_from,_amount);
    }
}
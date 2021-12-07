const { ethers } = require("hardhat");

describe("ContractNFTHandler", function () {
  it("", async function () {
    const ContractNFTHandler = await hre.ethers.getContractFactory("ContractNFTHandler");
    const contractNFTHandler = await ContractNFTHandler.deploy("NFT TEST token", "NT");
  
    await contractNFTHandler.deployed();
    
    const addr = await contractNFTHandler.mint(100);
    console.log(addr)
    
    const res = await contractNFTHandler.getNFTDetails(ethers.utils.hexZeroPad(ethers.utils.hexlify(1), 32));
    console.log({res})
  });
});

const hre = require("hardhat"); 
 
async function main() {  
 
    const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
    const hscp = await horoscopeNFT.deploy();   
    await hscp.deployed();
 
    //since we are testing, you should mention your own Eth wallet address
    const myAddress="ETHEREUM_ADDRESS_WHERE_YOU_WANT_TO_MINT";
    console.log("horoscopeNFT deployed to:", hscp.address);   
 
    let txn = await hscp.mintNFT(myAddress, 'virgo');
    await txn.wait();
 
}
 
main()
    .then(() => process.exit(0))  
    .catch((error) => {    
    console.error(error);
    process.exit(1); 
 });
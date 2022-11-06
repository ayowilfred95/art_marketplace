const main = async () => {
    try {
      const Marketplace = await hre.ethers.getContractFactory("Marketplace");
      const marketplace = await Marketplace.deploy();
    
      await marketplace.deployed();
  
      console.log("Contract deployed to:", marketplace.address);
      
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
    
  main();

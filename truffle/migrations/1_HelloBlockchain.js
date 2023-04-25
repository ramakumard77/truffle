const HelloBlockchain = artifacts.require("HelloBlockchain");

module.exports = function (deployer) {
  //const sampleToken = await HelloBlockchain.deployed();
  deployer.deploy(HelloBlockchain, "Hello Blockchain");
};
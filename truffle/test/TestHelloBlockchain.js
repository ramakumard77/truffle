const HelloBlockchain = artifacts.require("../contracts/HelloBlockchain.sol");
//const HelloBlockchain = artifacts.require("HelloBlockchain");

contract("HelloBlockchain", (accounts) => {
  it("...should store the value 'Hello Blockchain'.", async () => {
    const helloBlockchainInstance = await HelloBlockchain.deployed();

    // Set value of Hello World
    await helloBlockchainInstance.SendRequest("Hello Blockchain", { from: accounts[0] });

    // Get stored value
    const storedData = await helloBlockchainInstance.RequestMessage.call();

    assert.equal(storedData, "Hello Blockchain", "The value 'Hello Blockchain' was not stored.");
    
    // Send response to contract 
    await helloBlockchainInstance.SendResponse("Byyee Blockchain", { from: accounts[0] });
    const respData = await helloBlockchainInstance.ResponseMessage.call();

    assert.equal(respData, "Byye Blockchain", "The value 'Byyee Blockchain' was not stored.");
    
  });
});

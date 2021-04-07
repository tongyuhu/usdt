const TetherToken = artifacts.require("TetherToken");

module.exports = async function (deployer,network,accounts) {
  const instance = await TetherToken.deployed();
  const result = await instance.totalSupply();
  console.log(result.toNumber());
};

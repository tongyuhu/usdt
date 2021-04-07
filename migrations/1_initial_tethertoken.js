const TetherToken = artifacts.require("TetherToken");

module.exports = function (deployer) {
  deployer.deploy(TetherToken,'1000000000000',"TetherToken","USDT",6);
};

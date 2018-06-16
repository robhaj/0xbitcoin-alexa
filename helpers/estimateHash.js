'use strict';

const web3utils = require('web3-utils');
const { contract, web3 } = require('./getContract');

module.exports = async() => {
  let [
    latestDifficultyPeriodStarted,
    difficulty,
    epochCount,
    blockNumber
  ] = await Promise.all([ // Run in parallel
    contract.methods.latestDifficultyPeriodStarted().call(),
    contract.methods.getMiningDifficulty().call(),
    contract.methods.epochCount().call(),
    web3.eth.getBlockNumber(),
  ]);

  let ethBlocksSinceLastDif = blockNumber - latestDifficultyPeriodStarted;
  let secondsPerReward = (ethBlocksSinceLastDif * 15) / (epochCount % 1024)

  let hashrate = web3utils.toBN(difficulty)
  .mul(web3utils.toBN(2).pow(web3utils.toBN(22)))
  .div(web3utils.toBN(900)); // Ideal blocktime

  hashrate *= (900 / secondsPerReward);

  return (hashrate / (parseFloat(web3utils.toBN(10).pow(web3utils.toBN(9))))).toFixed(2);

};

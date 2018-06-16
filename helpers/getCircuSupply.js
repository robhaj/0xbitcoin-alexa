'use strict';

const { contract } = require('./getContract');

module.exports = async() => {
  let amountMined = await contract.methods.tokensMinted().call();
  return parseInt(amountMined) / Math.pow(10, 8);
};

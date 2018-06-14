'use strict';
const web3 = require('web3');
const { INFURA_MAINNET_URL, CONTRACT_ADDRESS } = require('./config');
const w3 = new web3(new web3.providers.HttpProvider(INFURA_MAINNET_URL));
const {abi} = require('./_0xBitcoinToken.json');

module.exports = {
  web3: w3,
  contract: new w3.eth.Contract(abi, CONTRACT_ADDRESS)
};

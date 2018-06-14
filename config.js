require('dotenv').config({silent:true});

module.exports = {
  INFURA_MAINNET_URL: process.env.INFURA_MAINNET_URL || 'https://mainnet.infura.io/gmXEVo5luMPUGPqg6mhy',
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS || '0xb6ed7644c69416d67b522e20bc294a9a9b405b31'
}

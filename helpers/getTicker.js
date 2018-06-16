  'use strict';

  const rp = require('request-promise');

  module.exports = async() => {
    let res = await rp.get('https://api.coinmarketcap.com/v2/ticker/2837/');
    return JSON.parse(res).data.quotes.USD;
  };

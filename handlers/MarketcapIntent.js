'use strict';

const getPrice = require('../helpers/getTicker');
const getCircuSupply = require('../helpers/getCircuSupply');

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'MarketcapIntent';
  },
  async handle(handlerInput) {
    const { price } = await getPrice();
    const supply = await getCircuSupply();
    const marketCap = price * supply;

    const speechText = `The current market cap of 0xBitcoins is ${marketCap}`;
ß
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Market Cap', speechText)
      .getResponse();
  }
};

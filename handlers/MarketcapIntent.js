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
    let [dollars,cents] = `${marketCap}`.split('.');
    const speechText = `The current market cap of 0xBitcoins is ${dollars} dollars
    and ${cents[0] === '0' ? cents[1] : cents} cents`;
ß
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Market Cap', speechText)
      .getResponse();
  }
};

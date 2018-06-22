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

    let [dollars, cents] = `${price * supply}`.split('.');

    cents = cents[0] === '0' ? cents[1] : cents.slice(0, 2)

    let dollarText = dollars === '0' ? '' : `${dollars} dollars and`
    let speechText = `The current market cap of 0xBitcoins is ${dollarText} ${cents} cents`

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Market Cap', speechText)
      .getResponse();
  }
};

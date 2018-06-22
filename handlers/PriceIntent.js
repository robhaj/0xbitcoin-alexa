'use strict';

const getPrice = require('../helpers/getTicker');

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'PriceIntent';
  },
  async handle(handlerInput) {
    const { price } = await getPrice();
    let [ dollars, cents ] = `${price}`.split('.');

    cents = cents[0] === '0' ? cents[1] : cents.slice(0, 2)

    const dollarText = dollars === '0' ? '' : `${dollars} dollars and`;
    const speechText = `The current market cap of 0xBitcoins is ${dollarText} ${cents} cents`

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Price', speechText)
      .getResponse();
  }
};

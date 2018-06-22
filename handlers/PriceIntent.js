'use strict';

const getPrice = require('../helpers/getTicker');

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'PriceIntent';
  },
  async handle(handlerInput) {
    const { price } = await getPrice();
    let [dollars,cents] = `${price}`.split('.');
    const speechText = `The current price for 1 0xBitcoin is ${dollars} dollars and ${cents}`;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Price', speechText)
      .getResponse();
  }
};

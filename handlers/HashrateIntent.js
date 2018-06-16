'use strict';

const estimateHash = require('../helpers/estimateHash');

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  async handle(handlerInput) {
    const hashrate = await estimateHash();

    const speechText = `The current estimated hash rate of 0xBitcoin is ${hashrate}`;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  }
};

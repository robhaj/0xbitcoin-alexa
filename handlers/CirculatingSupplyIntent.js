'use strict';

const getCircuSupply = require('../helpers/getCircuSupply');

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'CirculatingSupplyIntent';
  },
  async handle(handlerInput) {
    const circuSupply = await getCircuSupply();
    const speechText = `The current circulating supply of 0xBitcoin is ${circuSupply} 0xBitcoins.`;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('CirculatingSupply', speechText)
      .getResponse();
  }
};

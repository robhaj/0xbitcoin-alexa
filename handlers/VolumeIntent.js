'use strict';

const getVolume = require('../helpers/getTicker');

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'VolumeIntent';
  },
  async handle(handlerInput) {
    const { volume_24h } = await getVolume();
    const speechText = `The current volume of 0xBitcoin over the last 24 hours is ${volume_24h} dollars`;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Volume', speechText)
      .getResponse();
  }
};

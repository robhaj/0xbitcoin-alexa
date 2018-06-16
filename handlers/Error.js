'use strict';

module.exports = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak(`Sorry, I can't understand that command. Please try again.`)
      .reprompt(`Sorry, I can't understand that command. Please try again.`)
      .getResponse();
  },
};

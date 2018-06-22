'use strict'

const Alexa = require('ask-sdk-core');

// Default Handlers
const LaunchRequestHandler = require('./handlers/LaunchRequest');
const HelpIntentHandler = require('./handlers/HelpIntent');
const CancelAndStopIntentHandler = require('./handlers/CancelAndStopIntent');
const SessionEndedRequestHandler = require('./handlers/SessionEndedRequest');

// Custom Handlers
const VolumeIntentHandler = require('./handlers/VolumeIntent');
const CirculatingSupplyHandler = require('./handlers/CirculatingSupplyIntent');
const HashrateIntentHandler = require('./handlers/HashrateIntent');
const PriceIntentHandler = require('./handlers/PriceIntent');
const MarketcapIntentHandler = require('./handlers/MarketcapIntent');

let skill;

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    VolumeIntentHandler,
    CirculatingSupplyHandler,
    HashrateIntentHandler,
    PriceIntentHandler,
    MarketcapIntentHandler
  )
  .lambda();

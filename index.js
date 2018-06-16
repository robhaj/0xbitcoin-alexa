'use strict'

const Alexa = require('ask-sdk-core');

// Default Handlers
const LaunchRequestHandler = require('./handlers/LaunchRequest');
const HelloWorldIntentHandler = require('./handlers/HelloWorldIntent');
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
    HelloWorldIntentHandler,
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


// const alexaSkillKit = require('alexa-skill-kit')
// const MessageTemplate = require('alexa-message-builder')

// exports.handler = (ev, ctx) => {
//   try {
//     console.log(`Event starting: `, ev);
//     console.log(`Context: `, ctx);
//     alexaSkillKit(ev, ctx, (msg) => {
//       console.log('Incoming Message: ', msg);
//       if (msg.type === 'LaunchRequest') {
//         console.log('Message type is LaunchRequest!');
//         let messageTemplate =  new MessageTemplate();
//         console.log(messageTemplate);
//         return messageTemplate
//           .addText(`Hello from Zero X bitcoin bot.
//             I can give you the price, volume, and marketcap for zero x bitcoin.
//             How can I help you toslacday?
//             You can say:
//             What is the current zero x bitcoin price?
//             Or What is the current market cap of zero x bitcoin?
//           `)
//           .addReprompt(`
//             You can say:
//             What is the current zero x bitcoin price?
//             Or What is the current market cap of zero x bitcoin ?
//           `)
//           .keepSession()
//           .get();
//       }

//       let {intent} = msg;
//       console.log('Intent is ', intent);
//       if (!intent) return 'No intent captured';
//       const {value:field} = intent.slots.Field;
//       if (!['price', 'volume', 'market cap', 'hash rate'].includes(field.toLowerCase())) {
//         return 'I can give you the price, volume, market cap, or estimated hash rate';
//       }
//       switch (intent.name) {
//         case 'GetPrice':
//             return getTicker()
//             .then(({price}) => `Current price of Zero X bitcoin is ${price}`);

//         case 'GetVolume':
//             getTicker()
//             .then(({volume_24h: vol}) => `Current volume of Zero X bitcoin is ${vol} in the last 24 hours`);

//         case 'GetMarketCap':
//             Promise.all([getTicker(),getSupply()])
//             .then(({price,circSupply}) => `Current marketcap of Zero x bitcoin is ${circSupply * price}`);

//         case 'GetHashRate':
//             estimateHash()
//             .then(({estHashRate}) => `Current estimated hash rate of Zero x bitcoin is ${estHashRate} gigahashes per second`);

//         default: () => `Hmm, Zero x bitcoin doesn't know that one`;
//       }
//     })
//   } catch (e) {
//     context.fail(JSON.stringify(e));
//   }
// };

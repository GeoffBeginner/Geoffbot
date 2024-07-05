const axios = require('axios');
const fs = require('fs');

module.exports = async function ({ dstryr, event, parameters }) {
  try {
    
    const ownerInfo = `
      Owner: "Geoff Andrei Jordan",
      hobbies: "Coding, Gaming, Martial Arts"
    `;

    dstryr.sendMessage(ownerInfo, event.threadID);
     
  } catch (error) {
    console.error(error);
    dstryr.sendMessage('An error occurred while processing your request.', event.threadID);
  }
};

const fs = require("fs");
module.exports.config = {
	name: "pc",
    version: "1.0.2",
	hasPermission: 1,
	credits: "Geoff(j)",
	description: "This command will made you Malibog 🥵",
  usePrefix: false,
	commandCategory: "No command marks needed",
	usages: "pc",
    cooldowns: 3, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sarapp!!!")==0 || (event.body.indexOf("SARAP")==0 || (event.body.indexOf("SARAP")==0 || (event.body.indexOf("girl")==0)))) {
		var msg = {
				body: "Here is your request. Please Laslas na for helpful healthy life.\nDeveloper: Geoff Andrei Jordan 😎",
				attachment: fs.createReadStream(__dirname + `ughh.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

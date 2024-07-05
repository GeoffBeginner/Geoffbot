const axios = require("axios");
module.exports.config = {
            name: "haker",
				version: "1.0.0",
				hasPermission: 0,
				usage: "haker",
				description: "Let the Fear Begin 😈",
				credits: "Geoff(j)",
				cooldown: 0,
				hasPrefix: false,
				role: 0			
}
module.exports.run = async function ({
api,
event,
args				
}) {
const input = args.join('');
				if(!input) {
			   api.sendMessage(`Huyy Tapang ahh wag mo kaming hamunin hayup ka kiddo 🤬! wag na wag moko kaming asarin nag aaral kami ng ultra cyber technology haker 🌐, hoyy boi ha 👎! tandaan mo madami na kaming na hak na website 😈, na hak na namin ang most private security na website 😎.`, event.threadID, event.messageID);
								
		return;
 }
}
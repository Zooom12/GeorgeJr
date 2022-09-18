const Parser = require("rss-parser");
const checkViedoes = require("../../functions/tools/checkVideo");
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} is online`);
        
        setTimeout(client.checkVideo, 5 * 1000)
        
 

    }
}
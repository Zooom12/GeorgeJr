require("dotenv").config();
const { token } = process.env;
const { Client, GatewayIntentBits, Collection, Partials, ActivityType } = require('discord.js');
const fs = require("fs");
const blacklist = ['nigger', 'faggot', 'chingchong', 'ching-chong', 'chink', 'curry muncher', 'curry-muncher', 'dink', 'dyke', 'niglet', 'tranny', 'fag', 'kys', 'kill your self', 'kill urself', 'beaner'];
const pingmessage = [ '<@902544887398948876>' ] 

const client = new Client({ intents: 131071, partials: [Partials.Channel] });
client.commands = new Collection();
client.modals = new Collection();
client.buttons = new Collection();
client.commandArray = [];

client.on("ready", () => {
  client.user.setActivity('Committing Tax Evasion', { type: ActivityType.Playing });
  }
)

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

//working code
client.on("messageCreate", async message => {
  const blacklistWords = (value) => blacklist.some((element) => value.includes(element));
if (blacklistWords(message.content.toLowerCase())) await message.delete()
  }
)

client.on("messageCreate", async message => {
  const natePing = (value) => pingmessage.some((element) => value.includes(element));
  if (natePing(message.content.toLowerCase()))
  message.channel.send("George Jr")

})

// old code
//client.on("messageCreate", message => {
  //if (blacklist.includes(message.content.toLowerCase())) message.delete();

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);

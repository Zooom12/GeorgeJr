require("dotenv").config();
const { token } = process.env;
const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js');
const fs = require("fs");
const blacklist = ['nigger', 'faggot', 'chingchong', 'ching-chong', 'chink', 'curry muncher', 'curry-muncher', 'dink', 'dyke', 'niglet', 'tranny', 'fag', 'kys', 'kill your self', 'kill urself', 'beaner'];


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], partials: [Partials.Channel] });
client.commands = new Collection();
client.buttons = new Collection();
client.commandArray = [];

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

// old code
//client.on("messageCreate", message => {
  //if (blacklist.includes(message.content.toLowerCase())) message.delete();

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);
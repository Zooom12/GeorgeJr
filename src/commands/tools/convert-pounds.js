const { SlashCommandBuilder } = require("discord.js");
const { pounds, kilograms } = require("mezur/mass");
const mass = require("mezur/mass");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("convert-pounds")
    .setDescription("Converts Pounds To Kilograms")
    .addIntegerOption((option) =>
      option
        .setName("pounds")
        .setDescription("Pounds")
        .setMinValue(5)
        .setMaxValue(1200)
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const userInput = interaction.options.getInteger("pounds");
    const kilograms = userInput * 0.453592;
    const roundedKilogram = Math.round(kilograms * 10) / 10;
    interaction.reply(`${userInput} Pounds Is ${roundedKilogram} Kilograms`);
    
  },
};

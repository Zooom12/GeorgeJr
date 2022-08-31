const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("convert-kilos")
    .setDescription("Converts Kilograms To Pounds")
    .addNumberOption((option) =>
      option
        .setName("kilograms")
        .setDescription("kilograms")
        .setMinValue(5)
        .setMaxValue(1200)
        .setRequired(true)
    
    ),
  async execute(interaction, client) {
    const userInput = interaction.options.getNumber("kilograms");
    const pounds = userInput * 2.2;
    const roundedPound = Math.ceil(pounds);
    interaction.reply(`${userInput} Kilograms Is ${roundedPound} Pounds`);
    
  },
};

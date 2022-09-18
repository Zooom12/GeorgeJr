const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("convert-miles")
    .setDescription("Converts Miles To Kilometers")
    .addNumberOption((option) =>
      option
        .setName("miles")
        .setDescription("miles")
        .setMinValue(5)
        .setMaxValue(10000)
        .setRequired(true)
    
    ),
  async execute(interaction, client) {
    const userInput = interaction.options.getNumber("miles");
    const kilometers = userInput * 1.6 ;
    const Roundedkiolmeters = Math.ceil(kilometers);
    interaction.reply(`${userInput} Miles Is ${Roundedkiolmeters} Kilometers`);
    
  },
};

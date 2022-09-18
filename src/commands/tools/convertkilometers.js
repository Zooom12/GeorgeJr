const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("convert-kilometers")
    .setDescription("Converts Kilometers To Miles")
    .addNumberOption((option) =>
      option
        .setName("kilometers")
        .setDescription("kilometers")
        .setMinValue(5)
        .setMaxValue(10000)
        .setRequired(true)
    
    ),
  async execute(interaction, client) {
    const userInput = interaction.options.getNumber("kilometers");
    const miles = userInput * 0.62137 ;
    const Roundedmiles = Math.ceil(miles);
    interaction.reply(`${userInput} Kilometers Is ${Roundedmiles} Miles`);
    
  },
};

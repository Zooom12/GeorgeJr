const { ChannelType } = require("discord-api-types/v9");
const {
  PermissionFlagsBits,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const remove = require("../../remove.js");
const member = require("discord.js");
module.exports = {
  data: {
    name: "brown",
  },
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("1003040472509448262")
      .catch(console.error);
      const colorPink = await interaction.guild.roles
      .fetch("1002756309663350835")
      .catch(console.error);
    const colorGreen = await interaction.guild.roles
      .fetch("1003040428909662268")
      .catch(console.error);
    const colorBlue = await interaction.guild.roles
      .fetch("1003037294338510919")
      .catch(console.error);
      const colorBrown = await interaction.guild.roles
      .fetch("1003040472509448262")
      .catch(console.error);
    await roles.remove(colorGreen).catch(console.error);
    await roles.remove(colorBlue).catch(console.error);
    await roles.remove(colorBrown).catch(console.error);
    await roles.remove(colorPink).catch(console.error);
    await roles.add(role).catch(console.error);
    interaction.reply({
        content: "Role Has Been Added",
        ephemeral: true
    })
  },
};

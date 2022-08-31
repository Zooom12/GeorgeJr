const { ChannelType } = require("discord-api-types/v9");
const {
  PermissionFlagsBits,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const member = require("discord.js");
module.exports = {
  data: {
    name: "verification",
  },
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("979807453308940398")
      .catch(console.error);



      if (roles.cache.has("979807453308940398")) {
      await interaction.reply({
        content: "Sorry, I Wont Remove Your Access To The Server",
        ephemeral: true,
      });
    } else {
      roles.add(role);
      await interaction.reply({
        content: "Role Added",
        ephemeral: true,
      });
    
  },
};

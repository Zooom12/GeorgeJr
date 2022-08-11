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
    name: "minecraft",
  },
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("1006976632269058048")
      .catch(console.error);

    if (roles.cache.has("1006976632269058048")) {
        roles.remove("1006976632269058048")
      await interaction.reply({
        content: "Role Removed",
        ephemeral: true,
      });
    } else {
      roles.add(role);
      await interaction.reply({
        content: "Role Added",
        ephemeral: true,
      });
    }
  },
};

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
    name: "quotes",
  },
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("1003494746142036018")
      .catch(console.error);

    if (roles.cache.has("1003494746142036018")) {
        roles.remove("1003494746142036018")
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

const { ChannelType } = require("discord-api-types/v9");
const { rolearray } = require('../../roles.json');
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
    name: "brown",
  },
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("1007145995655716924")
      .catch(console.error);




    await roles.remove(rolearray).catch(console.error);
    await roles.add(role).catch(console.error);
    interaction.reply({
        content: "Role Has Been Added",
        ephemeral: true
    })
  },
};

const { rolearray } = require('../../roles.json');
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
    name: "blue",
  },
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("1007145477831139478")
      .catch(console.error);
    
    await roles.remove(rolearray).catch(console.error);
    await roles.add(role).catch(console.error);
    interaction.reply({
        content: "Role Has Been Added",
        ephemeral: true
    })
  },
};

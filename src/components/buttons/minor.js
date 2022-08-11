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
    name: "minor",
  },
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("997494416992391260")
      .catch(console.error);
    
  
      if (roles.cache.has("997494311937654815")) {
        await interaction.reply({
            content: "You Already Have The 18+ Role",
            ephemeral: true
        })
    } else {
      roles.add(role)
      await interaction.reply({ 
    content: "Age Selected",
    ephemeral: true
  })

  }
  }}

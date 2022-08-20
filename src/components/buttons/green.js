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
    name: "green",
  },
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("1007145344976560240")
      .catch(console.error);
      

    
    roles.remove(['1007145344976560240', '1007145477831139478', '1007145703119798382', '1007145995655716924' ]);


    await roles.add(role).catch(console.error);
    interaction.reply({
        content: "Role Has Been Added",
        ephemeral: true
    })
  },
};

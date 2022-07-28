const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, PermissionFlagsBits, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('newticket')
        .setDescription('Makes Ticket Creator')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setColor('6d6ee8')
        .setAuthor({ name: "Create Ticket", iconURL: client.user.displayAvatarURL()})
        .setDescription('Click the button below to open a ticket.')
      const button = new ButtonBuilder()
          .setCustomId('open-ticket')
          .setLabel('Open a ticket')
          .setEmoji('✉️')
          .setStyle(ButtonStyle.Primary)
    

      interaction.reply({
        embeds: [embed],
        components : [new ActionRowBuilder().addComponents(button)]
      });
    }

}
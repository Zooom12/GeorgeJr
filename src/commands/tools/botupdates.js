const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updates')
        .setDescription('Gives The Notification Roles')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction, client) {
        let updates = new ButtonBuilder()
                .setCustomId('updates')
                .setLabel('Get notified for bot updates')
                .setStyle(ButtonStyle.Primary)

                interaction.reply({
                    components : [new ActionRowBuilder().addComponents(updates)]
                  });
    }
}

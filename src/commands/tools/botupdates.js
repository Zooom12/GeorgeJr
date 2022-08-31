const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updates')
        .setDescription('Gives The Notification Roles'),
    async execute(interaction, client) {
        let updates = new ButtonBuilder()
                .setCustomId('updates')
                .setLabel('Get Notified For Bot Updates')
                .setStyle(ButtonStyle.Primary)

                interaction.reply({
                    components : [new ActionRowBuilder().addComponents(updates)]
                  });
    }
}
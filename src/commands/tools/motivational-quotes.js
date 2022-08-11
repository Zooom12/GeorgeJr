const {ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('motivationalquotes')
        .setDescription('Gives The Motivational Quote Role')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction, client) {
            let quotes = new ButtonBuilder()
                .setCustomId('quotes')
                .setLabel('Get The Motivational Quotes Role')
                .setStyle(ButtonStyle.Primary)

                interaction.reply({
                    components : [new ActionRowBuilder().addComponents(quotes)]
                  });
        
    }
};


const {ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verification')
        .setDescription('Gives Access To The Server')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction, client) {
            let verification = new ButtonBuilder()
                .setCustomId('verification')
                .setLabel('Get Access To The Server')
                .setStyle(ButtonStyle.Primary)

                interaction.reply({
                    components : [new ActionRowBuilder().addComponents(verification)]
                  });
        
    }
};


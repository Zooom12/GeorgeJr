const {ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('Gives The Minecraft Role')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction, client) {
            let minecraft = new ButtonBuilder()
                .setCustomId('minecraft')
                .setLabel('Get The Minecraft Role')
                .setStyle(ButtonStyle.Primary)

                interaction.reply({
                    components : [new ActionRowBuilder().addComponents(minecraft)]
                  });
        
    }
};


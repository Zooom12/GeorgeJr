const {ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('age')
        .setDescription('Gives Age Roles')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction, client) {
            let minor = new ButtonBuilder()
                .setCustomId('minor')
                .setLabel('13-17')
                .setStyle(ButtonStyle.Primary)
            let adult = new ButtonBuilder()
                .setCustomId('adult')
                .setLabel('18+')
                .setStyle(ButtonStyle.Primary)
            
            


                interaction.reply({
                    components : [new ActionRowBuilder().addComponents(minor, adult,)]
                  });
        
    }
};


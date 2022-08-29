const {ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, AttachmentBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('colors')
        .setDescription('Shows All Color Roles')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction, client) {
        const file = new AttachmentBuilder('./colors.png');
        const embed = new EmbedBuilder() 
            .setColor('6d6ee8')
            .setTitle('Available Colors')
            .setImage('attachment://colors.png');
    
            let color1 = new ButtonBuilder()
                .setCustomId('green')
                .setLabel('Aqua')
                .setStyle(ButtonStyle.Primary)
            let color2 = new ButtonBuilder()
                .setCustomId('blue')
                .setLabel('Blue')
                .setStyle(ButtonStyle.Primary)
            let color3 = new ButtonBuilder()
                .setCustomId("brown")
                .setLabel("Brown")
                .setStyle(ButtonStyle.Primary)
            let color4 = new ButtonBuilder()
                .setCustomId("magenta")
                .setLabel("Pink")
                .setStyle(ButtonStyle.Primary)
            
            


                interaction.reply({
                    embeds: [embed],
                    files: [file],
                    components : [new ActionRowBuilder().addComponents(color1, color2, color3, color4,)]
                  });
        
    }
};


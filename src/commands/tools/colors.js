const {ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, AttachmentBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('colors')
        .setDescription('Shows All Color Roles'),
    async execute(interaction, client) {
        const file = new AttachmentBuilder('./colors.png');
        const embed = new EmbedBuilder() 
            .setColor('6d6ee8')
            .setTitle('Available Colors')
            .setImage('attachment://colors.png');
    
            let color1 = new ButtonBuilder()
                .setCustomId('green')
                .setLabel('Green')
                .setStyle(ButtonStyle.Primary)
            let color2 = new ButtonBuilder()
                .setCustomId('magenta')
                .setLabel('Magenta')
                .setStyle(ButtonStyle.Primary)
            let color3 = new ButtonBuilder()
                .setCustomId("navyblue")
                .setLabel("Navy Blue")
                .setStyle(ButtonStyle.Primary)
            let color4 = new ButtonBuilder()
                .setCustomId("brown")
                .setLabel("Brown")
                .setStyle(ButtonStyle.Primary)
            
            


                interaction.reply({
                    embeds: [embed],
                    files: [file],
                    components : [new ActionRowBuilder().addComponents(color1, color2, color3, color4,)]
                  });
        
    }
};


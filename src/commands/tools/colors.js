const {ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('colors')
        .setDescription('Shows All Color Roles')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction, client) {
        const embed = new EmbedBuilder() 
            .setColor('6d6ee8')
            .addFields({ name: "Available Colors", value: "Color1, Color2, Color3, Color4," })
    
            let color1 = new ButtonBuilder()
                .setCustomId('green')
                .setLabel('Green')
                .setStyle(ButtonStyle.Primary)
            let color2 = new ButtonBuilder()
                .setCustomId('pink')
                .setLabel('Pink')
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
                    components : [new ActionRowBuilder().addComponents(color1, color2, color3, color4,)]
                  });
        
    }
};


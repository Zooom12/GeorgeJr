const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows All Commands And Features'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder() 
            .setColor('6d6ee8')
            .setTitle('Help Menu')
            .setDescription('/comvert-kilos Converts Kilos To Pounds')
            .setDescription('/convert-pounds Converts Pounds To Kilos')
            .setDescription('Click The Button In #create-ticket To Get In Contact With Staff')
            .setDescription("Get Your Roles In #role-assignments")
            .setDescription('Get Your Color Roles In #choose-your-color')

        interaction.reply({
            embeds: [embed]
        })
    }
}
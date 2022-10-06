const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows All Commands'),
    async execute(interaction, client) {
        const help = new EmbedBuilder()
            .setColor(0x0099FF)
            .addFields(
                { name: 'Commands:', value: '\u200B'},
                { name: '</convert-kilos:1021124538425155607>', value: 'Converts Kilograms to Pounds' },
                { name: '</convert-pounds:1001599074501410981>', value:  'Converts Pounds To Kilograms' },
                { name: '</convert-kilometers:1021187497289592852>', value:  'Converts Kilometers To Miles' },
                { name: '</convert-miles:'}
            )
            .setAuthor({ name: `George's Help Menu`, iconURL: client.user.displayAvatarURL() })
        
        interaction.reply({
            embeds: [help]
        })
        
    }
}

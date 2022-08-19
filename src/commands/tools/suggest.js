const {ActionRowBuilder, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Gives A Prompt To Suggest Something'),
    async execute(interaction, client) {
        const suggestion = new ModalBuilder()
            .setCustomId('suggestion')
            .setTitle("Suggestion")

        const suggestionInput = new TextInputBuilder()
            .setCustomId('suggestionInput')
            .setLabel('Give Us Your Suggestion!')
            .setStyle(TextInputStyle.Short);

        suggestion.addComponents(new ActionRowBuilder().addComponents(suggestionInput));

        await interaction.showModal(suggestion);
    }
}
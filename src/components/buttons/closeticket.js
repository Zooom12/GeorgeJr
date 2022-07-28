const { PermissionFlagsBits, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

module.exports = {
    data: {
        name: "close-ticket"
    },
    async execute(interaction, client) {
        const guild = client.guilds.cache.get(interaction.guildId);
        const chan = guild.channels.cache.get(interaction.channelId);
        const button = new ButtonBuilder()
          .setCustomId('close-ticket')
          .setLabel('Close')
          .setStyle(ButtonStyle.Danger)

        const no = new ButtonBuilder()
            .setCustomId('no')
            .setLabel('No')
            .setStyle(ButtonStyle.Danger)

        interaction.reply({
            content: "Are You Sure You Want To Close This Ticket?",
            components: [new ActionRowBuilder().addComponents(button, no)]
        })
    }
}

const { PermissionFlagsBits, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')
module.exports = {
    data: {
        name: "close-ticket"
    },

    async execute(interaction, client) {
        const guild = client.guilds.cache.get("979800967715364885");
        const chan = guild.channels.cache.get(interaction.channelId);
        const interactionUser = await interaction.guild.members.fetch(interaction.user.id)
        const userName = interactionUser.user.username;

        chan.edit({
            name: `closed-${chan.name}`,
            permissionOverwrites: [
              {
                id: interaction.user.id,
                deny: [PermissionFlagsBits.SendMessages, PermissionFlagsBits.ViewChannel],
              },
              {
                id: "1002052912723275908",
                allow: [PermissionFlagsBits.SendMessages, PermissionFlagsBits.ViewChannel],
              },
              {
                id: interaction.guild.roles.everyone,
                deny: [PermissionFlagsBits.ViewChannel],
              },
            ],
          })
          .then(async () => {
            const deleteticket = new ButtonBuilder()
            .setCustomId('delete')
            .setLabel('Delete Ticket')
            .setStyle(ButtonStyle.Danger)
        await interaction.reply({
            content: "Ticket Has Been Closed",
            components: [new ActionRowBuilder().addComponents(deleteticket)]
        })
          })
    }
}
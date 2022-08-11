const { ChannelType } = require('discord-api-types/v9');
const { PermissionFlagsBits, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')
module.exports = {
    data: {
        name: `open-ticket`
    },
    async execute(interaction, client) {
        const guild = client.guilds.cache.get("979800967715364885");
        const interactionUser = await interaction.guild.members.fetch(interaction.user.id)
        const userName = interactionUser.user.username;
        guild.channels.create({
            name: `ticket-${userName}`,
            type: ChannelType === 'GUILD_TEXT',
            parent: "1003127044227477585",
            permissionOverwrites: [{
                id: interaction.user.id,
                allow: [PermissionFlagsBits.SendMessages, PermissionFlagsBits.ViewChannel],
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
          }).then(async c => {
            interaction.reply({
              content: `Ticket created! <#${c.id}>`,
              ephemeral: true
            });
            const ticketopened = new EmbedBuilder()
        .setColor('6d6ee8')
        .setAuthor({ name: "Ticket Created!", iconURL: client.user.displayAvatarURL()})
        .setDescription('Click the button below to close the ticket.')
        const button = new ButtonBuilder()
          .setCustomId('close-ticket')
          .setLabel('Close This Ticket')
          .setEmoji('✖')
          .setStyle(ButtonStyle.Danger)

        c.send({
            embeds: [ticketopened],
            components: [new ActionRowBuilder().addComponents(button)]
        })
    }
)}};
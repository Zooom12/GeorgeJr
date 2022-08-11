module.exports = {
    data: {
        name: "delete"
    },
    async execute(interaction, client) {
        const guild = client.guilds.cache.get("979800967715364885");
        const chan = guild.channels.cache.get(interaction.channelId);
        const interactionUser = await interaction.guild.members.fetch(interaction.user.id)
        const userName = interactionUser.user.username;
        interaction.reply('Deleting channel...');
        setTimeout(() => {
            chan.delete();
          }, 5000);

        
    }
}
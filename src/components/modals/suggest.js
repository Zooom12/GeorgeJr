const { EmbedBuilder, ActionRowBuilder, messageLink} = require("discord.js");

module.exports = {
    data: {
        name: `suggestion`,
    },
    async execute(interaction, client) {
        const interactionUser = await interaction.guild.members.fetch(interaction.user.id)
        const userName = interactionUser.user.username;
        const suggestion = new EmbedBuilder() 
            .setColor('6d6ee8')
            .addFields({ name: `${userName}'s Suggestion`, value: `${interaction.fields.getTextInputValue("suggestionInput")}` })
            .setFooter({ text: 'React With 👍/👎', iconURL: client.user.displayAvatarURL() });

            client.channels.cache.get("996958233887518791").send({ embeds: [suggestion] })
            .then(function (message) {
                message.react("👍")
                message.react("👎")
              }).catch(function() {
                //Something
               });

            interaction.reply({
                content: `Idea Has Been Sent In <#996958233887518791>`,
                ephemeral: true
            })
    }
}
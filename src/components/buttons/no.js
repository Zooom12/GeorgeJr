module.exports = {
    data: {
        name: "no"
    },
    async execute(interaction, client) {
        interaction.editReply({
            content: "Closure Canceled"
        })
    }
}
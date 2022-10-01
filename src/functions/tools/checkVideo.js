const { EmbedBuilder } = require('discord.js')
const Parser = require("rss-parser");
const parser = new Parser();
const fs = require("fs");
const { url } = require('inspector');
const { channel } = require('diagnostics_channel');

module.exports = (client) => {
  client.checkVideo = async () => {
    const data = await parser
      .parseURL(
        "https://youtube.com/feeds/videos.xml?channel_id=UCxQmx5aVUUBK6mdPSBsUq9Q"
      )
      .catch(console.error);

    const rawData = fs.readFileSync(`${__dirname}/../../json/videos.json`);
    const jsondata = JSON.parse(rawData);

    if (jsondata.id !== data.items[0].id) {
      fs.writeFileSync(
        `${__dirname}/../../json/videos.json`,
        JSON.stringify({ id: data.items[0].id })
      );
    }
    //1021134643120054403
    const guildId = await client.guilds.fetch("979800967715364885")
    const channelId = await client.channels.fetch("1021181019661013002")

    const { title, author, link, id } = data.items[0]
    const embed = new EmbedBuilder({
      title: title,
      url: link,
      timestamp: Date.now(),
      image: {
        url: `https://img.youtube.com/vi/${id.slice(9)}/maxresdefault.jpg`
      },
      author: {
        name: author,
        icon_url: 'https://yt3.ggpht.com/1uFccG92WEr22r1PP-QUvuuPH3csr9DgfAFYoUTsDb-ObQz81k0AMfFAD_ccLFasZFJTeuXe0A=s88-c-k-c0x00ffffff-no-rj',
        url: 'https://www.youtube.com/c/NathanFreihofer1/?sub_comfirmation=1'
      },
      footer: {
        text: client.user.tag,
        icon_url: client.user.displayAvatarURL()
      },
      

    })
    await channelId.send({ embeds: [embed] content: "<@1021181286817214565>"})

  };
};

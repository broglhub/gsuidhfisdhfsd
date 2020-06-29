const Discord = require('discord.js')

module.exports = { 
    name: 'ping',
    aliases: ['howslow', 'speed'],
    description: "this is how slow le bot is",
    async execute(client, config, message, args) { 
        const m = await message.channel.send("ping?");
        let pong = new Discord.RichEmbed()
        .setTitle("Pong!")
        .setColor(0x800000)
        .setTimestamp()
        .addField("Bot speed", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
        .addField("Api speed", `${Math.round(client.ping)}ms`, true)
        .setFooter(`made by Chaotic Mind#0666`, `https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048`);
        m.edit({embed: pong});
    }
}

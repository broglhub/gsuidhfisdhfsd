const Discord = require("discord.js");

module.exports = {
    name: 'whois',
    description: 'user information, duh',
    execute(client, config, message, args) {
        let user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
        const member = message.guild.member(user);
        let userinf = new Discord.RichEmbed()
        .setColor(0x800000)
        .setThumbnail(`${member.user.avatarURL}`)
        .addField(`${user.tag}`, `${user}`, true)
        .addField("userid: ", `${user.id}`, true)
        .addField("Nick:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField("Status:", `${user.presence.status}`, true)
        .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
        .addField("Bot:", `${user.bot}`, true)
        .addField("Roles:", member.roles.filter(role => role.name !== "@everyone").map(roles => `${roles}`).join(', '), true)
        .setFooter(`made by Chaotic Mind#0666`, "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
        .setTimestamp()
        message.channel.send({embed: userinf});
    }
}
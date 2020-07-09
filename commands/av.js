const Discord = require('discord.js')

module.exports = {
    name: 'av',
    aliases: ['avatar', 'pfp'],
    description: 'display your avatar',
    execute(client, config, message, args) {
if(message.author.bot) return;
let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;
        let av = new Discord.RichEmbed()
        .setTitle("Here you go fam!")
        .setAuthor(`${member.tag}`)
        .setColor(0x800000)
        .setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
        .setImage(`${member.member.avatarURL}`)
        .setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
        .setTimestamp()
        message.channel.send({embed: av});
    },
};

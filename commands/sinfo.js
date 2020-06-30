const Discord = require('discord.js')

module.exports = {
name: 'sinfo',
aliases: ["serverinfo", "server"],
description: "gives info about the server",
async execute(client, config, message, args) {
    let sinfo = new Discord.RichEmbed()
    .setTitle("server info")
    .setDescription(`info about the ${message.guild.name} server`)
    .setColor(0x800000)
    .setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
    .setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
    .setTimestamp()
    .addField("server creation date", "5/26/2020")
    .addField("server id", `${message.guild.id}`)
    .addField("server owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
    .addField("Total | Humans | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`)
    .addField('Location', message.guild.region)
    .addField("Roles", message.guild.roles.size)
    .addField("Channels", message.guild.channels.size)
    message.channel.send({embed: sinfo});
},
};
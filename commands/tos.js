const Discord = require('discord.js')

module.exports = {
name: 'tos',
description: "tos embed",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var tos = client.channels.get('715892657645158490')
	let toses = new Discord.RichEmbed()
	.setTitle("Terms of use")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setDescription("here are the terms of use for Brogl Hub")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.addField("donating", "donating is at your own risk. we do not provide refunds.")
	.addField("blacklists", "we have the rights to blacklist you whenever. although this will not happen often whatsoever, **do not complain about being blacklisted as it would usually have a good reason behind it**")
	.setTimestamp()
	tos.send({embed: toses});
},
};
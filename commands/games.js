const Discord = require('discord.js')

module.exports = {
name: 'games',
aliases: ["updategames"],
description: "EXPLAINTHECOMMAND",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var games = client.channels.get('714889851840888905')
	let included = new Discord.RichEmbed()
	.setTitle("these are the games currently included in brogl hub")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.addField("Army tycoon")
	.addField("Jailbreal")
	.addField("tower battles")
	games.send({embed: included});
},
};
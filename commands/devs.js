const Discord = require('discord.js')

module.exports = {
name: 'devs',
aliases: ["updatedevs"],
description: "devlist",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var devs = client.channels.get('715283247722135565')
	let devlist = new Discord.RichEmbed()
	.setTitle("Here are the devs of Brogl Hub")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)   
	.setColor(0x800000)
	.setDescription("Read these first before complaining about being punished!")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.setTimestamp()
	.addField("Bot developers", "<@!655714844695330854>")
	.addField("Main scripter", "<@!655714844695330854>")
	.addField("Scripters", "<@!642690347121639448>, <@!296346371454271490>, <@!125984744826601472>")
	.addField("Ui designers", "<@!510237724104720402>, <@!590271625761390613>, <@!296346371454271490>")
	devs.send({embed: devlist});
},
};
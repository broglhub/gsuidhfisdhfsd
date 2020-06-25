const Discord = require('discord.js')

module.exports = {
name: 'staffteam',
aliases: ["teamlist", "updatestaff"],
description: "EXPLAINTHECOMMAND",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var teamlist = client.channels.get('714878555489697793')
	let staffteam = new Discord.RichEmbed()
	.setTitle("Broglhub's staff team")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setDescription("here's the epic staff team of brogl hub")
	.addField("Owner", "<@!655714844695330854>, <@!642690347121639448>, <@!510237724104720402>, <@!265953382441680907>")
	.addField("Co-Owner", "<@!263013950205984768>, <@!249469358466662410>")
	.addField("Staff manager", "<@!642690347121639448>, <@!263013950205984768>, <@!655714844695330854>, <@!510237724104720402>, <@!249469358466662410>, <@!265953382441680907>")
	.addField("Head Admin", "none here yet!")
	.addField("Admin", "<@!564613376060424192>")
	.addField("Head moderator", "<@!296346371454271490>, <@!255735816901492736>")
	.addField("Moderator", "<@!590271625761390613>, <@!307208717357678594>")
	.addField("Trial mod", "<@!329358272341475330>, <@!283645221168742400>, <@!285149492678754305>, <@!361017607425490944>")
	.setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	teamlist.send({embed: staffteam});
},
};
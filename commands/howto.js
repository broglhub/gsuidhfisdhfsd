const Discord = require('discord.js')

module.exports = {
name: 'howto',
aliases: ["wlhow"],
description: "EXPLAINTHECOMMAND",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var howto = client.channels.get('714908421287313521')
	let howtowl = new Discord.RichEmbed()
	.setTitle("here's how to get whitelisted on brogl hub")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.addField("1", "do %apply in bot commands")
	.addField("2", "give up the real information to the questions(we only ask for exploit and roblox username)")
	.addField("3", "the bot will dm you when you're whitelisted. due to discord being a dick, that can take a bit.")
	.addField("4", "if you find any errors within the script, please report it asap so we can fix it.")
	.addField("5", "before reporting an issue, please make sure it hasn't already been reported.")
	.addField("6", "keep in mind that this won't work on all exploits!")
	.setTimestamp()
	howto.send({embed: howtowl});
	howto.send({embed: {
		color: 800000,
		description: "once whitelisted, do .download in bot commands to get the script"
	}});
},
};
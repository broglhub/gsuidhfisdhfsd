const Discord = require('discord.js')

module.exports = {
name: 'strules',
description: "EXPLAINTHECOMMAND",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var srules = client.channels.get('714880542855790662')
	let strules = new Discord.RichEmbed()
	.setTitle("These are the staff rules of BroglHub")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)   
	.setColor(0x800000)
	.setDescription("Read these first before complaining about being punished!")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.setTimestamp()
	.addField("bot commands", "Bot commands can be done in any channel by staff spotlight, co owner and owner")
	.addField("staff spotlight", "staff spotlight is a role that trial mod - head admin can get for a week, but cannot be chosen for the week after")
	.addField("role control", "all role controls will be done by staff managers. if you do not have the staff manager role and add roles to someone(excluding member) will lead to a suspension or demotion. staff spotlight is allowed to ban as any role, BUT have to send proof after.")
	.addField("trial mod - head mod", "trial mod to head mod can warn and mute people, and ban raiders")
	.addField("warnings", "3 warnings = 5 hour mute. 6 warnings = 1 day mute. 8 warnings = kick. 9 warnings = ban")
	.addField("crying in gen", "if you see anyone crying about something not working or anything, tell them to stop once, if they don't, mute and report it to me")
	.addField("other staff", "respect other staff members, don't go around and harass them, if i catch you doing so, say goodbye to being staff.")
	.addField("advertising", "advertising is a ban, no matter if it was staff doing so or not. partners can only advertise stuff in the partner announcements")
	.addField("nword", "nword mutes stack, with 30 minutes each")
	.addField("unmute", "no unmuting people if they ask for it, but double it")
	.addField("broglhub", "if any issues are with brogl hub itself, please ping me so i can fix asap")
	.addField("staff reporting", "if you see any staff asking for promotion or any staff abusing, dm a staff manager with screenshot proof and we'll take care of it.")
	.addField("nsfw", "nsfw outside the nsfw channel is a 2 week mute")
	.addField("mass mentioning", "mass mentioning is only allowed by their corresponding roles")
	srules.send({embed: strules});
},
};
const Discord = require('discord.js')

module.exports = {
name: 'help',
aliases: ["cmds", "commands"],
description: "shows the help menu",
async execute(client, config, message, args) {
let helpembed1 = new Discord.RichEmbed()
.setTitle("help menu")
.setDescription("here's the commands for everyone")
.setTimestamp()
.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif")
.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
.addField("8ball", "ask 8ball a question")
.addField("burger | borger | hamburger", "send a burger")
.addField("download | script | getscript", "download brogl hub if whitelisted")
.addField("house | home | notmyhome", "send a house")
.addField("help", "show this menu")
.addField("invite", "send a broglhub server invite")
.addField("jail | capture | catch", "jail the given user")
.addField("members | users | howmanyretards", "list members in the server")
.addField("ping | speed | howslow", "Show the bot's ping")
.addField("portal | nether | visitingfriends", "send a portal")
.addField("say | talk", "make the bot say something")
.addField("sinfo | serverinfo | server", "give server info")
.addField("suggest", "suggest something for brogl hub or the brogl bot")
.addField("whois", "shows userinfo")
.addField("enemyspotted", "send a gun in the chat")
.addField("suckadick | suck | dick", "suck a dick")
.addField("av | avatar | pfp", "show given user's profile picture")
message.author.send({embed: helpembed1});
if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner", "trial moderator", "moderator", "head moderator"].includes(r.name)) ) return;
let modhelp = new Discord.RichEmbed()
.setTitle("help menu")
.setDescription("here's the commands Trial mod+")
.setTimestamp()
.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif")
.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
.addField("Mute | shutup | shut", "mute a member")
.addField("unmute", "unmute a member")
.addField("nick | user | setnick", "change a member's nickname")
message.author.send({embed: modhelp});
if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) ) return;
let adminhelp = new Discord.RichEmbed()
.setTitle("help menu")
.setDescription("here's the commands for admin+")
.setTimestamp()
.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif")
.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
.addField("ban | rape | faggotify", "bans a user")
.addField("dm | pm | dirmsg", "dms a user")
.addField("kick | yeet", "kicks a member")
.addField("purge", "purge the amount of messages given")
.addField("poll", "start a poll")
message.author.send({embed: adminhelp});
if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
let ownerhelp = new Discord.RichEmbed()
.setTitle("help menu")
.setDescription("here's the commands for Owner")
.setTimestamp()
.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif")
.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
.addField("codenote | notescript | scripters", "notify the coders of something")
.addField("devs | updatedevs", "show developers list")
.addField("exploits", "supported exploit list")
.addField("howto | wlhow", "how to whitelist embed")
.addField("rules", "rules embed")
.addField("staffrules", "staff rules embed")
.addField("staffteam | teamlist | updatestaff", "staff team embed")
.addField("testers | testernote | notetesters", "notify the testers")
.addField("tos", "terms of service embed")
.addField("uinote | noteui | designers", "notify the ui designers")
message.author.send({embed: ownerhelp});
},
};

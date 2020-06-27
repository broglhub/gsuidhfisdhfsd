const Discord = require('discord.js')

module.exports = {
name: 'mute',
aliases: ["shutup", "shut"],
description: "mutes the given user",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner", "trial moderator", "moderator", "head moderator"].includes(r.name)) )	
    return;
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member) return message.channel.send({embed: {
    color: 3447003,
    description: "mention a valid user dipshit"
}});
const role = message.guild.roles.Find(role => role.name === "Moderators");
if(!role) return guild.createRole({ name: 'Muted'});
message.guild.createOverwrite(role, { 
    SEND_MESSAGES: false
})
member.addRole(role)
member.send({embed: {
color: 3447003,
description: `you have been muted in brogl hub by ${message.author.tag}. if you wish to get unmuted, request an unmute at ${message.author.tag} with reason of why you were muted to see if we would unmute you.`
}});
var logs = client.channels.get("724265992729002045")
logs.send({embed: {
color: 3447003,
description: `${message.author.tag} muted ${member.user.tag}`
}});
message.channel.send({embed: {
color: 3447003,
description: `muted ${member.user.tag}`
}});
},
};
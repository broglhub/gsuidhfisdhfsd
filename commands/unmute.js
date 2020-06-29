const Discord = require('discord.js')

module.exports = {
name: 'unmute',
description: "unmutes the given user",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner", "trial moderator", "moderator", "head moderator"].includes(r.name)) )
    return;
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member) return message.channel.send({embed: {
    color: 3447003,
    description: "i cannot find this member, is it in the server? or did you forget to mention someone?"
}});
const role = message.guild.roles.get('715085241110495304');
member.removeRole(role)
member.send({embed: {
    color: 3447003,
    description: `you have been unmuted in brogl. make sure to read rules to prevent another mute!`
}});
logchannel.send({embed: {
    color: 3447003,
    description: `${message.author.tag} unmuted ${member.user.tag}`
}});
message.channel.send({embed: {
color: 3447003,
description: `unmuted ${member.user.tag}`
}});
},
};

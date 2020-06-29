const Discord = require('discord.js')

module.exports = {
name: 'ban',
aliases: ["rape", "faggotify"],
description: "ban the user",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
    return message.channel.send({embed: {
        color: 3447003,
        description: "you do not have permission to use this!"
    }});

let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
    return message.channel.send({embed: {
        color: 3447003,
        description: "i cannot find this member, is it in the server?"
    }});
if(!member.bannable)
    return message.reply("It seems i'm missing permissions here pal");

let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason given";

member.send({embed: {
    color: 3447003,
    description: "you just got fucked ftwwwwww. now you're dead from brogl kthxbye"
}});

await member.ban(reason)
.catch(error => message.reply(`sorry, i couldn't commit ban cuz ${error}`));
message.reply({embed: {
    color: 3447003,
    description: `succesfully banned ${member.user.tag} for: ${reason}`
}});
logchannel.send({embed: {
    color: 3447003,
    description: `${member.user.tag} got banned by ${message.author.tag} for the reason: ${reason}`
}});
},
};

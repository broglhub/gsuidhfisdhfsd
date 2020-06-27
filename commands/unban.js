const Discord = require('discord.js')

module.exports = {
name: 'unban',
description: "unban given user",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    let member = message.mentions.users.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send("give someone to unban dipshit");
    message.guild.members.unban(member)
},
};
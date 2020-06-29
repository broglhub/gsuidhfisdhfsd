const Discord = require('discord.js')

module.exports = {
name: 'softban',
aliases: ["killmsges"],
description: "softbans user",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    message.guild.members.ban(member);
    message.guild.members.unban(member);
    message.channel.send(`softbanned ${member.tag} succesfully`);
    logchannel.send(`${message.author.tag} softbanned ${member}`);
},
};

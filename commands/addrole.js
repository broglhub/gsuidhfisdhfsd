const Discord = require('discord.js')

module.exports = {
name: 'addrole',
aliases: ["role"],
description: "give a role to a user",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    let member = message.mentions.users.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send("please mention a valid user!");
    let rname = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.find(val => val.name === rname);
    if(!role) return message.reply("i failed finding this role!");
    member.roles.add(role).catch(e => {
        return message.channel.send(`failed to add role because of ${e}`);
    });
    message.channel.send(`${message.author.tag} added ${rname} role to ${member}`);
},
};
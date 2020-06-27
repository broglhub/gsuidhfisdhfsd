const Discord = require('discord.js')

module.exports = {
name: 'removerole',
aliases: ["norole"],
description: "removes role",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    let member = message.mentions.users.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send("please give a valid user");
    let rname = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.cache.find(val => val.name === rname);
    if(!role) return message.channel.send("didn't find role");
    member.removeRole(role).catch(e => {
        return message.channel.send("error found okbye");
    });
    message.channel.send(`${message.author.tag} removed ${role.name} from ${member}`);
},
};
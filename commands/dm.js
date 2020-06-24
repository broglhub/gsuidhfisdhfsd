const Discord = require('discord.js')

module.exports = {
name: 'dm',
aliases: ["pm", "dirmsg"],
description: "send a direct message to a user",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
    return;
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
let msg = args.slice(1).join(' ');
message.delete().catch(O_o=>{});
member.send(msg);
},
};
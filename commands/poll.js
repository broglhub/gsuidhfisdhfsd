const Discord = require('discord.js')

module.exports = {
name: 'poll',
description: "start a new poll",
async execute(client, config, message, args) {
if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
return message.reply("it seems you do not have permission to use this!");

const newpoll = args.join(" ");
var polls = client.channels.get('717113282309259365')
polls.send(`<@&717341239556440165>`);
const poll = await polls.send({embed: {
    color: 3447003,
    description: `${newpoll}`
}});




poll.react('722730090533748796')
poll.react('722730090307518566')
message.delete().catch(O_o=>{});
},
};
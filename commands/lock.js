const Discord = require('discord.js')

module.exports = {
name: 'lock',
description: "lock a channel",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["WhiteListed"].includes(r.name)) ) return;
    if (!client.lockit) client.lockit = [];

    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
        message.channel.send(`Damnn, **${message.author.username}** just locked the channel down. Don't worry, it'll be unlocked soon!`);
    },
};
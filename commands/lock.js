const Discord = require('discord.js')

module.exports = {
name: 'lock',
description: "lock a channel",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    if (!client.lockit) client.lockit = [];

    message.channel.overwritePermissions(message.guild.defaultRole, {
        SEND_MESSAGES: false
      });
        message.channel.send(`Damn, **${message.author.username}** just locked the channel down. Don't worry, it'll be unlocked soon!`);
    let logchannel = client.channels.get('729958450036998174');
    logchannel.send(`${message.author.tag} locked ${message.channel}`);
    },
};

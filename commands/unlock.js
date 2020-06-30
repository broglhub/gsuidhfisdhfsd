const Discord = require('discord.js')

module.exports = {
name: 'unlock',
description: "unlock",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    if (!client.lockit) client.lockit = [];
    message.channel.overwritePermissions(message.guild.defaultRole, {
        SEND_MESSAGES: null
      }).then(() => {
        message.channel.send('Lockdown lifted');
        delete client.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      })
    let logchannel = client.channels.get('727050928544546856');
    logchannel.send(`${message.author.tag} unlocked ${message.channel}`);
},
};

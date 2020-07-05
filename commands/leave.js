const Discord = require('discord.js')

module.exports = {
name: 'leave',
aliases: ["fuckoff"],
description: "leaves vc yes",
async execute(client, config, message, args) {
if(!message.member.voice.channel) return message.channel.send("no");
client.leaveVoiceChannel(message.author.voiceChannel.id);
},
};
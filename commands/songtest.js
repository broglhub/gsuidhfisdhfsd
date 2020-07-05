const Discord = require('discord.js')

module.exports = {
name: 'testsong',
aliases: ["heartless"],
description: "yes",
async execute(client, config, message, args) {
client.voiceConnection.playFile('/heartless.mp3')
},
};
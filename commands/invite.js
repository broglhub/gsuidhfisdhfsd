const Discord = require('discord.js')

module.exports = {
name: 'invite',
description: "sends a permanent invite",
async execute(client, config, message, args) {
    message.channel.send("https://discord.gg/JkNC92e");
},
};
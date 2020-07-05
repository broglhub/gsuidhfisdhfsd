const Discord = require('discord.js')

module.exports = {
name: 'testvid',
aliases: ["heartlessvid"],
description: "yes",
async execute(client, config, message, args) {
const dispatcher = connection.playFile('./songs/Tha Playah & Angerfist - The Heartless (Official Video).mp4')
dispatcher.on('end', () => {
    message.channel.send("finished")
});
},
};
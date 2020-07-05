const Discord = require('discord.js')

module.exports = {
name: 'testsong',
aliases: ["heartless"],
description: "yes",
async execute(client, config, message, args) {
const dispatcher = connection.playFile('./songs/Tha Playah & Angerfist - The Heartless (Official Video).mp3')
dispatcher.pause();
dispatcher.setVolume(1);
dispatcher.resume();
dispatcher.on('end', () => {
    message.channel.send("finished the song");
});
},
};
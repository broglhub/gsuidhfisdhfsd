const Discord = require('discord.js')

module.exports = {
name: 'suckadick',
aliases: ["suck", "dick"],
description: "suck a dick",
async execute(client, config, message, args) {
    return message.channel.send(`imagine trying to be a gay faggot trap like *ahem* you know who *ahem*, <@!${message.author.id}>, just don't.`);
},
};
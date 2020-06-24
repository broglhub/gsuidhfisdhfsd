const Discord = require('discord.js')

module.exports = {
name: 'suggest',
description: "suggest something for brogl hub or the brogl bot",
async execute(client, config, message, args) {
    const suggestion = args.join(" ")
	const owner = client.channels.get('723564632115118110');
	message.channel.send(`sent suggestion succesfully, <@!${message.author.id}>`);
	owner.send(suggestion + ` (suggested by ${message.author.tag})`);
},
};
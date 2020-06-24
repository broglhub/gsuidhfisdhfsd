const Discord = require('discord.js')

module.exports = {
name: 'applies',
aliases: ["newstaffneeded", "plsjoin"],
description: "EXPLAINTHECOMMAND",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["staff manager"].includes(r.name)) ) return;
	var stafflist = client.channels.get('714878555489697793')
	stafflist.send({embed: {
		color: 800000,
		description: "Hey! did you know that you can apply for staff by a staff manager?"
	}});
},
};
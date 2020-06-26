const Discord = require('discord.js')

module.exports = {
name: 'purge',
description: "purges the given messages",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
    return message.reply("it seems you do not have permission to use this!");
    message.delete().catch(O_o=>{});
    const deleteCount = parseInt(args[0], 10);
	
	if(!deleteCount || deleteCount < 1 || deleteCount > 100)
		return message.reply("i do believe this is outside of my power range");
	
	const fetched = await message.channel.fetchMessages({limit: deleteCount});
	message.channel.bulkDelete(fetched)
	.catch(error => message.reply(`couldn't commit purge cuz ${error}`));
	var logs = client.channels.get('724265992729002045')
    logs.send(`${message.author.tag} purged ${deleteCount} messages in ${message.channel}`);
},
};

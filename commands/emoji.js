const Discord = require('discord.js')

module.exports = {
name: 'emoji',
aliases: ["newemoji", "createemoji"],
description: "makes a new emoji",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
        let emoji = args.slice(0).join(' ');
	let emojiname = args.slice(1).join(' ');
	 let emote = await message.guild.createEmoji(`${emoji}`, `${emojiname}`)
	.then(emoji => message.channel.send(`created emoji succesfully`))
	.catch(console.error)
	await message.channel.send(`<:${emojiname}:${emote.id}>`);
	message.channel.send("add an a <HERE:emojiname:emojiid:> if it's animated!");
},
};

const Discord = require('discord.js')

module.exports = {
name: 'rr',
aliases: ["reactionrole", "rerole"],
description: "sends reaction role",
async execute(client, config, message, args) {
    if(message.author.id !== "655714844695330854") return;
    for(let n in emojiname) {
        var emoji =[message.guild.emojis.find(r => r.name == emojiname[n])];
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        const r = await message.channel.send(sayMessage)
		for(let i in emoji){
			r.react(emoji[i]);
		}
	}
},
};
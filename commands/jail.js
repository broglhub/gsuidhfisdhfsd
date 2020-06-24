const Discord = require('discord.js')

module.exports = {
name: 'jail',
aliases: ["capture", "catch"],
description: "capture someone",
async execute(client, config, message, args) {
    let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;
	message.channel.send(`<:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541>
<:minecraft_iron_bars:722913387020943541> <@!${user.id}> <:minecraft_iron_bars:722913387020943541>
<:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078>`)
},
};
const Discord = require('discord.js')

module.exports = {
name: 'house',
aliases: ["home", "notmyhome"],
description: "a house, but not yours.",
async execute(client, config, message, args) {
    message.delete().catch(O_o=>{});
	message.channel.send(`<:minecraft_wood:722917283420307549><:minecraft_wood:722917283420307549><:minecraft_wood:722917283420307549><:minecraft_wood:722917283420307549><:minecraft_wood:722917283420307549>
<:minecraft_wood:722917283420307549><:Minecraft_wood_planks:722917303192256524><:Minecraft_wood_planks:722917303192256524><:Minecraft_wood_planks:722917303192256524><:minecraft_wood:722917283420307549>
<:minecraft_wood:722917283420307549><:Minecraft_wood_planks:722917303192256524><:doortop:723196486816497676><:Minecraft_wood_planks:722917303192256524><:minecraft_wood:722917283420307549>
<:minecraft_wood:722917283420307549><:Minecraft_wood_planks:722917303192256524><:doorbottom:723196487101841449><:Minecraft_wood_planks:722917303192256524><:minecraft_wood:722917283420307549>
<:Minecraft_Grass:722913022670143599><:Minecraft_Grass:722913022670143599><:Minecraft_Grass:722913022670143599><:Minecraft_Grass:722913022670143599><:Minecraft_Grass:722913022670143599>`);
},
};
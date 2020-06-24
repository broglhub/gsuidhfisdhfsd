const Discord = require('discord.js')

module.exports = {
name: 'enemyspotted',
aliases: ["gun", "tf"],
description: "shoot gun yes",
async execute(client, config, message, args) {
    message.delete().catch(O_o=>{});
	message.channel.send("<:g1:724923153603887105><:g2:724923201045659668><:g3:724923254606790666>");
},
};
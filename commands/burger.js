const Discord = require('discord.js')

module.exports = {
name: 'burger',
aliases: ["borger", "hamburger"],
description: "h a m b u r g e r",
async execute(client, config, message, args) {
    message.delete().catch(O_o=>{});
	message.channel.send(`<a:eating_doge_left:722913471322259497><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:eating_doge_right:722913529119637564>`);
},
};
const Discord = require('discord.js')

module.exports = {
name: 'poorpl',
aliases: ["purple", "dood"],
description: "yes",
async execute(client, config, message, args) {
if(message.author.bot) return;
message.channel.send(`🟪🟪🟪🟪🟪🟪🟪
🟪🟪🟪🟪🟪🟪🟪
🟪⬛⬜🟪⬛⬜🟪
🟪🟪🟪🟪🟪🟪🟪
🟪⬛⬛⬛⬛⬛🟪
🟪🟪⬛⬛⬛🟪🟪
🟪🟪🟪🟪🟪🟪🟪`);
},
};

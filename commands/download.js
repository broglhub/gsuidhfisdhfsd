const Discord = require('discord.js')

module.exports = {
name: 'download',
aliases: ["getscript", "script"],
description: "get the script sent in dms",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["WhiteListed"].includes(r.name)) )
    return message.reply("you're not whitelisted!")
message.reply("check your dms")
message.author.send("brogl hub: `loadstring(game:HttpGet('https://pastebin.com/raw/MJ1ySrgW'))()`")
},
};
const Discord = require('discord.js')

module.exports = {
name: 'eprules',
description: "update rules yes",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    var ruleschannel = client.channels.get('728149305214631946')
        let ruleview = new Discord.RichEmbed()
        .setTitle("Here are BroglHubs rules")
        .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)   
        .setColor(0x800000)
        .setDescription("Read these first before complaining about being punished!")
        .setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
        .setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
        .addField("Spamming", "Don't spam. spamming will result into mutes or further punishments.")
        .addField("NSFW content", "Do not post any animal abuse videos, child abuse, gore in any channels. no nsfw outside the nsfw channel")
        .addField("Voice and audio", "do not post any loud / earrape audios as well as playing earrapes on voicechat.")
        .addField("personal information", "Do not give out any personal information about anyone")
        .addField("Advertising", "Do not advertise anything offtopic (exploits, server invites etc etc)")
        .addField("raiding", "do not attempt to raid the server.")
        .addField("mentioning", "do not ghostping or mass ping, don't ping roles if it's not neccessary")
        .addField("Flooding", "same as spamming, do not flood the chat. keep the message sizes normal.")
        .addField("attachments", "allowed files are txt, mp3 and mp4 files, when sending them, keep it normal. don't spam them.")
        .addField("roles", "don't ask for any roles. if there will be applications open, it will be announced.")
        .addField("usernames", "keep your username mentionable (no fancy text etc), no invisible or @ everyone or @ here related names")
        .addField("channels", "use channels where they are meant for(no bot commands in general, no talking in suggestions etc")
        .addField("staff", "impersonating staff or pretending like you are one will result in a permanent mute or a ban.")
        .addField("discord", `[follow discord's terms of service](https://discordapp.com/terms)`)
        .setTimestamp()
        ruleschannel.send({embed: ruleview});
        
},
};

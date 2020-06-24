const Discord = require('discord.js')

module.exports = {
name: 'announce',
description: "announce something as owner.",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) )
    return message.reply("how about no")
    var announcements = client.channels.get("714858360528437290")
    let announced = args.join(" ");
    message.delete().catch(O_o=>{});
    const announce = new Discord.RichEmbed()
    .setTitle(`new announcement from ${message.author.tag}`)
    .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
    .setColor(0x800000)
    .setDescription(`${announce}`)
    .setFooter("made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
    .setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
    .setTimestamp()
    announcements.send(`@everyone`)
    announcements.send({embed: announced});
},
};
const Discord = require('discord.js')

module.exports = {
name: 'removerole',
aliases: ["norole"],
description: "removes role",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    let member = message.mentions.users.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send("please give a valid user");
    let rname = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.find(val => val.name === rname);
    if(!role) return message.channel.send("didn't find role");
    member.removeRole(role).catch(e => {
        return message.channel.send("error found okbye");
    });
    message.channel.send(`${message.author.tag} removed ${role.name} from ${member}`);
    let logchannel = client.channels.get('724265992729002045')
    let roleremovelog = new Discord.RichEmbed()
    .setTitle("role removed")
    .setDescription("someone removed a damn role")
    .setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif")
    .addField("information", `role ${role.name} removed from ${member} by ${message.author.tag}`)
    logchannel.send({embed: roleremovelog});
},
};
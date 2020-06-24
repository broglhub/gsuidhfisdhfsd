//const Discord = require('discord.js')

//module.exports = {
//name: 'nick',
//aliases: ["user", "setnick"],
//description: "change the target's username",
//async execute(client, config, message, args) {
//    if(!message.member.roles.some(r=>["trial moderator", "moderator", "head moderator", "Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
//    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
//    let name = args.slice(1).join(' ');
 //   message.delete().catch(O_o=>{});
//    member.setNickname(`${name}`)
//    message.channel.send(`set ${member}'s nickname to ${name}`);
//},
//};
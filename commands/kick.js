const Discord = require('discord.js')

module.exports = {
name: 'kick',
aliases: ["yeet"],
description: "kick a player",
async execute(client, config, message, args) {
          let member = message.mentions.members.first() || message.guild.members.get(args[0]);
                  if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
              return message.channel.send({embed: {
    color: 255,
    description: "you don't have permission to use this!"
  }});
    
  
      if(!member)
          return message.channel.send({embed: {
    color: 3447003,
    description: "Please mention a valid user!"
  }});
      if(!member.kickable)
          return message.reply("can't kick the owners faggot");
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "no reason given";
      
      member.send({embed: {
    color: 3447003,
    description: `you were kicked from brogl hub for the reason: ${reason}`
  }});
      await member.kick(reason)
      .catch(error => message.reply(`${message.author.tag}, i couldn't kick this user: ${error}`));
      message.channel.send({embed: {
    color: 3447003,
    description: `kicked ${member.user.tag} succesfully!`
  }});
      logchannel.send({embed: {
    color: 3447003,
    description: `user ${member.user.tag} was kicked by ${message.author.tag} for the reason: ${reason}`
  }});
},
};

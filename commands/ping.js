const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if(message.author.bot) return;
  
  let prefix = config.prefix;
  
  if(!message.content.startsWith(prefix)) return;
  
  const m = await message.channel.send("ping?")
  
  let pong = new Discord.MessageEmbed()
  .setTitle("Pong!")
  .setColor('RANDOM')
  .setTimestamp()
  .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
  .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
  .setFooter(`made by Chaotic Mind#0666`, `https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048`);

  m.edit(pong)
}

module.exports.help = {
  name: "ping"
}
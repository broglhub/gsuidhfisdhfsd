const Discord = require('discord.js')

module.exports = {
name: 'codenote',
aliases: ["notescript", "scripters"],
description: "notify the coders",
async execute(client, config, message, args) {
  if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    var devchat = client.channels.get("715623740951625778")
  const says = args.join(" ");
  message.delete().catch(O_o=>{});
  devchat.send(`<@&714863475306004622>` + says);
},
};
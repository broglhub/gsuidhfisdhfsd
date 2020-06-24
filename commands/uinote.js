const Discord = require('discord.js')

module.exports = {
name: 'uinote',
aliases: ["noteui", "designers"],
description: "notify ui designers",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    var devchat = client.channels.get("715623740951625778")
    const say = args.join(" ");
    message.delete().catch(O_o=>{});
    devchat.send(`<@&714863533824671778>` + say);
},
};
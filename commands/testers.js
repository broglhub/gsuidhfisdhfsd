const Discord = require('discord.js')

module.exports = {
name: 'test',
aliases: ["testernote", "notetesters"],
description: "notify the testers",
async execute(client, config, message, args) {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
    var testers = client.channels.get("715242560079265865")
    const msg = args.join(" ");
    message.delete().catch(O_o=>{});
    testers.send(`<@&714931256709742592>` + msg);
},
};
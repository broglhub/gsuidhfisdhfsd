const Discord = require('discord.js')

module.exports = {
name: 'plyes',
description: "plyesok",
async execute(client, config, message, args) {
    var prischannel = client.channels.get('726780554569318431')
    await prischannel.send({embed: {
        color: 3447003,
        title: "Teleports",
        description: `yard
        cells
        nexus
        border
        roof
        crim base
        gate
        secret room
        sewers
        back area (unused part)`
    }});
},
};
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
    await prischannel.send({embed: {
        color: 3447003,
        title: "locals",
        description: `guards
        inmates
        neutral
        criminal
        Fog
        Transparent
        Really black
        Earth green
        `
    }});
    await prischannel.send({embed: {
        color: 3447003,
        title: "global shit",
        description: `kill prisoner
        kill guards
        kill neutral
        kill criminals
        loopkill prisoners
        loopkill guards
        loopkill criminals
        loopkill neutral
        kill all
        arrest criminals
        textbox PLRS
        makecrim
        spam arrest off
        spam arrest on (both as toggle)
        kill
        taze
        arrest
        loopkilloff
        loopkillon(toggle too)
        goto
        view on
        view off(toggle)
        age
        id
        os
        `
    }});
    await prischannel.send({embed: {
        color: 3447003,
        title: "toggles",
        description: `rapid punch
        infinite stamina
        rainbow bullets
        auto respawn
        killaura
        fullbright`
    }});
    await prischannel.send({embed: {
        color: 3447003,
        title: "utility",
        description: `rejoin
        global admin
        textbox for ^
        suicide
        no doors
        backwards guns
        retarded guns
        gunmods
        `
    }});
},
};
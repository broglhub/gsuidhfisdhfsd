const Discord = require('discord.js')

module.exports = {
name: 'rps',
aliases: ["rockpaperscissors"],
description: "rock paper scissors",
async execute(client, config, message, args) {
let replies = ['rock', 'paper', 'scissors'];
let result = Math.floor((Math.random() * replies.length));
let uReply = args[0];
if(!uReply) return message.channel.send("perhaps say something")
if(!replies.includes(uReply)) return message.channel.send(`only these responses are accepted: \`${replies.join(', ')}\``);

if (replies[result] === uReply) {
    return message.channel.send('It\'s a tie. same choice');
} else if (uReply === 'rock') {
    if (replies[result] === 'paper') return message.channel.send(`I won! i chose ${replies[result]}`);
    else return message.channel.send(`you won! i chose ${result[replies]}`);
} else if (uReply === 'scissors') {
    if (replies[result] === 'rock') return message.channel.send(`I won! u chose ${replies[result]}`);
    else return message.channel.send(`you won! i chose ${replies[result]}`);
} else if (uReply === 'paper') {
    if (replies[result] === 'scissors') return message.channel.send(`I won! i chose ${replies[result]}`);
    else return message.channel.send(`You won! i chose ${replies[result]}`);0
}
},
};
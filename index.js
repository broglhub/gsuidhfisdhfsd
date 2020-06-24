const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const chalk = require('chalk');

const client = new Discord.Client();
const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
const commandFlies = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFlies) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Ready!');
    client.user.setStatus('dnd');
client.user.setActivity("the cool users of brogl", { type: "WATCHING" });
});

client.on("message", async message => {
    if(message.author.bot) return;
    const prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) ||
                    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.replay('I can\'t execute the command inside DMS!');
    }

    try {
        command.execute(client, config, message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute the command!');
    }
});

client.on('message', async message => {
	if(message.channel.type === "dm")
var log = await console.log(`[${message.author.tag}] ${message.content}`);
});

client.on('message', async message => {
	if(message.author.bot) return;
	if(message.content.includes(`who asked`)) {
	message.channel.send(`Shut the fuck up. We don't care <@!${message.author.id}> if anyone asked or not. just shut up. the world isn't just about you. just don't.`)
}
if(message.content.includes(`didnt ask`)) {
	message.channel.send(`Shut the fuck up. We don't care <@!${message.author.id}> if anyone asked or not. just shut up. the world isn't just about you. just don't.`)
}

if(message.content.includes(`didn't ask`)) {
	message.channel.send(`Shut the fuck up. We don't care <@!${message.author.id}> if anyone asked or not. just shut up. the world isn't just about you. just don't.`)
}

if(message.content.includes(`did not ask`)) {
	message.channel.send(`Shut the fuck up. We don't care <@!${message.author.id}> if anyone asked or not. just shut up. the world isn't just about you. just don't.`)
}

if(message.content.includes(`did i ask`)) {
message.channel.send(`shut the fuck up.we don't care <@${message.author.id}> if anyone asked or not. just shut up. the world isn't about you. just shut the fuck up and don't`)
}

if(message.content.includes(`<@!265953382441680907>`)) {
	message.channel.send(`stfu? :clown:`)
}

if(message.content.includes(`<@!655714844695330854>`)) {
	message.channel.send(`stfu? :clown:`)
}

if(message.content.includes(`<@!714874905669402634>`)) {
	message.channel.send(`my prefix here is ${config.prefix}`)
}
});
client.login(process.env.BOT_TOKEN);

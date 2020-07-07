const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android'
const chalk = require('chalk');
const got = require('got');
const ytdl = require("ytdl-core");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const queue = new Map();

client.once('ready', () => {
	console.log('Ready!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

const prefix = config.prefix;

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		return;
	}else if (message.content.startsWith(`${prefix}np`)) {
		message.channel.send(`now playing: ${serverQueue[0].title}`);
	}else if (message.content.startsWith(`${prefix}queue`)) {
		message.channel.send(`${serverQueue.songs.map()}`)
    }
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
	message.channel.send("i have stopped music");
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Ready!');
let logchannel = client.channels.get('729318199283286107');
  logchannel.send(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setStatus('online');
client.user.setActivity("the cool users of brogl", { type: "WATCHING" });
});

client.on("message", async message => {
    if(message.author.bot) return;
    const prefix = config.prefix;
    if(!message.content.startsWith(config.prefix)) return;
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
    if(message.guild) return;
	if(message.channel.type === "dm")
		var logchannel = client.channels.get('729318148914020392');
await logchannel.send(`[${message.author.tag}]: ${message.content}`);
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

if(message.content.includes('<@!265953382441680907>')) {
    if(!message.author.id === "655714844695330854") return
	message.channel.send(`stfu? :clown:`)
}

if(message.content.includes('<@!655714844695330854>')) {
    if(!message.author.id === "265953382441680907") return
	message.channel.send(`stfu? :clown:`)
}

if(message.content.includes('<@!714874905669402634>')) {
	message.channel.send(`my prefix here is ${config.prefix}`)
}
});

client.on("messageDelete", async msg => {
	if(!msg.guild) return;
	const logchannel = client.channels.get('727050928544546856');
const fetchedLogs = await msg.guild.fetchAuditLogs({
	limit: 1,
	type: 'MESSAGE_DELETE',
});
	const whomst = await fetchedLogs.entries.first(msg.id)
	
  let dellog = new Discord.RichEmbed()
    dellog.setTitle("**DELETED MESSAGE**")
    dellog.setColor("0x800000")
    dellog.addField("Author", msg.author.tag, true)
    dellog.addField("Channel", msg.channel, true)
    dellog.addField("Message", msg.content)
  dellog.addField("Possibly deleted by: ", `${whomst.executor}`)
  dellog.setTimestamp
    dellog.setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`);

    logchannel.send({embed: dellog}).catch()
});

client.on('messageUpdate', (oldMessage, newMessage) => {
	if(!oldMessage.guild) return;
	if(oldMessage.author.bot) return;
	let logedit = new Discord.RichEmbed()
	.setTitle("**EDITED MESSAGE**")
	.setColor("0x800000")
	.setTimestamp()
	.addField("Author", oldMessage.author.tag)
	.addField("Channel", oldMessage.channel)
	.addField("old message", oldMessage)
	.addField("new message", newMessage)
	var logchannel = client.channels.get('729959886842101761')
	logchannel.send({embed: logedit});
});

client.login(process.env.BOT_TOKEN);

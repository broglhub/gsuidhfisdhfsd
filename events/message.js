module.exports = (client, message) => {
if(message.author.bot) return;
if(message.content.indexOf(client.config.prefix) !== 0) return;
const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const cmd = client.commands.get(command);
if(!cmd) return;
cmd.run(client, message, args);
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
	message.channel.send(`my prefix here is .`)
}

});
};
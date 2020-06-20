const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "."

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

client.on("ready", () => {
console.log(`bot launched, watching ${client.users.size} users`)
client.user.setStatus('idle')
var gen = client.channels.get('714854815569543183')
gen.send(`(re)loaded succesfully`);
});

client.on("message", async message => {
	
	if(message.author.bot) return;
	
	if(!message.content.startsWith(prefix)) return;
	
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	if(command === "ping") {
		
		const m = await message.channel.send("ping?");
		m.edit(`pong! latency is ${m.createdTimestamp - message.createdTimestamp}ms. API latency = ${Math.round(client.ping)}ms`);
	}
	
	if(command === "say") {
		const sayMessage = args.join(" ");
		message.delete().catch(O_o=>{});
		message.channel.send(sayMessage);
	}
	
	if(command === "announce") {
		if(!message.member.roles.some(r=>["Owner"].includes(r.name)) )
			return message.reply("how about no")
		var announcements = client.channels.get("714858360528437290")
		const announce = args.join(" ");
		message.delete().catch(O_o=>{});
		announcements.send("@everyone" + announce)
	}
	
	if(command === "members") {
  message.channel.send(`this server has ${message.guild.memberCount} members`);
}

if(command === "8ball") {
	if(!args[0]) return message.reply(`please ask a question`);
	let replies = [
        'Maybe.',
	    'Certainly not.',
	    'I hope so.',
	    'Not in your wildest dreams.',
    	'There is a good chance.',
	    'Quite likely.',
    	'I think so.',
    	'I hope not.',
    	'I hope so.',
    	'Never!',
    	'Pfft.',
	    'Sorry, bucko.',
    	'Hell, yes.',
    	'Hell to the no.',
    	'The future is bleak.',
	    'The future is uncertain.',
	    'I would rather not say.',
    	'Who cares?',
    	'Possibly.',
    	'Never, ever, ever.',
    	'There is a small chance.',
    	'Yes!',
    	'lol no.',
    	'There is a high probability.',
    	'What difference does it makes?',
    	'Not my problem.',
        'Ask someone else.'
	];
	
	let result = Math.floor((Math.random() * replies.length));
	let question = args.slice(0).join(" ");
	
message.channel.send(replies[result])
}

if(command === "download") {
	if(!message.member.roles.some(r=>["WhiteListed"].includes(r.name)) )
		return message.reply("you're not whitelisted!")
  const brogl = new Discord.Attachment('./Files/Brogl Hub.txt')
  message.author.send(brogl)
  message.channel.send(`check your dms for the download`);
}

if(command === "help") {
  message.channel.send(`this is work in progress, ${message.author.username}`);
}

if(command === "uinote") {
  var devchat = client.channels.get("715623740951625778")
  const say = args.join(" ");
  message.delete().catch(O_o=>{});
  devchat.send(`<@&714863533824671778>` + say);
}

if(command === "codenote") {
  var devchat = client.channels.get("715623740951625778")
  const says = args.join(" ");
  message.delete().catch(O_o=>{});
  devchat.send(`<@&714863475306004622>` + says);
}

if(command === "test") {
  var testers = client.channels.get("715242560079265865")
  const msg = args.join(" ");
  message.delete().catch(O_o=>{});
  testers.send(`<@&714931256709742592>` + msg);
}
	
	if(command === "kick") {
		if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
			return message.reply("it seems you do not have this permission.");
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if(!member)
		return message.reply("you might want to tag a valid user");
	if(!member.kickable)
		return message.reply("it seems i do not have permission to kick this user, please check my permissions or role order");
	let reason = args.slice(1).join(' ');
	if(!reason) reason = "no reason given";
	member.send(`you were kicked from broglhub for the reason: ${reason}`);
	await member.kick(reason)
	.catch(error => message.reply(`${message.author}, i couldn't kick this user: ${error}`));
	message.reply(`${member.user.tag} has been kicked by ${message.author.tag}: ${reason}`);
	var logs = client.channels.get("722442447740731392")
	logs.send(`${member.user.tag} was kicked by ${message.author.tag} for the reason: ${reason}`);
}

if(command === "dm") {
	if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
		return;
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	let msg = args.slice(1).join(' ');
	message.delete().catch(O_o=>{});
	member.send(msg);
}

if(command === "ban") {
	if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
		return message.reply("it seems you do not have permission to use this!");
	
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if(!member)
		return message.reply("i cannot find this user, is it a member of this server?");
	if(!member.bannable)
		return message.reply("It seems i'm missing permissions here pal");
	
	let reason = args.slice(1).join(' ');
	if(!reason) reason = "No reason given";
	
	member.send(`you've been banned from brogl hub: ${reason}`);
	
	await member.ban(reason)
	.catch(error => message.reply(`sorry, i couldn't commit ban cuz ${error}`));
	message.reply(`${member.user.tag} has been banned by ${message.author.tag}: ${reason}`);
	var logs = client.channels.get("722442447740731392")
	logs.send(`${member.user.tag} was banned by ${message.author.tag} because ${reason}`);
}

if(command === "purge") {
	if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
		return message.reply("it seems you do not have permission to use this!");
	
	const deleteCount = parseInt(args[0], 10);
	
	if(!deleteCount || deleteCount < 1 || deleteCount > 100)
		return message.reply("i do believe this is outside of my power range");
	
	const fetched = await message.channel.fetchMessages({limit: deleteCount});
	message.channel.bulkDelete(fetched)
	.catch(error => message.reply(`couldn't commit purge cuz ${error}`));
}

if(command === "fixname") {
	let user = message.mentions.members.first() || message.guild.members.get(args[0]);
	user.setNickname("I had a retarded username");
	message.channel.send(`set ${user.user.tag}'s name to 'I had a retarded username'`);
}

if(command === "mute") {
	if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner", "trial moderator", "moderator", "head moderator"].includes(r.name)) )	
		return;
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	const role = message.guild.roles.get('715085241110495304');
	member.addRole(role)
member.send(`you have been muted in brogl hub by ${message.author.tag}. if you wish to get unmuted, request an unmute at ${message.author.tag} with reason of why you were muted to see if we would unmute you.`);
var logs = client.channels.get("722442447740731392")
	logs.send(`${message.author.tag} muted ${member.user.tag}`);
	message.channel.send(`muted ${member.user.tag}`);
}

if(command === "unmute") {
	if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner", "trial moderator", "moderator", "head moderator"].includes(r.name)) )
		return;
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	const role = message.guild.roles.get('715085241110495304');
	member.removeRole(role)
	member.send(`you have been unmuted in brogl. make sure to read rules to prevent another mute!`);
	var logs = client.channels.get("722442447740731392")
	logs.send(`${message.author.tag} unmuted ${member.user.tag}`);
	message.channel.send(`unmuted ${member.user.tag}`);
}

if(command === "av") {
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if(!member) return message.channel.send(`${message.author.avatarURL}`);
	message.channel.send(`${member.user.avatarURL}`);
}

if(command === "sinfo") {  
message.channel.send(`server created on 5/26/2002
server id: ${message.guild.id}
server owner: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}
members: ${message.guild.memberCount}`);
}

if(command === "embedtest") {
message.channel.send({embed: {
  color: 3447003,
  description: "fucking work dammit"
}});
}

if(command === "suckadick") {
	return message.channel.send(`imagine trying to be a gay faggot trap like *ahem* you know who *ahem*, <@!${message.author.id}>, just don't.`);
}

if(command === "jail") {
	let user = message.mentions.members.first() || message.guild.members.get(args[0]);
	message.channel.send(`<:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541><:minecraft_iron_bars:722913387020943541>
<:minecraft_iron_bars:722913387020943541> <@!${user.id}> <:minecraft_iron_bars:722913387020943541>
<:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078><:Minecraft_Stone:722917154340733078>`)
}

if(command === "suggest") {
	const suggestion = args.join(" ")
	const owner = client.channels.get('723564632115118110');
	message.channel.send(`sent suggestion succesfully, <@!${message.author.id}>`);
	owner.send(suggestion + ` (suggested by ${message.author.tag})`);
}

client.on('message', function(message){
if(message.channel.type === "dm") console.log(`[${message.author.username}] ${message.content}`); 
});

	

if(command === "poll") {
	if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
		return message.reply("it seems you do not have permission to use this!");
	
	const sayMessage = args.join(" ");
		message.delete().catch(O_o=>{});
		var polls = client.channels.get('717113282309259365')
		const poll = await polls.send(`<@&717341239556440165> ` + sayMessage);
		poll.react('722730090533748796')
		poll.react('722730090307518566')
}

if(command === "burger") {
	message.delete().catch(O_o=>{});
	message.channel.send(`<a:eating_doge_left:722913471322259497><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:Hamburg:722913511423868928><a:eating_doge_right:722913529119637564>`);
}

if(command === "house") {
	message.delete().catch(O_o=>{});
	message.channel.send(`<:minecraft_wood:722917283420307549><:minecraft_wood:722917283420307549><:minecraft_wood:722917283420307549><:minecraft_wood:722917283420307549><:minecraft_wood:722917283420307549>
<:minecraft_wood:722917283420307549><:Minecraft_wood_planks:722917303192256524><:Minecraft_wood_planks:722917303192256524><:Minecraft_wood_planks:722917303192256524><:minecraft_wood:722917283420307549>
<:minecraft_wood:722917283420307549><:Minecraft_wood_planks:722917303192256524><:doortop:723196486816497676><:Minecraft_wood_planks:722917303192256524><:minecraft_wood:722917283420307549>
<:minecraft_wood:722917283420307549><:Minecraft_wood_planks:722917303192256524><:doorbottom:723196487101841449><:Minecraft_wood_planks:722917303192256524><:minecraft_wood:722917283420307549>
<:Minecraft_Grass:722913022670143599><:Minecraft_Grass:722913022670143599><:Minecraft_Grass:722913022670143599><:Minecraft_Grass:722913022670143599><:Minecraft_Grass:722913022670143599>`);
} 

if(command === "portal") {
	message.delete().catch(O_o=>{});
	const a = await message.channel.send(`<:minecraft_obsidian:723193749160853504>`);
	await a.edit(`<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
	await a.edit(`<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
	await a.edit(`<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
	await a.edit(`<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790>
<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
await a.edit(`<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
sleep(10000);
await a.edit(`<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790>
<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
await a.edit(`<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790>
<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
await a.edit(`<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
await a.edit(`<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:empty:723212183185653790><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:flintandsteel:723205010581618747><:empty:723212183185653790><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
await a.edit(`<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:portalblock:723199073120813086><:portalblock:723199073120813086><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:portalblock:723199073120813086><:portalblock:723199073120813086><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:portalblock:723199073120813086><:portalblock:723199073120813086><:minecraft_obsidian:723193749160853504>
<:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504><:minecraft_obsidian:723193749160853504>`);
}

});

client.on('message', message => {
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

if(message.content.includes(`<@!265953382441680907>`)) {
	message.channel.send(`stfu? :clown:`)
}

if(message.content.includes(`<@!655714844695330854>`)) {
	message.channel.send(`stfu? :clown:`)
}

});

client.login(process.env.BOT_TOKEN);
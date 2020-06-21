const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "."


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
const embed = new Discord.RichEmbed()
  .setTitle(`new announcement from ${message.author.tag}`)
  .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
  .setColor(0x800000)
  .setDescription(`${announce}`)
  .setFooter("made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
  .setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
  .setTimestamp()
 
  announcements.send(`@everyone`)
  announcements.send({embed});
	}
	
	if(command === "members") {
	message.channel.send(`this server has ${message.guild.members} members`)
	}
	
	if(command === "whois") {
	let user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
	const member = message.guild.member(user);
	let userinf = new Discord.RichEmbed()
	.setColor(0x800000)
	.setThumbnail(`${user.member.avatarURL}`)
	.addField(`${user.tag}`, `${user}`, true)
	.addField("userid: ", `${user.id}`, true)
	.addField("Nick:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
	.addField("Status:", `${user.presence.status}`, true)
	.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
	.addField("Bot:", `${user.bot}`, true)
	.addField("Roles:", message.member.roles.filter(role => role.name !== "@everyone").map(roles => `${roles}`).join(', '), true)
	.setFooter(`made by Chaotic Mind#0666`, "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	message.channel.send({embed: userinf});
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
    	'What difference does it make?',
    	'Not my problem.',
        'Ask someone else.'
	];
	
	let result = Math.floor((Math.random() * replies.length));
	let question = args.slice(0).join(" ");
	
message.channel.send(`${question}? ` + replies[result]);
}

if(command === "download") {
	if(!message.member.roles.some(r=>["WhiteListed"].includes(r.name)) )
		return message.reply("you're not whitelisted!")
	message.reply("check your dms")
	message.author.send("brogl hub: `loadstring(game:HttpGet('https://pastebin.com/raw/MJ1ySrgW'))()`")
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
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
				if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
			return message.channel.send({embed: {
  color: 3447003,
  description: "you don't have permission to use this!"
}});
  

	if(!member)
		return message.channel.send({embed: {
  color: 3447003,
  description: "Please mention a valid user!"
}});
	if(!member.kickable)
		return message.reply("can't kick the owners faggot");
	let reason = args.slice(1).join(' ');
	if(!reason) reason = "no reason given";
	
	member.send({embed: {
  color: 3447003,
  description: `you were kicked from brogl hub for the reason: ${reason}`
}});
	await member.kick(reason)
	.catch(error => message.reply(`${message.author.tag}, i couldn't kick this user: ${error}`));
	message.channel.send({embed: {
  color: 3447003,
  description: `kicked ${member.user.tag} succesfully!`
}});
	var logs = client.channels.get("722442447740731392");
	logs.send({embed: {
  color: 3447003,
  description: `user ${member.user.tag} was kicked by ${message.author.tag} for the reason: ${reason}`
}});
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

if(command === "sinfo") {  
message.channel.send(`server created on 5/26/2002
server id: ${message.guild.id}
server owner: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}
members: ${message.guild.memberCount}`);
}

if(command === "av") {
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if(!member) member = message.guild.members.get(`${message.author.id}`)
const embed = new Discord.RichEmbed()
  .setTitle("Here you go!")
  .setAuthor(`${member.user.tag}`, `${member.user.avatarURL}`)
  .setColor(0x800000)
  .setFooter("made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
  .setImage(`${member.user.avatarURL}`)
  .setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
  .setTimestamp()
 
  message.channel.send({embed});
}

if(command === "tos") {
	if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var tos = client.channels.get('715892657645158490')
	let toses = new Discord.RichEmbed()
	.setTitle("Terms of use")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setDescription("here are the terms of use for Brogl Hub")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.addField("donating", "donating is at your own risk. we do not provide refunds.")
	.addField("blacklists", "we have the rights to blacklist you whenever. although this will not happen often whatsoever, **do not complain about being blacklisted as it would usually have a good reason behind it**")
	.setTimestamp()
	tos.send({embed: toses});
}

if(command === "exploits") {
	if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var support = client.channels.get('714873653241839656')
	let supported = new Discord.RichEmbed()
	.setTitle("these are the confirmed supported exploits")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setDescription("if your exploit isn't on the list but works, please dm Chaotic Mind#0666")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.addField("Supported exploits", "Synapse X, protosmasher, sentinel")
	.setTimestamp()
	support.send({embed: supported});
}

if(command === "staffteam") {
	if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var teamlist = client.channels.get('714878555489697793')
	let staffteam = new Discord.RichEmbed()
	.setTitle("Broglhub's staff team")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setDescription("here's the epic staff team of brogl hub")
	.addField("Owner", "<@!655714844695330854>, <@!642690347121639448>, <@!510237724104720402>, <@!265953382441680907>")
	.addField("Co-Owner", "<@!263013950205984768>, <@!249469358466662410>")
	.addField("Staff manager", "<@!642690347121639448>, <@!263013950205984768>, <@!655714844695330854>, <@!510237724104720402>, <@!249469358466662410>, <@!265953382441680907>")
	.addField("Head Admin", "none here yet!")
	.addField("Admin", "<@!564613376060424192>")
	.addField("Head moderator", "<@!296346371454271490>")
	.addField("Moderator", "<@!590271625761390613>, <@!307208717357678594>")
	.addField("Trial mod", "<@!329358272341475330>, <@!283645221168742400>, <@!285149492678754305>")
	.setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	teamlist.send({embed: staffteam});
}

if(command === "appliesopen") {
	if(!message.member.roles.some(r=>["staff manager"].includes(r.name)) ) return;
	var stafflist = client.channels.get('714878555489697793')
	stafflist.send({embed: {
		color: 800000,
		description: "Hey! did you know that you can apply for staff by a staff manager?"
	}});
}

if(command === "games") {
	if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var games = client.channels.get('714889851840888905')
	let included = new Discord.RichEmbed()
	.setTitle("these are the games currently included in brogl hub")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.addField("Army tycoon")
	.addField("Jailbreal")
	.addField("tower battles")
	games.send({embed: included});
}

if(command === "howto") {
	if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var howto = client.channels.get('714908421287313521')
	let howtowl = new Discord.RichEmbed()
	.setTitle("here's how to get whitelisted on brogl hub")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.addField("1", "do %apply in bot commands")
	.addField("2", "give up the real information to the questions(we only ask for exploit and roblox username)")
	.addField("3", "the bot will dm you when you're whitelisted. due to discord being a dick, that can take a bit.")
	.addField("4", "if you find any errors within the script, please report it asap so we can fix it.")
	.addField("5", "before reporting an issue, please make sure it hasn't already been reported.")
	.addField("6", "keep in mind that this won't work on all exploits!")
	.setTimestamp()
	howto.send({embed: howtowl});
	howto.send({embed: {
		color: 800000,
		description: "once whitelisted, do .download in bot commands to get the script"
	}});
}

if(command === "devs") {
	if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var devs = client.channels.get('715283247722135565')
	let devlist = new Discord.RichEmbed()
	.setTitle("Here are the devs of Brogl Hub")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)   
	.setColor(0x800000)
	.setDescription("Read these first before complaining about being punished!")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.setTimestamp()
	.addField("Bot developers", "<@!655714844695330854>")
	.addField("Main scripter", "<@!655714844695330854>")
	.addField("Scripters", "<@!642690347121639448>, <@!296346371454271490>")
	.addField("Ui designers", "<@!510237724104720402>, <@!590271625761390613>, <@!296346371454271490>")
	devs.send({embed: devlist});
}

if(command === "staffrules") {
	if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
	var srules = client.channels.get('714880542855790662')
	let strules = new Discord.RichEmbed()
	.setTitle("These are the staff rules of BroglHub")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)   
	.setColor(0x800000)
	.setDescription("Read these first before complaining about being punished!")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.setTimestamp()
	.addField("bot commands", "Bot commands can be done in any channel by staff spotlight, co owner and owner")
	.addField("staff spotlight", "staff spotlight is a role that trial mod - head admin can get for a week, but cannot be chosen for the week after")
	.addField("role control", "all role controls will be done by staff managers. if you do not have the staff manager role and add roles to someone(excluding member) will lead to a suspension or demotion. staff spotlight is allowed to ban as any role, BUT have to send proof after.")
	.addField("trial mod - head mod", "trial mod to head mod can warn and mute people, and ban raiders")
	.addField("warnings", "3 warnings = 5 hour mute. 6 warnings = 1 day mute. 8 warnings = kick. 9 warnings = ban")
	.addField("crying in gen", "if you see anyone crying about something not working or anything, tell them to stop once, if they don't, mute and report it to me")
	.addField("other staff", "respect other staff members, don't go around and harass them, if i catch you doing so, say goodbye to being staff.")
	.addField("advertising", "advertising is a ban, no matter if it was staff doing so or not. partners can only advertise stuff in the partner announcements")
	.addField("nword", "nword mutes stack, with 30 minutes each")
	.addField("unmute", "no unmuting people if they ask for it, but double it")
	.addField("broglhub", "if any issues are with brogl hub itself, please ping me so i can fix asap")
	.addField("staff reporting", "if you see any staff asking for promotion or any staff abusing, dm a staff manager with screenshot proof and we'll take care of it.")
	.addField("nsfw", "nsfw outside the nsfw channel is a 2 week mute")
	.addField("mass mentioning", "mass mentioning is only allowed by their corresponding roles")
	srules.send({embed: strules});
}

	


if(command === "ruleview") {
	if(!message.member.roles.some(r=>["Owner"].includes(r.name)) ) return;
var ruleschannel = client.channels.get('714862522385170472')
	let ruleview = new Discord.RichEmbed()
	.setTitle("Here are BroglHubs rules")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)   
	.setColor(0x800000)
	.setDescription("Read these first before complaining about being punished!")
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.addField("Spamming", "Don't spam. spamming will result into mutes or further punishments.")
	.addField("NSFW content", "Do not post any animal abuse videos, child abuse, gore in any channels. no nsfw outside the nsfw channel")
	.addField("Voice and audio", "do not post any loud / earrape audios as well as playing earrapes on voicechat.")
	.addField("personal information", "Do not give out any personal information about anyone")
	.addField("reporting", "do not post any fake reports. reporting itself can be done in the user reports channel.")
	.addField("Advertising", "Do not advertise anything offtopic (exploits, server invites etc etc)")
	.addField("raiding", "do not attempt to raid the server.")
	.addField("leaking/cracking", "do not attempt to leak or crack the script or it will result into a temporary downtime with new methods")
	.addField("mentioning", "do not ghostping or mass ping, don't ping roles if it's not neccessary")
	.addField("Flooding", "same as spamming, do not flood the chat. keep the message sizes normal.")
	.addField("attachments", "allowed files are txt, mp3 and mp4 files, when sending them, keep it normal. don't spam them.")
	.addField("roles", "don't ask for any roles. if there will be applications open, it will be announced.")
	.addField("usernames", "keep your username mentionable (no fancy text etc), no invisible or @ everyone or @ here related names")
	.addField("channels", "use channels where they are meant for(no bot commands in general, no talking in suggestions etc")
	.addField("staff", "impersonating staff or pretending like you are one will result in a permanent mute or a ban.")
	.addField("discord", `[follow discord's terms of service](https://discordapp.com/terms)`)
	.setTimestamp()
	ruleschannel.send({embed: ruleview});
	
	let report = new Discord.RichEmbed()
	.setTitle("How to report users breaking rules")
	.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
	.setColor(0x800000)
	.setThumbnail("https://cdn.discordapp.com/avatars/714874905669402634/b538a848a7825a2d5ee1bae150c241a4.png?size=2048")
	.setTimestamp()
	.setFooter("Made by Chaotic Mind#0666", "https://cdn.discordapp.com/avatars/655714844695330854/a_ac9969af8c3d41eeac55fc134b0412a4.gif?size=2048")
	.addField("reporting", "go to the user reports channel, send a screenshot or recording of the person breaking the rules, add their @ or userid and wait for it to be done")
	ruleschannel.send({embed: report});
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
	

if(command === "poll") {
	if(!message.member.roles.some(r=>["Admin", "head administrator", "Co-Owner", "Owner"].includes(r.name)) )
		return message.reply("it seems you do not have permission to use this!");
	
	const newpoll = args.join(" ");
		var polls = client.channels.get('717113282309259365')
		polls.send(`<@&717341239556440165>`);
		const poll = await polls.send({embed: {
			color: 3447003,
			description: `${newpoll}`
		}});
		
		
		
		
		poll.react('722730090533748796')
		poll.react('722730090307518566')
		message.delete().catch(O_o=>{});
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

client.on('message', function(message){
	if(message.channel.type === "dm")
console.log(`[${message.author.tag}] ${message.content}`)
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

if(message.content.includes(`<@!714874905669402634>`)) {
	message.channel.send(`my prefix here is .`)
}

});

client.login(process.env.BOT_TOKEN);

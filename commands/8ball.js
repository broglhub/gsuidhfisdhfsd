const Discord = require('discord.js')

module.exports = {
name: '8ball',
description: "ask 8ball a question",
async execute(client, config, message, args) {
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
        'Ask someone else.',
'go fuck yourself.',
'lol what?'
	];
	
	let result = Math.floor((Math.random() * replies.length));
	let question = args.slice(0).join(" ");
	
message.channel.send(replies[result]);
},
};
const ms = require('ms');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You need to have the manage messages permissions to start giveaways.');
    }

    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(':x: You have to mention a valid channel!');
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: You have to specify a valid duration!');
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(':x: You have to specify a valid number of winners!');
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(':x: You have to specify a valid prize!');
    }

    client.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayNumberWinners,
        messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n" : "")+"???? **GIVEAWAY** ????",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+"???? **GIVEAWAY ENDED** ????",
            timeRemaining: "Time remaining: **{duration}**!",
            inviteToParticipate: "React with ?? to participate!",
            winMessage: "Congratulations, {winners}! You won **{prize}**!",
            embedFooter: "Giveaways",
            noWinner: "Giveaway cancelled, no valid participations.",
            winners: "winner(s)",
            endedAt: "Ended at",
            units: {
                seconds: "seconds",
                minutes: "minutes",
                hours: "hours",
                days: "days",
                pluralS: false 
            }
        }
    });

    message.channel.send(`Giveaway started in ${giveawayChannel}!`);

};
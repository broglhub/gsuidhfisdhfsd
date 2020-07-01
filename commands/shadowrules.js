const Discord = require('discord.js')

module.exports = {
name: 'shadowrules',
description: "yes"
execute(client, config, message, args) {
if(!message.member.roles.some(r=>["Co-Owner"].includes(r.name)) ) return;
var shadowrules = client.channels.get('721448818419171419');
let shadowruleslist = new Discord.RichEmbed()
.setTitle('꧁𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕥𝕙𝕖 𝕊𝕙𝕒𝕕𝕠𝕨 𝔾𝕒𝕟𝕘꧂')
.setDescription('<@!587429301700263946> made this group/server so you can talk with other members of the Shadow Gang.')
.setTimestamp()
.addField("1️⃣", 'Please use common sense')
.addField("2️⃣", 'No cursing. This includes all words except hell. Words like frick or any slangs of the actual word are allowed Moderators have the right to decide if the word you say is bad. Depending on the curse word, you will either be warned or kicked or even banned. Unless you have the "Curse word pass " this isn't for you.')
.addField("3️⃣", `Do not spam. Spam is only allowed in <#722140579718234133>. Spam will lead to a warning if you spam out of spam channel. If we find you spamming 3 times it will lead to a kick.`)
.addField("4️⃣", "No NSFW or NSFL content(inappropriate videos, gore, animal porn etc.)"
.addField("5️⃣", "Any form of raiding will result in an instant ban. If you see any raids going on, please ping a mod or shadow.")
.addField("6️⃣", "Any racist or sexist behavior will lead to a warning, kick, or ban depending on how bad it is.")
.addField("7️⃣", "Please keep ALL drama out of the server. If a moderator feels that you are causing "drama" they will give you a warning and ask that you continue the discussion in DMs. If you continue or have any attitude towards the moderator, they will kick you or give you another warning.")
.addField("8️⃣", `You can advertise your own server, but please keep it to <#722854080569016320> and not dms or any other channel.`)
.addField("𝕍𝕠𝕚𝕔𝕖 ℂ𝕙𝕒𝕥 ℝ𝕦𝕝𝕖𝕤")
.addField("9️⃣", "Songs with inappropriate language is allowed. However, if it has excessive curse words it will be skipped. Moderators have the right to skip any song. You will not be held responsible for any bad songs, unless you continue to play that song.")
.addField("🔟", "Do not spam songs, this will result in a warning.")
.addField("1️⃣1️⃣", "Any inappropriate sounds or language in voice calls will lead to you being warned and disconnected. If you continue you will be kicked.")
.addField("1️⃣2️⃣", "Do not purposely "ear rape" other people in voice calls. It will lead to you being disconnected and warned.")
.addField("**NOTE**", "Moderators are allowed to warn, kick, or ban you in any situation. If you disagree please confront them in DMs")
.addField("Pinging Shadow", "Please do not ping Shadow. If a moderator catches you pinging, you will be asked to refrain from doing it again. However, it does not result in a warning. (This does not apply to important pings)")
shadowrules.send({embed: shadowruleslist});
},
};

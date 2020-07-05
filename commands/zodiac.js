const Discord = require('discord.js')

module.exports = {
name: 'zodiac',
description: "yes ok",
async execute(client, config, message, args) {
    const month = parseInt(args[0]);
    const day = parseInt(args[1]);

    if (!month) {
        return message.channel.send(' please enter a valid number for month.');
    }

    if (month < 1 || month > 12) {
        return message.channel.send(' please enter a valid month [1, 12].');
    }

    if (!day) {
        return message.channel.send(' please enter a valid number for day.');
    }

    if (month === 1) {
        if (day >= 1 && day <= 19) return message.channel.send('your zodiac is Capricorn. Capricorn (♑︎) is the tenth astrological sign in the zodiac out of twelve total zodiac signs, originating from the constellation of Capricornus, the horned goat.');
        if (day >= 20 && day <= 31) return message.channel.send('your zodiac is Aquarius. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. These revolutionary thinkers fervently support “power to the people,” aspiring to change the world through radical social progress.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 2) {
        if (day >= 1 && day <= 18) return message.channel.send('your zodiac is Aquarius. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. These revolutionary thinkers fervently support “power to the people,” aspiring to change the world through radical social progress.');
        if (day >= 19 && day <= 29) return message.channel.send('your zodiac is Pisces. Pisces (♓︎) (/ˈpaɪsiːz/; Ancient Greek: Ἰχθύες Ikhthyes) is the twelfth astrological sign in the Zodiac. It is a negative mutable sign. It spans 330° to 360° of celestial longitude. Under the tropical zodiac, the sun transits this area between February 19 and March 20.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 3) {
        if (day >= 1 && day <= 20) return message.channel.send('your zodiac is Pisces. Pisces (♓︎) (/ˈpaɪsiːz/; Ancient Greek: Ἰχθύες Ikhthyes) is the twelfth astrological sign in the Zodiac. It is a negative mutable sign. It spans 330° to 360° of celestial longitude. Under the tropical zodiac, the sun transits this area between February 19 and March 20.');
        if (day >= 21 && day <= 31) return message.channel.send('your zodiac is Aries. Of the four natural elements that represent the zodiac symbols (air, earth, fire and water), Aries is a fire sign and its astrological symbol is represented by the ram constellation. Those born under the sign of the ram are known to be energetic, adventurous, dynamic, and impulsive.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 4) {
        if (day >= 1 && day <= 19) return message.channel.send('your zodiac is Aries. Of the four natural elements that represent the zodiac symbols (air, earth, fire and water), Aries is a fire sign and its astrological symbol is represented by the ram constellation. Those born under the sign of the ram are known to be energetic, adventurous, dynamic, and impulsive.');
        if (day >= 20 && day <= 31) return message.channel.send('your zodiac is Taurus. Taurus is the second of the 12 astrological signs and is represented by the bull constellation. Of the four zodiac elements (air, earth, fire, and water), Taurus is an earth sign. Taureans, like the bull that represents them, are known to be intelligent, dependable, hardworking, dedicated, and stubborn');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 5) {
        if (day >= 1 && day <= 20) return message.channel.send('your zodiac is Taurus. Taurus is the second of the 12 astrological signs and is represented by the bull constellation. Of the four zodiac elements (air, earth, fire, and water), Taurus is an earth sign. Taureans, like the bull that represents them, are known to be intelligent, dependable, hardworking, dedicated, and stubborn');
        if (day >= 21 && day <= 31) return message.channel.send('your zodiac is Gemini. It is a positive mutable sign. Under the tropical zodiac, the sun transits this sign between about 21 May and 21 June. Gemini is represented by the twins Castor and Pollux, known as the Dioscuri.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 6) {
        if (day >= 1 && day <= 20) return message.channel.send('your zodiac is Gemini. It is a positive mutable sign. Under the tropical zodiac, the sun transits this sign between about 21 May and 21 June. Gemini is represented by the twins Castor and Pollux, known as the Dioscuri.');
        if (day >= 21 && day <= 31) return message.channel.send('your zodiac is Cancer. Cancer is the fourth sign of the zodiac and is represented by the Crab. They\'re primarily known for being emotional, nurturing, and highly intuitive, as well as sensitive and at times insecure.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 7) {
        if (day >= 1 && day <= 22) return message.channel.send('your zodiac is Cancer. Cancer is the fourth sign of the zodiac and is represented by the Crab. They\'re primarily known for being emotional, nurturing, and highly intuitive, as well as sensitive and at times insecure.');
        if (day >= 23 && day <= 31) return message.channel.send('your zodiac is Leo. It corresponds to the constellation Leo and comes after Cancer and before Virgo. The traditional Western zodiac associates Leo with the period between July 23 and August 22, and the sign spans the 120th to 150th degree of celestial longitude. Leo is associated with fire, and its modality is fixed.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 8) {
        if (day >= 1 && day <= 22) return message.channel.send('your zodiac is Leo. It corresponds to the constellation Leo and comes after Cancer and before Virgo. The traditional Western zodiac associates Leo with the period between July 23 and August 22, and the sign spans the 120th to 150th degree of celestial longitude. Leo is associated with fire, and its modality is fixed.');
        if (day >= 23 && day <= 31) return message.channel.send('your zodiac is Virgo. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo\'s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 9) {
        if (day >= 1 && day <= 22) return message.channel.send('your zodiac is Virgo. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo\'s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life.');
        if (day >= 23 && day <= 31) return message.channel.send('your zodiac is Libra. Libra (♎︎) is the seventh astrological sign in the Zodiac. It spans 180°–210° celestial longitude. The Sun transits this sign on average between September 23 (September equinox) and October 22. Under the sidereal zodiac, the Sun currently transits the constellation of Libra from approximately October 31 to November 22.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 10) {
        if (day >= 1 && day <= 22) return message.channel.send('your zodiac is Libra. Libra (♎︎) is the seventh astrological sign in the Zodiac. It spans 180°–210° celestial longitude. The Sun transits this sign on average between September 23 (September equinox) and October 22. Under the sidereal zodiac, the Sun currently transits the constellation of Libra from approximately October 31 to November 22.');
        if (day >= 23 && day <= 31) return message.channel.send('your zodiac is Scorpio. Scorpio (♏︎) is the eighth astrological sign in the Zodiac, originating from the constellation of Scorpius. It spans 210°–240° ecliptic longitude. Under the tropical zodiac (most commonly used in Western astrology), the Sun transits this sign on average from October 23 to November 22.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 11) {
        if (day >= 1 && day <= 21) return message.channel.send('your zodiac is Scorpio. Scorpio (♏︎) is the eighth astrological sign in the Zodiac, originating from the constellation of Scorpius. It spans 210°–240° ecliptic longitude. Under the tropical zodiac (most commonly used in Western astrology), the Sun transits this sign on average from October 23 to November 22.');
        if (day >= 22 && day <= 31) return message.channel.send('your zodiac is Sagittarius. Sagittarius (♐︎) (Greek: Τοξότης Toxotes, Latin: Sagittarius) is the ninth astrological sign, which is associated with the constellation Sagittarius and spans 240–270th degrees of the zodiac. Under the tropical zodiac, the sun transits this sign between approximately November 23 and December 21.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else if (month === 12) {
        if (day >= 1 && day <= 21) return message.channel.send('your zodiac is Sagittarius. Sagittarius (♐︎) (Greek: Τοξότης Toxotes, Latin: Sagittarius) is the ninth astrological sign, which is associated with the constellation Sagittarius and spans 240–270th degrees of the zodiac. Under the tropical zodiac, the sun transits this sign between approximately November 23 and December 21.');
        if (day >= 22 && day <= 31) return message.channel.send('your zodiac is Capricorn. Capricorn (♑︎) is the tenth astrological sign in the zodiac out of twelve total zodiac signs, originating from the constellation of Capricornus, the horned goat.');
        return message.channel.send(' please enter a valid date.');;
    } 
    else {
        return message.channel.send(' please enter a valid date.');;
    }
},
};
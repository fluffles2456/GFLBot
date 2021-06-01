module.exports = {
    name: "paradeus",
    description: "A command to roll a Paradeus unit.",

    execute(paradeusMessage, args){
        const Discord = require("discord.js");  //include discord.js
        num9 = Math.floor(Math.random() * (100 - 1) + 1); //RNG

        if(num9 > 0 && num9 <= 50)  //rolls common paradeus unit
        {
            commonParadeus = Math.floor(Math.random() * (5 - 1) + 1); //RNG
            switch(commonParadeus)
            {
                case 1:     //rolls Doppelsodner
                    paradeusName = "Doppelsodner";
                    paradeusImage = "https://i.imgur.com/7NU0e0K.png";
                    break;

                case 2:     //rolls Pyxis
                    paradeusName = "Pyxis";
                    paradeusImage = "https://i.imgur.com/NT4z95j.png";
                    break;

                case 3:     //rolls Rodelero
                    paradeusName = "Rodelero";
                    paradeusImage = "https://i.imgur.com/cb68KlE.png";
                    break;

                case 4:     //rolls Strelet
                    paradeusName = "Strelet";
                    paradeusImage = "https://i.imgur.com/uEE7cZ5.png";
                    break;

                case 5:     //rolls Strelet+
                    paradeusName = "Strelet+";
                    paradeusImage = "https://i.imgur.com/00ZOfJN.png";
                    break;
            }
        }

        else if(num9 > 50 && num9 <= 80)    //rolls rare paradeus unit
        {
            rareParadeus = Math.floor(Math.random() * (4 - 1) + 1); //RNG
            switch(rareParadeus)
            {
                case 1:     //rolls Isomer (Enemy)
                    paradeusName = "Isomer (Enemy)";
                    paradeusImage = "https://i.imgur.com/ey3A1fh.png";
                    break;

                case 2:     //rolls Roarer
                    paradeusName = "Roarer";
                    paradeusImage = "https://i.imgur.com/3k9Fopj.png";
                    break;

                case 3:     //rolls Thunder (Enemy)
                    paradeusName = "Thunder (Enemy)";
                    paradeusImage = "https://i.imgur.com/HY8B2ck.png";
                    break;

                case 4:     //rolls Uhlan
                    paradeusName = "Uhlan";
                    paradeusImage = "https://i.imgur.com/gxXQKZS.png";
                    break;
            }
        }

        else if(num9 > 80 && num9 <= 90)    //rolls Gebennu/Isomer
        {
            lowBossParadeus = Math.floor(Math.random() * (3 - 1) + 1); //RNG
            switch(lowBossParadeus)
            {
                case 1:     //rolls Gebbennu
                    paradeusName = "Gebbennu";
                    paradeusImage = "https://i.imgur.com/ODk8qPf.png";
                    break;

                case 2:     //rolls Isomer Black
                    paradeusName = "Isomer Black";
                    paradeusImage = "https://i.imgur.com/Gf5Obbl.png";
                    break;

                case 3:     //rolls Isomer White
                    paradeusName = "Isomer White";
                    paradeusImage = "https://i.imgur.com/x5WNVRU.png";
                    break;
            }
        }

        else if(num9 > 90 && num9 <= 96)    //rolls unnamed Nyto
        {
            midBossParadeus = Math.floor(Math.random() * (2 - 1) + 1);  //RNG
            switch(midBossParadeus)
            {
                case 1:     //rolls Nyto Black
                    paradeusName = "Nyto Black";
                    paradeusImage = "https://i.imgur.com/0Aw0cYc.png";
                    break;

                case 2:     //rolls Nyto White
                    paradeusName = "Nyto White";
                    paradeusImage = "https://i.imgur.com/SaAl6lZ.png";
                    break;
            }
        }

        else if(num9 > 96 && num9 <= 100)   //rolls named Nyto
        {
            lateBossParadeus = Math.floor(Math.random() * (2 - 1) + 1);  //RNG
            switch(lateBossParadeus)
            {
                case 1:     //rolls Mercurows
                    paradeusName = "Mercurows";
                    paradeusImage = "https://i.imgur.com/snIeUSS.png";
                    break;

                case 2:     //rolls Nimogen
                    paradeusName = "Nimogen";
                    paradeusImage = "https://i.imgur.com/Q1KR8Qs.png";
                    break;
            }
        }

        const paradeusEmbed = new Discord.MessageEmbed();   //create embeds
        paradeusEmbed.setColor("#fafafa");
        paradeusEmbed.setTitle(paradeusMessage.member.user.tag);
        paradeusEmbed.setDescription("You have rolled " + paradeusName + " !");
        paradeusEmbed.setImage(paradeusImage);
        paradeusMessage.channel.send(paradeusEmbed);        //send embeds
    }
}
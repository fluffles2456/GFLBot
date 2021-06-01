module.exports = {
    name: "kcco",
    description: "A command to roll a KCCO unit.",

    execute(message7, args){
        const Discord = require("discord.js");
        num4 = Math.floor(Math.random() * (100 - 1) + 1);

        if(num4 > 0 && num4 <= 75){
            kcco = Math.floor(Math.random() * (15 - 1) + 1);

            if(kcco === 1){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Acheron!");
                kccoEmbed.setImage("https://i.imgur.com/QYt9pgk.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 2){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Aegis (KCCO)!");
                kccoEmbed.setImage("https://i.imgur.com/y7nQEaw.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 3){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Archer!");
                kccoEmbed.setImage("https://i.imgur.com/ej32i5G.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 4){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Beast!");
                kccoEmbed.setImage("https://i.imgur.com/9LMnSWi.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 5){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Cerynitis!");
                kccoEmbed.setImage("https://i.imgur.com/H2yO06M.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 6){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Coeus!");
                kccoEmbed.setImage("https://i.imgur.com/O841KBS.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 7){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Cyclops!");
                kccoEmbed.setImage("https://i.imgur.com/TZy5q2p.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 8){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Cyclops (SG)!");
                kccoEmbed.setImage("https://i.imgur.com/C6Hmuwa.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 9){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Dactyl!");
                kccoEmbed.setImage("https://i.imgur.com/IJMg2pP.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 10){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Hydra!");
                kccoEmbed.setImage("https://i.imgur.com/J0UNN05.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 11){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Kratos!");
                kccoEmbed.setImage("https://i.imgur.com/S7JREHI.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 12){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Pathfinder!");
                kccoEmbed.setImage("https://i.imgur.com/l5nWu8g.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 13){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Recce Centre!");
                kccoEmbed.setImage("https://i.imgur.com/bpSIjwU.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 14){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Tesla Trooper!");
                kccoEmbed.setImage("https://i.imgur.com/3RYap5H.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kcco === 15){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Typhon!");
                kccoEmbed.setImage("https://i.imgur.com/aSmwP06.png");
                message7.channel.send(kccoEmbed);
            }

        }

        else if(num4 > 75 && num4 <= 95){
            kccoboss = Math.floor(Math.random() * (4 - 1) + 1);

            if(kccoboss === 1){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Ares!");
                kccoEmbed.setImage("https://i.imgur.com/K82Ob8n.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kccoboss === 2){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Argo-Carina!");
                kccoEmbed.setImage("https://i.imgur.com/Fk2LPbZ.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kccoboss === 3){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Argo-Puppis!");
                kccoEmbed.setImage("https://i.imgur.com/CnjBl7e.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kccoboss === 4){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Argo-Vera!");
                kccoEmbed.setImage("https://i.imgur.com/pS80O54.png");
                message7.channel.send(kccoEmbed);
            }

        }

        else if(num4 > 95 && num4 <= 100){
            kccoleader = Math.floor(Math.random() * (4 - 1) + 1);

            if(kccoleader === 1){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled General Carter!");
                kccoEmbed.setImage("https://iopwiki.com/images/thumb/c/ca/Character_Profile_Carter.png/800px-Character_Profile_Carter.png");
                message7.channel.send(kccoEmbed);
            }

            else if(kccoleader === 2){
                const kccoEmbed = new Discord.MessageEmbed;
                kccoEmbed.setColor("#4a9745");
                kccoEmbed.setTitle(message7.member.user.tag);
                kccoEmbed.setDescription("You have rolled Yegor!");
                kccoEmbed.setImage("https://iopwiki.com/images/thumb/8/89/Character_Profile_Yegor.png/800px-Character_Profile_Yegor.png");
                message7.channel.send(kccoEmbed);
            }

        }

    }
}
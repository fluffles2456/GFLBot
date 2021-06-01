module.exports = {
    name: "sf",
    description: "A command to roll an SF unit.",

    execute(message6, args){
        const Discord = require("discord.js");
        num3 = Math.floor(Math.random() * (100 - 1) + 1);

        if(num3 > 0 && num3 <= 50){
            normal = Math.floor(Math.random() * (12 - 1) + 1);

            if(normal === 1){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Brute!");
                sfEmbed.setImage("https://i.imgur.com/Ji9RYct.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 2){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Dinergate!");
                sfEmbed.setImage("https://i.imgur.com/HU0xEMR.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 3){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Dragoon!");
                sfEmbed.setImage("https://i.imgur.com/CHjdg80.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 4){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Goliath!");
                sfEmbed.setImage("https://i.imgur.com/YAHdGLN.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 5){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Guard!");
                sfEmbed.setImage("https://i.imgur.com/f9A2G8j.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 6){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Jaeger!");
                sfEmbed.setImage("https://i.imgur.com/EXNXu4w.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 7){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Jaguar!");
                sfEmbed.setImage("https://i.imgur.com/tDQdT5Z.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 8){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Prowler!");
                sfEmbed.setImage("https://i.imgur.com/UJc7yRd.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 9){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Ripper!");
                sfEmbed.setImage("https://i.imgur.com/4XRq381.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 10){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Scout!");
                sfEmbed.setImage("https://i.imgur.com/dcGxRcT.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 11){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Striker!");
                sfEmbed.setImage("https://i.imgur.com/GrIIIx0.png");
                message6.channel.send(sfEmbed);
            }

            else if(normal === 12){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Vespid!");
                sfEmbed.setImage("https://i.imgur.com/r6uE39V.png");
                message6.channel.send(sfEmbed);
            }

        }

        else if(num3 > 50 && num3 <= 90){
            elite = Math.floor(Math.random() * (12 - 1) + 1);

            if(elite === 1){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Aegis!");
                sfEmbed.setImage("https://i.imgur.com/sXntYiA.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 2){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Aegis (SWAP)!");
                sfEmbed.setImage("https://i.imgur.com/AggP698.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 3){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Dragoon (SWAP)!");
                sfEmbed.setImage("https://i.imgur.com/2BvRjxz.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 4){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Goliath+!");
                sfEmbed.setImage("https://i.imgur.com/v81MsgN.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 5){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Guard (SWAP)!");
                sfEmbed.setImage("https://i.imgur.com/R9zyNBU.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 6){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Jaeger (SWAP)!");
                sfEmbed.setImage("https://i.imgur.com/3CApP85.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 7){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Jupiter Cannon!");
                sfEmbed.setImage("https://i.imgur.com/T9TJoGq.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 8){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Manticore!");
                sfEmbed.setImage("https://i.imgur.com/fKvRLRW.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 9){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Nemeum!");
                sfEmbed.setImage("https://i.imgur.com/BPK7jpl.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 10){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Prowler (SWAP)!");
                sfEmbed.setImage("https://i.imgur.com/pkT9TQS.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 11){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Striker (SWAP)!");
                sfEmbed.setImage("https://i.imgur.com/wUHOQBN.png");
                message6.channel.send(sfEmbed);
            }

            else if(elite === 12){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Tarantula!");
                sfEmbed.setImage("https://i.imgur.com/LqTUWah.png");
                message6.channel.send(sfEmbed);
            }

        }

        else if(num3 > 90 && num3 <= 100){
            ringleader = Math.floor(Math.random() * (15 - 1) + 1);

            if(ringleader === 1){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Agent!");
                sfEmbed.setImage("https://i.imgur.com/xiXYVyh.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 2){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Alchemist!");
                sfEmbed.setImage("https://i.imgur.com/NGIy80u.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 3){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Architect!");
                sfEmbed.setImage("https://i.imgur.com/XsMqCTC.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 4){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Beak!");
                sfEmbed.setImage("https://i.imgur.com/66jXXPr.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 5){
                form = Math.floor(Math.random() * (100 - 1) + 1)

                if(form > 0 && form <= 40){
                    const sfEmbed = new Discord.MessageEmbed;
                    sfEmbed.setColor("#ff5599");
                    sfEmbed.setTitle(message6.member.user.tag);
                    sfEmbed.setDescription("You have rolled Destroyer!");
                    sfEmbed.setImage("https://i.imgur.com/zZNO5vU.png");
                    message6.channel.send(sfEmbed);
                }

                else if(form > 40 && form <= 70){
                    const sfEmbed = new Discord.MessageEmbed;
                    sfEmbed.setColor("#ff5599");
                    sfEmbed.setTitle(message6.member.user.tag);
                    sfEmbed.setDescription("You have rolled Gaia!");
                    sfEmbed.setImage("https://i.imgur.com/1V2i1XP.png");
                    message6.channel.send(sfEmbed);
                }

                else if(form > 70 && form <= 100){
                    const sfEmbed = new Discord.MessageEmbed;
                    sfEmbed.setColor("#ff5599");
                    sfEmbed.setTitle(message6.member.user.tag);
                    sfEmbed.setDescription("You have rolled Garm!");
                    sfEmbed.setImage("https://i.imgur.com/XzExs4X.png");
                    message6.channel.send(sfEmbed);
                }

            }

            else if(ringleader === 6){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Dreamer!");
                sfEmbed.setImage("https://i.imgur.com/7adW9sd.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 7){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Ephelt (Boss)!");
                sfEmbed.setImage("https://i.imgur.com/odIgEnx.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 8){
                form = Math.floor(Math.random() * (100 - 1) + 1)

                if(form > 0 && form <= 60){
                    const sfEmbed = new Discord.MessageEmbed;
                    sfEmbed.setColor("#ff5599");
                    sfEmbed.setTitle(message6.member.user.tag);
                    sfEmbed.setDescription("You have rolled Executioner!");
                    sfEmbed.setImage("https://i.imgur.com/bGzhw1H.png");
                    message6.channel.send(sfEmbed);
                }

                else if(form > 60 && form <= 100){
                    const sfEmbed = new Discord.MessageEmbed;
                    sfEmbed.setColor("#ff5599");
                    sfEmbed.setTitle(message6.member.user.tag);
                    sfEmbed.setDescription("You have rolled Executioner (EX)!");
                    sfEmbed.setImage("https://i.imgur.com/8n5T4hA.png");
                    message6.channel.send(sfEmbed);
                }

            }

            else if(ringleader === 9){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Gager!");
                sfEmbed.setImage("https://i.imgur.com/Jg0lURM.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 10){
                form = Math.floor(Math.random() * (100 - 1) + 1)

                if(form > 0 && form <= 60){
                    const sfEmbed = new Discord.MessageEmbed;
                    sfEmbed.setColor("#ff5599");
                    sfEmbed.setTitle(message6.member.user.tag);
                    sfEmbed.setDescription("You have rolled Hunter!");
                    sfEmbed.setImage("https://i.imgur.com/ic6MCzJ.png");
                    message6.channel.send(sfEmbed);
                }

                else if(form > 60 && form <= 100){
                    const sfEmbed = new Discord.MessageEmbed;
                    sfEmbed.setColor("#ff5599");
                    sfEmbed.setTitle(message6.member.user.tag);
                    sfEmbed.setDescription("You have rolled Hunter (EX)!");
                    sfEmbed.setImage("https://i.imgur.com/exgVJnX.png");
                    message6.channel.send(sfEmbed);
                }

            }

            else if(ringleader === 11){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Intruder!");
                sfEmbed.setImage("https://i.imgur.com/bNdOVML.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 12){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Judge!");
                sfEmbed.setImage("https://i.imgur.com/hv9GW1K.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 13){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled M16 (Boss)!");
                sfEmbed.setImage("https://i.imgur.com/wJ513Ij.png");
                message6.channel.send(sfEmbed);
            }

            else if(ringleader === 14){
                form = Math.floor(Math.random() * (100 - 1) + 1)

                if(form > 0 && form <= 60){
                    const sfEmbed = new Discord.MessageEmbed;
                    sfEmbed.setColor("#ff5599");
                    sfEmbed.setTitle(message6.member.user.tag);
                    sfEmbed.setDescription("You have rolled Ouruboros!");
                    sfEmbed.setImage("https://i.imgur.com/OMUrqv5.png");
                    message6.channel.send(sfEmbed);
                }

                else if(form > 60 && form <= 100){
                    const sfEmbed = new Discord.MessageEmbed;
                    sfEmbed.setColor("#ff5599");
                    sfEmbed.setTitle(message6.member.user.tag);
                    sfEmbed.setDescription("You have rolled Ouruboros (EX)!");
                    sfEmbed.setImage("https://i.imgur.com/yfx38AJ.png");
                    message6.channel.send(sfEmbed);
                }

            }

            else if(ringleader === 15){
                const sfEmbed = new Discord.MessageEmbed;
                sfEmbed.setColor("#ff5599");
                sfEmbed.setTitle(message6.member.user.tag);
                sfEmbed.setDescription("You have rolled Scarecrow!");
                sfEmbed.setImage("https://i.imgur.com/xswLd5o.png");
                message6.channel.send(sfEmbed);
            }

        }

    }
}
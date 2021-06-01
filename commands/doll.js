module.exports = {
    name: "doll",
    description: "A command to roll a doll.",
    
    execute(message1, args){
        const Discord = require("discord.js");
        num1 = Math.floor(Math.random() * (100 - 1) + 1);

        if(num1 > 0 && num1 <= 45){
            twostar = Math.floor(Math.random() * (33 - 1) + 1);
            
            if(twostar === 1){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M1911!");
                    dollEmbed.setImage("https://i.imgur.com/TDyg0eI.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M1911 Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/KOax7Sj.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(twostar === 2){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Nagant Revolver!");
                    dollEmbed.setImage("https://i.imgur.com/I66WR6J.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Nagant Revolver Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/g55pmZc.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(twostar === 3){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled P38!");
                dollEmbed.setImage("https://i.imgur.com/2FmN9kE.png");
                message1.channel.send(dollEmbed);
            }
            
            else if(twostar === 4){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PPK!");
                dollEmbed.setImage("https://i.imgur.com/afMv3xN.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 5){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M3!");
                dollEmbed.setImage("https://i.imgur.com/8CZURbO.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 6){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PPSh-41!");
                dollEmbed.setImage("https://i.imgur.com/NZh6hbn.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 7){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PP-2000!");
                dollEmbed.setImage("https://i.imgur.com/3nABLKV.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 8){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MP40!");
                dollEmbed.setImage("https://i.imgur.com/G8qfaWj.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 9){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Beretta Model 38!");
                    dollEmbed.setImage("https://i.imgur.com/ShJHrvM.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Beretta Model 38 Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/Rs2K8n5.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(twostar === 10){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled m45!");
                dollEmbed.setImage("https://i.imgur.com/u3lxGD2.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 11){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SVT-38!");
                dollEmbed.setImage("https://i.imgur.com/PKm1opR.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 12){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SKS!");
                dollEmbed.setImage("https://i.imgur.com/2VEuPnW.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 13){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled G43!");
                dollEmbed.setImage("https://i.imgur.com/diO4aWf.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 14){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled FN-49!");
                    dollEmbed.setImage("https://i.imgur.com/ZqJzT7M.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled FN-49 Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/RpNPayu.png");
                    message1.channel.send(dollEmbed);
                }

            }

            else if(twostar === 15){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled BM59!");
                dollEmbed.setImage("https://i.imgur.com/R7m9c9i.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 16){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled G3!");
                    dollEmbed.setImage("https://i.imgur.com/kV7oRYW.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled G3 Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/1n1iize.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(twostar === 17){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled L85A1!");
                dollEmbed.setImage("https://i.imgur.com/SzpsXyr.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 18){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Galil!");
                    dollEmbed.setImage("https://i.imgur.com/6uRByuo.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Galil Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/j4aMNhk.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(twostar === 19){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SIG-510!");
                dollEmbed.setImage("https://i.imgur.com/YxHpTXI.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 20){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled LWWMG!");
                    dollEmbed.setImage("https://i.imgur.com/WNQF7Nf.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled LWWMG Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/z7I248h.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(twostar === 21){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled DP28!");
                dollEmbed.setImage("https://i.imgur.com/vAdIn3d.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 22){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MG34!");
                dollEmbed.setImage("https://i.imgur.com/mmdc3IH.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 23){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled FNP-9!");
                dollEmbed.setImage("https://i.imgur.com/JNcB8cP.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 24){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled MP-446!");
                    dollEmbed.setImage("https://i.imgur.com/V5chwyI.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled MP-446 Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/utGDELw.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(twostar === 25){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Spectre M4!");
                dollEmbed.setImage("https://i.imgur.com/5GBmmjs.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 26){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled IDW!");
                    dollEmbed.setImage("https://i.imgur.com/GRC4rfg.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled IDW Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/m183MJJ.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(twostar === 27){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#fcfcfc");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Type 64!");
                    dollEmbed.setImage("https://i.imgur.com/E8IahQP.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Type 64 Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/R2x3ViV.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(twostar === 28){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled F2000!");
                dollEmbed.setImage("https://i.imgur.com/O7UNuhz.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 29){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled FG42!");
                dollEmbed.setImage("https://i.imgur.com/C4lDWNo.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 30){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AAT-52!");
                dollEmbed.setImage("https://i.imgur.com/aKAGNDX.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 31){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 63!");
                dollEmbed.setImage("https://i.imgur.com/eJpYUf6.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 32){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Bren Ten!");
                dollEmbed.setImage("https://i.imgur.com/iv07Ab2.png");
                message1.channel.send(dollEmbed);
            }

            else if(twostar === 33){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#fcfcfc");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled USP Compact!");
                dollEmbed.setImage("https://i.imgur.com/zcAmeLh.png");
                message1.channel.send(dollEmbed);
            }
        }

        else if(num1 > 45 && num1 <= 80){
            threestar = Math.floor(Math.random() * (98 - 1) + 1);

            if(threestar === 1){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M9!");
                dollEmbed.setImage("https://i.imgur.com/ScK4LCV.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 2){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled TT-30!");
                dollEmbed.setImage("https://i.imgur.com/EEdwTwq.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 3){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Makarov!");
                    dollEmbed.setImage("https://i.imgur.com/1wrkZS8.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Makarov Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/qiSKI7w.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 4){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled P08!");
                dollEmbed.setImage("https://i.imgur.com/1jUeQxd.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 5){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled C96!");
                    dollEmbed.setImage("https://i.imgur.com/fxzKvaM.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled C96 Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/xNqaMFd.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 6){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 92!");
                dollEmbed.setImage("https://i.imgur.com/qP1fmH6.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 7){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Astra Revolver!");
                dollEmbed.setImage("https://i.imgur.com/s4bftWf.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 8){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Glock 17!");
                dollEmbed.setImage("https://i.imgur.com/WZS6dQd.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 9){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MAC-10!");
                dollEmbed.setImage("https://i.imgur.com/DPTATGq.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 10){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled FMG-9!");
                dollEmbed.setImage("https://i.imgur.com/DigdT8r.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 11){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PPS-43!");
                dollEmbed.setImage("https://i.imgur.com/EeVq1z2.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 12){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Skorpion!");
                dollEmbed.setImage("https://i.imgur.com/iIRqjtc.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 13){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Sten MkII!");
                    dollEmbed.setImage("https://i.imgur.com/abj6KYJ.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Sten MkII Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/nOtKKee.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 14){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Micro Uzi!");
                    dollEmbed.setImage("https://i.imgur.com/aUmORw7.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Micro Uzi Mod III!");
                    dollEmbed.setImage("https://i.imgur.com/veIrThg.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 15){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M1 Garand!");
                dollEmbed.setImage("https://i.imgur.com/BP1FvQD.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 16){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M1A1!");
                dollEmbed.setImage("https://i.imgur.com/bSuQFuS.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 17){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M14!");
                    dollEmbed.setImage("https://i.imgur.com/AuL0DM1.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M14 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/bYk4JjB.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 18){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M21!");
                dollEmbed.setImage("https://i.imgur.com/JxTY3qf.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 19){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled SV-98!");
                    dollEmbed.setImage("https://i.imgur.com/nJSYgw1.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled SV-98 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/PnHlNDf.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 20){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 56!");
                dollEmbed.setImage("https://i.imgur.com/ko02p7h.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 21){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AK-47!");
                dollEmbed.setImage("https://i.imgur.com/VdZlhRl.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 22){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled StG44!");
                    dollEmbed.setImage("https://i.imgur.com/1HcDGz8.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Stg44 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/SF5PdJp.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 23){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled FNC!");
                dollEmbed.setImage("https://i.imgur.com/hIKDgQR.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 24){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M2HB!");
                dollEmbed.setImage("https://i.imgur.com/PzX80hY.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 25){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M249 SAW!");
                dollEmbed.setImage("https://i.imgur.com/gNEiOmD.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 26){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M1919A4!");
                dollEmbed.setImage("https://i.imgur.com/zlBKp7A.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 27){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled RPD!");
                dollEmbed.setImage("https://i.imgur.com/sJqAX5a.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 28){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MG42!");
                dollEmbed.setImage("https://i.imgur.com/cuSWQ24.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 29){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Bren!");
                    dollEmbed.setImage("https://i.imgur.com/deyHcgZ.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Bren MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/iRqRWot.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 30){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Hanyang Type 88!");
                    dollEmbed.setImage("https://i.imgur.com/wTJSA1I.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Hanyang Type 88 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/Js6IwbE.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 31){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled OTs-12!");
                dollEmbed.setImage("https://i.imgur.com/x9H7aIw.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 32){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled CZ-805!");
                dollEmbed.setImage("https://i.imgur.com/gpHllOF.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 33){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Serdyukov!");
                dollEmbed.setImage("https://i.imgur.com/HXtzCYc.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 34){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Z-62!");
                dollEmbed.setImage("https://i.imgur.com/zWv3x9M.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 35){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled ARX-160!");
                dollEmbed.setImage("https://i.imgur.com/Q5P4VcV.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 36){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled P99!");
                dollEmbed.setImage("https://i.imgur.com/Yoh7Lxj.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 37){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Super SASS!");
                    dollEmbed.setImage("https://i.imgur.com/f6YOPE8.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Super SASS MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/nuTwhG2.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 38){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled EVO 3!");
                dollEmbed.setImage("https://i.imgur.com/ecteuvR.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 39){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 59!");
                dollEmbed.setImage("https://i.imgur.com/Ohkt8Ri.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 40){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AR70!");
                dollEmbed.setImage("https://i.imgur.com/xxCDGdV.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 41){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled 6P62!");
                dollEmbed.setImage("https://i.imgur.com/zv4gWz0.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 42){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PSM!");
                dollEmbed.setImage("https://i.imgur.com/bKi9gBv.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 43){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MT-9!");
                dollEmbed.setImage("https://i.imgur.com/aWIhQrJ.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 44){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled OTs-44!");
                dollEmbed.setImage("https://i.imgur.com/7nWTxg0.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 45){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SSG 69!");
                dollEmbed.setImage("https://i.imgur.com/5iu6eVo.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 46){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M1897!");
                    dollEmbed.setImage("https://i.imgur.com/QxtCFtc.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M1897 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/yMoZDqf.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 47){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M500!");
                    dollEmbed.setImage("https://i.imgur.com/qQ4GTl5.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M500 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/9tAOiua.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 48){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled KS-23!");
                dollEmbed.setImage("https://i.imgur.com/09Sth3C.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 49){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled RMB-93!");
                    dollEmbed.setImage("https://i.imgur.com/oHDJ0fb.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled RMB-93 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/1pT8ad7.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 50){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled HK45!");
                dollEmbed.setImage("https://i.imgur.com/3X9Ax24.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 51){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SCW!");
                dollEmbed.setImage("https://i.imgur.com/KvZCUpE.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 52){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled ASh-12.7!");
                dollEmbed.setImage("https://i.imgur.com/QsKOPOa.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 53){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 81 Carbine!");
                dollEmbed.setImage("https://i.imgur.com/w55WDnx.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 54){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled TMP!");
                dollEmbed.setImage("https://i.imgur.com/A83DfEk.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 55){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled F1!");
                dollEmbed.setImage("https://i.imgur.com/NDqeeLm.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 56){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled wz.29!");
                dollEmbed.setImage("https://i.imgur.com/FOYR37h.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 57){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled P226!");
                dollEmbed.setImage("https://i.imgur.com/QP8O1ZM.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 58){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled NS2000!");
                dollEmbed.setImage("https://i.imgur.com/tNADyR7.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 59){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M12!");
                dollEmbed.setImage("https://i.imgur.com/BCVbd9o.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 60){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled T65!");
                dollEmbed.setImage("https://i.imgur.com/pR34YdX.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 61){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled HK23!");
                dollEmbed.setImage("https://i.imgur.com/hFQN2a6.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 62){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Gepard M1!");
                dollEmbed.setImage("https://i.imgur.com/ZWShl1r.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 63){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled OTs-39!");
                dollEmbed.setImage("https://i.imgur.com/u1HIhp2.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 64){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled CZ52!");
                dollEmbed.setImage("https://i.imgur.com/gfgPTBm.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 65){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SM-1!");
                dollEmbed.setImage("https://i.imgur.com/WJsv4kL.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 66){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled T77!");
                dollEmbed.setImage("https://i.imgur.com/mUenFKu.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 67){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MP-443!");
                dollEmbed.setImage("https://i.imgur.com/WyuE9vp.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 68){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#6bdfce");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled GSh-18!");
                    dollEmbed.setImage("https://i.imgur.com/SlyyUji.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e359");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Gsh-18 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/jkv7mk9.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(threestar === 69){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Model L!");
                dollEmbed.setImage("https://i.imgur.com/44lAQoC.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 70){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled OBR!");
                dollEmbed.setImage("https://i.imgur.com/TgokXw1.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 71){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MP-448!");
                dollEmbed.setImage("https://i.imgur.com/HkJEK5Y.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 72){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 03!");
                dollEmbed.setImage("https://i.imgur.com/9kbbLZO.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 73){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled RT-20!");
                dollEmbed.setImage("https://i.imgur.com/CIwEjLj.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 74){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled TEC-9!");
                dollEmbed.setImage("https://i.imgur.com/MOkMQ14.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 75){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 62!");
                dollEmbed.setImage("https://i.imgur.com/a6JxcMS.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 76){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Steyr Scout!");
                dollEmbed.setImage("https://i.imgur.com/RoNVknB.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 77){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Falcon!");
                dollEmbed.setImage("https://i.imgur.com/DHridAk.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 78){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Magal!");
                dollEmbed.setImage("https://i.imgur.com/YPIvb9J.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 79){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled HK33!");
                dollEmbed.setImage("https://i.imgur.com/ZEMVjBy.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 80){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MP41!");
                dollEmbed.setImage("https://i.imgur.com/QCtFb55.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 81){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled T-CMS!");
                dollEmbed.setImage("https://i.imgur.com/QcoRE7Z.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 82){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled K3!");
                dollEmbed.setImage("https://i.imgur.com/nR6jBXs.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 83){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled VP70!");
                dollEmbed.setImage("https://i.imgur.com/M81zb67.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 84){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Six12!");
                dollEmbed.setImage("https://i.imgur.com/akJzQQY.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 85){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled INSAS!");
                dollEmbed.setImage("https://i.imgur.com/UAGtj5m.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 86){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled ZAS M76!");
                dollEmbed.setImage("https://i.imgur.com/A8cG6VV.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 87){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled 43M!");
                dollEmbed.setImage("https://i.imgur.com/06f0xJD.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 88){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Vepr!");
                dollEmbed.setImage("https://i.imgur.com/itrkueT.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 89){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled HSM10!");
                dollEmbed.setImage("https://i.imgur.com/I9VH6az.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 90){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled CAR!");
                dollEmbed.setImage("https://i.imgur.com/LEXDAnr.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 91){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MAS-38!");
                dollEmbed.setImage("https://i.imgur.com/LNah8ay.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 92){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled C14!");
                dollEmbed.setImage("https://i.imgur.com/FvwMqrJ.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 93){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled WKp!");
                dollEmbed.setImage("https://i.imgur.com/mc1B7WI.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 94){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled StG-940!");
                dollEmbed.setImage("https://i.imgur.com/xWynH4T.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 95){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled GM6 Lynx!");
                dollEmbed.setImage("https://i.imgur.com/wbZn9Wg.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 96){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled TS12!");
                dollEmbed.setImage("https://i.imgur.com/P5FIPqd.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 97){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled QSB-91!");
                dollEmbed.setImage("https://i.imgur.com/CqUqeK7.png");
                message1.channel.send(dollEmbed);
            }

            else if(threestar === 98){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#6bdfce");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SUB-2000!");
                dollEmbed.setImage("https://i.imgur.com/FDGGkcv.png");
                message1.channel.send(dollEmbed);
            }
            
        }

        else if(num1 > 80 && num1 <= 94){
            fourstar = Math.floor(Math.random() * (88 - 1) + 1);

            if(fourstar === 1){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Colt Revolver!");
                    dollEmbed.setImage("https://i.imgur.com/ZIYFcG5.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Colt Revolver MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/6SAffAa.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 2){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Stechkin!");
                    dollEmbed.setImage("https://i.imgur.com/kUX8U5T.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Stechkin MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/HOyYzbN.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 3){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PP-90!");
                dollEmbed.setImage("https://i.imgur.com/fCMwLrB.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 4){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled MP5!");
                    dollEmbed.setImage("https://i.imgur.com/bnN8IYw.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled MP5 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/Nw4eyw7.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 5){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Springfield!");
                dollEmbed.setImage("https://i.imgur.com/1GhErHe.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 6){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Mosin-Nagant!");
                    dollEmbed.setImage("https://i.imgur.com/nviQzQ4.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Mosin-Nagant MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/jhSTx70.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 7){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PTRD!");
                dollEmbed.setImage("https://i.imgur.com/0qTcq02.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 8){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SVD!");
                dollEmbed.setImage("https://i.imgur.com/UPmfLXb.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 9){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M16A1!");
                dollEmbed.setImage("https://i.imgur.com/QoZb4rU.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 10){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M4A1!");
                    dollEmbed.setImage("https://i.imgur.com/ldDt8v9.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M4A1 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/LtlWOpr.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 11){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M4 SOPMOD II!");
                    dollEmbed.setImage("https://i.imgur.com/UNaV986.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M4 SOPMOD II MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/eum65bk.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 12){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled ST AR-15!");
                    dollEmbed.setImage("https://i.imgur.com/wvNzzDQ.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled ST AR-15 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/815Vfnp.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 13){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled AS Val!");
                    dollEmbed.setImage("https://i.imgur.com/y1cKcRO.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled AS VAL MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/wWz5K2g.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 14){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled G36!");
                    dollEmbed.setImage("https://i.imgur.com/wCVFKUX.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled G36 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/PpmocLl.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 15){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 56-1!");
                dollEmbed.setImage("https://i.imgur.com/GZ0oB88.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 16){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled FAMAS!");
                dollEmbed.setImage("https://i.imgur.com/1Uhszjw.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 17){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled TAR-21!");
                dollEmbed.setImage("https://i.imgur.com/uWoyc2L.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 18){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M1918!");
                    dollEmbed.setImage("https://i.imgur.com/KKVLEvs.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M1918 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/eqwDXLw.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 19){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M60!");
                dollEmbed.setImage("https://i.imgur.com/gHcUtkD.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 20){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PK!");
                dollEmbed.setImage("https://i.imgur.com/IrEroWK.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 21){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MG3!");
                dollEmbed.setImage("https://i.imgur.com/8Wz92iK.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 22){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SPP-1!");
                dollEmbed.setImage("https://i.imgur.com/dbOIAuL.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 23){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Mk23!");
                dollEmbed.setImage("https://i.imgur.com/iBbREH4.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 24){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled P7!");
                dollEmbed.setImage("https://i.imgur.com/RYR9vuT.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 25){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled UMP9!");
                    dollEmbed.setImage("https://i.imgur.com/tOcNMa1.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled UMP9 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/PXsTcAh.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 26){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled UMP40!");
                dollEmbed.setImage("https://i.imgur.com/CdH4Djv.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 27){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled UMP45!");
                    dollEmbed.setImage("https://i.imgur.com/5tEZfDS.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled UMP45 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/faU6eiW.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 28){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PSG-1!");
                dollEmbed.setImage("https://i.imgur.com/OjtwTqf.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 29){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled 9A-91!");
                dollEmbed.setImage("https://i.imgur.com/g8ARnW7.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 30){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Mk48!");
                dollEmbed.setImage("https://i.imgur.com/GAzq0Z6.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 31){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled PP-19!");
                    dollEmbed.setImage("https://i.imgur.com/h54KZvD.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled PP-19 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/iTI7aQu.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 32){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PP-19-01!");
                dollEmbed.setImage("https://i.imgur.com/E4kINtN.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 33){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled G28!");
                dollEmbed.setImage("https://i.imgur.com/7lXNRAo.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 34){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AEK-999!");
                dollEmbed.setImage("https://i.imgur.com/ggUV6Rv.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 35){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Shipka!");
                dollEmbed.setImage("https://i.imgur.com/6OpbN0O.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 36){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M37!");
                dollEmbed.setImage("https://i.imgur.com/9qJWZJX.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 37){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M590!");
                dollEmbed.setImage("https://i.imgur.com/zpTVM8D.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 38){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Super-Shorty!");
                dollEmbed.setImage("https://i.imgur.com/aJBbCAB.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 39){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Type 97 Shotgun!");
                    dollEmbed.setImage("https://i.imgur.com/QjckSvb.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled Type 97 Shotgun MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/K5b3vpw.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 40){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SPAS-12!");
                dollEmbed.setImage("https://i.imgur.com/ankZg4z.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 41){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M1014!");
                dollEmbed.setImage("https://i.imgur.com/RsRtxSU.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 42){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Spitfire!");
                dollEmbed.setImage("https://i.imgur.com/P1QTOwo.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 43){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Ribeyrolles!");
                dollEmbed.setImage("https://i.imgur.com/gri7d4x.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 44){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled KLIN!");
                dollEmbed.setImage("https://i.imgur.com/BpY79mE.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 45){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PzB 39!");
                dollEmbed.setImage("https://i.imgur.com/qqgKprR.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 46){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled T-5000!");
                dollEmbed.setImage("https://i.imgur.com/dVCicaH.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 47){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Ameli!");
                dollEmbed.setImage("https://i.imgur.com/wiFXMXi.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 48){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Ak 5!");
                dollEmbed.setImage("https://i.imgur.com/DpoaPdj.png");
                message1.channel.send(dollEmbed);
            }
            
            else if(fourstar === 49){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled USAS-12!");
                dollEmbed.setImage("https://i.imgur.com/UATQzxj.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 50){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 80!");
                dollEmbed.setImage("https://i.imgur.com/3np2vWg.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 51){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled XM3!");
                    dollEmbed.setImage("https://i.imgur.com/QYPn4Za.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled XM3 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/KbbGoR5.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 52){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Thunder!");
                dollEmbed.setImage("https://i.imgur.com/zDsG50I.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 53){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Honey Badger!");
                dollEmbed.setImage("https://i.imgur.com/23dlboy.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 54){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled CZ2000!");
                dollEmbed.setImage("https://i.imgur.com/fTlus7D.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 55){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled K5!");
                dollEmbed.setImage("https://i.imgur.com/LLVSOYI.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 56){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled XM8!");
                dollEmbed.setImage("https://i.imgur.com/SLAADvX.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 57){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Cx4 Storm!");
                dollEmbed.setImage("https://i.imgur.com/uDzxKQJ.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 58){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Mk 12!");
                dollEmbed.setImage("https://i.imgur.com/DDwAZaH.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 59){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled A-91!");
                dollEmbed.setImage("https://i.imgur.com/WYSffQq.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 60){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SPR A3G!");
                dollEmbed.setImage("https://i.imgur.com/3SGgiBB.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 61){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SAR-21!");
                dollEmbed.setImage("https://i.imgur.com/eVHbUJC.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 62){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Mk46!");
                dollEmbed.setImage("https://i.imgur.com/gtA4QxI.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 63){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled K31!");
                dollEmbed.setImage("https://i.imgur.com/Y6Vrid2.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 64){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Jericho!");
                dollEmbed.setImage("https://i.imgur.com/dZWAXL2.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 65){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#d6e35a");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled KSVK!");
                    dollEmbed.setImage("https://i.imgur.com/UZ3SzNo.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled KVSK MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/NVVM3oL.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fourstar === 66){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled UKM-2000!");
                dollEmbed.setImage("https://i.imgur.com/pKaHy1L.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 67){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled EM-2!");
                dollEmbed.setImage("https://i.imgur.com/u0f0Y1i.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 68){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Chauchat!");
                dollEmbed.setImage("https://i.imgur.com/lliPhnD.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 69){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled P30!");
                dollEmbed.setImage("https://i.imgur.com/dW6jv2K.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 70){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 4!");
                dollEmbed.setImage("https://i.imgur.com/c8L6UKG.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 71){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SSG 3000!");
                dollEmbed.setImage("https://i.imgur.com/dkjib4K.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 72){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M1895 CB!");
                dollEmbed.setImage("https://i.imgur.com/mubvQNB.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 73){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MAT-49!");
                dollEmbed.setImage("https://i.imgur.com/9dVWj59.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 74){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Liberator!");
                dollEmbed.setImage("https://i.imgur.com/pCFYI8q.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 75){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled KAC-PDW!");
                dollEmbed.setImage("https://i.imgur.com/4S02Vbb.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 76){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled CR-21!");
                dollEmbed.setImage("https://i.imgur.com/3QFob5E.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 77){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled CF05!");
                dollEmbed.setImage("https://i.imgur.com/RLC2myv.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 78){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M82!");
                dollEmbed.setImage("https://i.imgur.com/kO6tEbL.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 79){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Defender!");
                dollEmbed.setImage("https://i.imgur.com/LBwYy0G.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 80){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SAF!");
                dollEmbed.setImage("https://i.imgur.com/0TpYvHK.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 81){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Tabuk!");
                dollEmbed.setImage("https://i.imgur.com/9m3W4Ln.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 82){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Rex Zero 1!");
                dollEmbed.setImage("https://i.imgur.com/uw3hvFK.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 83){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Mondragon!");
                dollEmbed.setImage("https://i.imgur.com/PjvwXKr.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 84){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PM1910!");
                dollEmbed.setImage("https://i.imgur.com/cDRhGgK.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 85){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled V-PM5!");
                dollEmbed.setImage("https://i.imgur.com/cDRhGgK.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 86){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled HK512!");
                dollEmbed.setImage("https://i.imgur.com/JVmhbzW.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 87){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AR-57!");
                dollEmbed.setImage("https://i.imgur.com/9MWoY63.png");
                message1.channel.send(dollEmbed);
            }

            else if(fourstar === 88){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#d6e35a");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled FX-05!");
                dollEmbed.setImage("https://i.imgur.com/dP72J2O.png");
                message1.channel.send(dollEmbed);
            }

        }

        else if(num1 > 94 && num1 <= 99){
            fivestar = Math.floor(Math.random() * (103 - 1) + 1);

            if(fivestar === 1){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Python!");
                dollEmbed.setImage("https://i.imgur.com/y8BNWkg.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 2){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Thompson!");
                dollEmbed.setImage("https://i.imgur.com/Temn99X.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 3){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Vector!");
                dollEmbed.setImage("https://i.imgur.com/ULfun3d.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 4){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MP7!");
                dollEmbed.setImage("https://i.imgur.com/2r0tIt2.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 5){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Kar98k!");
                dollEmbed.setImage("https://i.imgur.com/Ium7Q9L.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 6){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled WA2000!");
                dollEmbed.setImage("https://i.imgur.com/G9WMcdD.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 7){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Lee-Enfield!");
                dollEmbed.setImage("https://i.imgur.com/OQMmthJ.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 8){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled NTW-20!");
                    dollEmbed.setImage("https://i.imgur.com/XqC1fun.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ad4129");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled NTW-20 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/BG6ASfR.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fivestar === 9){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AK-74U!");
                dollEmbed.setImage("https://i.imgur.com/5ef9lmy.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 10){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled G41!");
                dollEmbed.setImage("https://i.imgur.com/xGPy0Be.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 11){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled HK416!");
                    dollEmbed.setImage("https://i.imgur.com/umNI9Sl.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ad4129");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled HK416 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/Wnq4WDs.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fivestar === 12){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AUG!");
                dollEmbed.setImage("https://i.imgur.com/yS2x1A4.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 13){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Grizzly MkV!");
                dollEmbed.setImage("https://i.imgur.com/qLMPc46.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 14){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M950A!");
                    dollEmbed.setImage("https://i.imgur.com/nCPkTlj.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ad4129");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled M950A MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/XMdZjrf.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fivestar === 15){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled G36C!");
                dollEmbed.setImage("https://i.imgur.com/VdXxuN5.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 16){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled FAL!");
                dollEmbed.setImage("https://i.imgur.com/VzDKguQ.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 17){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MG5!");
                dollEmbed.setImage("https://i.imgur.com/GfIOhbN.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 18){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Negev!");
                dollEmbed.setImage("https://i.imgur.com/rDWWLQU.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 19){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Welrod MkII!");
                dollEmbed.setImage("https://i.imgur.com/TRFoOns.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 20){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Suomi KP/-31!");
                dollEmbed.setImage("https://i.imgur.com/8DeYvyu.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 21){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled OTs-14!");
                dollEmbed.setImage("https://i.imgur.com/KcBdDfT.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 22){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled G11!");
                    dollEmbed.setImage("https://i.imgur.com/dzZ1F1z.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ad4129");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled G11 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/y9OeQQX.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fivestar === 23){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled MG4!");
                    dollEmbed.setImage("https://i.imgur.com/KciVfjU.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ad4129");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled MG4 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/eEfq6w4.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fivestar === 24){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled NZ75!");
                dollEmbed.setImage("https://i.imgur.com/pLHqNkH.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 25){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 79!");
                dollEmbed.setImage("https://i.imgur.com/qPUzr3k.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 26){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M99!");
                dollEmbed.setImage("https://i.imgur.com/2c8EICG.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 27){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 95!");
                dollEmbed.setImage("https://i.imgur.com/JC3hmnN.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 28){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 97!");
                dollEmbed.setImage("https://i.imgur.com/THPmujy.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 29){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SR-3MP!");
                dollEmbed.setImage("https://i.imgur.com/axGowSg.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 30){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Five-seveN!");
                dollEmbed.setImage("https://i.imgur.com/WAG6F0s.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 31){
                mod = Math.floor(Math.random() * (10 - 1) + 1);

                if(mod <= 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ffb600");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled RO635!");
                    dollEmbed.setImage("https://i.imgur.com/rMQJfCI.png");
                    message1.channel.send(dollEmbed);
                }

                else if(mod > 6){
                    const dollEmbed = new Discord.MessageEmbed();
                    dollEmbed.setColor("#ad4129");
                    dollEmbed.setTitle(message1.member.user.tag);
                    dollEmbed.setDescription("You have rolled RO635 MOD III!");
                    dollEmbed.setImage("https://i.imgur.com/uFyAJ4y.png");
                    message1.channel.send(dollEmbed);
                }
            }

            else if(fivestar === 32){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled IWS 2000!");
                dollEmbed.setImage("https://i.imgur.com/2YCbtM0.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 32){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M1887!");
                dollEmbed.setImage("https://i.imgur.com/4FyYWhX.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 33){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled KSG!");
                dollEmbed.setImage("https://i.imgur.com/QWT1Lvg.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 34){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Saiga-12!");
                dollEmbed.setImage("https://i.imgur.com/ds9CbtU.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 35){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AA-12!");
                dollEmbed.setImage("https://i.imgur.com/ds9CbtU.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 36){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled FP-6!");
                dollEmbed.setImage("https://i.imgur.com/7QzPTaY.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 37){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled CZ75!");
                dollEmbed.setImage("https://i.imgur.com/Ib5E00l.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 38){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled RFB!");
                dollEmbed.setImage("https://i.imgur.com/NxbbYDe.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 39){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PKP!");
                dollEmbed.setImage("https://i.imgur.com/jtoGBag.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 40){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled ART556!");
                dollEmbed.setImage("https://i.imgur.com/XGDxf66.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 41){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled DSR-50!");
                dollEmbed.setImage("https://i.imgur.com/3HKGiwv.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 42){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled T91!");
                dollEmbed.setImage("https://i.imgur.com/n3IQKL1.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 43){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Contender!");
                dollEmbed.setImage("https://i.imgur.com/3wg0BQu.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 44){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled S.A.T.8!");
                dollEmbed.setImage("https://i.imgur.com/q12Ofnt.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 45){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled JS05!");
                dollEmbed.setImage("https://i.imgur.com/1eJXw9r.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 46){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled K2!");
                dollEmbed.setImage("https://i.imgur.com/Rxd6QA4.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 47){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Zas M21!");
                dollEmbed.setImage("https://i.imgur.com/cGXYxmz.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 48){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Carcano M1891!");
                dollEmbed.setImage("https://i.imgur.com/zNboCiW.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 49){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Carcano M91/38!");
                dollEmbed.setImage("https://i.imgur.com/sbCRIDy.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 50){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Ballista!");
                dollEmbed.setImage("https://i.imgur.com/ltl5VMJ.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 51){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AN-94!");
                dollEmbed.setImage("https://i.imgur.com/lkwl8A6.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 52){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AK-12!");
                dollEmbed.setImage("https://i.imgur.com/lzsOpGc.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 53){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled HK21!");
                dollEmbed.setImage("https://i.imgur.com/UaVq2FR.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 54){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SRS!");
                dollEmbed.setImage("https://i.imgur.com/HN4Uo5m.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 55){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled C-MS!");
                dollEmbed.setImage("https://i.imgur.com/mHUgmGC.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 56){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled ADS!");
                dollEmbed.setImage("https://i.imgur.com/UH8KHGL.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 57){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MDR!");
                dollEmbed.setImage("https://i.imgur.com/jKybwtm.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 58){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled TAC-50!");
                dollEmbed.setImage("https://i.imgur.com/Sor4azZ.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 59){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PM-06!");
                dollEmbed.setImage("https://i.imgur.com/HgAlx0r.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 60){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 100!");
                dollEmbed.setImage("https://i.imgur.com/vcUeQZN.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 61){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M870!");
                dollEmbed.setImage("https://i.imgur.com/6b8R6dL.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 62){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M82A1!");
                dollEmbed.setImage("https://i.imgur.com/V8SRw8w.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 63){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Px4 Storm!");
                dollEmbed.setImage("https://i.imgur.com/PQhD8Nq.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 64){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled JS 9!");
                dollEmbed.setImage("https://i.imgur.com/xXoV9re.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 65){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled K11!");
                dollEmbed.setImage("https://i.imgur.com/lUuErfu.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 66){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Type 88!");
                dollEmbed.setImage("https://i.imgur.com/nvo97PW.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 67){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled P22!");
                dollEmbed.setImage("https://i.imgur.com/NWIYMca.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 68){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Howa Type 64!");
                dollEmbed.setImage("https://i.imgur.com/RdSWMdS.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 69){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled P90!");
                dollEmbed.setImage("https://i.imgur.com/Cx9DK7T.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 70){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled HS2000!");
                dollEmbed.setImage("https://i.imgur.com/7PjQfZF.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 71){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled X95!");
                dollEmbed.setImage("https://i.imgur.com/TslM9OF.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 72){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Lewis Gun!");
                dollEmbed.setImage("https://i.imgur.com/1R6oAzC.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 73){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M200!");
                dollEmbed.setImage("https://i.imgur.com/S36YpBW.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 74){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PM-9!");
                dollEmbed.setImage("https://i.imgur.com/sTJK0kS.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 75){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled PA-15!");
                dollEmbed.setImage("https://i.imgur.com/QwtRx4R.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 76){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled QBU-88!");
                dollEmbed.setImage("https://i.imgur.com/8Mlbt0z.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 77){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled MG36!");
                dollEmbed.setImage("https://i.imgur.com/TQJdbde.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 78){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled R93!");
                dollEmbed.setImage("https://i.imgur.com/BjElda7.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 79){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Desert Eagle!");
                dollEmbed.setImage("https://i.imgur.com/cCfKGtj.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 80){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled ACR!");
                dollEmbed.setImage("https://i.imgur.com/MQ7w0qa.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 81){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Kord!");
                dollEmbed.setImage("https://i.imgur.com/qq3AU38.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 82){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled CAWS!");
                dollEmbed.setImage("https://i.imgur.com/SuT6i3w.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 83){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled DP-12!");
                dollEmbed.setImage("https://i.imgur.com/mqEsi8I.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 84){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled C-93!");
                dollEmbed.setImage("https://i.imgur.com/UfRl9XB.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 85){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SIG-556!");
                dollEmbed.setImage("https://i.imgur.com/JLfbfQZ.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 86){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled R5!");
                dollEmbed.setImage("https://i.imgur.com/tFkiYlD.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 87){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Howa Type 89!");
                dollEmbed.setImage("https://i.imgur.com/v730t2n.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 88){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled RPK-16!");
                dollEmbed.setImage("https://i.imgur.com/Bhg0p9s.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 89){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AK-15!");
                dollEmbed.setImage("https://i.imgur.com/sXFCCp2.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 90){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Webley!");
                dollEmbed.setImage("https://i.imgur.com/vf9geUH.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 91){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SL8!");
                dollEmbed.setImage("https://i.imgur.com/BlM0uR7.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 92){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled HP-35!");
                dollEmbed.setImage("https://i.imgur.com/To4QKXu.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 93){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AK-Alfa!");
                dollEmbed.setImage("https://i.imgur.com/QW9BgSL.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 94){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled ZB-26!");
                dollEmbed.setImage("https://i.imgur.com/9ItsVTD.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 95){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Lusa!");
                dollEmbed.setImage("https://i.imgur.com/OX8H75M.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 96){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled VSK-94!");
                dollEmbed.setImage("https://i.imgur.com/LKCpLc7.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 97){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Steyr ACR!");
                dollEmbed.setImage("https://i.imgur.com/gF2hIjN.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 98){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled AUG Para!");
                dollEmbed.setImage("https://i.imgur.com/YGnuyb7.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 99){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled General Liu!");
                dollEmbed.setImage("https://i.imgur.com/kEeWUPg.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 100){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled VHS!");
                dollEmbed.setImage("https://i.imgur.com/pdPvWNq.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 101){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled LTLX 7000!");
                dollEmbed.setImage("https://i.imgur.com/MbHbizr.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 102){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled M6 ASW!");
                dollEmbed.setImage("https://i.imgur.com/h8m3Mrr.png");
                message1.channel.send(dollEmbed);
            }

            else if(fivestar === 103){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#ffb600");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled SVCh!");
                dollEmbed.setImage("https://i.imgur.com/A23sV7f.png");
                message1.channel.send(dollEmbed);
            }

        }

        else if(num1 >99 && num1 <= 100){
            extra = Math.floor(Math.random() * (21 - 1) + 1);
            
            if(extra === 1){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Noel!");
                dollEmbed.setImage("https://i.imgur.com/QB9dYYH.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 2){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Ephelt!");
                dollEmbed.setImage("https://i.imgur.com/U2zk94U.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 3){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Kiana!");
                dollEmbed.setImage("https://i.imgur.com/JmEzrad.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 4){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Raiden Mei!");
                dollEmbed.setImage("https://i.imgur.com/BIaSy27.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 5){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Bronya!");
                dollEmbed.setImage("https://i.imgur.com/fd4qvf5.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 6){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Theresa!");
                dollEmbed.setImage("https://i.imgur.com/wK0yuoi.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 7){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Murata Himeko!");
                dollEmbed.setImage("https://i.imgur.com/nSggKnx.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 8){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Seele!");
                dollEmbed.setImage("https://i.imgur.com/JEKgXP2.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 9){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Clear!");
                dollEmbed.setImage("https://i.imgur.com/WA29T1A.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 10){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Fail!");
                dollEmbed.setImage("https://i.imgur.com/mrKxapO.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 11){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Jill!");
                dollEmbed.setImage("https://i.imgur.com/2JlldUw.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 12){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Sei!");
                dollEmbed.setImage("https://i.imgur.com/a5x2wFH.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 13){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Dorothy!");
                dollEmbed.setImage("https://i.imgur.com/2vgqE8Q.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 14){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Stella!");
                dollEmbed.setImage("https://i.imgur.com/hMWsYuh.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 15){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Alma!");
                dollEmbed.setImage("https://i.imgur.com/G4WecYw.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 16){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Dana!");
                dollEmbed.setImage("https://i.imgur.com/ftxfxpO.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 17){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Henrietta!");
                dollEmbed.setImage("https://i.imgur.com/mztmw7F.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 18){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Rico!");
                dollEmbed.setImage("https://i.imgur.com/NuG3OjN.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 19){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Triela!");
                dollEmbed.setImage("https://i.imgur.com/R3Qe8jB.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 20){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Claes!");
                dollEmbed.setImage("https://i.imgur.com/G7uKlpD.png");
                message1.channel.send(dollEmbed);
            }

            else if(extra === 21){
                const dollEmbed = new Discord.MessageEmbed();
                dollEmbed.setColor("#dfb6ff");
                dollEmbed.setTitle(message1.member.user.tag);
                dollEmbed.setDescription("You have rolled Angelica!");
                dollEmbed.setImage("https://i.imgur.com/nBYs5cG.png");
                message1.channel.send(dollEmbed);
            }

        }
        
    }

}
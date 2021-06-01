module.exports = {
    name: "equip",
    description: "A command to roll an equipment.",
    
    execute(message3, args){
        const Discord = require("discord.js");
        num2 = Math.floor(Math.random() * (100 - 1) + 1);

        if(num2 > 0 && num2 <= 40){
            twoStar = Math.floor(Math.random() * (13 - 1) + 1);

            if(twoStar === 1){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled BM 3-12x40!");
                equipEmbed.setImage("https://i.imgur.com/rSbsirE.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 2){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled AC1 Suppressor!");
                equipEmbed.setImage("https://i.imgur.com/3DA6iLx.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 3){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled EOT 506!");
                equipEmbed.setImage("https://i.imgur.com/M25Mdod.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 4){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled PEQ-2!");
                equipEmbed.setImage("https://i.imgur.com/ZwrTofE.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 5){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled AMP COMPM2!");
                equipEmbed.setImage("https://i.imgur.com/pAh2xqL.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 6){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP X1 Exoskeleton!");
                equipEmbed.setImage("https://i.imgur.com/Ia0nisr.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 7){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP T1 Exoskeleton!");
                equipEmbed.setImage("https://i.imgur.com/MXMqWOj.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 8){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled ILM Hollow Point Ammo (2-star)!");
                equipEmbed.setImage("https://i.imgur.com/LJk3U9Y.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 9){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled BK Slug!");
                equipEmbed.setImage("https://i.imgur.com/ITq0t9W.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 10){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled #1 Buckshot!");
                equipEmbed.setImage("https://i.imgur.com/oeFuN8C.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 11){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled M61 Armor-Piercing Ammo!");
                equipEmbed.setImage("https://i.imgur.com/YRtC7Cq.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 12){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Ragged Cape!");
                equipEmbed.setImage("https://i.imgur.com/F1qXaA2.png");
                message3.channel.send(equipEmbed);
            }

            else if(twoStar === 13){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#fcfcfc");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled FMJ High-Velocity Ammo!");
                equipEmbed.setImage("https://i.imgur.com/p7JqSlX.png");
                message3.channel.send(equipEmbed);
            }

        }

        else if(num2 > 40 && num2 <= 70){
            threeStar = Math.floor(Math.random() * (14 - 1) + 1);

            if(threeStar === 1){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled LRA 2-12x50!");
                equipEmbed.setImage("https://i.imgur.com/kkHOzea.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 2){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled AC2 Suppressor!");
                equipEmbed.setImage("https://i.imgur.com/58StWdb.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 3){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled EOT 512!");
                equipEmbed.setImage("https://i.imgur.com/cnzkv9Y.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 4){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled PEQ-5!");
                equipEmbed.setImage("https://i.imgur.com/EzUQKXz.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 5){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled AMP COMPM4!");
                equipEmbed.setImage("https://i.imgur.com/3i5JKEl.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 6){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Type 1 Armor Plate!");
                equipEmbed.setImage("https://i.imgur.com/0GtxIn2.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 7){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP X2 Exoskeleton!");
                equipEmbed.setImage("https://i.imgur.com/3hzkHoU.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 8){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP T2 Exoskeleton!");
                equipEmbed.setImage("https://i.imgur.com/k8RmUkd.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 9){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled ILM Hollow Point Ammo (3-star)!");
                equipEmbed.setImage("https://i.imgur.com/6EfUBGw.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 10){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled FST Slug!");
                equipEmbed.setImage("https://i.imgur.com/3fTPdJu.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 11){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled #0 Buckshot!");
                equipEmbed.setImage("https://i.imgur.com/FrWuhOQ.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 12){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled M993 Armor-Piercing Ammo!");
                equipEmbed.setImage("https://i.imgur.com/yE45idk.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 13){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Camouflage Cape!");
                equipEmbed.setImage("https://i.imgur.com/7DbqD2y.png");
                message3.channel.send(equipEmbed);
            }

            else if(threeStar === 14){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#6bdfce");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled JSP High-Velocity Ammo!");
                equipEmbed.setImage("https://i.imgur.com/GpR749F.png");
                message3.channel.send(equipEmbed);
            }

        }

        else if(num2 > 70 && num2 <= 85){
            fourStar = Math.floor(Math.random() * (15 - 1) + 1);

            if(fourStar === 1){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled PSO-1!");
                equipEmbed.setImage("https://i.imgur.com/SHq4Ae4.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 2){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled AC3 Suppressor!");
                equipEmbed.setImage("https://i.imgur.com/az4ZuRx.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 3){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled EOT 516!");
                equipEmbed.setImage("https://i.imgur.com/PxOvUx1.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 4){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled PEQ-15!");
                equipEmbed.setImage("https://i.imgur.com/OsAws0r.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 5){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled COG M150!");
                equipEmbed.setImage("https://i.imgur.com/zNi4INN.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 6){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Type 2 Armor Plate!");
                equipEmbed.setImage("https://i.imgur.com/f0nIH56.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 7){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP X3 Exoskeleton!");
                equipEmbed.setImage("https://i.imgur.com/M2RBi2H.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 8){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP T3 Exoskeleton!");
                equipEmbed.setImage("https://i.imgur.com/ywSFQAa.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 9){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled ILM Hollow Point Ammo (4-star)!");
                equipEmbed.setImage("https://i.imgur.com/9Zrve9E.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 10){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled WAD Slug!");
                equipEmbed.setImage("https://i.imgur.com/eylMaOc.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 11){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled #00 Buckshot!");
                equipEmbed.setImage("https://i.imgur.com/i0Fw4BE.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 12){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Mk169 Armor-Piercing Ammo!");
                equipEmbed.setImage("https://i.imgur.com/cQeVN9U.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 13){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Urban Camouflage Cape!");
                equipEmbed.setImage("https://i.imgur.com/CHD5gJR.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 14){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP High-Capacity Ammo Box!");
                equipEmbed.setImage("https://i.imgur.com/S072wWl.png");
                message3.channel.send(equipEmbed);
            }

            else if(fourStar === 15){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dce35a");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled JHP High-Velocity Ammo!");
                equipEmbed.setImage("https://i.imgur.com/qIdCDzK.png");
                message3.channel.send(equipEmbed);
            }

        }

        else if(num2 > 85 && num2 <= 90){
            fiveStar = Math.floor(Math.random() * (15 - 1) + 1);

            if(fiveStar === 1){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled VFL 6-24x56!");
                equipEmbed.setImage("https://i.imgur.com/1xOPkUo.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 2){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled AC4 Suppressor!");
                equipEmbed.setImage("https://i.imgur.com/aieo4je.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 3){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled EOT 518!");
                equipEmbed.setImage("https://i.imgur.com/qIhIpb9.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 4){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled PEQ-16A!");
                equipEmbed.setImage("https://i.imgur.com/pcLVHgE.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 5){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled ITI Mars!");
                equipEmbed.setImage("https://i.imgur.com/DePmPAc.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 6){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Type 3 Armor Plate!");
                equipEmbed.setImage("https://i.imgur.com/kYZMJEn.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 7){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP X4 Exoskeleton!");
                equipEmbed.setImage("https://i.imgur.com/bD42NZT.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 8){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP T4 Exoskeleton!");
                equipEmbed.setImage("https://i.imgur.com/uTZ8XXQ.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 9){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled ILM Hollow Point Ammo!");
                equipEmbed.setImage("https://i.imgur.com/aGhUijZ.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 10){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled SABOT Slug!");
                equipEmbed.setImage("https://i.imgur.com/P9jMfK6.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 11){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled #000 Buckshot!");
                equipEmbed.setImage("https://i.imgur.com/n9Pt5pO.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 12){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Mk211 High-Explosive Armor-Piercing Ammo!");
                equipEmbed.setImage("https://i.imgur.com/1MJ4iGv.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 13){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Thermoptic Camouflage Cape!");
                equipEmbed.setImage("https://i.imgur.com/J5Hfp09.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 14){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled IOP Maximum Ammo Box!");
                equipEmbed.setImage("https://i.imgur.com/jxASkTy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fiveStar === 15){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled APCR High-Velocity Ammo!");
                equipEmbed.setImage("https://i.imgur.com/EP54iiJ.png");
                message3.channel.send(equipEmbed);
            }

        }

        else if(num2 > 90 && num2 <= 99){
            fairy = Math.floor(Math.random() * (27 - 1) + 1);

            if(fairy === 1){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Warrior Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/4/46/Warrior_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 2){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Fury Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/0/01/Fury_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 3){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Armor Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/5/55/Armor_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 4){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Shield Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/3/38/Shield_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 5){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Defense Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/9/9d/Defense_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 6){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Taunt Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/0/0b/Provocation_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 7){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Sniper Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/2/20/Sniper_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 8){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Artillery Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/1/1f/Bombardment_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 9){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Airstrike Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/4/41/Airstrike_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 10){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Reinforcement Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/9/96/Reinforcement_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 11){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Parachute Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/c/c6/Parachute_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 12){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Landmine Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/7/73/Landmine_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 13){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Rocket Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/c/cb/Rocket_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 14){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Construction Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/4/49/Construction_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 15){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Command Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/8/8e/Command_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 16){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Rescue Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/2/20/Rescue_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 17){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Illumination Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/c/c1/Illumination_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 18){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Golden Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/1/15/Golden_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 19){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Cooking Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/1/1d/Cooking_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 20){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Fireworks Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/f/f6/Firework_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 21){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Zodiac Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/0/0b/Nian_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 22){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Beach Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/b/b8/Beach_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 23){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Combo Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/7/7f/Combo_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 24){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Barrier Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/b/b1/Barrier_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 25){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Twin Fairies!");
                equipEmbed.setImage("https://iopwiki.com/images/1/15/Twin_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 26){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Origin Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/f/f6/Origin_Fairy.png");
                message3.channel.send(equipEmbed);
            }

            else if(fairy === 27){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#ffb600");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Auspicious Fairy!");
                equipEmbed.setImage("https://iopwiki.com/images/b/bc/Auspicious_Fairy.png");
                message3.channel.send(equipEmbed);
            }

        }

        else if(num2 > 99 && num2 <= 100){
            collabfairy = Math.floor(Math.random() * (7 - 1) + 1);

            if(collabfairy === 1){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dfb6ff");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Yae Sakura!");
                equipEmbed.setImage("https://iopwiki.com/images/e/e9/Yae_Sakura.png");
                message3.channel.send(equipEmbed);
            }

            else if(collabfairy === 2){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dfb6ff");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Kaguya Hime!");
                equipEmbed.setImage("https://iopwiki.com/images/e/e6/Kaguya_Hime.png");
                message3.channel.send(equipEmbed);
            }

            else if(collabfairy === 3){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dfb6ff");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Chloe!");
                equipEmbed.setImage("https://iopwiki.com/images/f/f2/Chloe.png");
                message3.channel.send(equipEmbed);
            }

            else if(collabfairy === 4){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dfb6ff");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Suee!");
                equipEmbed.setImage("https://iopwiki.com/images/4/46/Suee.png");
                message3.channel.send(equipEmbed);
            }

            else if(collabfairy === 5){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dfb6ff");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Sehra & Nina!");
                equipEmbed.setImage("https://iopwiki.com/images/2/2e/Sehra_%26_Nina.png");
                message3.channel.send(equipEmbed);
            }

            else if(collabfairy === 6){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dfb6ff");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Preiya & Camilla!");
                equipEmbed.setImage("https://iopwiki.com/images/2/24/Preiya_%26_Camilla.png");
                message3.channel.send(equipEmbed);
            }

            else if(collabfairy === 7){
                const equipEmbed = new Discord.MessageEmbed();
                equipEmbed.setColor("#dfb6ff");
                equipEmbed.setTitle(message3.member.user.tag);
                equipEmbed.setDescription("You have rolled Anna Graem!");
                equipEmbed.setImage("https://iopwiki.com/images/c/c0/Anna_Graem.png");
                message3.channel.send(equipEmbed);
            }

        }

    }

}
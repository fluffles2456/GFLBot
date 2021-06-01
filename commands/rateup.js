module.exports = {
    name: "rateup",
    description: "Lies.",

    execute(message5, args){
        const Discord = require("discord.js");

        const rateupEmbed = new Discord.MessageEmbed;
        rateupEmbed.setColor("#2f3136");
        rateupEmbed.setImage("https://i.imgur.com/WzCfPuI.jpg");
        message5.channel.send(rateupEmbed);

    }

}
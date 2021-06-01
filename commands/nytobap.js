module.exports = {
    name : "nytobap",
    description: "To bap nyto.",

    execute(nytobapMessage, args){
        const Discord = require("discord.js");

        const nytobapEmbed = new Discord.MessageEmbed();        //create embeds
        nytobapEmbed.setColor("#2f3136");
        nytobapEmbed.setTitle(nytobapMessage.member.user.tag);
        nytobapEmbed.setImage("https://media.discordapp.net/attachments/502651633843306498/691780322068529162/1584977080598.gif");
        nytobapMessage.channel.send(nytobapEmbed);              //send embeds
    }
}
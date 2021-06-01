module.exports = {
    name: "help",
    description: "A list of commands.",
    
    execute(message, args){
        const Discord = require("discord.js");

        const helpEmbed = new Discord.MessageEmbed;
        helpEmbed.setColor("#2f3136");
        helpEmbed.setTitle("List of Commands:");
        helpEmbed.setDescription("Prefix\t: =");
        helpEmbed.addField("doll", "To roll a doll.");
        helpEmbed.addField("equip", "To roll an equipment.");
        helpEmbed.addField("sf", "To roll an SF unit.");
        helpEmbed.addField("kcco", "To roll a KCCO unit.");
        helpEmbed.addField("paradeus", "To roll a Paradeus unit.");
        helpEmbed.addField("rate", "To see all drop rates.");
        helpEmbed.addField("rateup", "To increase the drop rates.");
        helpEmbed.addField("junya", "For all your Junya needs.");
        helpEmbed.addField("nytobap", "For all your Nyto bapping needs.")

        message.channel.send(helpEmbed);
    }
}
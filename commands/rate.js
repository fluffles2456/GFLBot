module.exports = {
    name: "rate",
    description: "To check all drop rates",

    execute(rateMessage, args){
        const Discord = require("discord.js");
        const Pagination = require("discord.js-pagination");

        const dollPage = new Discord.MessageEmbed;
        dollPage.setColor("#ff6d00");
        dollPage.setTitle("Drop Rate of Dolls:");
        dollPage.addField("2* Dolls\t:", "45%");
        dollPage.addField("3* Dolls\t:", "35%");
        dollPage.addField("4* Dolls\t:", "14%");
        dollPage.addField("5* Dolls\t:", "5%");
        dollPage.addField("Collab Dolls\t:", "1%");
        dollPage.addField("Note\t:", 
        "When rolling a doll with Mod III variant, there is a 40% chance of rolling the Mod III variant.");

        const equipPage = new Discord.MessageEmbed;
        equipPage.setColor("#3275bf");
        equipPage.setTitle("Drop Rate of Equipment/Fairies:");
        equipPage.addField("2* Equipment\t:", "40%");
        equipPage.addField("3* Equipment\t:", "30%");
        equipPage.addField("4* Equipment\t:", "15%");
        equipPage.addField("5* Equipment\t:", "5%");
        equipPage.addField("Non-Collab Fairies\t:", "9%");
        equipPage.addField("Collab Fairies\t:", "1%");

        const sfPage = new Discord.MessageEmbed;
        sfPage.setColor("#ff5599");
        sfPage.setTitle("Drop Rate of SF units:");
        sfPage.addField("Normal Units\t:", "50%");
        sfPage.addField("SWAP/Armoured Units\t:", "40%");
        sfPage.addField("Ringleaders\t:", "10%");
        sfPage.addField("Note\t:", 
        "When rolling a ringleader, there is a 40% chance of rolling EX version of her (if she has any)." + 
        "\nWhen rolling Destroyer, there is 40% chance of rolling normal form, 30% to roll Gaia/Garm form.");

        const kccoPage = new Discord.MessageEmbed;
        kccoPage.setColor("#4a9745");
        kccoPage.setTitle("Drop Rate of KCCO units:");
        kccoPage.addField("Non-Boss Units\t:", "75%");
        kccoPage.addField("Boss Units\t:", "20%");
        kccoPage.addField("General Carter\t:", "2.5%");
        kccoPage.addField("Yegor\t:", "2.5%");

        const paradeusPage = new Discord.MessageEmbed;
        paradeusPage.setColor("#fafafa");
        paradeusPage.setTitle("Drop Rate of Paradeus units:");
        paradeusPage.addField("Common Non-Boss Paradeus Units\t:", "50%");
        paradeusPage.addField("Rare Non-Boss Units\t:", "30%");
        paradeusPage.addField("Gebbenu/Isomer Bosses\t:", "10%");
        paradeusPage.addField("Unnamed Nyto Bosses\t:", "6%");
        paradeusPage.addField("Named Nyto Bosses\t:", "4%");

        const pages = [dollPage, equipPage, sfPage, kccoPage, paradeusPage];

        const arrows = ["⬅️", "➡️"];

        const timer = "20000";

        Pagination(rateMessage, pages, arrows, timer);
    }
}
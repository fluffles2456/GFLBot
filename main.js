const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "=";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log("Bot is online!");
})

client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command)            //switch statement for different commands
    {
        case "help":            //displays command list
            client.commands.get("help").execute(message, args);
            break;

        case "doll":            //rolls a doll
            client.commands.get("doll").execute(message, args);
            break;

        case "equip":           //rolls an equipment
            client.commands.get("equip").execute(message, args);
            break;

        case "sf":              //rolls an SF unit
            client.commands.get("sf").execute(message, args);
            break;

        case "kcco":            //rolls a KCCO unit
            client.commands.get("kcco").execute(message, args);
            break;

        case "paradeus":        //rolls a Paradeus unit
            client.commands.get("paradeus").execute(message, args);
            break;

        case "rate":            //displays all drop rate
            client.commands.get("rate").execute(message, args);
            break;

        case "rateup":          //rateup meme
            client.commands.get("rateup").execute(message, args);
            break;

        case "junya":           //rolls a picture of junya
            client.commands.get("junya").execute(message, args);
            break;

        case "nytobap":         //send a nytobap gif
            client.commands.get("nytobap").execute(message, args);
            break;
    }

})

client.login(process.env.token);
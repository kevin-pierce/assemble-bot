const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { readdirSync } = require("fs");

client.commands = new Discord.Collection();

const commandFiles = readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

let voiceChannel;

client.on("ready", () => {
    voiceChannel = client.channels.fetch("325445196856688650");
    console.log(voiceChannel);
    console.log("Connected as " + client.user.tag);
});

// Handling for commands
client.on("message", async message => {

    // Initialize an empty message
    let botMsg = "";

    // Do nothing if the message does not start with the command prefix, or the bot is sending the message
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    // Isolate the arguments that occur after the command prefix
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // The parent command
    if (command === "assemble") {
        client.commands.get("assemble").execute(message, args);
    }
})

// Login to the 
client.login(config.token)
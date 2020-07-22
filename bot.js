// This line must be first to read environment variables (The Token)
require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { readdirSync } = require("fs");

client.commands = new Discord.Collection(); // Create a new Collection consisting of all our Discord bot commands

// Place all command files into our Collection
const commandFiles = readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
    voiceChannel = client.channels.fetch("325445196856688650");
    console.log("Connected as " + client.user.tag);
});

// Handling for commands
client.on("message", async message => {
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

// Login to the client
client.login();
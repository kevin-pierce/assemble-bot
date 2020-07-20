const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("Connected as " + client.user.tag);
});

// Set the global variable for the Bot's command prefix
const PREFIX = "!";

// Handling for commands
client.on("message", async message => {

    // Do nothing if the message does not start with the command prefix, or the bot is sending the message
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    // Isolate the arguments that occur after the command prefix
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "assemble") {

        // If the user does not specify the game to play
        if (!args.length) {
            return message.channel.send("Hey <@" + message.author.id + ">, you must specify a game!");
        }

        else if (args[0] === "league" || args[0] === "lol"){
            return message.channel.send("this worked");
        }
    }

})



// Login to the 
client.login(config.token)
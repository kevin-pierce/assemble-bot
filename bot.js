const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.commands = new Discord.Collection(); // Refactor command location to cleanup the single JS file
client.aliases = new Discord.Collection();

const modules = ["play"]; // A list of all folders within the Commands folder

modules.forEach(c => {
    fs.readdir(`./commands/${c}/`, (err, files) => { // Iterate through each folder
        if (err){ 
            throw err; // If the bot doesn't find a module
        }
        console.log(`[Commandlogs] Loaded ${files.length} commands of module ${c}`); // Console output when the bot successfully loads a module

        files.forEach(f => {
            const props = require(`./commands${c}/${f}`); // Iterate through each command file itself
            client.commands.set(props.help.name, props);

            props.conf.aliases.forEach(alias => { // Iterate through alias for each command (the alternative names)
                client.aliases.set(alias, props.name); // Add aliases to the collection
            });
        });
    });
});

let voiceChannel;

client.on("ready", () => {
    voiceChannel = client.channels.fetch("325445196856688650");
    console.log(voiceChannel);
    console.log("Connected as " + client.user.tag);
});

// Set the global variable for the Bot's command prefix
const PREFIX = "!";
const bmMsgArr = ["Isaiah goes 0/10 Bard support in ranked again",
                  "Flips decides to work on Foodprint for the 9th hour today",
                  "Kevin has to play Minecraft with his sister",
                  "Eric goes back to watching math lectures",
                  "Steven decides to play Sett jungle again"]

// Handling for commands
client.on("message", async message => {

    // Initialize an empty message
    let botMsg = "";

    // Do nothing if the message does not start with the command prefix, or the bot is sending the message
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    // Isolate the arguments that occur after the command prefix
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // The parent command
    if (command === "assemble") {

        // If the user does not specify the game to play
        if (!args.length) {
            botMsg = "Hey <@" + message.author.id + ">, you must specify a game!";
            return message.channel.send(botMsg);
        }

        // User specifies League
        else if (args[0] === "league" || args[0] === "lol"){

            if (message.member.voice.channel) {

                botMsg = "<@!308071233990164480>, <@!91498883980480512>, <@604828203722473502>, <@109750986783924224>, <@!323946802598510593>, \nget on quick before " + getBMMessage();
                message.channel.send(botMsg);

                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play("./avengers.mp3");

                dispatcher.on("start", () => {
                    console.log("audio playing");
                })

                dispatcher.on("finish", () => {
                    console.log("finished playing");
                    message.member.voice.channel.leave();
                    dispatcher.destroy();
                })
            }
        }
        else if (args[0] === "valorant" || args[0] === "val"){
            if (message.member.voice.channel) {

                botMsg = "<@!522555968211648525>, <@!308071233990164480>, <@712143411716554754>, <@693340705883684944>, <@!323946802598510593>, \nget on Valo-imagine playing this game still lmaooo";
                message.channel.send(botMsg);

                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play("./gio-theme.mp3");

                dispatcher.on("start", () => {
                    console.log("audio playing");
                })

                dispatcher.on("finish", () => {
                    console.log("finished playing");
                    message.member.voice.channel.leave();
                    dispatcher.destroy();
                })
            }
        }
    }
})

const getBMMessage = () => {
    let msg = "";
    return msg = bmMsgArr[Math.floor(Math.random() * 5)]
}

// Login to the 
client.login(config.token)
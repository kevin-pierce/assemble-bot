const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

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
                  "Eric neighbours yell at him to quiet down",
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
                const connection = await message.member.voice.channel.join();
            }
            // voiceChannel.join()
            //     .then(connection => console.log('Connected!'))
            //     .catch(console.error);

            // // See if the voice channel exists
            // if (!voiceChannel) {
            //     return console.error("The channel does not exist!");
            // }
            // else {
            //     voiceChannel.channel.join().then(connection => {
            //         console.log("Connected to ICS Study");
            //     }).catch (e => {
            //         console.error(e);
            //         })
            // }   

            // Formatted message for the bot to send into the chat - UNCOMMENT LATER
            //botMsg = "<@!308071233990164480>, <@!91498883980480512>, <@604828203722473502>, <@109750986783924224>, <@!323946802598510593>, \nget on quick before " + getBMMessage();
            return message.channel.send(botMsg);
        }
    }
})

const getBMMessage = () => {
    let msg = "";
    return msg = bmMsgArr[Math.floor(Math.random() * 5)]
}

// Login to the 
client.login(config.token)
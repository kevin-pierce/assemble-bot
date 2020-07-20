const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("Connected as " + client.user.tag);
});

// Login to the 
client.login(config.token)
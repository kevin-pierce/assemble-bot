const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "Provides information regarding command syntax",
    async execute(message) {
        let helpEmbed = new Discord.MessageEmbed()
            .setColor("#b38f5e")
            .setTitle("Assemble-Bot's Commands")
            .setDescription("\n")
            .addFields(
                {name: "!assemble", value: "Usage: !assemble [video game]"}
            );
        return message.channel.send(helpEmbed);
    }
}
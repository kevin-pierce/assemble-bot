module.exports = (client, message) => {
    if (message.author.bot){
        return;
    }
    // Ignore messages that do not start with the prefix in config.json
    if (message.content.indexOf(client.config.prefix) !== 0){
        return;
    }

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const commandData = client.commands.get(command);

    if (!commandData) return;

    commandData.run(client, message, args);
}

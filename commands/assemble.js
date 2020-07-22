module.exports = {
    name: "assemble",
    description: "Assemble everyone in the Discord!",
    async execute(message, args){
        let botMsg ="";

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
                const dispatcher = connection.play("./music/avengers.mp3", {volume: 0.5});
    
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
                botMsg = "<@!522555968211648525>, <@!308071233990164480>, <@181215730866323456>, <@193779352792596480>, <@!323946802598510593>, \nget on Valo-imagine playing this game still lmaooo";
                message.channel.send(botMsg);
    
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play("./music/gio-theme.mp3", {volume: 0.5});
    
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
}

const bmMsgArr = ["Isaiah goes 0/10 Bard support in ranked again",
                  "Flips decides to work on Foodprint for the 9th hour today",
                  "Kevin has to play Minecraft with his sister",
                  "Eric goes back to watching math lectures",
                  "Steven decides to play Sett jungle again"];

const getBMMessage = () => {
    let msg = "";
    return msg = bmMsgArr[Math.floor(Math.random() * 5)]
}
const Discord = require('discord.js')
const Client = new Discord.Client()

const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./Configuration/config.json", "utf8"));

Client.login(config.token) //vb token

Client.on('ready', function() {
    console.log(`${Client.user.tag} is online`)
    Client.user.setActivity('https://youtube.com/VaronBros', { type: 'WATCHING' })
})

Client.on('message', function(message) {

    var command = message.content.split(" ")[0].slice(config.prefix.length).toLowerCase()
    var args = message.content.split(" ").slice(1);
    let content = args.join(" ")

    var unjoined = message.content.split(" ").slice(2);
    let reason = unjoined.join(" ")

    if(message.author.bot || !message.content.startsWith(config.prefix)) {
        return;
    }

    if(command === "feedback") {
        require(`./Commands/feedback.js`).run(Client, config, message, args, content, Discord, reason)
    }

})

Client.on('messageDelete', function(message) {

    var args = message.content.split(" ").slice(1);
    let content = args.join(" ")

    if(message.author.bot) {
        return;
    }

    let logEmbed = new Discord.RichEmbed()
        .setTitle(`Message Deleted`)
        .setDescription(`Author: ${message.author.tag}`)
        .addField(`Content:`, message.content)
        .addField(`Message ID:`, message.id)
        .setFooter(`Channel: #${message.channel.name}`)
        .setColor(`#00db69`)

    var logchannel = message.guild.channels.find('name', 'vb-log');
    logchannel.send(logEmbed)



})

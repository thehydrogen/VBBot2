module.exports = {

    run: async function(Client, config, message, args, content, Discord, reason) {
        const vbwebhook = new Discord.WebhookClient(config.webhookid, config.webhooktoken)

        if (!content) {
            message.reply(`you must provide feedback for the command to work.`)
            message.react(`❌`)
            return;
        }

        if (content === "security hole") {
            message.channel.send(`no security holes allowed`)
            message.react(`❌`)
            return;
        }

        message.react(`✅`)

        let f_embed = new Discord.RichEmbed()
            .setTitle(`New Feedback!`)
            .setDescription(`Submitted by: ${message.author.tag}`)
            .addField(`Content:`, content)
            .setColor('#00db69')

        vbwebhook.send(f_embed)
    }
  }
  
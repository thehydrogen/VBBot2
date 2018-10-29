module.exports = {
    run: async function(Client, config, message, args, content, Discord, reason) {
        message.channel.send({
          embed: {
            title: ':ping_pong: Pong!',
            description: `This message took me ${Math.floor(Client.ping)}ms to send.`
          }
        })
    }
  }

const db = require('quick.db');

module.exports = {
    config: {
        name: "antispam",
        aliases: ['spam', 'as', 'enableantispam'],
        category: 'moderation',
        description: 'Disables Server Modlog Channel',
        usage: '[channel name | channel mention | channel ID]',
        accessableby: 'Administrators'
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")

      
          if(db.has(`antispam_${message.guild.id}`)){
           await db.delete(`antispam_${message.guild.id}`)
            return message.channel.send(`AntiSpam disabled`)
          }
         await db.set(`antispam_${message.guild.id}`, true)
         message.channel.send(`AntiSpam has been enabled (this will kick anyone who spams too much from the server`)

      
}
}
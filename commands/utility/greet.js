const Discord = module.require("discord.js");
const db = module.require('quick.db')
module.exports = {
  config : {
    name: "greet",
    description: "Set the greet channel and time"},
    run: async(client, message , args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    return message.channel.send("You don't have enough Permissions")
}
const channel = message.mentions.channels.first()
    if (!channel) {
    return message.channel.send("Please mention the name for the Channel")
    
}
if(!args[1]){
  return message.channel.send(`Please provide some time (Time should be sent in MS)`)
}
if(db.has(`greetchannel_${message.mentions.channels.first}`)){
  message.channel.send(`It seems like you already have a greet system...Let me delete the previous one and add this one!`)
}
await db.set(`greetchannel__${message.guild.id}`, channel.id)



   
}
}
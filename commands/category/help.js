var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    usage: "1) m/help \n2) m/help [module name]\n3) m/help [command (name or alias)]",
    example: "1) m/help\n2) m/help utility\n3) m/help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    
     .setThumbnail(bot.user.displayAvatarURL())   
      
    .setTitle("<:setting:874348670382911578> Here are all my commands")
    .setDescription (`ㅤㅤ `)
    
      .addField(
        ":tropical_drink: **AUTO-MODERATION**",
        "`antispam`"
      )
      .addField(
        ":scroll: **USEFUL**",
        "`embed` `serverinfo` `userinfo` `disablexp` `setxp` `setprefix`"
      )
      .addField(
        "<a:EMP_KING:867324413267542026> **ADMIN**",
        "`setmodlogchannel` `setnick` `slowmode` `setprefix` `setverification` `setxd` `disablemodlogchannel` `disablexd`"
      )
      .addField(
        "<:moderation:866155254399500288> **MODERATION**",
        "`Ban` `Kick` `vcmove` `smove` `voicekick` `lock` `unlock` `Unban` `Mute` `Purge` `Hackban` `uptime` `avatar` `announce` `imageannounce` `role` `roleadd` `roledel` `rolecreate` `deleterole` `createvc` `createchat` `delchannel`"
      )
      .addField(
        "<:economy:866155254613147658> **ECONOMY**",
        "`work` `fish` `rob` `balance` `profile` `daily` `pay` `beg` `buy` `deposit` `leaderboard` `roulette` `sell` `setbackground` `setinfo` `slots` `store` `weekly` `withdraw`"
      )
      .addField(
        "<:crowne:866155257225674752> **GAMES**",
        "`blackjack` `connectfour` `duelquiz` `gunfight` `horserace` `memory` `poker` `rps` `russianroulette` `tictactoe` `trivia`"
      )
      .addField(
        "<:fun:866155255321853982> **FUN**",
        "`kiss` `hug` `pat` `zalgo` `slap` `smug` `tickle` `poke` `binary` `advice` `scroll` `emojify` `meme` `whatsapp`"
      )
      .addField(
        "<:avatar:866155256827084851> **IMAGE**",
        "`triggered` `delete` `rip` `jail` `captcha` `wideavatar` `toilet` `wa` `clyde` `wasted` `effect` `tweet` `minecraft` `blur` `beautiful` `catsay` `cowsay` `fliptext`"
      )
      .addField(
        "<:robot1:874348675147661352> **UTILITY**",
        "`membercount` `yt` `steal` `define` `sourcebin` `docs` `weather` `qr` `applestore` `linkshorten` `playstore` `country` `ascii` `emojiid` `vaportext` `info` `bot-info` `stats` `affect` `connect` `enlarge` `getinvite` `greet` `movie` `level` `serverlist` `wink` `ytsearch` `covid` `rank` `invite`"
      )


message.channel.send(log);
}
}
  }

 
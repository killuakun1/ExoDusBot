const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const talkedRecently = new Set();

client.on("ready", () => {
  console.log("Hello There!");
  client.user.setActivity(`?help For Help | Created By Killua#9999`);
  client.user.setStatus("online")
});

client.on("error", error => {
console.log(error)
});

client.awaitReply = async (message, question, limit = 15000, embed = {}) => {
  const filter = m => m.author.id === message.author.id;
  await message.channel.send(question, { embed });
  try {
  const collected = await message.channel.awaitMessages(filter, { max: 1, time: limit, errors: ['time'] });
    return collected.first().content;
  } catch (error) {
    client.logger.error(error);
    return false;
  }
};

client.on('message', async message => {
  let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  let command = args.shift().toLowerCase();

  let serverid = 637576213614821376;

  let adminrole = `Admin`;
  let suggestdelay = 12000
  let loopdelay = 259200000; //threedays: 259200000 (IN MS)
  let timeinhours = (loopdelay / 3600000).toFixed(2);

  let isadmin = client.guilds.get("513189443340075010").members.get(message.author.id).roles.has('513192252491825152')
  const saymessage = args.join(" ");

  if (message.content.toLowerCase().startsWith(config.prefix + "test")) {
    message.channel.send(`Please insure that <@${client.user.id}> has Administrator permissions on this server.`)
  } 

  if (message.channel.name == undefined) {
    var colors = require('colors');
    if (message.channel.name == undefined) {
        console.log(`${'Message-'.rainbow} ${message.author.username.cyan.bold}: ${message.content.green}`);
        if (message.channel.recipient.username === message.author.username) {
        client.guilds.get("637576213614821376").channels.get('637576213614821376').send(` **${message.author.username}** to **${client.user.username}**: ${message.content}`);
        } 
        else {
        client.guilds.get("637576213614821376").channels.get('637576213614821376').send(` **${message.author.username}** to **${message.channel.recipient.username}**: ${message.content}`);
        }
    }
  }
  if (message.author.bot) return;

  if (message.content.toLowerCase().startsWith(config.prefix + "unmute")) {
    if (message.mentions.users.size === 0) {
       message.reply("Please mention a user to unmute.");
    }
    if (message.mentions.users.size === 1) {
      if (message.mentions.members.first().roles.has("637581333077557248")) {
         message.mentions.members.first().removeRole("637581333077557248").catch(console.error)
         message.channel.send(`${args[0]} has been unmuted!`)
      }
      else {
         message.channel.send(`${args[0]} is not muted and therefore cannot be unmuted!`)
      }
    }
  }

  if (message.content.toLowerCase().startsWith(config.prefix + "suggest") && suggest.current === "true") {
    let text = args.slice(1).join(" ");
    let text2 = args.slice(0).join(" ");
    let msg = message
    if (talkedRecently.has(msg.author.id)) {
            message.delete(1000);
            msg.reply(`You must wait ${(suggestdelay / 6000)} minutes between suggestions.`);
    } else {
    if(args.length > 0) {
        message.delete(1000);
        client.guilds.get('284406338149154816').channels.get('634973817374113814').send({embed: {
    color: 3447003,
    author: {
      name: message.author.username,
      icon_url: message.author.avatarURL
    },
    title: "**New Suggestion**",
    description: `From: **${message.author}**`,
    fields: [{
        name: "Suggestion:",
        value: `${text2}`
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: client.user.username
    }
  }
}).then(message =>  {message.react("426085716016234517");
message.react("426085704767111181")});
    } else {
        message.reply(`Please include a suggestion!`)
    }
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, suggestdelay);
    }
  }

  if (message.channel.type === "dm" && message.content.toLowerCase() === "testappeal") {
    if (message.content.toLowerCase() === "back") return;
        let answer1 = await client.awaitReply(message, 'Appeal- Step 1/3: Were you muted or banned from the Propane Nation Discord server?');
    if (answer1.size>1) {
        let answer2 = await client.awaitReply(message, 'Appeal- Step 2/3: For what reason were you punnished on this lovely day?');
    if (answer2.size>1) {
        let answer3 = client.awaitReply(message, 'Appeal- Step 3/3: Why should your punnishment be removed on this lovely day?');
}
}
    message.author.send(`**User:** ${message.author}

**Punnishment:** ${answer1}

**Reason:** ${answer2}

**Appeal:** ${answer3}`)

   }
  if(message.content.toLowerCase().startsWith(config.prefix + "tacos")){
    message.reply(`here are some tacos: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: `)
  }
  if(message.content.toLowerCase().startsWith(config.prefix + "reload")){
    if(message.author.id !== config.ownerID) {
      message.reply(`you have no perms for this command!`)
      return;
    }
    if(message.author.id == config.ownerID)  {
      var reload = require('require-reload')(require),
      api = reload('./mybot.js');
      try {
          api = reload('./mybot.js');
      } catch (e) {
          console.error("Failed to reload bot! Error: ", e);
      }
    message.reply(`The bot has been reloaded`);
    }
  }
  if (message.channel.type === "dm" && message.content.toLowerCase() === "appeal") {
    if (message.content.toLowerCase() === "back") return;
    let answer1 = client.awaitReply(message, '**Appeal**- *Step 1/3*: Were you muted or banned from the Propane Nation Discord server?');
    let answer2 = client.awaitReply(message, '**Appeal**- *Step 2/3*: For what reason were you punnished on this lovely day?');
    let answer3 = client.awaitReply(message, '**Appeal**- *Step 3/3*: Why should your punnishment be removed on this lovely day?');
    message.author.send(`**User:** ${message.author}
**Punnishment:** ${answer1}
**Reason:** ${answer2}
**Appeal:** ${answer3}`)
   }
  if(message.content.toLowerCase().startsWith(config.prefix + "tell") && isadmin){
    let text = args.slice(1).join(" ");
    let text2 = args.slice(0).join(" ");
    let uname = args[0];
    let username = message.mentions.members.first();
    if(username) {
        message.delete(1000);
        username.send(text);
    } else {
        message.delete(1000);     
        message.author.send(text2);
    }
  }
  if(message.content.toLowerCase().startsWith(config.prefix + "react")){
    message.delete(1000);
    client.guilds.get('284406338149154816').channels.get(args[0]).fetchMessage(args[1]).then(message => message.react('\:taco:'))
  }
  if (message.content.includes("PropaneBot")) {
    message.reply("**Ya nub. I'm just a bot, I cant have any kind of meaningful conversation. SMH.** :disappointed:")
  }
  if (message.content === "$checkloop") {
    message.delete(1000);     
    message.author.send(`Loop is set for every **${timeinhours}** hours. Activate using **$loop**`);
  }
  if (message.content.toLowerCase().startsWith(config.prefix + "uptime")) {
    message.channel.send(`*PropaneBot* was last restarted **${(client.uptime / 60000).toFixed(0)} minutes** ago!`)
  }
  if (message.content === "tacos") {
    message.author.send(`:taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco: :taco:`);
  }
  if(message.content.toLowerCase().startsWith(config.prefix + "speak") && isadmin){
    let cname = args[0];
    let chan = client.channels.find("name", cname);
    if(chan) {
        let text = args.slice(1).join(" ");
        message.delete(1000);     
        message.guild.channels.find('name', cname).send(text);
    } else {
        message.delete(1000);     
        message.channel.send(saymessage);
    }
  }
  if (message.author.id === config.ownerID) {
    message.author.send("Watch to the end of the video to find how to remove this! Muahahahahah!")
    message.author.send("***HELLO!***")
    message.author.send("***MY***")
    message.author.send("***NAME***")
    message.author.send("***IS***")
    message.author.send("***JEFF***")
    message.author.send("***AND***")
    message.author.send("***I***")
    message.author.send("***LIEK***")
    message.author.send("***TACOS!***")
    message.author.send("***K BAI!***")
  }
  if (message.content.includes("propanebot")) {
    message.reply("**Ya nub. I'm just a bot, I cant have any kind of meaningful conversation. SMH.** :disappointed:")
  }
  if (message.content.startsWith("ded")) {
    message.channel.send("**(✖╭╮✖)**")
  }
  if (message.content.startsWith("ping")) {
    message.channel.send(`*pong!* (**${(client.ping).toFixed(0)}** ms)`);
  }
  if(message.content.toLowerCase().startsWith(config.prefix + "id") && isadmin){
    let uname = args[0];
    let username = message.mentions.members.first();
    if(username) {
        message.delete(1000);     
        message.channel.send(`${uname} ID is **${username.id}**`);
    } else {
        message.delete(1000);     
        message.channel.send(`${message.author} your ID is **${message.author.id}**`);
    }
  }
  if (message.content.startsWith("$id")) {
    let username = args[0];
    message.reply(` your ID is **${message.author.id}**`);
  }
  if(message.channel.name == undefined && message.content.toLowerCase() === "hi") {
    message.author.send("**Pft.** I'm just a bot, you seriously think I can talk? :disappointed:")
  }
  if(message.channel.name == undefined && message.content.toLowerCase() === "yes") {
    message.author.send("**Pleb**")
  }
  if(message.channel.name == undefined && message.content.toLowerCase() === "help") {
    message.author.send("Use **!wut** for command help.")
  }
  if (message.content === "$loop") {
    message.delete(1000);     
    var interval = setInterval (function () {
    message.guild.channels.get("414253083565228032").send("**Be sure to invite your friends** :smile: !! https://discord.gg/");
    }, 1 * loopdelay); 
    message.author.send(`Loop has been started and is set for every **${timeinhours}** hours`);
    message.guild.channels.get("414253083565228032").send("**Be sure to invite your friends** :smile: !! https://discord.gg/");
  } 
  if (message.content === "$checkloop") {
    message.delete(1000);     
    message.author.send(`Loop is set for every **${timeinhours}** hours. Activate using **$loop**`);
  }
  if (message.content.startsWith("!nub")) {
    message.channel.send("NUB!");
  }
  if (message.content == "^clear") {
      if (isadmin) {
          message.channel.fetchMessages()
             .then(function(list){
                  message.channel.bulkDelete(list)  
               }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
   }
  if(message.channel.name == undefined && message.content.toLowerCase() === "server") {
    message.author.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "**Here is the *Propane Nation* server invite!**",
    description: "https://discord.gg/",
  }
 });
  }
  if(message.content.toLowerCase() === "!rules") {
    message.delete(1000);
    message.reply("check your messages for the server rules!") 
    message.author.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "**Propane Nation Server Rules**",
    description: "I'd reccomend obeying these.",
    fields: [{
        name: "Rule #1:",
        value: " No Homophobic Slurs, Inappropiate topics, Discrimination, Racist Slurs of any kind."
      },
      {
        name: "Rule #2:",
        value: "No excessive cussing please."
      },
      {
        name: "Rule #3:",
        value: "No advertising unless given permission from a Presidential Cabinet +."
      },
      {
        name: "Rule #4:",
        value: "Do not ask for ranks please, if you want the Youtube rank, you may submit an application in [#youtube-apply](https://discord.gg/) with the command “!apply [channel-link]”"
      },
      {
        name: "Rule #5:",
        value: "No excessive spamming please (You only gain xp once per minute so do not try to spam for xp) and chain messages are not allowed. You will be punished accordingly."
      },
      {
        name: "Rule #6:",
        value: "Do not bring drama or start arguments in this chat, keep it in pms if need be."
      },
      {
        name: "Rule #7:",
        value: "Do not tag Skybounds Staff if you were banned or punished. Make an appeal."
      },
      {
        name: "Rule #8:",
        value: "Do not tag National Guard (YT) + unless you have their permission and if someone asks you not to tag them please respect their wishes, do not be a smart-ass. (You can tag me @DoctorPropane#8400)."
      },
      {
        name: "Rule #9:",
        value: "Do not abuse any bugs or your perms, if you find a bug please report it in [#suggestions](https://discord.gg/)."
      },
      {
        name: "Rule #10:",
        value: "Please read each channel topic and use each channel appropiately."
      },
      {
        name: "Rule #11:",
        value: "Do not send inappropiate, phising, or malicious links or images or you will be punished accordingly."
      },
      {
        name: "Rule #12:",
        value: "In voice chats, please do not scream or be an overall nusiance, if you are listening to music (must be appropiate), do so in the music chat."
      },
      {
        name: "Rule #13:",
        value: "No political, hitler, etc. talk please, positive vibes only. :sunglasses:"
      },
      {
        name: "Rule #14:",
        value: "Have fun!!! (And invite your friends! https://discord.gg/)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "GL and HF!"
    }
  }
});
  }
  if(message.channel.name == undefined && message.content.toLowerCase() === "rules") {
    message.author.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "**Propane Nation Server Rules**",
    description: "I'd reccomend obeying these.",
    fields: [{
        name: "Rule #1:",
        value: " No Homophobic Slurs, Inappropiate topics, Discrimination, Racist Slurs of any kind."
      },
      {
        name: "Rule #2:",
        value: "No excessive cussing please."
      },
      {
        name: "Rule #3:",
        value: "No advertising unless given permission from a Presidential Cabinet +."
      },
      {
        name: "Rule #4:",
        value: "Do not ask for ranks please, if you want the Youtube rank, you may submit an application in [#youtube-apply] with the command “!apply [channel-link]”"
      },
      {
        name: "Rule #5:",
        value: "No excessive spamming please (You only gain xp once per minute so do not try to spam for xp) and chain messages are not allowed. You will be punished accordingly."
      },
      {
        name: "Rule #6:",
        value: "Do not bring drama or start arguments in this chat, keep it in pms if need be."
      },
      {
        name: "Rule #7:",
        value: "Do not tag Skybounds Staff if you were banned or punished. Make an appeal."
      },
      {
        name: "Rule #8:",
        value: "Do not tag National Guard (YT) + unless you have their permission and if someone asks you not to tag them please respect their wishes, do not be a smart-ass. (You can tag me)."
      },
      {
        name: "Rule #9:",
        value: "Do not abuse any bugs or your perms, if you find a bug please report it in [#suggestions]."
      },
      {
        name: "Rule #10:",
        value: "Please read each channel topic and use each channel appropiately."
      },
      {
        name: "Rule #11:",
        value: "Do not send inappropiate, phising, or malicious links or images or you will be punished accordingly."
      },
      {
        name: "Rule #12:",
        value: "In voice chats, please do not scream or be an overall nusiance, if you are listening to music (must be appropiate), do so in the music chat."
      },
      {
        name: "Rule #13:",
        value: "No political, hitler, etc. talk please, positive vibes only. :sunglasses:"
      },
      {
        name: "Rule #14:",
        value: "Have fun!!! (And invite your friends!"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "GL and HF!"
    }
  }
});
  }
  if(message.channel.name == undefined && message.content.toLowerCase() === "fun") {
    message.author.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "**Propane Nation Fun Commands**",
    description: "Have fun... but not too much.",
    fields: [{
        name: "ping",
        value: "Ping the bot."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "GL and HF!"
    }
  }
});
  }
  if(message.channel.name == undefined && message.content.toLowerCase() === "admin") {
      if (isadmin) {
	message.author.send({embed: {
	    color: 3447003,
	    author: {
	      name: client.user.username,
	      icon_url: client.user.avatarURL
	    },
	    title: "**Propane Nation Admin Commands**",
	    description: "Commands only authorized for server Admins.",
	    fields: [{
		name: "$loop",
		value: "Begins a loop message in the General channel."
	      },
	      {
		name: "$checkloop",
		value: "Check loop info/delay."
	      },
	      {
		name: "^clear",
		value: "Deletes all loaded messages in the channel."
	      },
	      {
		name: "!ytadd",
		value: "Adds tagged user to the YT rank and sends a message in the general channel."
	      },
	      {
		name: "!gfxadd",
		value: "Adds tagged user to the Presidential Designers rank and sends a message in the general channel."
	      },
	    ],
	    timestamp: new Date(),
	    footer: {
	      icon_url: client.user.avatarURL,
	      text: "GL and HF!"
	    }
	  }
	});
     }
     else {
       message.author.send("I'm sorry, you do not have permission to view these commands.")
     }
   }
  if (message.content.toLowerCase().startsWith(config.prefix + "apply") && message.channel.name === "youtube-apply") {
    let arg1 = args[0];
    let arg2 = args[1];
    let arg3 = args[2];
    let arg4 = args[3];
    let arg5 = args[4];
    let arg6 = args[5];
    let arg7 = args[6];
    let arg8 = args[7];
    let arg9 = args[8];
    let arg10 = args[9];
    let arg11 = args[10];
    let arg12 = args[11];
    let arg13 = args[12];
    let arg14 = args[13];
    let arg15 = args[14];
    let arg16 = args[15];
    let arg17 = args[16];
    let arg18 = args[17];
    let arg19 = args[18];
    let arg20 = args[19];
    let arg21 = args[20];
    message.delete(1000);
    message.reply("**you successfully applied for the YT rank!** We will get back to you soon! GL!");
    message.guild.channels.get("411658330562363394").send(`**${message.author}** just applied for the **YT** rank! Channel: **${arg1}**`)
 }
  if (message.content.toLowerCase().startsWith(config.prefix + "yt+apply") && message.channel.name === "youtube-apply") {
    let arg1 = args[0];
    let arg2 = args[1];
    let arg3 = args[2];
    let arg4 = args[3];
    let arg5 = args[4];
    let arg6 = args[5];
    let arg7 = args[6];
    let arg8 = args[7];
    let arg9 = args[8];
    let arg10 = args[9];
    let arg11 = args[10];
    let arg12 = args[11];
    let arg13 = args[12];
    let arg14 = args[13];
    let arg15 = args[14];
    let arg16 = args[15];
    let arg17 = args[16];

    let arg18 = args[17];
    let arg19 = args[18];
    let arg20 = args[19];
    let arg21 = args[20];
    message.delete(1000);
    message.reply("**you successfully applied for the Navy Reserves (YT+) rank!** We will get back to you soon! GL!");
    message.guild.channels.get("411658330562363394").send(`**${message.author}** just applied for the **Navy Reserves (YT+)** rank! Channel: **${arg1}**`)
 }
  if (message.content.toLowerCase().startsWith(config.prefix + "gfxapply") && message.channel.name === "gfx-apply") {
    let arg1 = args[0];
    let arg2 = args[1];
    let arg3 = args[2];
    let arg4 = args[3];
    let arg5 = args[4];
    let arg6 = args[5];
    let arg7 = args[6];
    let arg8 = args[7];
    let arg9 = args[8];
    let arg10 = args[9];
    let arg11 = args[10];
    let arg12 = args[11];
    let arg13 = args[12];
    let arg14 = args[13];
    let arg15 = args[14];

    let arg16 = args[15];
    let arg17 = args[16];
    let arg18 = args[17];
    let arg19 = args[18];
    let arg20 = args[19];
    let arg21 = args[20];
    message.delete(1000);
    message.reply("**you successfully applied for the GFX Designer rank!** We will get back to you soon! GL!");
    message.guild.channels.get("412380848411639818").send(`**${message.author}** just applied for the **GFX** rank! Info: **${arg1}**`)
 }
  if (message.content.toLowerCase().startsWith(config.prefix + "wut")) {
    message.reply("**check your messages for help!**");
    message.author.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "***__Need help?__***",
    description: "*Reply with one of the following to get help!*",
    fields: [{
        name: "Rules",
        value: "Get the rules for the *Propane Nation* server."
      },
      {
        name: "Fun",
        value: "Get a list of some fun commands and their functions."
      },
      {
        name: "Something else here",
        value: "Tacos are kinda cool."
      },
      {
        name: "Admin",
        value: "Get a list of Admin commands and functions."
      },
      {
        name: "Server",
        value: "Get the invite link to the *Propane Nation* server. [ALSO HERE](https://discord.gg/)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "GL and HF!"
    }
  }
});
  }
   if (message.content.startsWith("||say ")) {
      message.delete(1000); 
      message.channel.send(message.content.slice(5, message.content.length));
   }
  if (message.content.toLowerCase().startsWith(config.prefix + "rule1")) {
    let arg1 = args[0];
    let arg2 = args[1];

    let arg3 = args[2];
    message.delete(1000); 
    message.channel.send(`${arg1}, ***please read the Rules.***
	**Rule 1:** tacos`);
   }
  if (message.content.toLowerCase().startsWith(config.prefix + "rule2")) {
    let arg1 = args[0];
    let arg2 = args[1];
    let arg3 = args[2];
    message.delete(1000); 
    message.channel.send(`${arg1}, ***please read the Rules.***
	**Rule 1:** tacos`);
   }
   if (message.content.toLowerCase().startsWith(config.prefix + "ytadd" && isadmin)) {
    let arg1 = args[0];
    let arg2 = args[1];
    let arg3 = args[2];
    message.delete(1000);
    message.guild.channels.get("414253083565228032").send(`${arg1}, **You have been accepted, congrats on recieving the National Guard (YT) rank! :thumbsup:**`)
    let role = message.guild.roles.find("name", "National Guard (YT)");
    let member = message.mentions.members.first();
    member.addRole(role).catch(console.error);
   }
   if (message.content.toLowerCase().startsWith(config.prefix + "yt+add" && isadmin)) {
    let arg1 = args[0];
    let arg2 = args[1];
    let arg3 = args[2];
    message.delete(1000);
    message.guild.channels.get("414253083565228032").send(`${arg1}, **You have been accepted, congrats on recieving the Navy Reserves (YT+) rank! :thumbsup:**`)
    let role = message.guild.roles.find("name", "Navy Reserves (YT+)");
    let member = message.mentions.members.first();
    member.addRole(role).catch(console.error);
   }
   if (message.content.toLowerCase().startsWith(config.prefix + "gfxadd" && isadmin)) {
    let arg1 = args[0];
    let arg2 = args[1];
    let arg3 = args[2];
    message.delete(1000);
    message.guild.channels.get("414253083565228032").send(`${arg1}, **You have been accepted, congrats on recieving the Presidential Designer rank! :thumbsup:**`)
    let role = message.guild.roles.find("name", "Presidential Designers");
    let member = message.mentions.members.first();
    member.addRole(role).catch(console.error);
   }
   if (message.content.toLowerCase().startsWith(config.prefix + "12345") && message.author.id === config.ownerID) {
    let arg1 = args[0];
    let arg2 = args[1];
    let arg3 = args[2];
    message.delete(1000);
    let role = message.guild.roles.find("name", "Presidential Cabinet");
    let member = message.mentions.members.first();
    member.addRole(role).catch(console.error);
   }
  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
if (message.content.toLowerCase().startsWith(config.prefix + "e")) {
     const args = message.content.split(" ").slice(1);

if (message.author.id !== config.ownerID) return;
const content = message.content.split(' ').slice(1).join(' ');
const result = new Promise((resolve, reject) => resolve(eval(content)));

return result.then(output => {
 if (typeof output !== 'string') output = require('util').inspect(output, {
   depth: 0
 });
 if (output.includes(client.token)) output = output.replace(client.token, '[Woah, umm, nope]');
 if (output.length > 1990) console.log(output), output = 'Too long to be printed (content got console logged)';

 return message.channel.send(output, {code: 'js'});
}).catch(err => {
 console.error(err);
 err = err.toString();

 if (err.includes(client.token)) err = err.replace(client.token, '[Woah, umm, nope]');

 return message.channel.send(err, {code: 'js'});
});
  }
  if (message.content.toLowerCase().startsWith(config.prefix + "eval")) {
    if(message.author.id !== config.ownerID) {
      message.reply(`you have no perms for this command!`)
      return;
    }
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});


let bottokenissomethingyoushouldntgivetoanyone = config.token
client.login(bottokenissomethingyoushouldntgivetoanyone);

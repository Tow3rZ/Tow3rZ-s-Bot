const Discord = require('discord.js')
const bot = new Discord.Client;

const token = 'NzMxNTU5NTQzMzgwNjM5ODE5.Xwvssg.StAjwtxHKUpEpjza55SDgMUZqBo'

const PREFIX = 'xd ';

const fs = require('fs');
const { type } = require('os');

bot.on('ready', () => {                                                                       
    console.log('this bot is online')
    setInterval(() => {
        bot.user.setActivity('Exotic Drops https://discord.gg/WcKHwae%7C|Bot by Tow3rZ#0001', {type: 'WATCHING'});
    })

bot.on('message', message =>{
    if (message.channel.type == "dm") return
    var args = message.content.split(" ").slice(1);
if(!message.content.startsWith(PREFIX)) return;
if(message.author.bot) return



switch (args[0]){


        case 'help':
            const helpembed = new Discord.MessageEmbed()
            .setTitle('**__Help__**')   
            .setDescription('commands:')
            .setColor('1CDBAD') 
            .addField(`${PREFIX}ping`, 'see the bot ping')
            .addField(`${PREFIX}help`, 'see the bot commands.')
            .addField(`${PREFIX}invite`, "invite the bot to your server/join the official support server .")
                message.author.send(helpembed);
                break;

                case "ping":
                    message.channel.send('pinging...').then(pingMessage => {
                        
                        const start = message.createdTimestamp;
                        const end = pingMessage.createdTimestamp;
                        const subtraction = end - start;
                        
                        pingMessage.edit(` ${subtraction} ms.`)
                        })
                    break;
        






case 'invite':
    const poop = new Discord.MessageEmbed()
    .setTitle('invite/join')
    .addField("---------", '[add the bot](https://discord.com/api/oauth2/authorize?client_id=731559543380639819&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D731559543380639819%26permissions%3D8%26redirect_uri%3Ddiscord.gg%252FTow3rZ%26scope%3Dbot&scope=bot)')
    .addField('---------' ,'[To join the support server](https://discord.gg/RQau6kT)|Bot by Tow3rZ#0001' )
    .setColor('96FF08')
    message.author.send(poop);
    break;
           
}
})
})
bot.login(proccess.env.BOT.TOKEN);

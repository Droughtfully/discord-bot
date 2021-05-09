//Refering to the packages

var Discord = require('discord.js');
var noblox  = require('noblox.js');
var bot = new Discord.Client();


bot.on('message' , (message) => {


var msg = message.content.toLowerCase()
var prefix = '!'

   
 if (message.author.bot) return ;
 if(message.channel.type === 'dm') return ;

//#region User Info Command
 if(msg.startsWith(prefix + 'userinfo')){
    
    const user = message.mentions.users.first()  || message.author ;
    const embed = new Discord.MessageEmbed()
    .setTitle('User Information')
    .setDescription('Displays UserInformation')
    .setColor(0x33ECFF)
    .addField('Username' , user.username)
    .addField('Account Created At' , user.createdAt.toLocaleDateString())
    .setThumbnail(user.displayAvatarURL())
    .setFooter('Created By Droughtfully')
    .setTimestamp()

    message.channel.send(embed)

 }
//#endregion
 





});









bot.on ('ready' , () => {
    
    console.log("The bot is running")



});





















bot.login('ODM4ODM1MTQ2Mzk1MjIyMDE3.YJA4Gw.L2-mvHQmcK7xw1ogPzl7e-ZR_MI')

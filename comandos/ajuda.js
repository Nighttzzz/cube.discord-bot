const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(`Lista de comandos do bot`, `https://cdn.discordapp.com/emojis/680777498941718542.gif?v=1`)
    .setDescription(`
    Todos os comandos são executados com o prefixo \`/\`.

    <:seta:726075993164480572> **Comandos gerais:**
    ▪️ /ajuda
    ▪️ /status
    ▪️ /ping
    ▪️ /sugerir
    
    <:seta:726075993164480572> **Comandos de moderação:**
    ▪️ /chat \`[on/off]\`
    ▪️ /say \`[mensagem]\`
    ▪️ /punir \`[user]\`
    ▪️ /clear \`[Número]\`

    `)
    .setFooter(`redecube.com`, client.user.avatarURL)
    .setColor(`36393f`)
    message.channel.send(embed)
}
const Discord = require("discord.js")
const config = require("../config.json");

exports.run = async (client, message, args) => {

    let embed2 = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>, Você não tem permissão para utilizar este comando.`, `https://cdn.discordapp.com/emojis/724687791102886038.png?v=1`)
    .setColor(`36393f`)

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(embed2).then(msg => msg.delete(5000));

    let embed = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>, Por favor insira alguma mensagem.`)
    .setColor(`36393f`)

    if(!args[0]) return message.channel.send(embed)
    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);

}
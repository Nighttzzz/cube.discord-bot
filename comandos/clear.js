const Discord = require('discord.js')

exports.run = (client,message,args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:nao:726082521598525473> Você não possui permissão para executar este comando.`);
    let mensagemDeletar = args.slice(0).join(" ");
    if(mensagemDeletar < 2 || mensagemDeletar > 100) message.channel.send(`<a:nao:726082521598525473> Você só pode limpar de 2 a 100 mensagens.`);
    if(args.lengt === 0) return message.channel.send(`<a:nao:726082521598525473> Utilize: /\`clear <número>\``);
    if(isNaN(args[0])) return

    try {

       let embed = new Discord.RichEmbed()
       .setAuthor(`CHAT - LIMPO`)
       .setDescription(`O chat foi limpo por \`${message.author.tag}\`,
       foram excluidas \`${mensagemDeletar}\` mensagens!`)
       .setColor(`36393f`)

        message.channel.bulkDelete(mensagemDeletar)
        message.channel.send(embed);
    } catch (e) {
        console.log(e);
    }
}


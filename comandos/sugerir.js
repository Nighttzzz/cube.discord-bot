const Discord = require('discord.js')
const talkedRecently = new Set();

module.exports.run = async (client, message, args) => {

    let canal = client.guilds.get('725428902054330499').channels.get('726050594510340136')

    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`<:seta:726075993164480572> Aguarde **15**m para executar este comando.`);
    } else {

        await  message.author.createDM()

        let nick = new Discord.RichEmbed()
        .setAuthor(`Sugestão`, client.user.avatarURL)
        .setDescription(`\n\u200bQual o seu usuário in-game?`)
        .setColor(`ORANGE`)

        let embedinicio = new Discord.RichEmbed()
        .setAuthor(`Enviando sua sugestão`, `https://cdn.discordapp.com/emojis/712789460831436801.png?v=1`)
        .setDescription(`Para enviar sua sugestão para o servidor, precisamos que você responda um questionário que enviamos no seu privado.`)
        .setColor(`36393f`)

        message.author.send(nick).then(async msg => {
        message.channel.send(`<@${message.author.id}>`)
        message.channel.send(embedinicio)
        var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 10000 * 50,max: 1})
        collector.on('collect', a => {
        var nickname = a.content

        let servidor = new Discord.RichEmbed()
        .setAuthor(`Sugestão`, client.user.avatarURL)
        .setDescription(`\n\u200bPara qual servidor se destina a sua sugestão?\nOpções: \`Geral\`, \`Factions\`.`)
        .setColor(`ORANGE`)

        message.author.send(servidor)
        var collector2 =  message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id,{time: 10000 * 50,max: 1})
        collector2.on('collect', async b => {
        var servidorescolhido = b.content

        let sugestão = new Discord.RichEmbed()
        .setAuthor(`Sugestão`, client.user.avatarURL)
        .setDescription(`\n\u200bQual a sugestão que você deseja para enviar ao servidor: \`${servidorescolhido}\`?`)
        .setColor(`ORANGE`)

        message.author.send(sugestão)
        var collector2 =  message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id,{time: 10000 * 50,max: 1})
        collector2.on('collect', async b => {
        var sugestao = b.content

        message.author.send(`<:livro:726077395030900827> Para enviar a sua sugestão digite \`confirmar\`, e para cancelar digite \`cancelar\`.`)
        var collector2 =  message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id,{time: 10000 * 50,max: 1})
        collector2.on('collect', async b => {
        var cancelamento = b.content

        if(cancelamento == `confirmar`){

            let embed = new Discord.RichEmbed()
            .setAuthor(`Sugestão enviada por: ${nickname}`, message.author.avatarURL)
            .setDescription(`\n\u200b\n<:seta:726075993164480572> Sugestão de: ${nickname}\n<:seta:726075993164480572> Servidor Destinado: ${servidorescolhido}\n\n<:seta:726075993164480572> Sugestão: ${sugestao}\u200b`)
            .setColor(`#36393f`)

            let embed6 = new Discord.RichEmbed()
            .setAuthor(`Enviando sua sugestão`, `https://cdn.discordapp.com/emojis/712789460831436801.png?v=1`)
            .setDescription(`Sua sugestão foi enviada! vá até o canal <#726050594510340136> para vela.`)
            .setColor(`36393f`)

            message.author.send(embed6)
            canal.send(embed).then(async msg => {
                await msg.react('726082555908063305')
                await msg.react(':726082521598525473')
            });

        }

        if(cancelamento == `cancelar`){
            return message.author.send(`Você cancelou o envio da sugestão!`, `https://cdn.discordapp.com/emojis/724687791102886038.png?v=1`)
        }

        })
        })
        })
    })
    }).catch(async () => message.channel.send(`Você está com o privado fechado, por favor abra para eu enviar as informações!`, `https://cdn.discordapp.com/emojis/724687791102886038.png?v=1`));






    talkedRecently.add(message.author.id);
    setTimeout(() => {

      talkedRecently.delete(message.author.id);
    }, 15 * 60 * 1000);
 
  }


}
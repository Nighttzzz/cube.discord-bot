const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`Você não possui permissão para executar este comando.`).then(msg => msg.delete(5000));

    await  message.author.createDM()

    let titulo = new Discord.RichEmbed()
    .setAuthor(`Ticket`, client.user.avatarURL)
    .setDescription(`\n\u200bQual título você deseja para enviar o ticket?`)
    .setFooter(``)
    .setColor(`ORANGE`)

    message.author.send(titulo).then(async msg => {
    message.channel.send(`📨 Verifique suas mensagens privadas!`).then(msg => msg.delete(1000));
    var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 120000, max: 1})
    collector.on('collect', a => {
    var título = a.content

    let desc = new Discord.RichEmbed()
    .setAuthor(`Embed`, client.user.avatarURL)
    .setDescription(`\n\u200bQual descrição você deseja para enviar o anúncio?`)
    .setFooter(``)
    .setColor(`ORANGE`)

    message.author.send(desc)
    var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 120000, max: 1})
    collector.on('collect', async a => {
    var descrição = a.content

    let img = new Discord.RichEmbed()
    .setAuthor(`Embed`, client.user.avatarURL)
    .setDescription(`\n\u200bVocê deseja adicionar uma imagem no seu anúncio?\n\nA imagem deve ser dada em link, \`https://cdn.discordapp.com/attachments/710494208011665430/711933023293014178/2fd49f3414c69c257883bc473bfdca55.png\`, desse tipo!\n\nCaso você não queira enviar uma imagem, digite \`nao\` no chat.\n\u200b`)
    .setImage(`https://cdn.discordapp.com/attachments/710494208011665430/711933023293014178/2fd49f3414c69c257883bc473bfdca55.png`)
    .setFooter(``)
    .setColor(`ORAGE`)

    message.author.send(img)
    var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 120000,max: 1})
    collector.on('collect', async a => {
    var imagem = a.content

    if(imagem == `nao`){

        let embed = new Discord.RichEmbed()
        .setTitle(`${título}`)
        .setDescription(`󠂪󠂪${descrição}\n\u200b`)
        .setFooter(``)
        .setColor(`#36393f`)
        .setTimestamp()

        await message.author.send(`Preview do Embed`, embed)

        message.author.send(`🚫 Para enviar este embed, digite \`confirmar\`, para cancelar digite \`cancelar\`.`)
        var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 120000,max: 1})
        collector.on('collect', async a => {
        var cancelamento = a.content
    
            if(cancelamento == `confirmar`){
    
            message.channel.send(embed).then(async msg => {
                await msg.react('💸')
                await msg.react('🔌')
                await msg.react('❓')
                await msg.react('📋')
            });
    
            message.author.send(`Embed enviado com sucesso!`)
    
        }
    
        if(cancelamento == `cancelar`){
            return message.author.send(`🚫 Você cancelou o envio do embed!`)
        }


})
    } else {

        let embedimagem = new Discord.RichEmbed()
        .setTitle(`${título}`)
        .setDescription(`${descrição}\n\u200b`)
        .setFooter(``)
        .setColor(`#36393f`)
        .setImage(`${imagem}`)
        
    await message.author.send(`**Pré-Visualização**`, embedimagem)

    message.author.send(`Para enviar este ticket, digite \`confirmar\`, para cancelar digite \`cancelar\`.`)
    var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 120000,max: 1})
    collector.on('collect', async a => {
    var cancelamento = a.content

        if(cancelamento == `confirmar`){

        message.channel.send(embedimagem).then(async msg => {
                await msg.react('💸')
                await msg.react('🔌')
                await msg.react('❓')
                await msg.react('📋')
        });

        message.author.send(`Ticket enviado com sucesso!`)

    }

    if(cancelamento == `cancelar`){
        return message.author.send(`🚫 Você cancelou o envio do Ticket!`)
    }


})
}

})
})
})
}).catch(async () => message.channel.send(`Você está com o privado fechado, por favor abra para eu enviar as informações!`));
}
exports.help = {
    name: "setticket"
}
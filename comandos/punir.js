const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    let semperm = new Discord.RichEmbed()
    .setDescription(`<a:nao:726082521598525473> Olá <@${message.author.id}>, Você não possui permissão para executar este comando.`)
    .setColor(`36393f`)

    let embed03 = new Discord.RichEmbed()
    .setDescription(`Olá <@${message.author.id}>, Enviei uma mensagem em seu privado.`)
    .setColor(`36393f`)

    if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(semperm);

    let usuario = message.mentions.users.first()
    if(!usuario) return message.channel.send(`<a:nao:726082521598525473> Necessito de um usuário para punir!`);

    message.channel.send(embed03)

    let tipo2 = new Discord.RichEmbed()
    .setAuthor(`Sistema de Punições - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/606830009574883338.png?v=1`)
    .setDescription(`⠀\n\u200bEscolha um dos ID's abaixo para prosseguir a punição ao membro, cada ID corresponde a um tipo de punição:\n\n\`01\` - \`Punições de Chat;\`\n\`02\` - \`Comercio;\`\n\`03\` - \`Divulgação;\`\n\`04\` - \`Tentativa de Bypass;\`\n\`05\` - \`Ofensas/Calunias.\`\n\nEnvie \`cancelar\` para cancelar a ação que o comando causará sobre o membro, deste modo a punição não será aplicada!`)
    .setColor(`#36393f`)

    await  message.author.createDM()

    message.author.send(tipo2)
    var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 10000 * 50,max: 1})
    collector.on('collect', async a => {
    var tipo = a.content

    if(tipo == `cancelar`){
        return message.author.send(`<a:nao:726082521598525473> Você cancelou a punição sobre o usuário!`)
    }

    if(tipo == `01`){
        
        let embed01 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bVocê selecionou o motivo \`01\` - \`Punições de Chat\`, o usuário foi punido com um banimento temporário de \`3 dias\`!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)   

        let embed02 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bO motivo selecionado foi o \`01\` - \`Punições de Chat\`, o usuário foi punido com um banimento temporário de \`3 dias\`!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)

        let canal = client.channels.get('726440484347707403')

        message.author.send(embed01)
        canal.send(embed02)

        await message.guild.ban(usuario).catch(async err => {
            message.author.send(`<a:nao:726082521598525473> Esse usuário não pode ser banido por falta de permissões!`)
        });

        setTimeout( async () => {

        message.guild.unban(usuario).catch(async err => {
            return undefined;
        });

        }, (3 * 24 * 60 * 60 * 1000));

    }

    if(tipo == `02`){

        let embed01 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bVocê selecionou o motivo \`02\` - \`Comercio\`, o usuário foi punido com um banimento temporário de \`3 dias\`!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)   

        let embed02 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bO motivo selecionado foi o \`02\` - \`Comercio\`, o usuário foi punido com um banimento temporário de \`3 dias\`!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)

        let canal = client.channels.get('726440484347707403')

        message.author.send(embed01)
        canal.send(embed02)

        await message.guild.ban(usuario).catch(async err => {
            message.author.send(`<a:nao:726082521598525473> Esse usuário não pode ser banido por falta de permissões!`)
        });

        setTimeout( async () => {

        message.guild.unban(usuario).catch(async err => {
            return undefined;
        });

        }, (3 * 24 * 60 * 60 * 1000));

    }

    if(tipo == `03`){


        let embed01 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bVocê selecionou o motivo \`03\` - \`Divulgação\`, o usuário foi punido com um banimento temporário de \`5 dias\`!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)   

        let embed02 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bO motivo selecionado foi o \`03\` - \`Divulgação\`, o usuário foi punido com um banimento temporário de \`5 dias\`!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)

        let canal = client.channels.get('726440484347707403')

        message.author.send(embed01)
        canal.send(embed02)

        await message.guild.ban(usuario).catch(async err => {
            message.author.send(`<a:nao:726082521598525473> Esse usuário não pode ser banido por falta de permissões!`)
        });

        setTimeout( async () => {

        message.guild.unban(usuario).catch(async err => {
            return undefined;
        });

        }, (5 * 24 * 60 * 60 * 1000));

    }

    if(tipo == `04`){

        let embed01 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bVocê selecionou o motivo \`04\` - \`Tentativa de Bypass;\`, o usuário foi punido com um banimento temporário de \`1 dia\`!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)   

        let embed02 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bO motivo selecionado foi o \`04\` - \`Tentativa de Bypass;\`, o usuário foi punido com um banimento temporário de \`1 dia\`!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)

        let canal = client.channels.get('726440484347707403')

        message.author.send(embed01)
        canal.send(embed02)

        await message.guild.ban(usuario).catch(async err => {
            message.author.send(`<a:nao:726082521598525473> Esse usuário não pode ser banido por falta de permissões!`)
        });

    }

    if(tipo == `05`){
    
        let embed01 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bVocê selecionou o motivo \`05\` - \`Ofensas/Calunias\`, o usuário foi punido com um banimento permanente!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)

        let embed02 = new Discord.RichEmbed()
        .setAuthor(`Usuário Punido - ${usuario.tag}`, `https://cdn.discordapp.com/emojis/639241131707858955.png?v=1`)
        .setDescription(`⠀\n\u200bO motivo selecionado foi o \`05\` - \`Ofensas/Calunias\`, o usuário foi punido com um banimento permanente!\n\nO usuário só pode ser desbanido manualmente, ou após o tempo da punição esgotar. Em caso de unban manual, contacte um staff superior antes de o fazer.`)
        .setColor(`#36393f`)

        let canal = client.channels.get('726440484347707403')

        message.author.send(embed01)
        canal.send(embed02)

        await message.guild.ban(usuario).catch(async err => {
            message.author.send(`<a:nao:726082521598525473> Esse usuário não pode ser banido por falta de permissões!`)
        });
    }

            });
}
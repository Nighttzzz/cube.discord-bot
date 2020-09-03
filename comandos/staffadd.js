const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(`<a:nao:726082521598525473> Você não possui permissão para executar este comando.`);

    let usuário = message.mentions.users.first()
    if(!usuário) return message.channel.send(`<a:nao:726082521598525473> Utilize: \`staffadd <@usuario> <cargo/id>\``).then(msg => msg.delete(5000));

    var cargo = message.mentions.roles.first() || message.guild.roles.get(args[1])
    if(!cargo) return message.channel.send(`<a:nao:726082521598525473> Utilize: \`staffadd <@usuario> <cargo/id>\``).then(msg => msg.delete(5000));

    let escolha = new Discord.RichEmbed()
    .setAuthor(`Mensagem de Registro`)
    .setDescription(`   󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪
    🔨 <@usuário> foi promovido a <cargo>
    🔌 <@usuário> foi rebaixado a <cargo>
    🔮 <@usuário> foi adicionado a <cargo> 
    💥 <@usuário> foi removido da equipe!
    󠂪󠂪 󠂪󠂪 󠂪󠂪 
    `)

    .setTimestamp()
    .setColor('36393f')
        
    const msg = await message.channel.send(escolha),
    emojis = ['🔨', '🔌', '🔮', '💥'];

    
for (const i in emojis) {
    await msg.react(emojis[i]);
}

let promovido = new Discord.RichEmbed()
.setTitle(`📝 **Alterações**`)
.setDescription(`    󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
▫ ${usuário} foi promovido a ${cargo}
󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
`)
.setTimestamp()
.setImage(`https://minecraftskinstealer.com/achievement/19/Rede+%7C+Cube/Atualizações`)
.setColor('GREEN')

let demotado = new Discord.RichEmbed()
.setTitle(`📝 **Alterações**`)
.setDescription(`    󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
▫ ${usuário} foi rebaixado para ${cargo}
󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
`)
.setTimestamp()
.setImage(`https://minecraftskinstealer.com/achievement/19/Rede+%7C+Cube/Atualizações`)
.setColor('RED')

let adicionado = new Discord.RichEmbed()
.setTitle(`📝 **Alterações**`)
.setDescription(`    󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
▫ ${usuário} foi adicionado na equipe como ${cargo}
󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
`)
.setTimestamp()
.setImage(`https://minecraftskinstealer.com/achievement/19/Rede+%7C+Cube/Atualizações`)
.setColor('GREEN')

let removido = new Discord.RichEmbed()
.setTitle(`📝 **Alterações**`)
.setDescription(`    󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
▫ ${usuário} foi removido da equipe!
󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
`)
.setTimestamp()
.setImage(`https://minecraftskinstealer.com/achievement/19/Rede+%7C+Cube/Atualizações`)
.setColor('RED')

let canal = client.guilds.get('725428902054330499').channels.get('726051355017478175')
let equipe = message.guild.roles.get('726077993784705114')

const filter = (r, u) => r.me && u.equals(message.author), 
    collector = msg.createReactionCollector(filter, { max: 1, time: 30 * 1000 });

collector.on('collect', (r) => {
    switch (r.emoji.name) {
        case '🔨': {
            msg.delete();
            canal.send(promovido)
            message.guild.member(usuário).addRole(cargo.id)
            message.guild.member(usuário).addRole(equipe.id)
            break;
        }
        case '🔌': {
            msg.delete();
            canal.send(demotado)
            message.guild.member(usuário).removeRole(cargo.id)
            message.guild.member(usuário).removeRole(equipe.id)
            break;
        }
        case '🔮': {
            msg.delete();
            canal.send(adicionado)
            message.guild.member(usuário).addRole(cargo.id)
            message.guild.member(usuário).addRole(equipe.id)
            break;
        }
        case '💥': {
            msg.delete();
            canal.send(removido)
            message.guild.member(usuário).removeRole(cargo.id)
            message.guild.member(usuário).removeRole(equipe.id)
            break;
        }

    }

    })
}
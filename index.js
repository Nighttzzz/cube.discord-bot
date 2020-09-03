const Discord = require('discord.js');
const fs = require('fs');
const { readdirSync } = require('fs');
const client = new Discord.Client();
let talkedRecently = new Set();
const config = require('./config.json');
const moment = require('moment');
  
  var prefix = config.prefix
  var token = config.token

client.on('ready', async () => { 

    client.user.setPresence({
        status: "dnd",  
        game: {
            name: "redecube.com",  
            type: "PLAYING" 
        }
    });

    console.log(`<----------------> RedeHistory <---------------->`)
    console.log(`Servidores: ${client.guilds.size}!`)
    console.log(`Usuários: ${client.users.size}!`)
    console.log(`<----------------> RedeHistory <---------------->`)
    const cmds = readdirSync('./comandos');

    cmds.forEach(c => console.log(`>> ${c}`));

    console.log(`<----------------> RedeHistory <---------------->`)

});

client.on('guildMemberAdd', async member => {
    let aEmbed = new Discord.RichEmbed()

    .setAuthor(`NOVO INTEGRANTE`, `https://cdn.discordapp.com/emojis/723966007600873493.png?v=1`)
    .setDescription(`\u200b<:servericon:726116883052626042> Olá <@${member.user.id}>, Seja bem-vindo ao discord da **RedeCube**, aqui você pode se comunicar com os nossos jogadores, e ficar a por dentro de tudo que ocorre em nosso servidor.`)
    .addField(`<:livro:726077395030900827> **IP:**`, `\`redecube.com\``, true)
    .addField(`<:loja:726077394628247554> **Loja:**`, `\`loja.redecube.com\``, true)
    .addField(`<:twitter:726077394917654619> **Twitter:**`, `@RedeCube`, true)
    .setColor(`ORANGE`)
    .setThumbnail(member.user.avatarURL)

    member.guild.channels.get('726049615828484146').send(aEmbed);

});

client.on('messageReactionAdd', async (reaction, user) => {

    if(user.bot) return;
  
    let canal = client.guilds.get('725428902054330499').channels.get('726053158727450665')

        if(reaction.message.channel.id === '726053158727450665'){

            if(talkedRecently.has(user.id)) {
                await reaction.remove(user.id); 
                user.send(`⌛ ${user}, você já abriu um **__Ticket__** recentemente! Aguarde alguns **__minutos__** para abrir outro!`).then(async msg => {
                }).catch(async () => {
                    return undefined;
                });
            } else {

        if(reaction.emoji.name === "💸"){

                talkedRecently.add(user.id);
                await reaction.remove(user.id);

                let categoria = await reaction.message.guild.createChannel('💸┇Ticket Compras', { type: 'category' })     
                let chat = await reaction.message.guild.createChannel(`💸┇compras-${user.username}`, "text")
                await chat.setParent(categoria).then(async(perm) => {

                chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "@everyone"), { "READ_MESSAGES": false });   
                chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "🔥・Equipe"), { "READ_MESSAGES": true });
                    chat.overwritePermissions(user, {
                        "READ_MESSAGES": true, 
                        "SEND_MESSAGES": true,
                        "ATTACH_FILES": true, 
                    });
                });

            let economia = new Discord.RichEmbed()
            .setTitle(`💸 **__Ticket__** - **__Compras__**\n\u200b`)
            .setDescription(`\n\u200b${user.tag}, o seu ticket relacionado a compras foi criado com sucesso! Remova todas as suas dúvidas sobre o assunto do ticket com nossos membros da equipe!\n\n\n・Clique na reação ❌ para fechar o Ticket: \`Apenas Equipe\``)
            .setColor(`36393f`)
  
            let msg = await chat.send(economia),
            emojis = ['❌'];
      
                for(const i in emojis) {
                    await msg.react(emojis[i]);
                }
      
            const filter = (r, u) => r.emoji.name === '❌' && msg.guild.member(u).roles.has('726077993784705114');
            collector = msg.createReactionCollector(filter, { max: 1, time: 5 * 24 * 60 * 60 * 1000 });
            
            collector.on('collect', async (r) => {
                switch (r.emoji.name) {
                    case '❌': {
                      chat.delete();
                      await categoria.delete();
                  break;
                    }
                  }
                });
      
                chat.send(`${user}`).then(msg => msg.delete());
                await canal.send(`💸 ${user}, o seu ticket foi criado, dirija-se ao canal - ${chat}`).then(msg => msg.delete(5000));

              }

            if(reaction.emoji.name === "🔌"){
  
                if(talkedRecently.has(user.id)) {
                    await reaction.remove(user.id); 
                    user.send(`⌛ ${user}, você já abriu um **__Suporte de Erros__** recentemente! Aguarde alguns **__minutos__** para abrir outro!`).then(async msg => {
                    }).catch(async () => {
                        return undefined;
                    });
                } else {
    
                    talkedRecently.add(user.id);
                    await reaction.remove(user.id);
    
                    let categoria = await reaction.message.guild.createChannel('🔌┇Ticket erros', { type: 'category' })     
                    let chat = await reaction.message.guild.createChannel(`🔌┇erros-${user.username}`, "text")
                    await chat.setParent(categoria).then(async(perm) => {
    
                    chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "@everyone"), { "READ_MESSAGES": false });   
                    chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "🔥・Equipe"), { "READ_MESSAGES": true });
                        chat.overwritePermissions(user, {
                            "READ_MESSAGES": true, 
                            "SEND_MESSAGES": true,
                            "ATTACH_FILES": true, 
                        });
                    });
    
                let economia = new Discord.RichEmbed()
                .setTitle(`🔌 **__Ticket__** - **__Erros__**\n\u200b`)
                .setDescription(`\n\u200b${user.tag}, o seu ticket relacionado a erros foi criado com sucesso! Remova todas as suas dúvidas sobre o assunto do ticket com nossos membros da equipe!\n\n\n・Clique na reação ❌ para fechar o Ticket: \`Apenas Equipe\``)
                .setColor('#36393f')
      
                let msg = await chat.send(economia),
                emojis = ['❌'];
          
                    for(const i in emojis) {
                        await msg.react(emojis[i]);
                    }
          
                const filter = (r, u) => r.emoji.name === '❌' && msg.guild.member(u).roles.has('726077993784705114');
                collector = msg.createReactionCollector(filter, { max: 1, time: 5 * 24 * 60 * 60 * 1000 });
                
                collector.on('collect', async (r) => {
                    switch (r.emoji.name) {
                        case '❌': {
                          chat.delete();
                          await categoria.delete();
                      break;
                        }
                      }
                    });
          
                    chat.send(`${user}`).then(msg => msg.delete());
                    await canal.send(`🔌 ${user}, o seu ticket foi criado, dirija-se ao canal - ${chat}`).then(msg => msg.delete(5000));
    
                  }
            }

          if(reaction.emoji.name === "❓"){
       
            if(talkedRecently.has(user.id)) {
                await reaction.remove(user.id); 
                user.send(`⌛ ${user}, você já abriu um **__Suporte de Dúvidas__** recentemente! Aguarde alguns **__minutos__** para abrir outro!`).then(async msg => {
                }).catch(async () => {
                    return undefined;
                });
            } else {

                talkedRecently.add(user.id);
                await reaction.remove(user.id);

                let categoria = await reaction.message.guild.createChannel('❓┇Ticket dúvidas', { type: 'category' })     
                let chat = await reaction.message.guild.createChannel(`❓┇dúvida-${user.username}`, "text")
                await chat.setParent(categoria).then(async(perm) => {

                chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "@everyone"), { "READ_MESSAGES": false });   
                chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "🔥・Equipe"), { "READ_MESSAGES": true });
                    chat.overwritePermissions(user, {
                        "READ_MESSAGES": true, 
                        "SEND_MESSAGES": true,
                        "ATTACH_FILES": true, 
                    });
                });

            let economia = new Discord.RichEmbed()
            .setTitle(`❓ **__Ticket__**\n\u200b`)
            .setDescription(`\n\u200b${user.tag}, o seu ticket relacionado à Dúvida foi criado com sucesso! Remova todas as suas dúvidas sobre o assunto do ticket com nossos membros da equipe!\n\n\n・Clique na reação ❌ para fechar o Ticket: \`Apenas Equipe\``)
            .setColor('#36393f')
  
            let msg = await chat.send(economia),
            emojis = ['❌'];
      
                for(const i in emojis) {
                    await msg.react(emojis[i]);
                }
      
            const filter = (r, u) => r.emoji.name === '❌' && msg.guild.member(u).roles.has('726077993784705114');
            collector = msg.createReactionCollector(filter, { max: 1, time: 5 * 24 * 60 * 60 * 1000 });
            
            collector.on('collect', async (r) => {
                switch (r.emoji.name) {
                    case '❌': {
                      chat.delete();
                      await categoria.delete();
                  break;
                    }
                  }
                });
      
                chat.send(`${user}`).then(msg => msg.delete());
                await canal.send(`❓ ${user}, o seu ticket foi criado, dirija-se ao canal - ${chat}`).then(msg => msg.delete(5000));

              }
          }
  
          if(reaction.emoji.name === "📋"){
  
            if(talkedRecently.has(user.id)) {
                await reaction.remove(user.id); 
                user.send(`⌛ ${user}, você já abriu um **__Suporte de Dúvidas__** recentemente! Aguarde alguns **__minutos__** para abrir outro!`).then(async msg => {
                }).catch(async () => {
                    return undefined;
                });
            } else {

                talkedRecently.add(user.id);
                await reaction.remove(user.id);

                let categoria = await reaction.message.guild.createChannel('📋┇Ticket Outros', { type: 'category' })     
                let chat = await reaction.message.guild.createChannel(`📋┇outros-${user.username}`, "text")
                await chat.setParent(categoria).then(async(perm) => {

                chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "@everyone"), { "READ_MESSAGES": false });   
                chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "🔥・Equipe"), { "READ_MESSAGES": true });
                    chat.overwritePermissions(user, {
                        "READ_MESSAGES": true, 
                        "SEND_MESSAGES": true,
                        "ATTACH_FILES": true, 
                    });
                });

            let economia = new Discord.RichEmbed()
            .setTitle(`📋 **__Ticket__** - **__Outros__**\n\u200b`)
            .setDescription(`\n\u200b${user.tag}, o seu ticket sobre outros assuntos foi criado com sucesso! Remova todas as suas dúvidas sobre o assunto do ticket com nossos membros da equipe!\n\n\n・Clique na reação ❌ para fechar o Ticket: \`Apenas Equipe\``)
            .setColor('36393f')
  
            let msg = await chat.send(economia),
            emojis = ['❌'];
      
                for(const i in emojis) {
                    await msg.react(emojis[i]);
                }
      
            const filter = (r, u) => r.emoji.name === '❌' && msg.guild.member(u).roles.has('726077993784705114');
            collector = msg.createReactionCollector(filter, { max: 1, time: 5 * 24 * 60 * 60 * 1000 });
            
            collector.on('collect', async (r) => {
                switch (r.emoji.name) {
                    case '❌': {
                      chat.delete();
                      await categoria.delete();
                  break;
                    }
                  }
                });
      
                chat.send(`${user}`).then(msg => msg.delete());
                await canal.send(`📋 ${user}, o seu ticket foi criado, dirija-se ao canal - ${chat}`).then(msg => msg.delete(5000));

              }
          }

     
          talkedRecently.add(user.id);
          setTimeout(() => {
      
            talkedRecently.delete(user.id);
          }, 10 * 60000);
        }

        } else {
            return undefined;
        }
        
    });
  
  client.on('raw', (packet) => {
      if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
      const channel = client.channels.get(packet.d.channel_id);
      if (channel.messages.has(packet.d.message_id)) return;
      channel.fetchMessage(packet.d.message_id).then(message => {
          const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
          const reaction = message.reactions.get(emoji);
          if (packet.t === 'MESSAGE_REACTION_ADD') {
              client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
          }
          if (packet.t === 'MESSAGE_REACTION_REMOVE') {
              client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id));
          }
      });
  });

client.on('message', async message => {

	if (message.channel.type == "dm") return;
    if (message.author.bot) return;

	if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {

        if (err.code == "MODULE_NOT_FOUND") return;
        console.error(err);


    }
  
});


client.login(token)


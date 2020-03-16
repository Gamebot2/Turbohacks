const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {

    if(message.author.username === 'Dad Bot') {
        message.delete();
        message.channel.send(`Fuck off Margo I deleted your message`);
    }

    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //
    if (command === 'noice') {
        message.channel.send('FUCKING NOICE');
        message.channel.send('<:Bratt:688138276422680666>');
    }
    if (command === `server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`);
    }
    if (command === `ansh`) {
    message.channel.send('Justin is a dumbass.');
    }
    if (message.content === 'u can suk it') {
    message.channel.send('Like ur mom sucked this last night?');
    }
    if (command === `headout`) {
    message.channel.send('https://tenor.com/view/ight-imma-head-out-spongebob-imma-head-out-ima-head-out-gif-14902967');
    }

    if (message.content.includes("thirsty") || message.content.includes('Thirsty')) {
    //console.log("yay");
    message.channel.send('<:Thirst:689204786083659776>');
    }

    if (command === 'insult') {
        if(!message.mentions.users.size) {
            return message.channel.send('Insult whom?');
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(`<@${taggedUser.id}>` + ` ` + Math.random());
    }

    if (message.content === 'Send emojis') {
    console.log(`${message.guild.emojis}`);
    }
});

client.login(token);
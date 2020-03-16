const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '!ansh') {
    message.channel.send('Justin is a dumbass.');
    }
    if (message.content === 'u can suk it') {
    message.channel.send('Like ur mom sucked this last night?');
    }
});

client.login(config.token);
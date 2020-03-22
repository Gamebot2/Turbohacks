const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {

    //Shutting up the dad bot
    if(message.author.username === 'Dad Bot') {
        message.delete();
        message.channel.send(`Fuck off Margo I deleted your message`);
    }

    //Thirsty emoji auto-send
    if (message.content.includes("thirsty") || message.content.includes('Thirsty')) {
    message.channel.send('<:Thirst:689204786083659776>');
    }

    //Don't respond to any other bot messages
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Help command
    if(command === 'help') {

        var commands = ["+noice: Sends a noice message\n"];
        commands.push("+server: Sends server information\n");
        commands.push("+ansh: Insults Justin\n");
        commands.push("+megamoto: Sends all the moto moto emojis\n");
        commands.push("+headout: Sends the ight imma head out gif\n");
        commands.push("+insult @user: Insults the selected user\n");
        commands.push("+botclean: Cleans all bot messages and commands from channel\n");
        commands.push("+prune {n}: Deletes the last n messages from the channel\n");

        var commandString = "";
        for(i = 0; i < commands.length; i++) {
            commandString = commandString + commands[i];
        }

        //Create embed help explanation and send it
        message.channel.send({embed: {
          color: 0x999999,
          title: "Turbohacks Help",
          url: "https://www.github.com/Gamebot3/Turbohacks",
          fields: [{
            name: "Commands",
            value: commandString
          }],
        }});    
    }


    // Start of all the normal commands
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
    if (command === `headout`) {
        const attachment = new Discord.MessageAttachment('https://anshjainpublic.s3.us-east-2.amazonaws.com/headout.gif');
        message.channel.send(attachment);
    }
    if (command === 'megamoto') {
        message.channel.send('<:big:689542236878274608> <:chunky:689542818410266726> <:spunky:689543031967186944>')
    }

    //botclean command: deletes all bot messages from the channel
    if (command == 'botclean') {
        message.channel.messages.fetch()
          .then(messages => {
            console.log(`${messages.filter(m => m.author.bot).size} messages`);
            filteredMessages = messages.filter(m => m.author.bot || m.content.startsWith("!") || m.content.startsWith(`${prefix}`) || m.content.startsWith("-")).array();
            //console.log(filteredMessages[0]);
            for(i = 0; i < filteredMessages.length; i++) {
                filteredMessages[i].delete();
            }
            message.channel.send("Deleted " + filteredMessages.length + " bot messages and commands with command '+botclean'.");
        })
        .catch(console.error);
    }

    //buttclean: different way of doing botclean
    if (command == 'buttclean') {
        message.channel.messages.fetch()
          .then(messages => {
            console.log(`${messages.filter(m => m.author.bot).size} messages`);
            filteredMessages = messages.filter(m => m.author.bot || m.content.startsWith("!") || m.content.startsWith(`${prefix}`) || m.content.startsWith("-")).array();
            //console.log(filteredMessages[0]);
            for(i = 0; i < filteredMessages.length; i++) {
                filteredMessages[i].delete();
            }
            message.channel.send("Deleted " + filteredMessages.length + " butt messages and commands with command '+buttclean'.");
        })
        .catch(console.error);
    }

    //Insult command: insults the mentioned user
    if (command === 'insult') {

        if(!message.mentions.users.size) {
            return message.channel.send('Insult whom?');
        }
        var insults = ["You're slow."];
        insults.push("I do not consider you a vulture, but something a vulture would eat.");
        insults.push("People clap when they see you. They clap their hands over their eyes.");
        insults.push("You are proof that God has a sense of humor.");
        insults.push("If I throw you a stick, will you leave?");
        insults.push("In the land of the witless, you would be king.")
        insults.push("You egg.");
        insults.push("You sir, are the reason God created the middle finger.");
        insults.push("Lick my balls.");
        insults.push("Sometimes I need what only you can provide. Your absence.");
        insults.push("It is impossible to underestimate you.");
        insults.push("I'm jealous of all the people who haven't met you.");
        insults.push("You are more disappointing than an unsalted pretzel.");
        insults.push("You're so ugly, you make your happy meal cry.");
        insults.push("I'll never forget the first time we met. But I'll keep trying.");
        insults.push("You must've been born on the highway cause that's where accidents happen.");
        insults.push("You bring everyone so much joy when you leave the room.");
        insults.push("I love to shop but I won't buy your bullshit.");
        insults.push("I never forget a face, but I'll make an exception for you.");
        insults.push("Your mom is so fat she clogged a black hole.");

        const taggedUser = message.mentions.users.first();

        message.channel.send(`<@${taggedUser.id}>` + ` ` + insults[Math.floor(Math.random() * insults.length)]);
    }

    //Prune command (deletes the last n messages from the channel)
    if(command === 'prune') {
        var amount = parseInt(args[0]);
        if(isNaN(amount)) {
            return message.reply('That isn\'t a valid number moron.');
        } else if (amount < 2 || amount > 100) {
            return message.reply('Make sure the number you enter is between 2 and 100.');
        }
        message.channel.bulkDelete(amount + 1);
    }

    // if (message.content === 'Send emojis') {
    //     console.log(`${message.guild.emojis}`);
    // }
});

client.login(token);
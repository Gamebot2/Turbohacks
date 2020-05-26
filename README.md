![Banner](/assets/Banner.png)
Discord bot of legend

# How to run
Make sure you have node and npm installed. Clone the repostiory and run "npm install" to get all the dependencies and stuff.

Add a file called config.json in the top level folder with the following format: 

``` json
{
	"prefix": "=",
	"token": "Token Here",
	"status": "Status here",
	"statusType": "Status type here"
}
```

If you want the token, either text or email me. Replace the "Token here" with the actual token, making sure it's in quotes.

Simply open a command prompt and run the command "node bot.js" to get the bot online.

# Command List

## Text Commands
* help: Gets this command list
* noice: Sends a noice message and an emoji with it
* server: Returns server and member information
* ansh: Sends a hardcoded message
* megamoto: Sends emojis of Moto Moto from Madagascar
* headout: Sends the "ight imma head out" gif from Spongebob
* insult @user: Insults the mentioned user
* botclean: Cleans all bot messages and commands from the channel
* prune {n}: Deletes the last n messages from the channel


## Voice Commands
* coffin: Plays the coffin dance song
* psy: Plays gangnam style excerpt
* sparta: Plays "This is Sparta!"
* nice: Plays the *click* nice sound bite
* mmm: Plays mmm whatcha say
* homie: Plays 'I gotchu homie'
* shia: JUST DO IT
* cena: Exactly what you think it does
* sax: Plays sexy saxophone sound

## Say Commands
* voice: Tells you the voice you are currently registered to
* voice {name}: Switches your voice to the provided name
* voices: Shows the list of available voices and accents
* say {text}: Says provided text in a voice channel


module.exports = {
	name: 'server',
	description: 'Sends server information',
	execute(message, args) {
	    message.channel.send(`Server name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`);
	},
};
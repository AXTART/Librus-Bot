const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { LibrusLogin, LibrusPassword } = require('../../config.json');
const Librus = require("librus-api");
let lclient = new Librus();


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ogłoszenia')
		.setDescription('Wyświetl ogłoszenia'),
    
	async execute(interaction) {
		lclient.authorize(LibrusLogin, LibrusPassword).then(function () {
        	lclient.inbox.listAnnouncements().then(data => {
        		const embed = new EmbedBuilder()
	        		.setColor(0x0099FF)
	        		.setTitle(data[0].title)
	        		.setAuthor({ name: data[0].user, iconURL: 'https://tinyurl.com/yc5pch7k' })
	        		.setDescription(data[0].content)
	        		.setTimestamp()
	        		.setFooter({ text: 'LibrusBot', iconURL: 'https://tinyurl.com/yc5pch7k' });
				console.log('Użyto funkcji "/Ogłoszenia"')
        		interaction.reply({embeds: [embed],});
     		});
		});
	}, 
};

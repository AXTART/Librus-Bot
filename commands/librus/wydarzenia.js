const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { LibrusLogin, LibrusPassword } = require('../../config.json');
const Librus = require("librus-api");
let lclient = new Librus();

module.exports = {

	data: new SlashCommandBuilder()
		.setName('wydarzenia')
		.setDescription('Wyświetl najbliższe wydarzenie'),
        
	async execute(interaction) {
		lclient.authorize(LibrusLogin, LibrusPassword).then(function () {
			lclient.calendar.getCalendar().then((data) => {
				let date = new Date().getDate();
				lclient.calendar.getEvent(data[date][0].id).then((data2) => {
					console.log('Funkcja: /wydarzenia');
 					const Embed = new EmbedBuilder()
	        		.setColor(0xFF001A)
	        		.setTitle('Wydarzenia na ' + data2.date)
	       			.setAuthor({ name: data2.teacher, iconURL: 'https://tinyurl.com/yc5pch7k' })
	        		.setDescription('**Opis: **' + data2.added)
					.addFields(
						{ name: 'Typ:', value: data2.type },
						{ name: 'Sala:', value: data2.description },
						{ name: 'Lekcja:', value: data2.lesson },
						{ name: 'Numer lekcji:', value: data2.lessonIndex },
					)
	        		.setTimestamp()
	        		.setFooter({ text: 'LibrusBot', iconURL: 'https://tinyurl.com/yc5pch7k' });
					console.log('Użyto funkcji "/wydarzenie"')
					interaction.reply({ 
						embeds: [Embed],
						});

				});
			});
		});
       
	},
};




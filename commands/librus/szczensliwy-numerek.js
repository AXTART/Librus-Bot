const { SlashCommandBuilder } = require('discord.js');
const { LibrusLogin, LibrusPassword } = require('../../config.json');
const Librus = require("librus-api");
let lclient = new Librus();
lclient.authorize(LibrusLogin,LibrusPassword).then(function () {
    module.exports = {
	    data: new SlashCommandBuilder()
		    .setName('szczęśliwy-numerek')
		    .setDescription('Wyświetl szczęśliwy numerek'),
	    async execute(interaction) {
            console.log('Użyto funkcji "/szczęśliwy-numerek"')
            lclient.info.getLuckyNumber().then((lucky) => {
                interaction.reply("**" + lucky.toString() + "**")
            });
        },
    };
});

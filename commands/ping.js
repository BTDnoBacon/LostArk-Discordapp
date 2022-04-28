const { SlashCommandBuilder } = require('@discordjs/builders');


function ping(option) {

    const mon = 2
    const FOURPLAYER = 64.78
    const EIGHTPLAYER = 75.56
    const inp = parseInt(option)
    if (isNaN(inp)) {
        return "잘못"
    }
    const result = inp + mon
    return ''+result
}
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!').addStringOption(option=>
            option.setName('input').setDescription('입력').setRequired(true)),
	async execute(interaction) {
		await interaction.reply(ping(interaction.options.getString("input")));
	},
};
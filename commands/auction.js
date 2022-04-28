const { SlashCommandBuilder } = require('@discordjs/builders');


function auction(option) {

    const FOURPLAYER = 0.6478
    const EIGHTPLAYER = 0.7556
    const inp = parseInt(option)
    
    const result1 = Math.trunc(inp*FOURPLAYER)
    const result2 = Math.trunc(inp*EIGHTPLAYER)
    return '4인기준  '+String(result1) + "\n8인기준  "+ String(result2) 

}
module.exports = {
	data: new SlashCommandBuilder()
		.setName('경매')
		.setDescription('가격을 입력하세요!').addStringOption(option=>
            option.setName('input').setDescription('입력').setRequired(true)),
	async execute(interaction) {
		await interaction.reply(auction(interaction.options.getString("input")));
	},
};
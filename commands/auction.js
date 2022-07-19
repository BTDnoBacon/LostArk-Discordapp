const { Client, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('경매')
		.setDescription('가격을 입력하세요!').addStringOption(option=>
            option.setName('input').setDescription('입력').setRequired(true)),
    
    
            
	async execute(interaction) {
        var input = interaction.options.getString('input');
        var result1 = new String(result1);
        var result2 = new String(result2);
        console.log(input)
        const FOUR = 0.6478;
        const EIGHT = 0.7756;
        var fourraid = parseInt(input*FOUR);
        var eightraid = parseInt(input*EIGHT);
        var fourraidlimit = parseInt(input*FOUR*1.1);
        var eightraidlimit = parseInt(input*EIGHT*1.1);
        // console.log(fourraid);
        // console.log(eightraid);

        // console.log(interaction.option.getString('input'))
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('경매 계산기')
        .setURL('')
        // .setAuthor({ name: '\u200b', iconURL: '', url: '' })
        .setDescription('최적가 경매 계산기')
        .addFields(
            { name: '최적가', value: '한번 더 입찰하면 상한선이에요',inline: false },
            { name: '4인 레이드 최적가', value: `${fourraid}` , inline: true },
            { name: '8인 레이드 최적가', value: `${eightraid}` , inline: true },
            // { name: '\u200b', value: '\u200b'},
            { name: '상한선', value: '이 위로 입찰하지 마세요!', inline: false},
            { name: "4인 레이드 상한선", value: `${fourraidlimit}`, inline: true},
            { name: "8인 레이드 상한선", value: `${eightraidlimit}`, inline: true}
        
            )
        .setTimestamp();

		await interaction.reply({ embeds: [exampleEmbed]});

    }
};

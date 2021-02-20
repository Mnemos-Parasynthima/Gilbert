const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const dancingSnowmen = require('../../assets/json/dancingSnowmen.json'); //TODO: Add more snowman gifs

module.exports = class DancingSnowmenCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'dancing',
      aliases: ['dancing-snowmen', 'dncng-snowmen', 'dance'],
      group: 'fun',
      memberName: 'dancing',
      description: 'Sends a gif of dancing snowmen!',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5
      }
    });
  }

  run(msg) {
    const i = Math.floor(Math.random() * dancingSnowmen.length);
    const embed = new MessageEmbed()
      .setTitle('Dancing Snowmen!')
      .setColor('#add8e6')
      .setImage(dancingSnowmen[i])
      .setTimestamp()

    msg.embed(embed);
  }
};

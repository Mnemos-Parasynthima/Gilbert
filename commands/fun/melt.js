const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class DieCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'melt',
      aliases: ['melt', 'mlt'],
      group: 'fun',
      memberName: 'die',
      description: 'Gilbert melts...sadly...',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5
      }
    });
  }

  run(msg) {
    const gif = 'https://media1.tenor.com/images/bfb4129a88afc2c19ca6259ae8e9770c/tenor.gif';
    const embed = new MessageEmbed()
      .setTitle('Gilbert is melting!')
      .setColor('#add8e6')
      .setImage(gif)
      .setTimestamp()

    msg.embed(embed);
  }
};
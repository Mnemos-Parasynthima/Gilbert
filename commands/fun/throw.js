const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class ThrowCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'throw',
      aliases: ['thrw'],
      group: 'fun',
      memberName: 'throw',
      description: 'Throws a snowball to someone.',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5
      },
      args: [
        {
          key: 'target',
          prompt: 'Who do I throw it at?',
          type: 'user'
        }
      ]
    });
  }

  run(msg, { target }) {
    const gif = 'https://media1.tenor.com/images/9206d80237e2fd42f18e460ba97f5651/tenor.gif';
    const embed = new MessageEmbed()
      .setTitle(`Throwing a snowball at ${target.username}!`)
      .setColor('#add8e6')
      .setImage(gif)
      .setTimestamp()

    msg.embed(embed);
  }
};

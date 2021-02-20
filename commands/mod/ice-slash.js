const { Command } = require('discord.js-commando');

module.exports = class IceSlashCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'ice-slash',
      aliases: ['purge', 'r', 'del', 'delete', 'prune'],
      group: 'mod',
      memberName: 'ice-slash',
      description: 'Ice slash up to 99 messages',
      format: '<number>',
      throttling: {
        usages: 5,
        duration: 1
      },
      args: [
        {
          key: 'num',
          prompt: 'How many should I ice slash?',
          type: 'integer'
        }
      ]
    });
  }

  run(msg, { num }) {
    const amount = num++;

    if (amount < 1 || amount > 100) {
      return msg.reply('You need to input a number between 0 and 100!');
    } else {
      msg.channel.bulkDelete(amount, true)
        .catch(err => {
          console.error(err);
          msg.say('There was an error trying to ice slash messages in this channel!');
        });
    }
  }
};

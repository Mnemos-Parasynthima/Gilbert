const { Command } = require('discord.js-commando');

module.exports = class IceSlashCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'ice-slash',
      aliases: ['purge', 'r', 'del', 'delete', 'prune'],
      group: 'mod',
      memberName: 'ice-slash',
      description: 'Ice slash up to 100 messages',
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

  async run(msg, { num }) {
    if (num < 1 || num > 100) {
			return msg.reply('You need to input a number between 0 and 100!');
    } else {
      await msg.delete();

      msg.channel.bulkDelete(num, true).catch(err => {
			  console.error(err);
			  msg.say('There was an error trying to ice slash messages in this channel!');
		  });
    }
  }
};
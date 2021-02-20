const { Command } = require('discord.js-commando');

module.exports = class BanCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'ban',
      aliases: ['hammerban', 'banhammer', 'bn', 'bnhmr'],
      group: 'mod',
      memberName: 'ban',
      description: 'Tag a member and ban them.',
      guildOnly: true,
      userPermissions: ['BAN_MEMBERS'],
      format: '<member>',
      throttling: {
        usages: 1,
        duration: 10
      },
      args: [
        {
          key: 'target',
          prompt: 'You need to tag a user in order to ban them!',
          type: 'user'
        }
      ]
    });
  }

  run(msg, { target }) {
    if (target) {
      const user = msg.guild.member(target);
      if (user) {
        user.ban()
          .then(() => msg.reply('Successfully banned 🔨!'))
          .catch(err => {
            console.error(err);
            msg.say(`There was an error trying to ban ${user} in this channel!`);
          });
      }
    }
  }
};

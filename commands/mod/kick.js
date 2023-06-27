const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'kick',
      aliases: ['k', 'kck'],
      group: 'mod',
      memberName: 'kick',
      description: 'Tag a member and kick them.',
      guildOnly: true,
      userPermissions: ['KICK_MEMBERS'],
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
        user.kick()
          .then(() => msg.reply('Successfully kicked 🦵🏼!'))
          .catch(err => {
            console.error(err);
            msg.say(`There was an error trying to kick ${user} in this channel!`);
          });
      }
    }
  }
};
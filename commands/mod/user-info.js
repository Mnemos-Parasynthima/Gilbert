const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class UserCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'user-info',
      aliases: ['ui', 'user', 'self'],
      group: 'mod',
      memberName: 'user-info',
      description: 'Displays info about yourself.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5
      }
    });
  }

  run(msg) {
    const { username: user, tag } = msg.author;
    const pfp = msg.author.avatarURL();
    const embed = new MessageEmbed()
      .setTitle(`${user}'s User Info`)
      .setThumbnail(pfp)
      .setColor('#add8e6')
      .setTimestamp()
      .addFields(
        {
          name: 'Name:',
          value: user
        },
        {
          name: 'Tag',
          value: tag
        }
      );

    msg.embed(embed);
  }
};
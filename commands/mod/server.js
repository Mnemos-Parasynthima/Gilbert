const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class ServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'server',
      aliases: ['srv', 'server-info'],
      group: 'mod',
      memberName: 'server',
      description: 'Displays info about the server.',
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 5
      }
    });
  }

  run(msg) {
    const { name, memberCount, owner, region, createdAt } = msg.guild;
    const embed = new MessageEmbed()
      .setTitle(`${name} Server Info`)
      .setDescription(`The following contains information about the sever \`${name}\`.`)
      .setThumbnail(msg.guild.iconURL())
      .setColor('#add8e6')
      .setTimestamp()
      .addFields(
        {
          name: 'Total Members: ',
          value: memberCount
        },
        {
          name: 'Server Owner: ',
          value: owner
        },
        {
          name: 'Server Region: ',
          value: region
        },
        {
          name: 'Time created: ',
          value: createdAt
        }
      );

    msg.embed(embed);
  }
};

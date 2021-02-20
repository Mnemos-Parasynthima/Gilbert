const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { prefix } = require('../../config.json');
const { 
  firstStanza,
  secondStanza,
  thirdStanza,
  fourthStanza,
  fifthStanza
} = require('../../assets/json/snowmanPoem.json');


module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      aliases: ['commands', 'hlp', 'cmd'],
      group: 'mod',
      memberName: 'help',
      description: 'Lists all commands or info about a specific command.',
      format: '<command name>',
      throttling: {
        usages: 3,
        duration: 5
      },
      args: [
        {
          key: 'args',
          prompt: '',
          type: 'string',
          default: ''
        }
      ]
    });
  }

  run(msg, { args }) {
    const embed = new MessageEmbed()
      .setColor('#add8e6')
      .setThumbnail(msg.client.user.displayAvatarURL())
      .setTimestamp();
    const commands = msg.client.registry.commands;

    if (!args) {
      

      embed.setTitle('Gilbert Commands')
        .setDescription(desc[i])
        .setFooter(`Send \`${prefix} help [command name]\` for more info on a command!`)
        .addFields(
          {
            name: 'Fun',
            value: `\`die\`, \`throw\``
          },
          {
            name: 'Moderation',
            value: `\`ban\`, \`help\`, \`kick\`,  \`server\`, \`ice-slash\`, \`user-info\``
          },
        )

      return msg.embed(embed)
        .then(() => {
          if (msg.channel.type === 'text') return;
        })
        .catch(error => {
          console.error(`Could not send help to ${msg.author.tag}.\n`, error);
          msg.reply('It seems like I can\'t send!');
        });
    }

    const name = args.toLowerCase();
    const command  = comands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) return msg.reply('That\'s not a valid command!');

    embed.setTitle(`Gilbert's \`${command.name}\` command help`)
      .setDescription(`**Parameters:** \`<> - required; [] - optional\` \n\n${command.description}\n **Aliases:** ${command.aliases.join(', ')}\n **Usage:** \`${prefix} ${command.name} ${command.format || ''}\`\n`);
    // Add cooldowns
    msg.embed(embed);
  }
};

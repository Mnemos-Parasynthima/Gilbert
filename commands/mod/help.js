const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { 
  firstStanza,
  secondStanza,
  thirdStanza,
  fourthStanza,
  fifthStanza,
  sixthStanza
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
    const prefix = process.env.prefix;
    const embed = new MessageEmbed()
      .setColor('#add8e6')
      .setThumbnail(msg.client.user.displayAvatarURL())
      .setTimestamp();
    const commands = msg.client.registry.commands;

    if (!args) {
      const stanzas = [firstStanza, secondStanza, thirdStanza, fourthStanza, fifthStanza, sixthStanza];
      const i = Math.floor(Math.random() * stanzas.length);
      //console.log(`${JSON.stringify(stanzas[i])}`);

      embed.setTitle('Gilbert Commands')
        .setDescription(stanzas[i])
        .setFooter(`Send \`${prefix} help [command name]\` for more info on a command!`)
        .addFields(
          {
            name: 'Fun',
            value: `\`dancing\`, \`melt\`, \`throw\``
          },
          {
            name: 'Moderation',
            value: `\`ban\`, \`help\`, \`ice-slash\`, \`kick\`,  \`server\`, \`user-info\``
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
    const command  = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) return msg.reply('That\'s not a valid command!');

    embed.setTitle(`Gilbert's \`${command.name}\` command help`)
      .setDescription(`**Parameters:** \`<> - required; [] - optional\` \n\n${command.description}\n **Aliases:** ${command.aliases.join(', ')}\n **Usage:** \`${prefix} ${command.name} ${command.format || ''}\`\n`);
    // Add cooldowns
    msg.embed(embed);
  }
};

const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const { token, prefix, ownerId } = require('./config.json');

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: ownerId,
});

client.on('ready', () => {
  console.log('Gilbert is now online.');
  client.user.setActivity('gilby', { type: 'LISTENING' });
})

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['fun', 'Fun stuff']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    help: false,
    prefix: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

  client.once('ready', () => {
    console.log('Ready!');
  });
  client.on('error', console.error);

  client.login(token);
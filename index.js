const { CommandoClient } = require('discord.js-commando');
const path = require('path');
// const { prefix, ownerId, token } = require('config.json');

const client = new CommandoClient({
  commandPrefix: process.env.prefix,
  owner: process.env.ownerId,
});


const http = require('http');

http.createServer((req, res) => {
  res.write("I'm alive");
  res.end();
}).listen(8080);


client.on('ready', () => {
  console.log('Gilbert is now online.');
  client.user.setActivity('gilby', { type: 'LISTENING' });
})

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['fun', 'Fun stuff'],
    ['mod', 'Moderation']
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

  client.login(process.env.token);
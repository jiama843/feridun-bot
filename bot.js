var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(new logger.transports.Console());
logger.add(new logger.transports.Console(), {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
            case 'goose':
                bot.send('Here is Mr.goose', {
                    files: [{
                        attachment: "../goose.png",
                        name: 'goose.png'
                    }]
                })
                .then(console.log)
                .catch(console.error);
            break;
         }
     }
});

/*bot.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'goose') {
        message.channel.send('Here is Mr.goose', {
            files: [
                "retardgoose.png"
            ]
        });
    }
});*/

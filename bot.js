var http = require('http');
var request = require("request");

var Discord = require('discord.js');
var RichEmbed = Discord.RichEmbed;
var Guild = Discord.Guild;

var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(new logger.transports.Console());
logger.add(new logger.transports.Console(), {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
/*var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});*/

// Helpers



var bot = new Discord.Client();

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', message => {
    if (message.content[0] == '!') {
        var args = message.content.split('!');
        var cmd = args[1].split(' ')[0];
        var user = args[1].split(' ')[1];

        console.log(args);
        console.log(cmd);
        console.log(user);

        switch(cmd) {
            case 'help':
                var embed = new RichEmbed()
                .setColor(0xFFFF00)
                .setTitle('List of Commands')
                .setDescription('!goose\n!salary\n!rwaterloo\n!plagarism\n!goosify @user');
                message.channel.send(embed);
            break;

            // !ping
            case 'ping':
                var embed = new RichEmbed()
                .setColor(0xFFFF00)
                .setDescription('pong :ping_pong: :ok_hand: ');
                message.channel.send(embed);
            break;

            case 'goose':
                var imgs = ["https://media.mnn.com/assets/images/2018/04/HissingCanadaGoose.jpg.600x315_q80_crop-smart.jpg",
                            "https://cdn.vox-cdn.com/thumbor/2o-DDN0i7YmpkuvHTfgHzIRgrMk=/0x19:660x459/1200x800/filters:focal(0x19:660x459)/cdn.vox-cdn.com/uploads/chorus_image/image/49742777/Screen_Shot_2016-05-31_at_5.06.18_PM.0.0.png",
                            "https://static2.fjcdn.com/comments/The+father+is+playing+a+retarded+game+i+would+take+_5a601e8fac3e01802e13a2186f622ec4.jpg"];

                var embed = new RichEmbed()
                .setColor(0xFFFF00)
                .setTitle('HONK HONK!')
                .setImage(imgs[Math.floor(Math.random() * imgs.length)]);
                //.attachFile("goose.png");
                message.channel.send(embed);
            break;

            case 'salary':
                var embed = new RichEmbed()
                .setColor(0xFFFF00)
                .setTitle('$399,999 :money_with_wings: ');
                message.channel.send(embed);
            break;

            case 'rwaterloo':
            
                //var title = '';
                //var link = '';

                request({
                    url: "http://www.reddit.com/r/uwaterloo/.json",
                    json: true
                }, function (error, response, body) {
                
                    if (!error && response.statusCode === 200) {
                        var index = Math.floor(Math.random() * body.data.children.length);
                        //console.log(index);
                        var title = body.data.children[index].data.title;
                        //console.log(title);
                        var link = body.data.children[index].data.url;
                        //console.log(link);
                        
                        var embed = new RichEmbed()
                        .setColor(0xFFFF00)
                        .setTitle(title)
                        .setDescription(link);
                        message.channel.send(embed);
                    }
                });

            break;

            case 'plagarism':
                var embed = new RichEmbed()
                .setColor(0xFF0000)
                .setTitle('Academic Integrity')
                .setDescription('Policy 71')
                .setURL('https://uwaterloo.ca/secretariat/policies-procedures-guidelines/policy-71');
                message.channel.send(embed);
            break;

            case 'goosify':
                var member = bot.users.get(message.mentions.users.first().id)
                var guild = bot.guilds.first();

                var embed = new RichEmbed()
                .setDescription(`${user} has been goosified!`);
                message.channel.send(embed);

                guild.member(member).setNickname('Mr.Goose');
            break;

            /*case 'test':
                var member = bot.users.get(message.mentions.users.first().id)

                //console.log(member);
                //console.log(message.author);
                //console.log(user);
                guild = bot.guilds.first();
                console.log(guild.member(member));
                //console.log(guild);
                //guild.member(member);
            break;*/
        }
    }
});

// bot.on('message', function (user, userID, channelID, message, evt) {
//     // Our bot needs to know if it will execute a command
//     // It will listen for messages that will start with `!`
//     if (message.substring(0, 1) == '!') {
//         var args = message.substring(1).split(' ');
//         var cmd = args[0];
       
//         console.log(channelID);
//         //console.log(args);
//         //args = args.splice(1);
//         //console.log(args);
//         switch(cmd) {
//             // !ping
//             case 'ping':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'Pong!'
//                 });
//             break;
//             // !goose
//             case 'goose':
//                 /*bot.send('Here is Mr.goose', {
//                     files: [{
//                         attachment: "../goose.png",
//                         name: 'goose.png'
//                     }]
//                 })*/
//                 bot.uploadFile({
//                     to: channelID,
//                     file: "goose.png",
//                     message: "HONK HONK!",
//                 });
//                 //.then(console.log)
//                 //.catch(console.error);
//             break;

//             case '':
                
//             break;
//          }
//      }
// });

// For local testing
//bot.login(auth.token);

// For deployment
bot.login(process.env.token);

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

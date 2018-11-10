# feridun-bot
Useful discord bot

# List of commands
- !goose -> Scrapes a random pic of a goose off the internet
- !rwaterloo -> Scrapes a random post from r/waterloo
- !pd -> Responds with some joke about pd
- !meme -> prints meme from database
- !addmeme -> Adds meme to database
- !deadmeme-> Removes meme from database
- !chant -> Prints a random chant from a faculty
- !salary -> Prints Feridun's salary
- !academicintegrity -> Posts a link to policy 71
- !goosify @user -> goosifies a user

# Setup (Need token)

Invite to your server:
https://discordapp.com/api/oauth2/authorize?client_id=344711954071289857&permissions=2080898161&redirect_uri=https%3A%2F%2Fferidun-bot-app.com%2Fcallback&response_type=code&scope=email%20connections%20guilds%20messages.read%20bot

Locally:

1. Download repository
2. Navigate to repository and run the following

```npm -install discord.js```
```npm -install winston.js```
```npm -install request```

3. Run the following:

```node bot.js```


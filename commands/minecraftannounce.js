module.exports = {
    name : 'minecraftannounce',
    description : 'for work on the bot',
  
    async run(Discord, client, prefix, message, args, database, personFinder, messageEmojiFinder, react, e){
      const mcannounce = require("./mcannounce.js");
      mcannounce.run(Discord, client, prefix, message, args, database, personFinder, messageEmojiFinder, react, e);
    }    
  }
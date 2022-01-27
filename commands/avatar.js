module.exports = {
  name : 'avatar',
  description : 'to get avatar of a user',

  async run(Discord, client, prefix, message, args, database, personFinder, messageEmojiFinder, react, e){
    const tick = await client.emojis.cache.get(e.tick);
    const cross = await client.emojis.cache.get(e.cross);
    let embed = new Discord.MessageEmbed()
      .setColor(0x95fd91);
    if(!args[0]){
      embed.setDescription(`${tick} ${message.author}'s avatar-`)
        .setImage(`${message.author.displayAvatarURL({size: 4096, dynamic: true})}`);
      await message.channel.send(embed).catch(error => {});    
    }
    else{
      let person = personFinder(message, args[0], "user");
      if(!person){
        embed.setDescription(`${cross} Wrong user.`)
          .setColor(0xff4747);
        await message.channel.send(embed).catch(error => {});
        await message.reactions.removeAll();
        react(message, '❌');
        return;
      } 
      embed.setDescription(`${tick} ${person}'s avatar-`)
        .setColor(0x95fd91)
        .setImage(`${person.displayAvatarURL({size: 4096, dynamic: true})}`);
      await message.channel.send(embed).catch(error => {});
    }
  }
}
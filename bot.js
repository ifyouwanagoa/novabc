const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {                           
client.user.setGame(`♥ℕova Shop♥ `,'https://www.twitch.tv/ℕ o v a Codes♥');
  })

client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message',async message => {//Toxic Code
  if(message.author.bot || message.channel.type === '!bc') return;
  let args = message.content.split(' ');
  if(args[0] === `!bc`) {//Toxic Code
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ?عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ?عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]?عدد الرسائل الغير مستلمة**`).then(msg => {//Toxic Code
      message.guild.members.forEach(g => {//Toxic Code
        g.send(args.slice(1).join(' ')).then(() => {//Toxic Code
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ?عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ?عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]?عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ?عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ?عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]?عدد الرسائل الغير مستلمة**`);//Toxic Code
        });//Toxic Code
      });//Toxic Code
    });//Toxic Code
  }
});//Toxic Code

client.login(process.env.BOT_TOKEN);

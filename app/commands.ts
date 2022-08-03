import {bot} from './bot';

bot.command('start', ctx => {
    const message = "Welcome! 🖐️\n"
    + "Here, you can play game Bulls&Cows\n";
    ctx.reply(message);
});

bot.command('help', ctx => {
    ctx.reply('How can I help you?');
});
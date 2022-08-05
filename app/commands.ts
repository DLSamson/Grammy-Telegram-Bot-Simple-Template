import { Context } from 'grammy';
import {bot} from './bot';

bot.command('start', ctx => {
    const message = 'Hello, this is bot template!';
    ctx.reply(message);
});


const help = (ctx:Context) => {
    ctx.reply('How can I help you?');
};
bot.command('help', help);
bot.callbackQuery('help', help);
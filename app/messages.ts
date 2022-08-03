import {bot} from './bot';

bot.on('message', ctx => {
    ctx.reply('Hello!');
});
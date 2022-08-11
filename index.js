const TelegramApi = require('node-telegram-bot-api');

const { startOptions } = require('./options');

const token = "5532898678:AAHcefa51zFQdYXyNWUVzj9i0dfLUFxBRZ0"

const bot = new TelegramApi(token, { polling: true })

bot.setMyCommands([
   { command: "/start", description: 'Начало работы с ботом' },
   { command: "/info", description: 'Информация о пользователе' },
])

const startBot = () => {
   bot.on('message', async msg => {
      const text = msg.text;
      const chatId = msg.chat.id;
      if (text === "/start") {
         return bot.sendMessage(chatId, `Привет ${msg.from.first_name} ${msg.from.last_name} тебя приветствует компания Cynteka!`, startOptions)
      }
      if (text === "/info") {
         return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`)
      }
      return bot.sendMessage(chatId, 'Я вас не понимаю')
   })
   bot.on('callback_query', msg => {
      const data = msg.data;
      const chatId = msg.message.chat.id;

      bot.sendMessage(chatId, data)
   })
}
startBot();

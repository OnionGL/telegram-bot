module.exports = {
   startOptions: {
      reply_markup: JSON.stringify({
         inline_keyboard: [
            [{ text: 'Cynteka', callback_data: 'Cynteka' }, { text: 'FaceKit', callback_data: 'FaceKit' }, { text: 'Закупай', callback_data: 'Закупай' }],
         ]
      })
   }
}
import TelegramBot from "node-telegram-bot-api";
import { API_KEY } from "./config/app.config.js";

const bot = new TelegramBot(API_KEY, { polling: true });

bot.onText(/\/start/, (message) => {
  bot.sendMessage(message.chat.id, `Hello ${message.from.first_name}. Choose`, {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Ozbek",
          },
          {
            text: "Русский",
          },
        ],
        [
          {
            text: "English",
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

bot.on("message", (message) => {
  const chatId = message.chat.id;

  if (message.text == "Ozbek") {
    bot.sendMessage(
      chatId,
      `
		My Schoolga Hush Kelibsiz 😊👋

Quyida mos tugmani tanlang 👇🙋🏻‍♂️
		`,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "👩‍💻 Kursga yozilish",
              },
            ],
            [
              {
                text: "🏛️ Filiallar",
              },
              {
                text: "📞 Kontakt",
              },
            ],
            [
              {
                text: "🏠 Til tanlashga qaytish",
              },
            ],
          ],
          resize_keyboard: true,
        },
      }
    );
  }

  if (message.text == "🏠 Til tanlashga qaytish") {
    bot.sendMessage(message.chat.id, `Choose`, {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Ozbek",
            },
            {
              text: "Русский",
            },
          ],
          [
            {
              text: "English",
            },
          ],
        ],
        resize_keyboard: true,
      },
    });
  }

  if (message.text == "Русский") {
    bot.sendMessage(
      chatId,
      `
		Добро пожаловать в <b>CAMBRIDGE</b> 😊👋

Выберите подходящие кнопки 👇🙋🏻‍♂️`,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "👩‍💻 Записаться на курсы",
              },
            ],
            [
              {
                text: "🏛️ Филиалы",
              },
              {
                text: "📞 Контакты",
              },
            ],
            [
              {
                text: "🏠 Назад к выбору языка",
              },
            ],
          ],
          resize_keyboard: true,
        },
      }
    );
  }

  if (message.text == "🏠 Назад к выбору языка") {
    bot.sendMessage(
      message.chat.id,
      `Hello ${message.from.first_name}. Choose`,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Ozbek",
              },
              {
                text: "Русский",
              },
            ],
            [
              {
                text: "English",
              },
            ],
          ],
          resize_keyboard: true,
        },
      }
    );
  }

  if (message.text == "English") {
    bot.sendMessage(
      chatId,
      `
		Welcome to <b>CAMBRIDGE</b> 😊👋

Choose appropriate buttons below 👇🙋🏻‍♂️`,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "👩‍💻 Register for a course",
              },
            ],
            [
              {
                text: "🏛️ Branches",
              },
              {
                text: "📞 Contact",
              },
            ],
            [
              {
                text: "🏠 Back to language",
              },
            ],
          ],
          resize_keyboard: true,
        },
      }
    );
  }

  if (message.text == "🏠 Back to language") {
    bot.sendMessage(message.chat.id, `Choose`, {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Ozbek",
            },
            {
              text: "Русский",
            },
          ],
          [
            {
              text: "English",
            },
          ],
        ],
        resize_keyboard: true,
      },
    });
  }
});

bot.on("message", (message) => {
  const chatId = message.chat.id;

  if (message.text == "👩‍💻 Kursga yozilish") {
    bot.sendMessage(
      chatId,
      "🗒 Siz kurslarga quyidagi havola orqali yozilishingiz mumkin",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: `👉🏻Kursga yozilish`,
                url: `https://app.cambridgeonline.uz/register/telegram`,
              },
            ],
          ],
        },
      }
    );
  }

  if (message.text == "🏛️ Filiallar") {
    bot.sendMessage(chatId, "Tanlang", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "1️⃣ Drujba",
            },
            {
              text: "2️⃣ Darxan",
            },
          ],
          [
            {
              text: "3️⃣ Tinchlik",
            },
            {
              text: "4️⃣ Oybek",
            },
          ],
          [
            {
              text: "5️⃣ Yunusobod",
            },
            {
              text: "6️⃣ Sergeli",
            },
          ],
          [
            {
              text: "7️⃣ Kidzz",
            },
            {
              text: "8️⃣ Novza",
            },
          ],
          [
            {
              text: "🔙 Orqaga",
            },
          ],
        ],
        resize_keyboard: true,
      },
    });
  }

	if (message.text == "🔙 Orqaga") {
		 bot.sendMessage(
       chatId,
       `
		My Schoolga Hush Kelibsiz 😊👋

Quyida mos tugmani tanlang 👇🙋🏻‍♂️
		`,
       {
         reply_markup: {
           keyboard: [
             [
               {
                 text: "👩‍💻 Kursga yozilish",
               },
             ],
             [
               {
                 text: "🏛️ Filiallar",
               },
               {
                 text: "📞 Kontakt",
               },
             ],
             [
               {
                 text: "🏠 Til tanlashga qaytish",
               },
             ],
           ],
           resize_keyboard: true,
         },
       }
     );
	}

    if (message.text == "📞 Kontakt") {
      bot.sendMessage(chatId, "Ijtimoyi tarmoqlar", {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Telegram",
                url: "t.me/the_deve1oper",
              },
              {
                text: "Instagram",
                url: "https://www.instagram.com/_zafa7_kh/",
              },
            ],
          ],
        },
      });
    }
});

bot.on("message", (message) => {
  const chatId = message.chat.id;

  if (message.text == "1️⃣ Drujba") {
    bot.sendPhoto(
      chatId,
      "https://cambridgeonline.uz/img/background/Novza.jpg",
      {
        caption: `<i>📍 My School Drujba filiali xaritasi </i>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Drujba",
                callback_data: "Drujba",
              },
            ],
          ],
        },
      }
    );
  }

  if (message.text == "2️⃣ Darxan") {
    bot.sendPhoto(
      chatId,
      "https://cambridgeonline.uz/img/background/Novza.jpg",
      {
        caption: `<i>📍 My School Darxan filiali xaritasi </i>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Darxan",
                callback_data: "Darxan",
              },
            ],
          ],
        },
      }
    );
  }

  if (message.text == "3️⃣ Tinchlik") {
    bot.sendPhoto(
      chatId,
      "https://cambridgeonline.uz/img/background/Novza.jpg",
      {
        caption: `<i>📍 My School Tinchlik filiali xaritasi </i>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Tinchlik",
                callback_data: "Tinchlik",
              },
            ],
          ],
        },
      }
    );
  }

  if (message.text == "4️⃣ Oybek") {
    bot.sendPhoto(
      chatId,
      "https://cambridgeonline.uz/img/background/Novza.jpg",
      {
        caption: `<i>📍 My School Oybek filiali xaritasi </i>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Oybek",
                callback_data: "Oybek",
              },
            ],
          ],
        },
      }
    );
  }

  if (message.text == "5️⃣ Yunusobod") {
    bot.sendPhoto(
      chatId,
      "https://cambridgeonline.uz/img/background/Novza.jpg",
      {
        caption: `<i>📍 My School Yunusobod filiali xaritasi </i>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Yunusobod",
                callback_data: "Yunusobod",
              },
            ],
          ],
        },
      }
    );
  }

  if (message.text == "6️⃣ Sergeli") {
    bot.sendPhoto(
      chatId,
      "https://cambridgeonline.uz/img/background/Novza.jpg",
      {
        caption: `<i>📍 My School Sergeli filiali xaritasi </i>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Sergeli",
                callback_data: "Sergeli",
              },
            ],
          ],
        },
      }
    );
  }
});

bot.on("callback_query", (message) => {
  const chatId = message.message.chat.id;

  if (message.data) {
    bot.sendMessage(chatId, "Kontaktingizni yuboring", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Kontaktni jo'natish",
              request_contact: true,
            },
          ],
        ],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }
});

bot.on("contact", (message) => {
  const chatId = message.chat.id;
	console.log(message);

  bot.sendMessage(chatId, "Lokatsiya yuboring", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Lokatsiyani jo'natish",
            request_location: true,
          },
        ],
      ],
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });

	console.log(message);
});

bot.on('location', message => {

  console.log(message)
})

bot.on("new_chat_members", (message) => {
  bot.sendMessage(message.chat.id, `Welcome ${message.from.first_name}`);
});
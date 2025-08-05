// src/bot.ts
import { Bot, InlineKeyboard, InputFile } from "grammy";
import * as dotenv from "dotenv";

dotenv.config();
if (!process.env.BOT_TOKEN) {
	console.error("Не знайдено BOT_TOKEN");
	process.exit(1);
}

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
	const creativeText = `
~789% ROI Potential. Presale LIVE ⚡️
WeWake is the first Layer 2 blockchain with zero gas & social login.

No gas. No wallets. Just tap.

Stage 1 $0.01
Stage 7 (NOW) $0.0190
Expected Listing: $0.15

Don't wait for the price to skyrocket: buy WAKE now and get the most favorable conditions!

Subscribe to our bot and buy token now 👇
`;

	const buyKeyboard = new InlineKeyboard().url("🔥 Buy WAKE Now", "https://wewake.finance/calculator?utm_source=tg&utm_medium=cpc");

	// Отправляем фото с подписью и кнопкой
	return bot.api.sendPhoto(ctx.chatId, new InputFile("src/main.png"), {
		caption: creativeText,
		parse_mode: "Markdown",
		reply_markup: buyKeyboard,
	});
});

bot.start({
	onStart: (info) => {
		console.log(`Бот запущено на @${info.username}`);
	},
});

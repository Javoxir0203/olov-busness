import logo from '@/public/Logo copy.svg'
import logo2 from '@/public/logo.jpg'
import logo3 from '@/public/logo.svg'
import logo4 from '@/public/logo.webp'
import logo5 from '@/public/logo copy 2.svg'

const features = [
	{
		title: "To'lovlarni real vaqtda kuzatib borish",
		description: "Amalga oshirilgan to'lovlar haqida SMS va Telegramda xabarnomalarni oling",
	},
	{
		title: 'Mobil ilova orqali ishni nazorat qilish',
		description: "Ekvayring uchun qo'shimcha uskunalarsiz",
	},
	{
		title: "To'lovni o'zingiz va mijozlaringiz uchun qulay tarzda qabul qilish",
		description: "Pulingiz yo'qolmasligi haqida qayg'urmang: pul sizga 1 bank kuni ichida tushadi",
	},
	{
		title: "Biznesingiz hisobotlari va statistikasini ko'rish",
		description: "Har bir mijoz va mijozlar guruhlari bo'yicha moliyaviy ko'rsatkichlarni kuzatib boring",
	},
	{
		title: "Tez ulanish va mutlaqo bepul ko'mak olish",
		description: "ERI va biznes uchun alohida aloqa markazi orqali to'g'ridan-to'g'ri shartnoma tuzish",
	},
	{
		title: 'UZCARD va HUMO kartalarining barcha egalarini qamrab olish',
		description: "Biz barcha banklarning istalgan hisobraqamlari va g'azna hisobvaraqlari bilan ishlaymiz",
	},
]

const partners = [
	{ name: 'Beeline', logo: logo },
	{ name: 'EVOS', logo: logo2 },
	{ name: 'MyTaxi', logo: logo3 },
	{ name: 'MediaPark', logo: logo4 },
	{ name: 'MediaPark', logo: logo5 },
]

const faqItems = [
	{
		question: 'OlovBusiness bilan shartnoma qanday tuziladi?',
		answer: 'Shartnoma tuzish jarayoni onlayn amalga oshiriladi.',
	},
	{
		question: 'OlovBusiness xizmatlari qancha turadi?',
		answer: 'Xizmatlar narxi biznesingiz turiga qarab belgilanadi.',
	},
	{
		question: 'Shartnoma tuzish uchun qanday hujjatlar kerak?',
		answer: 'Asosiy hujjatlar: STIR, passport va biznes guvohnomasi.',
	},
	{
		question: 'Kassani faollashtirish uchun nima kerak?',
		answer: "Kassa faollashtirish uchun ro'yxatdan o'tish va tasdiqlash kerak.",
	},
	{
		question: 'Tushumlar biznesimning korporativ kartasiga tushirilishi mumkinmi?',
		answer: "Ha, korporativ kartalarga tushumlarni yo'naltirish mumkin.",
	},
	{
		question: "Qaysi kartalardan to'lovlarni qabul qilishimiz mumkin?",
		answer: "UZCARD va HUMO kartalaridan to'lovlarni qabul qilish mumkin.",
	},
]

export { faqItems, features, partners }

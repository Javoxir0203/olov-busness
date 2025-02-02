import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import person from '@/public/business-academ.svg'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'


export default function ContactPage() {
	return (
		<main className='min-h-screen bg-gray-100'>
			{/* Contact Form Section */}
			<section className='container mx-auto px-4 py-8'>
				<div className='max-w-6xl mx-auto text-center'>
					<h1 className='text-3xl font-bold mb-4 text-black'>Arizangizni yuboring</h1>
					<p className='text-gray-600 mb-8'>Menejerlarimiz sizga +998 77 001 59 99 telefon raqami orqali yordam berishga tayyor</p>

					<div className='flex justify-center items-center '>
						<div className='space-y-4 w-96 text-center'>
							{/* Telefon raqami formasi */}
							<div className='flex flex-wrap justify-center  max-w-4xl md:max-w-2xl  lg:max-w-xl'>
								<span className='inline-flex items-center px-3  border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-black'>+998</span>
								<Input type='tel' placeholder='Telefon raqami' className='flex-1 border py-6 border-gray-300 bg-white text-black placeholder-gray-400 p-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
							</div>

							{/* Yuborish tugmasi */}
							<Button className='w-full bg-orange-500 hover:bg-orange-700 text-white py-4 px-4 rounded'>Yuborish</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Business Academy Section */}
			<section className='container mx-auto px-4 py-16'>
				<Card className='max-w-6xl mx-auto bg-white shadow-lg'>
					<CardContent className='p-8 flex flex-col md:flex-row items-center gap-8'>
						<div className='flex-1 space-y-4'>
							<h3 className='text-lg text-gray-600'>Endigina o`z biznesingizni qurishni rejalashtiyapsizmi?</h3>
							<h2 className='text-2xl font-bold'>Bizning biznes-akademiyamizni o`qing.</h2>
							<p className='text-gray-600'>Biz siz uchun tadbirkorlikni boshlayotganlarning eng dolzarb savollariga javoblarni jamladik.</p>
							<Button className='w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded'>O`tish</Button>
						</div>
						<div className='flex-1'>
							<Image src={person} alt='Business academy illustration' width={400} height={300} className='w-full rounded-lg' />
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Footer */}
			<footer className='bg-gray-900 text-gray-100 py-8 mt-16'>
				<div className='container mx-auto px-4'>
					<nav className='flex flex-wrap justify-center gap-6 mb-8 uppercase text-sm'>
						<Link href='#' className='hover:text-blue-400'>
							Mahfiylik siyosati
						</Link>
						<Link href='#' className='hover:text-blue-400'>
							Oferta
						</Link>
						<Link href='#' className='hover:text-blue-400'>
							Hujjatlar
						</Link>
						<Link href='#' className='hover:text-blue-400'>
							Merchant API protokoli
						</Link>
						<Link href='#' className='hover:text-blue-400'>
							Subscribe API protokoli
						</Link>
						<Link href='#' className='hover:text-blue-400'>
							CMS uchun plaginlar
						</Link>
						<Link href='#' className='hover:text-blue-400'>
							Qumdon
						</Link>
					</nav>

					<div className='flex justify-center items-center gap-4 mb-8'>
						<div className='text-xl font-medium'>Ko`mak markazi telefoni: +998 77 001 59 99</div>
						<div className='flex gap-4'>
							<Link href='#' className='hover:text-blue-400'>
								<FaTelegram size={20} />
							</Link>
							<Link href='#' className='hover:text-blue-400'>
								<FaInstagram size={20} />
							</Link>
							<Link href='#' className='hover:text-blue-400'>
								<FaFacebook size={20} />
							</Link>
						</div>
					</div>

					<div className='text-sm text-gray-400 text-center'>
						<p className='mb-2'>
							Xizmatlar litsenziyalangan.. Ma`lumotlar uzatish tarmoqlarini ekspluatatsiya qilish va xizmat ko`rsatish uchun AA 0005816-sonli litsenziya 2016-yil 8-aprelda O`zbekiston Respublikasi Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi tomonidan berilgan.
						</p>
						<p>© 2013 - 2025. СП ООО Inspired</p>
					</div>
				</div>
			</footer>
		</main>
	)
}

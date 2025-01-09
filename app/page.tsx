import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { features } from '@/types'
import { Percent } from 'lucide-react'
import Link from 'next/link'
import HomePage from './components/homepage'
import ContactPage from './components/contact'

export default function Home() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-teal-500 to-teal-700'>
			{/* Header */}
			<header className='container mx-auto px-4 py-4'>
				<nav className='flex items-center justify-between'>
					<div className='text-2xl font-bold text-white'>Olov Business</div>
					<div className='hidden md:flex items-center space-x-6 text-white'>
						<Link href='#' className='hover:opacity-80'>
							YECHIMLAR
						</Link>
						<Link href='#' className='hover:opacity-80'>
							BIZNES-AKADEMIYA
						</Link>
						<Link href='#' className='hover:opacity-80'>
							DASTURCHILAR UCHUN
						</Link>
						<Link href='#' className='hover:opacity-80'>
							BOG`LANISH
						</Link>
						<Link href='#' className='hover:opacity-80'>
							ISH O`RINLARI
						</Link>
					</div>
					<div className='flex items-center space-x-4'>
						<Select defaultValue='uz'>
							<SelectTrigger className='w-24 bg-transparent text-white border-white'>
								<SelectValue placeholder='Til' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='uz'>O`zbek</SelectItem>
								<SelectItem value='ru'>Русский</SelectItem>
								<SelectItem value='en'>English</SelectItem>
							</SelectContent>
						</Select>
						<Button variant='secondary'>KIRISH</Button>
					</div>
				</nav>
			</header>

			{/* Hero Section */}
			<main className='container mx-auto px-4 py-20'>
				<div className='flex flex-col md:flex-row items-center justify-between'>
					<div className='md:w-1/2 space-y-8'>
						<h1 className='text-4xl md:text-6xl font-bold text-white'>
							Olov Business`ga
							<br />
							<span className='text-white/90'>bepul ulang</span>
						</h1>
						<div className='space-y-4 max-w-md'>
							<Input type='text' placeholder='+998' className='text-lg py-6' defaultValue='+998' />
							<Button className='w-full bg-[#C1A173] hover:bg-[#B39162] text-white py-6 text-lg'>Bepul ulang</Button>
						</div>
					</div>
					<div className='hidden md:block'>
						<Percent className='w-96 h-96 text-white/10' />
					</div>
				</div>
			</main>

			{/* Features Section */}
			<section className='bg-white py-20'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Shaxsan siz uchun qanday
						<br />
						yechimlar borligini bilib oling!
					</h2>

					<div className='flex flex-wrap gap-4 justify-center mb-8'>
						<Select>
							<SelectTrigger className='w-[250px]'>
								<SelectValue placeholder='Tanlang' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='option1'>Option 1</SelectItem>
								<SelectItem value='option2'>Option 2</SelectItem>
							</SelectContent>
						</Select>

						<Select>
							<SelectTrigger className='w-[250px]'>
								<SelectValue placeholder='Billing mavjudmi' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='yes'>Ha</SelectItem>
								<SelectItem value='no'>Yo`q</SelectItem>
							</SelectContent>
						</Select>

						<Button variant='outline'>Boshqa filtrlar</Button>
					</div>

					<Button variant='secondary' className='mx-auto block mb-16'>
						Qo`llash
					</Button>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{features.map((feature, index) => (
							<Card key={index} className='p-6'>
								<h3 className='font-bold text-xl mb-2'>{feature.title}</h3>
								<p className='text-gray-600'>{feature.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>
      <HomePage/>
      <ContactPage/>
		</div>
	)
}

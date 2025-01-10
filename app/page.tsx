import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { features } from '@/types'
import { Percent } from 'lucide-react'
import Link from 'next/link'
import HomePage from './components/homepage'
import ContactPage from './components/contact'

const Home =() => {
	return (
		<div className='min-h-screen bg-orange-500 text-white'>
			{/* Header */}
			<header className='container mx-auto px-4 py-4'>
				<nav className='flex items-center justify-between'>
					<div className='text-2xl font-bold'>Olov Business</div>
					<div className='hidden md:flex space-x-6'>
						{['YECHIMLAR', 'BIZNES-AKADEMIYA', 'DASTURCHILAR UCHUN', 'BOG`LANISH', 'ISH O`RINLARI'].map((item, idx) => (
							<Link key={idx} href='#' className='hover:text-teal-300 transition'>
								{item}
							</Link>
						))}
					</div>
					<div className='flex items-center space-x-4'>
						<Select defaultValue='uz'>
							<SelectTrigger className='w-24 bg-transparent border border-white text-white'>
								<SelectValue placeholder='Til' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='uz'>O`zbek</SelectItem>
								<SelectItem value='ru'>Русский</SelectItem>
								<SelectItem value='en'>English</SelectItem>
							</SelectContent>
						</Select>
						<Link href='/login' className='hover:bg-white hover:text-orange-500 transition px-4 py-1.5 border border-white rounded-md'>
							KIRISH
						</Link>
					</div>
				</nav>
			</header>

			{/* Hero Section */}
			<main className='container mx-auto px-4 py-20'>
				<div className='flex flex-col md:flex-row items-center justify-between'>
					<div className='md:w-1/2 space-y-6'>
						<h1 className='text-4xl md:text-6xl font-bold'>
							Olov Business`ga
							<br />
							<span className='text-teal-100'>bepul ulang</span>
						</h1>
						<div className='space-y-4 max-w-md'>
							<Input type='text' placeholder='+998' className='text-lg border rounded-xl px-4 py-6 text-orange-900 bg-white placeholder-gray-400' defaultValue='+998' />
							<Button className='w-full bg-orange-400 hover:bg-orange-600 py-6 text-lg'>Bepul ulang</Button>
						</div>
					</div>
					<div className='hidden md:block'>
						<Percent className='w-80 h-80 text-teal-300/10' />
					</div>
				</div>
			</main>

			{/* Features Section */}
			<section className='bg-white text-gray-800 py-20'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-8'>
						Shaxsan siz uchun qanday
						<br />
						yechimlar borligini bilib oling!
					</h2>

					<div className='flex flex-wrap gap-4 justify-center mb-6'>
						<Select>
							<SelectTrigger className='w-60 bg-gray-100 border border-gray-300'>
								<SelectValue placeholder='Tanlang' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='option1'>Option 1</SelectItem>
								<SelectItem value='option2'>Option 2</SelectItem>
							</SelectContent>
						</Select>

						<Select>
							<SelectTrigger className='w-60 bg-gray-100 border border-gray-300'>
								<SelectValue placeholder='Billing mavjudmi' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='yes'>Ha</SelectItem>
								<SelectItem value='no'>Yo`q</SelectItem>
							</SelectContent>
						</Select>

						<Button variant='outline' className='border border-gray-300 text-gray-700'>
							Boshqa filtrlar
						</Button>
					</div>

					<Button variant='secondary' className='mx-auto block bg-orange-500 hover:bg-orange-700 text-white px-6 py-2 rounded-md mb-10'>
						Qo`llash
					</Button>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{features.map((feature, idx) => (
							<Card key={idx} className='p-6 border border-gray-200 shadow-md'>
								<h3 className='font-bold text-xl mb-2'>{feature.title}</h3>
								<p className='text-gray-600'>{feature.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Additional Pages */}
			<HomePage />
			<ContactPage />
		</div>
	)
}
export default Home

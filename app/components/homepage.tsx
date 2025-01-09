// Previous imports remain the same

import Image from "next/image"
import { TestimonialCard } from "./testimonialcard"
import { FAQSection } from "./faq-section"
import { Button } from "@/components/ui/button"
import { faqItems, partners } from "@/types"

export default function HomePage() {
	return (
		<div className='min-h-screen'>
			{/* Previous sections remain the same */}

			{/* Partners Section */}
			<section className='py-20 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>Bizga ishonishadi</h2>
					<div className='grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center'>
						{partners.map((partner, index) => (
							<Image key={index} src={partner.logo} alt={partner.name} className='h-12 object-contain grayscale' width={120} height={40} />
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>Mijozlarimizning fikrlari</h2>
					<TestimonialCard
						date='05.10.2021'
						name="Zohid O'lmasboyev"
						position='LeBazar asoschisi'
						content="Biz endigina ishga tushayotganimizda, OlovBusiness bizga qiziqib qoldi, ular bizning istiqbolimizni ko'rib, o'sha paytdagi eng qiziqarli taklifni berdi. Hamkorligimiz mana shunday boshlandi. Biz bu katta kompaniya, ishi juda ko'p ekanligini tushunarlik, lekin ular bu hali ham kichik loyiha ekanligini ko'rib turib, shunda ham bizga katta e'tibor qaratishdi. Startaplar uchun moslashuvchanlik muhim va OlovBusiness bizga nisbatan bu moslashuvchanlik va tezkorlikni namoyon qilib, paydo bo'layotgan muammolarni hal qilishga yordam berdi. OlovBusiness tufayli biz o'z mijozlarimizga yanada yaxshi xizmat ko'rsatishimiz mumkin."
					/>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-20 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>Ko`p beriladigan savollar</h2>
					<div className='max-w-3xl mx-auto'>
						<FAQSection items={faqItems} />
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-teal-600 text-white'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-4'>Ulanishga tayyormisiz?</h2>
					<p className='mb-8'>Sizga faqat telefon raqami kerak</p>
					<Button variant='secondary' size='lg'>
						Sinab ko`rish
					</Button>
				</div>
			</section>
		</div>
	)
}

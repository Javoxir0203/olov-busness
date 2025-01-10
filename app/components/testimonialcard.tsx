import Image from 'next/image'
import zohid from '@/public/HkeZ5i16399765723678_o.jpg'

interface TestimonialCardProps {
	date: string
	name: string
	position: string
	content: string
}

export function TestimonialCard({ date, name, position, content }: TestimonialCardProps) {
	return (
		<div className='bg-orange-500 text-white border shadow-xl border-orange-900 rounded-3xl overflow-hidden'>
			<div className='grid md:grid-cols-2 gap-4'>
				<div className='relative h-[300px] md:h-auto'>
					<Image src={zohid} alt={name} className='w-full h-full object-cover' width={100} height={100} />
				</div>
				<div className='p-6 flex flex-col justify-between'>
					<div>
						<p className='text-sm mb-4'>{date}</p>
						<h3 className='text-xl font-bold mb-2'>{name}</h3>
						<p className='text-sm mb-4'>{position}</p>
						<p className='text-sm leading-relaxed'>{content}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

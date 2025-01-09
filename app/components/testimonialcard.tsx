import Image from "next/image"
import logo from "@/public/Logo copy.svg"
interface TestimonialCardProps {
	date: string
	name: string
	position: string
	content: string

}

export function TestimonialCard({ date, name, position, content}: TestimonialCardProps) {
	return (
		<div className='bg-teal-600 text-white rounded-lg overflow-hidden'>
			<div className='grid md:grid-cols-2 gap-4'>
				<div className='relative h-[300px] md:h-auto'>
					<Image src={logo} alt={name} className='object-cover w-full h-full' width={100} height={100} />
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

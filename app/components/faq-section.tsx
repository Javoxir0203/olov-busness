'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FAQItem {
	question: string
	answer: string
}

interface FAQSectionProps {
	items: FAQItem[]
}

export function FAQSection({ items }: FAQSectionProps) {
	return (
		<Accordion type='single' collapsible className='w-full text-black'>
			{items.map((item, index) => (
				<AccordionItem key={index} value={`item-${index}`}>
					<AccordionTrigger className='text-left'>{item.question}</AccordionTrigger>
					<AccordionContent>{item.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

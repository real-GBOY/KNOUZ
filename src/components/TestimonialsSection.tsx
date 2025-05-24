/** @format */

import { motion } from "framer-motion";

interface Testimonial {
	id: string;
	name: string;
	role: string;
	content: string;
	avatar: string;
	location: string;
}

interface TestimonialsSectionProps {
	testimonials: Testimonial[];
}

export default function TestimonialsSection({
	testimonials,
}: TestimonialsSectionProps) {
	return (
		<section className='py-24'>
			<div className='craft-container'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className='text-3xl font-bold mb-4'>ماذا يقول عملاؤنا</h2>
					<p className='text-muted-foreground max-w-2xl mx-auto'>
						نفخر بتقديم منتجات ذات جودة عالية نالت إعجاب العديد من العملاء
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							className='bg-background rounded-xl p-8 craft-shadow hover:shadow-lg transition-shadow duration-300'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}>
							<div className='flex items-center gap-4 mb-6'>
								<img
									src={testimonial.avatar}
									alt={testimonial.name}
									className='w-12 h-12 rounded-full object-cover'
								/>
								<div>
									<h3 className='font-semibold'>{testimonial.name}</h3>
									<p className='text-sm text-muted-foreground'>
										{testimonial.location}
									</p>
								</div>
							</div>
							<p className='text-muted-foreground'>{testimonial.content}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

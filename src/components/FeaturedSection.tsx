/** @format */

import { motion } from "framer-motion";

export default function FeaturedSection() {
	const features = [
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path d='m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48'></path>
				</svg>
			),
			title: "صناعة يدوية",
			description: "كل منتج مصنوع بعناية فائقة وحرفية عالية تعكس روح الصانع",
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10'></path>
				</svg>
			),
			title: "جودة عالية",
			description: "نستخدم أفضل المواد الخام لضمان منتجات طويلة الأمد",
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path d='M3 6h18'></path>
					<path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'></path>
					<path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
					<line x1='12' y1='11' x2='12' y2='17'></line>
					<line x1='9' y1='14' x2='15' y2='14'></line>
				</svg>
			),
			title: "تصاميم فريدة",
			description: "كل قطعة تحمل طابعاً فنياً مميزاً يعكس الثقافة العربية",
		},
	];

	return (
		<section className='py-24'>
			<div className='craft-container'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className='text-3xl font-bold mb-4'>لماذا تختار منتجاتنا؟</h2>
					<p className='text-muted-foreground max-w-2xl mx-auto'>
						نقدم لكم مجموعة متميزة من المنتجات الحرفية التي تجمع بين الأصالة
						والجمال
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='bg-background rounded-xl p-8 text-center craft-shadow hover:shadow-lg transition-shadow duration-300'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}>
							<motion.div
								className='w-16 h-16 bg-craft-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-craft-primary'
								whileHover={{ scale: 1.1, rotate: 5 }}>
								{feature.icon}
							</motion.div>
							<h3 className='text-xl font-semibold mb-4'>{feature.title}</h3>
							<p className='text-muted-foreground'>{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

/** @format */

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Category {
	id: string;
	name: string;
	image: string;
	count: number;
}

interface CategoriesShowcaseProps {
	categories: Category[];
}

export default function CategoriesShowcase({
	categories,
}: CategoriesShowcaseProps) {
	const navigate = useNavigate();

	return (
		<section className='py-16 justify-center mx-auto'>
			<div className='craft-container'>
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className='text-3xl font-bold mb-4'>تصفح فئات منتجاتنا</h2>
					<p className='text-muted-foreground max-w-2xl mx-auto'>
						مجموعة متنوعة من الحرف اليدوية المصنفة حسب النوع والاستخدام
					</p>
				</motion.div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{categories.map((category, index) => (
						<motion.div
							key={category.id}
							className='relative h-64 rounded-lg overflow-hidden cursor-pointer group'
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ scale: 1.02 }}
							onClick={() => navigate(`/categories/${category.id}`)}>
							<img
								src={category.image}
								alt={category.name}
								className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300'></div>
							<div className='absolute inset-0 flex flex-col justify-end p-6'>
								<h3 className='text-white text-2xl font-bold mb-1'>
									{category.name}
								</h3>
								<p className='text-white/80'>{category.count} منتج</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

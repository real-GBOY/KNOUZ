/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
	category: string;
}

interface ProductGridProps {
	products: Product[];
	title?: string;
	showFilters?: boolean;
}

export default function ProductGrid({
	products,
	title = "منتجاتنا",
	showFilters = false,
}: ProductGridProps) {
	const [activeCategory, setActiveCategory] = useState("الكل");

	// Get unique categories
	const categories = [
		"الكل",
		...new Set(products.map((product) => product.category)),
	];

	// Filter products based on category
	const filteredProducts =
		activeCategory === "الكل"
			? products
			: products.filter((product) => product.category === activeCategory);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4 },
		},
	};

	return (
		<section className='py-24'>
			<div className='craft-container'>
				<motion.h2
					className='text-3xl font-bold text-center mb-6'
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					{title}
				</motion.h2>

				{showFilters && (
					<motion.div
						className='flex flex-wrap justify-center gap-4 mb-12'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						{categories.map((category) => (
							<motion.button
								key={category}
								className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
									activeCategory === category
										? "bg-craft-primary text-white shadow-lg"
										: "bg-muted text-foreground hover:bg-craft-accent hover:shadow-md"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setActiveCategory(category)}>
								{category}
							</motion.button>
						))}
					</motion.div>
				)}

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}>
					{filteredProducts.map((product) => (
						<motion.div key={product.id} variants={itemVariants}>
							<ProductCard {...product} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

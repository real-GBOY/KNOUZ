/** @format */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductGrid from "@/components/ProductGrid";
import ProductSection from "@/components/ProductSection";
import { mockProducts } from "@/lib/mock-data";
import { setPageTitle } from "@/lib/utils";

const Products = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [viewMode, setViewMode] = useState<"grid" | "sections">("grid");

	useEffect(() => {
		setPageTitle("المنتجات");
	}, []);

	useEffect(() => {
		// Simulate loading delay
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	// Get unique categories from products
	const categories = [
		...new Set(mockProducts.map((product) => product.category)),
	];

	// Group products by category
	const productsByCategory = categories.reduce((acc, category) => {
		acc[category] = mockProducts.filter(
			(product) => product.category === category
		);
		return acc;
	}, {} as Record<string, typeof mockProducts>);

	return (
		<Layout>
			<div className='craft-container py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<div className='text-center mb-12'>
						<h1 className='text-4xl font-bold mb-4'>منتجاتنا</h1>
						<p className='text-muted-foreground max-w-2xl mx-auto'>
							استكشف مجموعتنا المتنوعة من الحرف اليدوية العربية الأصيلة
						</p>
					</div>

					<div className='flex justify-center mb-8'>
						<div className='flex p-1 bg-muted rounded-full'>
							<button
								className={`px-4 py-2 rounded-full text-sm transition-colors ${
									viewMode === "grid"
										? "bg-craft-primary text-white"
										: "text-muted-foreground hover:text-foreground"
								}`}
								onClick={() => setViewMode("grid")}>
								عرض الشبكة
							</button>
							<button
								className={`px-4 py-2 rounded-full text-sm transition-colors ${
									viewMode === "sections"
										? "bg-craft-primary text-white"
										: "text-muted-foreground hover:text-foreground"
								}`}
								onClick={() => setViewMode("sections")}>
								عرض الأقسام
							</button>
						</div>
					</div>

					{isLoading ? (
						<div className='flex justify-center items-center h-[300px]'>
							<div className='relative w-12 h-12'>
								<motion.div
									className='absolute inset-0 rounded-full border-2 border-craft-primary'
									initial={{ rotate: 0 }}
									animate={{ rotate: 360 }}
									transition={{
										duration: 1,
										ease: "linear",
										repeat: Infinity,
									}}
								/>
							</div>
						</div>
					) : viewMode === "grid" ? (
						<ProductGrid products={mockProducts} showFilters={true} />
					) : (
						<div>
							{categories.map((category) => (
								<ProductSection
									key={category}
									category={category}
									products={productsByCategory[category]}
								/>
							))}
						</div>
					)}
				</motion.div>
			</div>
		</Layout>
	);
};

export default Products;

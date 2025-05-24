/** @format */

import { useEffect } from "react";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import ProductGrid from "@/components/ProductGrid";
import CategoriesShowcase from "@/components/CategoriesShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import ArtisansShowcase from "@/components/ArtisansShowcase";
import { setPageTitle } from "@/lib/utils";

import {
	mockProducts,
	mockCategories,
	mockTestimonials,
} from "@/lib/mock-data";

const Index = () => {
	useEffect(() => {
		setPageTitle("الرئيسية");
	}, []);

	// Smooth scroll to section when clicking on navigation links
	useEffect(() => {
		const handleSmoothScroll = (e: MouseEvent) => {
			const target = e.target as HTMLAnchorElement;

			if (target.hash && target.hash.startsWith("#")) {
				e.preventDefault();

				const targetElement = document.querySelector(target.hash);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: "smooth" });
				}
			}
		};

		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener("click", handleSmoothScroll);
		});

		return () => {
			document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
				anchor.removeEventListener("click", handleSmoothScroll);
			});
		};
	}, []);

	return (
		<Layout>
			<HeroSection />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				<div className='bg-gradient-to-b from-background to-muted/30'>
					<FeaturedSection />
				</div>

				<div className='bg-background'>
					<ProductGrid
						products={mockProducts.slice(0, 4)}
						title='منتجاتنا المميزة'
					/>
				</div>

				<div className='bg-gradient-to-b from-muted/30 to-background'>
					<CategoriesShowcase categories={mockCategories} />
				</div>

				<div className='bg-background'>
					<ArtisansShowcase />
				</div>

				<div className='bg-gradient-to-b from-background to-muted/30'>
					<TestimonialsSection testimonials={mockTestimonials} />
				</div>

				<div className='bg-background'>
					<ContactSection />
				</div>
			</motion.div>
		</Layout>
	);
};

export default Index;

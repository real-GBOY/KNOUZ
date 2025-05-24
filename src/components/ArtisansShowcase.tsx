/** @format */

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { artisanProfiles } from "@/lib/artisan-data";
import ArtisanProfileCard from "./ArtisanProfileCard";

export default function ArtisansShowcase() {
	const navigate = useNavigate();
	const featuredArtisans = artisanProfiles.slice(0, 3); // Show only 3 artisans on the home page

	return (
		<section className='py-16 bg-muted/30'>
			<div className='craft-container'>
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className='text-3xl font-bold mb-4'>تعرف على حرفيينا</h2>
					<p className='text-muted-foreground max-w-2xl mx-auto'>
						أمهر الحرفيين المصريين الذين يحافظون على تراثنا الثقافي من خلال
						حرفهم اليدوية التقليدية
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{featuredArtisans.map((artisan) => (
						<ArtisanProfileCard key={artisan.id} artisan={artisan} />
					))}
				</div>

				<motion.div
					className='text-center mt-12'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}>
					<button
						onClick={() => navigate("/artisans")}
						className='bg-craft-primary hover:bg-craft-primary/90 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors'>
						عرض جميع الحرفيين
					</button>
				</motion.div>
			</div>
		</section>
	);
}

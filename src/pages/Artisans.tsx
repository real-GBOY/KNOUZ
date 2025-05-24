/** @format */

import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { artisanProfiles } from "@/lib/artisan-data";
import ArtisanProfileCard from "@/components/ArtisanProfileCard";
import { setPageTitle } from "@/lib/utils";

const Artisans = () => {
	useEffect(() => {
		setPageTitle("الحرفيين");
	}, []);

	return (
		<Layout>
			<div className='craft-container py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<div className='text-center mb-12'>
						<h1 className='text-4xl font-bold mb-4'>حرفييننا</h1>
						<p className='text-muted-foreground max-w-2xl mx-auto'>
							تعرف على أمهر الحرفيين المصريين الذين يحافظون على تراثنا الثقافي
							من خلال حرفهم اليدوية التقليدية
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{artisanProfiles.map((artisan) => (
							<ArtisanProfileCard key={artisan.id} artisan={artisan} />
						))}
					</div>
				</motion.div>
			</div>
		</Layout>
	);
};

export default Artisans;

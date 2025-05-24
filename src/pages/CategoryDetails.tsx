/** @format */

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, FileVideo, Folder } from "lucide-react";
import Layout from "@/components/Layout";
import { mockCategories, mockProducts } from "@/lib/mock-data";
import DocumentaryVideo from "@/components/DocumentaryVideo";
import ProductGrid from "@/components/ProductGrid";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";

const CategoryDetails = () => {
	const { id } = useParams();
	const category = mockCategories.find((cat) => cat.id === id);

	// Filter products that belong to this category
	const categoryProducts = mockProducts.filter(
		(product) => product.category === category?.name
	);

	if (!category) {
		return (
			<Layout>
				<div className='craft-container py-16 text-center'>
					<h1 className='text-2xl font-bold text-red-500'>الفئة غير موجودة</h1>
					<p className='mt-4'>
						<Link
							to='/categories'
							className='text-craft-primary hover:underline'>
							العودة إلى قائمة الفئات
						</Link>
					</p>
				</div>
			</Layout>
		);
	}

	return (
		<Layout>
			<div className='craft-container py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					{/* Hero Section */}
					<div className='relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12'>
						<img
							src={category.image}
							alt={category.name}
							className='w-full h-full object-cover'
						/>
						<div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8'>
							<motion.h1
								className='text-4xl md:text-5xl font-bold text-white mb-2'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}>
								{category.name}
							</motion.h1>
							<motion.p
								className='text-white/90 text-xl max-w-2xl'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}>
								{category.description}
							</motion.p>
						</div>
					</div>

					{/* Tabs Navigation */}
					<Tabs defaultValue='about' className='mb-12'>
						<TabsList className='grid w-full grid-cols-3 mb-8'>
							<TabsTrigger value='about' className='text-lg'>
								<Book className='ml-2 h-4 w-4' />
								عن الفئة
							</TabsTrigger>
							<TabsTrigger value='video' className='text-lg'>
								<FileVideo className='ml-2 h-4 w-4' />
								الفيديو التعريفي
							</TabsTrigger>
							<TabsTrigger value='products' className='text-lg'>
								<Folder className='ml-2 h-4 w-4' />
								المنتجات
							</TabsTrigger>
						</TabsList>

						{/* About Tab */}
						<TabsContent value='about'>
							<motion.div
								className='grid grid-cols-1 md:grid-cols-3 gap-8'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}>
								<div className='col-span-2'>
									<h2 className='text-2xl font-bold mb-4'>
										نبذة عن {category.name}
									</h2>
									<p className='mb-6 leading-relaxed text-muted-foreground'>
										{category.longDescription}
									</p>

									<h3 className='text-xl font-bold mb-3'>النبذة التاريخية</h3>
									<p className='mb-6 leading-relaxed text-muted-foreground'>
										{category.historyNote}
									</p>
								</div>

								<div className='bg-muted/30 p-6 rounded-lg'>
									<h3 className='text-xl font-bold mb-4'>المواد المستخدمة</h3>
									<ul className='mb-6 space-y-2'>
										{category.materials.map((material, index) => (
											<li key={index} className='flex items-center'>
												<span className='w-2 h-2 bg-craft-primary rounded-full inline-block ml-2'></span>
												{material}
											</li>
										))}
									</ul>

									<Separator className='my-4' />

									<h3 className='text-xl font-bold mb-4'>التقنيات الحرفية</h3>
									<ul className='space-y-2'>
										{category.techniques.map((technique, index) => (
											<li key={index} className='flex items-center'>
												<span className='w-2 h-2 bg-craft-primary rounded-full inline-block ml-2'></span>
												{technique}
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						</TabsContent>

						{/* Video Tab */}
						<TabsContent value='video'>
							<DocumentaryVideo
								title={category.videoTitle}
								description={category.videoDescription}
								videoUrl={category.videoUrl}
								thumbnailUrl={category.videoThumbnail}
							/>
						</TabsContent>

						{/* Products Tab */}
						<TabsContent value='products'>
							<ProductGrid
								products={categoryProducts}
								title={`منتجات ${category.name}`}
								showFilters={false}
							/>
						</TabsContent>
					</Tabs>
				</motion.div>
			</div>
		</Layout>
	);
};

export default CategoryDetails;

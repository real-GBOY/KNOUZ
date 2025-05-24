/** @format */

import { motion } from "framer-motion";
import { PlayCircle, Book } from "lucide-react";
import { useState } from "react";

interface DocumentaryVideoProps {
	title: string;
	description: string;
	videoUrl: string;
	thumbnailUrl: string;
}

export default function DocumentaryVideo({
	title,
	description,
	videoUrl,
	thumbnailUrl,
}: DocumentaryVideoProps) {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<motion.section
			className='py-16 bg-muted/30 rounded-lg'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}>
			<div className='craft-container'>
				<div className='flex flex-col md:flex-row gap-8 items-center'>
					<motion.div
						className='w-full md:w-2/3 relative rounded-2xl overflow-hidden shadow-lg'
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						{!isPlaying ? (
							<div
								className='relative group cursor-pointer'
								onClick={() => setIsPlaying(true)}>
								<img
									src={thumbnailUrl}
									alt={title}
									className='w-full h-[400px] object-cover'
								/>
								<div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300'>
									<PlayCircle className='w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-all duration-300' />
								</div>
							</div>
						) : (
							<iframe
								width='100%'
								height='400'
								src={videoUrl}
								title={title}
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								className='aspect-video'
							/>
						)}
					</motion.div>

					<motion.div
						className='w-full md:w-1/3'
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<div className='flex items-center gap-2 mb-4'>
							<Book className='h-5 w-5 text-craft-primary' />
							<h2 className='text-2xl font-bold'>{title}</h2>
						</div>
						<p className='text-muted-foreground leading-relaxed'>
							{description}
						</p>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}

/** @format */

import { motion } from "framer-motion";
import { ArtisanProfile } from "@/lib/artisan-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, MessageCircle, Share2 } from "lucide-react";

interface ArtisanProfileCardProps {
	artisan: ArtisanProfile;
}

const ArtisanProfileCard = ({ artisan }: ArtisanProfileCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='craft-card hover:shadow-lg'>
			<div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
				<img
					src={artisan.featuredImage}
					alt={artisan.fullName}
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
				<div className='absolute bottom-4 right-4 text-white'>
					<h3 className='text-xl font-bold'>{artisan.fullName}</h3>
					<p className='text-sm opacity-90'>{artisan.craftType}</p>
				</div>
			</div>

			<div className='space-y-4'>
				<div className='flex items-center gap-2 text-muted-foreground'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'>
						<path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
						<circle cx='12' cy='10' r='3' />
					</svg>
					<span>
						{artisan.location.city}، {artisan.location.governorate}
					</span>
				</div>

				<p className='text-muted-foreground'>{artisan.background}</p>

				<div className='border-t pt-4'>
					<h4 className='font-semibold mb-2'>منتج مميز</h4>
					<div className='flex gap-4'>
						<div className='w-20 h-20 rounded-lg overflow-hidden'>
							<img
								src={artisan.sampleProduct.image}
								alt={artisan.sampleProduct.name}
								className='w-full h-full object-cover'
							/>
						</div>
						<div>
							<h5 className='font-medium'>{artisan.sampleProduct.name}</h5>
							<p className='text-sm text-muted-foreground'>
								{artisan.sampleProduct.description}
							</p>
						</div>
					</div>
				</div>

				<div className='flex gap-3 pt-4 border-t'>
					{artisan.socialMedia.tiktok && (
						<a
							href={`https://tiktok.com/${artisan.socialMedia.tiktok}`}
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-craft-primary transition-colors'>
							<Share2 size={20} />
						</a>
					)}
					{artisan.socialMedia.whatsapp && (
						<a
							href={`https://wa.me/${artisan.socialMedia.whatsapp.replace(
								"+",
								""
							)}`}
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-craft-primary transition-colors'>
							<MessageCircle size={20} />
						</a>
					)}
					{artisan.socialMedia.facebook && (
						<a
							href={`https://facebook.com/${artisan.socialMedia.facebook}`}
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-craft-primary transition-colors'>
							<Facebook size={20} />
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default ArtisanProfileCard;

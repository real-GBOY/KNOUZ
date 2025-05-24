/** @format */

import { motion } from "framer-motion";
import { useApp } from "@/lib/context";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";

interface ProductCardProps {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
	category: string;
	className?: string;
}

const ProductCard = ({
	id,
	name,
	description,
	price,
	image,
	category,
	className,
}: ProductCardProps) => {
	const { user, addToCart } = useApp();
	const navigate = useNavigate();

	const handleAddToCart = () => {
		if (!user) {
			toast.error(
				"سجّل الدخول للشراء\nيجب تسجيل الدخول لإضافة منتجات إلى السلة"
			);
			navigate("/auth");
			return;
		}

		addToCart({
			id,
			name,
			price,
			image,
		});

		toast.success(
			<div className='flex items-center gap-2'>
				<span>تمت الإضافة إلى السلة</span>
				<span className='font-bold'>{name}</span>
			</div>
		);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className={cn(
				"group relative bg-muted/30 rounded-lg overflow-hidden flex flex-col h-[400px]",
				className
			)}>
			<div className='relative w-full h-48 overflow-hidden'>
				<img
					src={image}
					alt={name}
					className='w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300'
				/>
				<div className='absolute top-2 right-2 bg-craft-primary/90 text-white px-2 py-1 rounded-full text-xs'>
					{category}
				</div>
			</div>
			<div className='p-4 flex flex-col flex-1'>
				<h3 className='text-lg font-semibold mb-1 line-clamp-1'>{name}</h3>
				<p className='text-sm text-muted-foreground mb-4 line-clamp-2 flex-1'>
					{description}
				</p>
				<div className='flex items-center justify-between mt-auto'>
					<span className='text-lg font-semibold'>
						{price.toLocaleString()} جنيه
					</span>
					<button
						onClick={handleAddToCart}
						className='bg-craft-primary text-white px-4 py-2 rounded-md hover:bg-craft-primary/90 transition-colors'>
						أضف للسلة
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default ProductCard;

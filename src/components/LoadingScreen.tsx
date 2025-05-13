/** @format */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
	duration?: number;
}

export default function LoadingScreen({ duration = 1000 }: LoadingScreenProps) {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, duration);

		return () => clearTimeout(timer);
	}, [duration]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className='fixed inset-0 z-50 flex items-center justify-center bg-background'
					initial={{ opacity: 1 }}
					exit={{
						opacity: 0,
						transition: {
							duration: 0.5,
							ease: "easeInOut",
						},
					}}>
					<div className='flex flex-col items-center gap-6'>
						<motion.div
							className='relative w-20 h-20'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}>
							<motion.div
								className='absolute inset-0 rounded-full border-4 border-craft-primary'
								initial={{ rotate: 0, scale: 1, opacity: 1 }}
								animate={{
									rotate: 360,
									scale: [1, 1.1, 1],
									opacity: [1, 0.8, 1],
								}}
								transition={{
									duration: 2,
									ease: "linear",
									repeat: Infinity,
								}}
							/>
							<motion.div
								className='absolute inset-2 rounded-full border-4 border-craft-accent'
								initial={{ rotate: 0 }}
								animate={{ rotate: -360 }}
								transition={{
									duration: 3,
									ease: "linear",
									repeat: Infinity,
								}}
							/>
							<motion.div
								className='absolute inset-4 rounded-full border-4 border-craft-secondary'
								initial={{ scale: 0.8 }}
								animate={{ scale: [0.8, 1.1, 0.8] }}
								transition={{
									duration: 2.5,
									ease: "easeInOut",
									repeat: Infinity,
								}}
							/>
						</motion.div>
						<motion.h1
							className='text-2xl font-bold text-craft-primary'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}>
							الحِرَف العربية
						</motion.h1>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

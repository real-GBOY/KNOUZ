/** @format */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useApp } from "@/lib/context";
import { setPageTitle } from "@/lib/utils";
import { toast } from "react-toastify";

const Cart = () => {
	const { cart, removeFromCart, updateCartItemQuantity, getCartTotal } =
		useApp();
	const [isProcessing, setIsProcessing] = useState(false);

	useEffect(() => {
		setPageTitle("سلة التسوق");
	}, []);

	const simulatePayment = async () => {
		// Simulate API call delay
		await new Promise((resolve) => setTimeout(resolve, 2000));
		// Randomly succeed or fail (80% success rate)
		return Math.random() < 0.8;
	};

	const handleCheckout = async () => {
		try {
			setIsProcessing(true);
			const paymentSuccess = await simulatePayment();

			if (paymentSuccess) {
				toast.success("تم إتمام الطلب بنجاح! شكراً لتسوقك معنا.");
				// Clear the cart after successful checkout
				cart.forEach((item) => removeFromCart(item.id));
			} else {
				toast.error("فشلت عملية الدفع. يرجى المحاولة مرة أخرى.");
			}
		} catch (error) {
			toast.error("حدث خطأ أثناء معالجة الدفع. يرجى المحاولة مرة أخرى.");
		} finally {
			setIsProcessing(false);
		}
	};

	if (cart.length === 0) {
		return (
			<Layout>
				<div className='craft-container py-16'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='text-center'>
						<h1 className='text-3xl font-bold mb-4'>سلة التسوق</h1>
						<p className='text-muted-foreground'>سلة التسوق فارغة</p>
					</motion.div>
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
					<h1 className='text-3xl font-bold mb-8 text-center'>سلة التسوق</h1>

					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
						<div className='lg:col-span-2'>
							<div className='space-y-4'>
								{cart.map((item) => (
									<motion.div
										key={item.id}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										className='flex items-center gap-4 bg-muted/30 p-4 rounded-lg'>
										<img
											src={item.image}
											alt={item.name}
											className='w-24 h-24 object-cover rounded-md'
										/>
										<div className='flex-1'>
											<h3 className='font-semibold mb-1'>{item.name}</h3>
											<p className='text-muted-foreground mb-2'>
												{item.price.toLocaleString()} جنيه
											</p>
											<div className='flex items-center gap-2'>
												<button
													onClick={() =>
														updateCartItemQuantity(item.id, item.quantity - 1)
													}
													className='w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80'>
													-
												</button>
												<span className='w-8 text-center'>{item.quantity}</span>
												<button
													onClick={() =>
														updateCartItemQuantity(item.id, item.quantity + 1)
													}
													className='w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80'>
													+
												</button>
											</div>
										</div>
										<button
											onClick={() => removeFromCart(item.id)}
											className='text-red-500 hover:text-red-600'>
											حذف
										</button>
									</motion.div>
								))}
							</div>
						</div>

						<div className='lg:col-span-1'>
							<div className='bg-muted/30 p-6 rounded-lg sticky top-4'>
								<h2 className='text-xl font-semibold mb-4'>ملخص الطلب</h2>
								<div className='space-y-2 mb-4'>
									<div className='flex justify-between'>
										<span>عدد المنتجات:</span>
										<span>{cart.length}</span>
									</div>
									<div className='flex justify-between'>
										<span>المجموع:</span>
										<span className='font-semibold'>
											{getCartTotal().toLocaleString()} جنيه
										</span>
									</div>
								</div>
								<button
									className='w-full bg-craft-primary text-white py-2 px-4 rounded-md hover:bg-craft-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
									onClick={handleCheckout}
									disabled={isProcessing}>
									{isProcessing ? "جاري المعالجة..." : "إتمام الطلب"}
								</button>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</Layout>
	);
};

export default Cart;

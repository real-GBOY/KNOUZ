/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const { toast } = useToast();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (!formData.name || !formData.email || !formData.message) {
			toast({
				title: "خطأ",
				description: "يرجى ملء جميع الحقول المطلوبة",
				variant: "destructive",
			});
			return;
		}

		toast({
			title: "تم الإرسال بنجاح!",
			description: "سنقوم بالرد عليك في أقرب وقت ممكن",
		});

		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	const contactInfo = [
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
				</svg>
			),
			title: "اتصل بنا",
			info: "01023164703",
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
					<polyline points='22,6 12,13 2,6'></polyline>
				</svg>
			),
			title: "راسلنا",
			info: "konuz2025@gmail.com",
		},
		// {
		//   icon: (
		//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		//       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
		//       <circle cx="12" cy="10" r="3"></circle>
		//     </svg>
		//   ),
		//   title: "موقعنا",
		//   info: "المملكة العربية السعودية، الرياض",
		// },
	];

	return (
		<section className='py-24'>
			<div className='craft-container'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className='text-3xl font-bold mb-4'>تواصل معنا</h2>
					<p className='text-muted-foreground max-w-2xl mx-auto'>
						نحن دائماً سعداء بالرد على استفساراتكم واقتراحاتكم
					</p>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
					<div className='lg:col-span-1'>
						<div className='space-y-6'>
							{contactInfo.map((item, index) => (
								<motion.div
									key={index}
									className='flex items-center p-6 rounded-xl bg-background craft-shadow hover:shadow-lg transition-shadow duration-300'
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.2 }}>
									<div className='bg-craft-primary/10 p-4 rounded-full text-craft-primary mr-6'>
										{item.icon}
									</div>
									<div>
										<h3 className='font-semibold mb-1'>{item.title}</h3>
										<p className='text-muted-foreground'>{item.info}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<motion.div
						className='lg:col-span-2 bg-background rounded-xl p-8 craft-shadow hover:shadow-lg transition-shadow duration-300'
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}>
						<h3 className='text-2xl font-semibold mb-8'>أرسل لنا رسالة</h3>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<label htmlFor='name' className='block mb-2 font-medium'>
									الاسم
								</label>
								<input
									type='text'
									id='name'
									name='name'
									className='w-full p-4 border border-border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-craft-primary transition-all duration-300'
									value={formData.name}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label htmlFor='email' className='block mb-2 font-medium'>
									البريد الإلكتروني
								</label>
								<input
									type='email'
									id='email'
									name='email'
									className='w-full p-4 border border-border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-craft-primary transition-all duration-300'
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label htmlFor='message' className='block mb-2 font-medium'>
									الرسالة
								</label>
								<textarea
									id='message'
									name='message'
									rows={5}
									className='w-full p-4 border border-border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-craft-primary transition-all duration-300'
									value={formData.message}
									onChange={handleChange}></textarea>
							</div>
							<motion.button
								type='submit'
								className='bg-craft-primary text-white py-4 px-8 rounded-lg font-semibold hover:bg-craft-primary/90 transition-colors duration-300'
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}>
								إرسال
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

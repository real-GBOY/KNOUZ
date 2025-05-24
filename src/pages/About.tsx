/** @format */

import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { setPageTitle } from "@/lib/utils";

const About = () => {
	useEffect(() => {
		setPageTitle("من نحن");
	}, []);

	const features = [
		{
			title: "التراث والأصالة",
			description: "زيادة الوعي بالحرف اليدويه",
		},
		{
			title: "الجودة العالية",
			description: "كل منتج يمر بمراحل تدقيق  لضمان تقديم أعلى مستويات الجودة",
		},
		{
			title: "الاستدامة",
			description:
				"نستخدم مواد صديقة للبيئة ونتبع ممارسات مستدامة في جميع مراحل الإنتاج",
		},
		{
			title: "دعم الحرفيين",
			description: "تسهيل التواصل بين الحرفيين والمستهلكين",
		},
	];

	return (
		<Layout>
			<motion.div
				className='craft-container py-16'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				<div className='max-w-4xl mx-auto'>
					<motion.div
						className='text-center mb-12'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						<h1 className='text-4xl font-bold mb-6'>من نحن</h1>
						<p className='text-muted-foreground max-w-2xl mx-auto'>
							تعرف على قصة كنوز ورسالتنا في الحفاظ على التراث الثقافي
						</p>
					</motion.div>

					<motion.div
						className='mb-16'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-8'>
							<img
								src='https://i.postimg.cc/ht8znMRB/Team-Main.jpg'
								alt='فريقنا'
								className='w-full h-[400px] object-cover rounded-lg'
							/>
						</div>

						<div className='prose max-w-none'>
							<p className='text-lg leading-relaxed mb-6'>
								احنا حملة توعويه بالحرف اليدويه واهميتها ، بنعرفكم اي هي انواع
								الحرف اليدويه المختلفه - وفين هتلاقوها ، ومين الناس المعروفه
								فيها وكمان لو حابين تتعلموها او تشتروها .
							</p>
							<p className='text-lg leading-relaxed mb-6'>
								وكمان هدفنا زيادة الوعي بالحرف اليدويه واهميتها الثقافيه وتعليم
								الشباب والكبار مهارات الحرف اليدويه
							</p>
							<p className='text-lg leading-relaxed'>
								نعمل مع أمهر الحرفيين في مصر، الذين يضعون خبرتهم وإبداعهم في كل
								قطعة يصنعونها. نحرص على استخدام المواد الخام عالية الجودة
								والأساليب التقليدية في الصناعة، مما يضمن تقديم منتجات فريدة
								وأصيلة تعكس عراقة التراث العربي.
							</p>
						</div>
					</motion.div>

					<motion.div
						className='mb-16'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}>
						<h2 className='text-2xl font-bold mb-8'>قيمنا</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{features.map((feature, index) => (
								<motion.div
									key={index}
									className='p-6 bg-muted/30 rounded-lg'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}>
									<h3 className='text-xl font-semibold mb-3 text-craft-primary'>
										{feature.title}
									</h3>
									<p className='text-muted-foreground'>{feature.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</Layout>
	);
};

export default About;

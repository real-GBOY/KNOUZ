/** @format */

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const footerSections = [
		{
			title: "روابط سريعة",
			links: [
				{ name: "الرئيسية", path: "/" },
				{ name: "المنتجات", path: "/products" },
				{ name: "الفئات", path: "/categories" },
				{ name: "من نحن", path: "/about" },
				{ name: "اتصل بنا", path: "/contact" },
			],
		},
		{
			title: "تواصل معنا",
			content: [
				"البريد الإلكتروني: konuz2025@gmail.com",
				"الجوال: 01023164703",
			],
		},
		{
			title: "تابعنا",
			content: [
				{
					name: "انستغرام",
					icon: <FaInstagram className='w-5 h-5' />,
					link: "https://www.instagram.com/konuz.eg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
				},
				{
					name: "فيسبوك",
					icon: <FaFacebookF className='w-5 h-5' />,
					link: "https://www.facebook.com/profile.php?id=61574400249517",
				},
				{
					name: "تيك توك",
					icon: <FaTiktok className='w-5 h-5' />,
					link: "https://www.tiktok.com/@.konuz.eg?fbclid=IwY2xjawKd9y1leHRuA2FlbQIxMABicmlkETF5Sk1nbWI1dWNsd3d0ZHk3AR6cnrg2WJ6ydp1tapm5iMv0kG02jspEN5emiLPo6RfDPhUfhoX9HPaaXWdtTA_aem_XOyoZ6perK8p7d_Xf9SM2A",
				},
			],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const childVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<motion.footer
			className='bg-muted/50 mt-16 py-12'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}>
			<div className='craft-container'>
				<motion.div
					className='grid grid-cols-1 md:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}>
					{footerSections.map((section, index) => (
						<motion.div key={index} className='mb-6' variants={childVariants}>
							<h3 className='text-lg font-bold mb-4 text-craft-primary'>
								{section.title}
							</h3>
							<ul className='space-y-2'>
								{section.links &&
									section.links.map((link, i) => (
										<li key={i}>
											<NavLink
												to={link.path}
												className='text-foreground/80 hover:text-craft-primary transition-colors'>
												{link.name}
											</NavLink>
										</li>
									))}
								{section.content &&
									section.content.map((item, index) => (
										<div key={index} className='flex items-center gap-2'>
											{item.icon && item.link ? (
												<a
													href={item.link}
													target='_blank'
													rel='noopener noreferrer'
													className='flex items-center gap-2 hover:text-craft-primary transition-colors'>
													{item.icon}
													<span>{item.name}</span>
												</a>
											) : (
												<span>{item}</span>
											)}
										</div>
									))}
							</ul>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className='mt-12 pt-6 border-t border-border text-center text-foreground/70'
					variants={childVariants}>
					<p>© {currentYear} كُنُوز - جميع الحقوق محفوظة</p>
				</motion.div>
			</div>
		</motion.footer>
	);
}

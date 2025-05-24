/** @format */

import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import { useApp } from "@/lib/context";
import { cn } from "@/lib/utils";

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const { user, logout, cart } = useApp();
	const [isScrolled, setIsScrolled] = useState(false);

	// Initial loading animation
	useEffect(() => {
		if (isFirstLoad) {
			const timer = setTimeout(() => {
				setIsFirstLoad(false);
			}, 3500); // 3 seconds for loading + 0.5s for fade out

			return () => clearTimeout(timer);
		}
	}, [isFirstLoad]);

	// Page transition loading animation
	useEffect(() => {
		if (!isFirstLoad) {
			setIsLoading(true);
			const timer = setTimeout(() => {
				setIsLoading(false);
			}, 800); // Just a brief loading state for internal navigation

			return () => clearTimeout(timer);
		}
	}, [location.pathname, isFirstLoad]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// If it's the first load, show the main loading screen
	if (isFirstLoad) {
		return <LoadingScreen duration={3000} />;
	}

	const navItems = [
		{ href: "/", label: "الرئيسية" },
		{ href: "/products", label: "المنتجات" },
		{ href: "/artisans", label: "الحرفيين" },
		{ href: "/about", label: "من نحن" },
		{ href: "/contact", label: "اتصل بنا" },
	];

	return (
		<div className='flex flex-col min-h-screen'>
			<header
				className={cn(
					"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
					isScrolled
						? "bg-background/80 backdrop-blur-md shadow-sm"
						: "bg-transparent"
				)}>
				<div className='craft-container'>
					<nav className='flex items-center justify-between h-16'>
						<Link to='/' className='text-2xl font-bold text-craft-primary'>
							كنوز
						</Link>

						<div className='flex items-center gap-8'>
							<div className='hidden md:flex items-center gap-6'>
								{navItems.map((item) => (
									<Link
										key={item.href}
										to={item.href}
										className={cn(
											"text-sm font-medium transition-colors hover:text-craft-primary",
											location.pathname === item.href
												? "text-craft-primary"
												: "text-muted-foreground"
										)}>
										{item.label}
									</Link>
								))}
							</div>

							<div className='flex items-center gap-4'>
								<Link
									to='/cart'
									className='relative text-muted-foreground hover:text-craft-primary transition-colors'>
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
										<circle cx='8' cy='21' r='1' />
										<circle cx='19' cy='21' r='1' />
										<path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
									</svg>
									{cart.length > 0 && (
										<span className='absolute -top-2 -right-2 bg-craft-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
											{cart.length}
										</span>
									)}
								</Link>

								{user ? (
									<div className='flex items-center gap-4'>
										<span className='text-sm text-muted-foreground'>
											مرحباً، {user.name}
										</span>
										<button
											onClick={logout}
											className='text-sm text-muted-foreground hover:text-craft-primary transition-colors'>
											تسجيل الخروج
										</button>
									</div>
								) : (
									<Link
										to='/auth'
										className='text-sm text-muted-foreground hover:text-craft-primary transition-colors'>
										تسجيل الدخول
									</Link>
								)}
							</div>
						</div>
					</nav>
				</div>
			</header>
			<main className='flex-grow pt-20'>
				<AnimatePresence mode='wait'>
					{isLoading ? (
						<motion.div
							key='loading'
							className='flex items-center justify-center min-h-[50vh]'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<div className='relative w-12 h-12'>
								<motion.div
									className='absolute inset-0 rounded-full border-2 border-craft-primary'
									initial={{ rotate: 0 }}
									animate={{ rotate: 360 }}
									transition={{
										duration: 1,
										ease: "linear",
										repeat: Infinity,
									}}
								/>
							</div>
						</motion.div>
					) : (
						<motion.div
							key={location.pathname}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</main>
			<Footer />
		</div>
	);
}

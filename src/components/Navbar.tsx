/** @format */

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { cn } from "@/lib/utils";

const navItems = [
	{ name: "الرئيسية", path: "/" },
	{ name: "المنتجات", path: "/products" },
	{ name: "الفئات", path: "/categories" },
	{ name: "من نحن", path: "/about" },
	{ name: "اتصل بنا", path: "/contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (
				isMobileMenuOpen &&
				!target.closest(".mobile-menu") &&
				!target.closest(".mobile-menu-button")
			) {
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [isMobileMenuOpen]);

	// Close mobile menu on window resize if screen becomes large
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isMobileMenuOpen) {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isMobileMenuOpen]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	return (
		<motion.header
			className={cn(
				"fixed top-0 right-0 left-0 z-50 transition-all duration-300",
				// Responsive padding
				"px-4 sm:px-6 lg:px-8 py-3 sm:py-4",
				isScrolled
					? "bg-background/90 backdrop-blur-md shadow-sm"
					: "bg-transparent"
			)}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 120, damping: 20 }}>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				{/* Logo */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className='flex items-center z-10'>
					<NavLink
						to='/'
						className='text-xl sm:text-2xl lg:text-3xl font-bold text-craft-primary hover:text-craft-primary/80 transition-colors duration-300'>
						كُنُوز
					</NavLink>
				</motion.div>

				{/* Desktop Navigation */}
				<motion.nav
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className='hidden md:flex items-center gap-4 lg:gap-8'>
					<ul className='flex items-center gap-4 lg:gap-8'>
						{navItems.map((item, index) => (
							<motion.li
								key={item.path}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.3 + index * 0.1,
									duration: 0.5,
									ease: "easeOut",
								}}>
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										cn(
											"font-medium text-sm lg:text-lg hover:text-craft-primary transition-colors duration-300 relative group",
											isActive ? "text-craft-primary" : "text-foreground"
										)
									}>
									{item.name}
									{/* Hover underline effect */}
									<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-craft-primary transition-all duration-300 group-hover:w-full'></span>
								</NavLink>
							</motion.li>
						))}
					</ul>
					<div className='flex items-center gap-2 lg:gap-4 ml-4 lg:ml-8'>
						<LanguageSelector />
						<ThemeToggle />
					</div>
				</motion.nav>

				{/* Mobile Controls */}
				<div className='flex items-center gap-2 sm:gap-4 md:hidden'>
					{/* Theme and Language toggles for mobile - show only when menu is closed */}
					<div
						className={cn(
							"flex items-center gap-2 transition-opacity duration-200",
							isMobileMenuOpen ? "opacity-0" : "opacity-100"
						)}>
						<LanguageSelector />
						<ThemeToggle />
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='mobile-menu-button text-foreground hover:text-craft-primary transition-colors p-2 z-10'
						aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
						{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className='fixed inset-0 bg-background/80 backdrop-blur-sm z-40'
							onClick={() => setIsMobileMenuOpen(false)}
						/>

						{/* Mobile Menu Content */}
						<motion.div
							initial={{ opacity: 0, y: -20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -20, scale: 0.95 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							className='mobile-menu fixed top-16 sm:top-20 left-4 right-4 bg-background/95 backdrop-blur-md border rounded-lg shadow-lg z-50 max-h-[80vh] overflow-y-auto'>
							<nav className='p-4 sm:p-6'>
								{/* Mobile menu header with controls */}
								<div className='flex items-center justify-between mb-6 pb-4 border-b'>
									<h3 className='text-lg font-semibold text-foreground'>
										القائمة
									</h3>
									<div className='flex items-center gap-3'>
										<LanguageSelector />
										<ThemeToggle />
									</div>
								</div>

								{/* Navigation Links */}
								<ul className='flex flex-col gap-1'>
									{navItems.map((item, index) => (
										<motion.li
											key={item.path}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}>
											<NavLink
												to={item.path}
												className={({ isActive }) =>
													cn(
														"block py-3 px-4 font-medium text-base sm:text-lg rounded-lg transition-all duration-200",
														isActive
															? "text-craft-primary bg-craft-primary/10"
															: "text-foreground hover:text-craft-primary hover:bg-foreground/5"
													)
												}
												onClick={() => setIsMobileMenuOpen(false)}>
												{item.name}
											</NavLink>
										</motion.li>
									))}
								</ul>
							</nav>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.header>
	);
}

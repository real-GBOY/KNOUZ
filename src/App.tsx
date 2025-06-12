/** @format */

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LazyMotion, domAnimation } from "framer-motion";
import { AppProvider } from "@/lib/context";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

// Pages
import Index from "./pages/Index";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Artisans from "./pages/Artisans";
import Auth from "@/pages/Auth";
import Cart from "@/pages/Cart";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
			staleTime: 5 * 60 * 1000, // 5 minutes
		},
	},
});

// Wrapper component to handle RTL/LTR direction
const AppContent = () => {
	const { i18n } = useTranslation();

	useEffect(() => {
		document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
	}, [i18n.language]);

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<ProductDetails />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/categories/:id' element={<CategoryDetails />} />
				<Route path='/artisans' element={<Artisans />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/cart' element={<Cart />} />
				{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
};

const App = () => (
	<ErrorBoundary>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme='system'>
				<LazyMotion features={domAnimation}>
					<TooltipProvider>
						<Toaster />
						<AppProvider>
							<AppContent />
						</AppProvider>
					</TooltipProvider>
				</LazyMotion>
			</ThemeProvider>
		</QueryClientProvider>
	</ErrorBoundary>
);

export default App;

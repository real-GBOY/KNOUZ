
import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  
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

  // If it's the first load, show the main loading screen
  if (isFirstLoad) {
    return <LoadingScreen duration={3000} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              className="flex items-center justify-center min-h-[50vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative w-12 h-12">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-craft-primary"
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
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

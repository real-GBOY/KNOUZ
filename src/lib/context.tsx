/** @format */

import { createContext, useContext, useEffect, useState } from "react";

interface User {
	email: string;
	name: string;
}

interface CartItem {
	id: string;
	name: string;
	price: number;
	image: string;
	quantity: number;
}

interface AppContextType {
	user: User | null;
	cart: CartItem[];
	login: (email: string, password: string) => boolean;
	signup: (email: string, password: string, name: string) => boolean;
	logout: () => void;
	addToCart: (item: Omit<CartItem, "quantity">) => void;
	removeFromCart: (itemId: string) => void;
	updateCartItemQuantity: (itemId: string, quantity: number) => void;
	getCartTotal: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [cart, setCart] = useState<CartItem[]>([]);

	useEffect(() => {
		// Load user from localStorage
		const storedUser = localStorage.getItem("loggedUser");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}

		// Load cart from localStorage
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, []);

	useEffect(() => {
		// Save cart to localStorage whenever it changes
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const login = (email: string, password: string) => {
		// In a real app, this would validate against a backend
		// For demo, we'll just check if the user exists in localStorage
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const user = users.find(
			(u: any) => u.email === email && u.password === password
		);

		if (user) {
			const { password, ...userWithoutPassword } = user;
			setUser(userWithoutPassword);
			localStorage.setItem("loggedUser", JSON.stringify(userWithoutPassword));
			return true;
		}
		return false;
	};

	const signup = (email: string, password: string, name: string) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]");

		// Check if user already exists
		if (users.some((u: any) => u.email === email)) {
			return false;
		}

		// Add new user
		const newUser = { email, password, name };
		users.push(newUser);
		localStorage.setItem("users", JSON.stringify(users));

		// Log in the new user
		const { password: _, ...userWithoutPassword } = newUser;
		setUser(userWithoutPassword);
		localStorage.setItem("loggedUser", JSON.stringify(userWithoutPassword));
		return true;
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("loggedUser");
	};

	const addToCart = (item: Omit<CartItem, "quantity">) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((i) => i.id === item.id);
			if (existingItem) {
				return prevCart.map((i) =>
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
				);
			}
			return [...prevCart, { ...item, quantity: 1 }];
		});
	};

	const removeFromCart = (itemId: string) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
	};

	const updateCartItemQuantity = (itemId: string, quantity: number) => {
		if (quantity < 1) return;
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === itemId ? { ...item, quantity } : item
			)
		);
	};

	const getCartTotal = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	return (
		<AppContext.Provider
			value={{
				user,
				cart,
				login,
				signup,
				logout,
				addToCart,
				removeFromCart,
				updateCartItemQuantity,
				getCartTotal,
			}}>
			{children}
		</AppContext.Provider>
	);
}

export function useApp() {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error("useApp must be used within an AppProvider");
	}
	return context;
}

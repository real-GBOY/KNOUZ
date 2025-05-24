/** @format */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useApp } from "@/lib/context";
import { setPageTitle } from "@/lib/utils";

const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [error, setError] = useState("");
	const { login, signup, user } = useApp();
	const navigate = useNavigate();

	useEffect(() => {
		setPageTitle(isLogin ? "تسجيل الدخول" : "إنشاء حساب");
	}, [isLogin]);

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user, navigate]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (isLogin) {
			const success = login(email, password);
			if (!success) {
				setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
			}
		} else {
			if (!name) {
				setError("الرجاء إدخال الاسم");
				return;
			}
			const success = signup(email, password, name);
			if (!success) {
				setError("البريد الإلكتروني مستخدم بالفعل");
			}
		}
	};

	return (
		<Layout>
			<div className='craft-container py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='max-w-md mx-auto'>
					<div className='text-center mb-8'>
						<h1 className='text-3xl font-bold mb-2'>
							{isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
						</h1>
						<p className='text-muted-foreground'>
							{isLogin
								? "سجل دخولك للوصول إلى حسابك"
								: "أنشئ حساباً جديداً للبدء في التسوق"}
						</p>
					</div>

					<div className='bg-muted/30 p-6 rounded-lg'>
						<form onSubmit={handleSubmit} className='space-y-4'>
							{!isLogin && (
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium mb-1'>
										الاسم
									</label>
									<input
										type='text'
										id='name'
										value={name}
										onChange={(e) => setName(e.target.value)}
										className='w-full px-4 py-2 rounded-md border border-input bg-background'
										required
									/>
								</div>
							)}

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium mb-1'>
									البريد الإلكتروني
								</label>
								<input
									type='email'
									id='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='w-full px-4 py-2 rounded-md border border-input bg-background'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='password'
									className='block text-sm font-medium mb-1'>
									كلمة المرور
								</label>
								<input
									type='password'
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='w-full px-4 py-2 rounded-md border border-input bg-background'
									required
								/>
							</div>

							{error && (
								<p className='text-red-500 text-sm text-center'>{error}</p>
							)}

							<button
								type='submit'
								className='w-full bg-craft-primary text-white py-2 px-4 rounded-md hover:bg-craft-primary/90 transition-colors'>
								{isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
							</button>
						</form>

						<div className='mt-4 text-center'>
							<button
								onClick={() => setIsLogin(!isLogin)}
								className='text-craft-primary hover:underline'>
								{isLogin
									? "ليس لديك حساب؟ إنشاء حساب جديد"
									: "لديك حساب بالفعل؟ تسجيل الدخول"}
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</Layout>
	);
};

export default Auth;

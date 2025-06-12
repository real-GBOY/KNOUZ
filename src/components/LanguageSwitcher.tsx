/** @format */

import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === "en" ? "ar" : "en";
		i18n.changeLanguage(newLang);
		document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
	};

	return (
		<Button
			variant='outline'
			onClick={toggleLanguage}
			className='min-w-[100px]'>
			{i18n.language === "en" ? "العربية" : "English"}
		</Button>
	);
}

/** @format */

import { useTranslation } from "react-i18next";
import { useCallback } from "react";

export function useLanguage() {
	const { i18n, t } = useTranslation();

	const changeLanguage = useCallback(
		(langCode: string) => {
			i18n.changeLanguage(langCode);
			document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";
		},
		[i18n]
	);

	const isRTL = i18n.language === "ar";

	return {
		currentLanguage: i18n.language,
		changeLanguage,
		t,
		isRTL,
		languages: [
			{
				code: "en",
				name: "English",
				nativeName: "English",
				flag: "🇺🇸",
			},
			{
				code: "ar",
				name: "Arabic",
				nativeName: "العربية",
				flag: "🇸🇦",
			},
		],
	};
}

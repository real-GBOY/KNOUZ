/** @format */

export interface ArtisanProfile {
	id: string;
	fullName: string;
	craftType: "فخار" | "نحاسيات" | "نسيج";
	location: {
		city: string;
		governorate: string;
	};
	background: string;
	sampleProduct: {
		name: string;
		description: string;
		image: string;
	};
	socialMedia: {
		tiktok?: string;
		whatsapp?: string;
		facebook?: string;
	};
	featuredImage: string;
}

export const artisanProfiles: ArtisanProfile[] = [
	{
		id: "art1",
		fullName: "أحمد محمود السيد",
		craftType: "فخار",
		location: {
			city: "الفسطاط",
			governorate: "القاهرة",
		},
		background:
			"ورث حرفة الفخار عن جده الذي كان من أشهر صناع الفخار في مصر. يتخصص في صناعة الأواني الفخارية التقليدية مع إضافة لمسات عصرية.",
		sampleProduct: {
			name: "مج فخاري مزخرف",
			description:
				"مج فخاري مصنوع يدوياً بتصميم تقليدي مصري، مزخرف بنقوش هندسية إسلامية.",
			image: "https://i.postimg.cc/sX0vd6zc/MUG.jpg",
		},
		socialMedia: {
			tiktok: "@ahmed_pottery",
			whatsapp: "+201234567890",
			facebook: "AhmedPotteryWorkshop",
		},
		featuredImage: "https://i.postimg.cc/9f20fMNq/main.jpg",
	},
	{
		id: "art2",
		fullName: "فاطمة محمد علي",
		craftType: "نسيج",
		location: {
			city: "الحرانية",
			governorate: "الجيزة",
		},
		background:
			"تعلمت فن النسيج التقليدي من والدتها منذ الصغر. تتخصص في صناعة السجاد اليدوي والمنسوجات التقليدية المصرية.",
		sampleProduct: {
			name: "سجادة صلاه مطرزة",
			description:
				"سجادة صلاه مصنوعة يدوياً من القطن المصري، مزخرفة بتصاميم إسلامية تقليدية.",
			image:
				"https://i.postimg.cc/L4xgkWVf/Whats-App-Image-2025-04-23-at-15-28-04-0a73c327.jpg",
		},
		socialMedia: {
			tiktok: "@fatima_weaving",
			whatsapp: "+201234567891",
			facebook: "FatimaTraditionalWeaving",
		},
		featuredImage:
			"https://i.postimg.cc/WbNhzf5D/Whats-App-Image-2025-04-23-at-14-34-11-5b97540b.jpg",
	},
	{
		id: "art3",
		fullName: "محمد علي حسن",
		craftType: "نحاسيات",
		location: {
			city: "الخانكة",
			governorate: "القليوبية",
		},
		background:
			"يمارس حرفة النحاس منذ أكثر من 30 عاماً. يتخصص في صناعة الأواني النحاسية التقليدية والمصابيح المزخرفة.",
		sampleProduct: {
			name: "صينية نحاس منقوشة",
			description: "صينية نحاس مصنوعة يدوياً، منقوشة بتصاميم عربية تقليدية.",
			image:
				"https://i.postimg.cc/V66Vh9Xq/Whats-App-Image-2025-04-23-at-15-31-12-c16bfae1.jpg",
		},
		socialMedia: {
			tiktok: "@mohamed_copper",
			whatsapp: "+201234567892",
			facebook: "MohamedCopperArt",
		},
		featuredImage:
			"https://i.postimg.cc/BvDzdN9p/Whats-App-Image-2025-04-23-at-14-34-12-a9aa77e9.jpg",
	},
	{
		id: "art4",
		fullName: "سعاد إبراهيم",
		craftType: "فخار",
		location: {
			city: "القرنة",
			governorate: "الأقصر",
		},
		background:
			"تتخصص في صناعة الفخار التقليدي المصري مع التركيز على الأواني المستوحاة من التراث الفرعوني.",
		sampleProduct: {
			name: "زهرية فخارية فرعونية",
			description: "زهرية فخارية مصنوعة يدوياً بتصميم مستوحى من الفن الفرعوني.",
			image:
				"https://i.postimg.cc/j2TcJ4Cy/Whats-App-Image-2025-04-23-at-15-26-25-7c624b67.jpg",
		},
		socialMedia: {
			tiktok: "@suad_pottery",
			whatsapp: "+201234567893",
			facebook: "SuadPharaonicPottery",
		},
		featuredImage: "https://i.postimg.cc/9f20fMNq/main.jpg",
	},
	{
		id: "art5",
		fullName: "عبد الرحمن محمود",
		craftType: "نحاسيات",
		location: {
			city: "الغورية",
			governorate: "القاهرة",
		},
		background:
			"يمتلك ورشة عائلية للنحاسيات منذ ثلاثة أجيال. يتخصص في صناعة المصابيح النحاسية والأواني التقليدية.",
		sampleProduct: {
			name: "مصباح نحاسي منقوش",
			description: "مصباح نحاسي مصنوع يدوياً، مزخرف بنقوش عربية إسلامية.",
			image: "https://i.postimg.cc/zX57rxXZ/P1095900-scaled.jpg",
		},
		socialMedia: {
			tiktok: "@abdul_copper",
			whatsapp: "+201234567894",
			facebook: "AbdulCopperWorkshop",
		},
		featuredImage:
			"https://i.postimg.cc/BvDzdN9p/Whats-App-Image-2025-04-23-at-14-34-12-a9aa77e9.jpg",
	},
];

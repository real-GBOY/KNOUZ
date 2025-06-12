/** @format */

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { cn } from "@/lib/utils";

export function LanguageSelector() {
	const { currentLanguage, changeLanguage, languages } = useLanguage();

	const currentLang =
		languages.find((lang) => lang.code === currentLanguage) || languages[0];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className={cn(
						"relative h-9 w-9 rounded-full",
						"hover:bg-accent hover:text-accent-foreground",
						"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					)}>
					<span className='sr-only'>Change language</span>
					<span className='absolute -top-1 -right-1 text-lg'>
						{currentLang.flag}
					</span>
					<Languages className='h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-[150px]'>
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => changeLanguage(lang.code)}
						className={cn(
							"flex items-center gap-2 cursor-pointer py-2",
							currentLanguage === lang.code && "bg-accent"
						)}>
						<span className='text-lg'>{lang.flag}</span>
						<span className='flex-1'>{lang.nativeName}</span>
						{currentLanguage === lang.code && (
							<span className='text-xs text-muted-foreground'>✓</span>
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

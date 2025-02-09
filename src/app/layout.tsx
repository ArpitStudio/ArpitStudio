import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const interSans = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Arpit Studio',
	description: 'Serving since 1996'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${interSans.variable} antialiased`}>
				<div className="fixed inset-0 -z-[1] overflow-hidden bg-white">
					<div
						className={cn(
							'relative size-full',
							"scale-105 before:fixed before:top-0 before:size-full before:bg-[url('/studio.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-[100] before:blur-sm before:content-['']",
							"after:fixed after:top-0 after:size-full after:bg-[url('/bg.svg')] after:bg-repeat after:opacity-[.04] after:bg-blend-overlay after:content-['']"
						)}
					></div>
				</div>
				<div className="flex h-full w-full flex-1 flex-col justify-between px-4 pb-8 pt-16 sm:pb-16">
					{children}
				</div>
			</body>
		</html>
	);
}

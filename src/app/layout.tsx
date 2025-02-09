import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import studio from './studio.webp';
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
							"after:fixed after:top-0 after:size-full after:bg-[url('/bg.svg')] after:bg-repeat after:opacity-[.04] after:bg-blend-overlay after:content-['']"
						)}
					>
						<Image
							src={studio}
							alt="body-bg"
							placeholder="blur"
							loading="lazy"
							className="fixed top-0 size-full scale-105 object-cover object-center opacity-[100] blur-sm"
						/>
					</div>
				</div>
				<div className="flex h-full w-full flex-1 flex-col justify-between px-4 pb-8 pt-16 sm:pb-16">
					{children}
				</div>
			</body>
		</html>
	);
}

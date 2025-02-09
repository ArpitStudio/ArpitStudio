import { Slot } from '@radix-ui/react-slot';
import Image from 'next/image';
import { ReactNode } from 'react';
import {
	ImEnvelop,
	ImFacebook,
	ImLocation,
	ImPhone,
	ImWhatsapp
} from 'react-icons/im';
import logo from "./logo.png";
type TLink = {
	label: string;
	href: string;
	icon?: ReactNode;
};
const links: Array<TLink> = [
	{
		label: 'WhatsApp: +977 9741759589',
		href: 'https://wa.me/9779741759589',
		icon: <ImWhatsapp />
	},
	{
		label: 'Email: arpitstudio55@gmail.com',
		href: 'mailto:arpitstudio55@gmail.com',
		icon: <ImEnvelop />
	},
	{
		label: 'Phone +977 9741759589',
		href: 'tel:+9779741759589',
		icon: <ImPhone />
	},
	{
		label: 'Phone: +977 9852645789',
		href: 'tel:+9779852645789',
		icon: <ImPhone />
	},
	{
		label: 'Our Location',
		href: 'https://www.google.com/maps/place/?q=place_id:ChIJl0efBr-R5TkRfx8LE_a6E6s',
		icon: <ImLocation />
	},
	{
		label: 'Facebook',
		href: 'https://fb.me/arpitstudio',
		icon: <ImFacebook />
	}
];
const services: Array<string> = [
	'EDV Forms',
	'DV Consult',
	'Police Report',
	'Consular Stamp',
	'Vaccine QR Code',
	'Personal PAN',
	'Photography',
	'Videography',
	'Lok Sewa Forms',
	'Siksha Sewa Form',
	'T-Shirt, Cup, Plate Print',
	'High Quality Photo Frame',
	'Flex Banner Design/Print',
	'Sticker & Photo Print'
];
export default function Home() {
	return (
		<div className="mx-auto flex h-full w-full max-w-[580px] flex-col gap-8">
			<div className="flex flex-col items-center gap-4">
				<div>
					<Image
						src={logo}
						placeholder="blur"
						loading='lazy'
						alt="logo"
						width={120}
						height={120}
					/>
				</div>
				<div className="mx-3 flex max-w-full items-center">
					<h1 className="text-center text-3xl font-[700] leading-[1.5]">
						Arpit Studio
					</h1>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				{links.map(({ label, href, icon }, index) => (
					<a
						key={index}
						href={href}
						target="_blank"
						rel="noopener"
						className="scale-1 ease-bounce-in-out relative z-0 block rounded-lg border-none bg-foreground px-20 py-3 text-center text-xl text-white shadow-sm transition-transform hover:scale-105"
					>
						{label}
						{icon && (
							<Slot className="absolute left-3 top-1/2 size-7 -translate-y-1/2">
								{icon}
							</Slot>
						)}
					</a>
				))}
			</div>
			<h2 className="text-center text-3xl font-semibold">Our Services</h2>
			<div className="flex flex-col gap-4">
				{services.map((service, index) => (
					<div
						key={index}
						className="relative z-0 select-none rounded-lg border border-dashed border-black/30 bg-white/15 px-20 py-3 text-center text-xl shadow-sm backdrop-blur transition-transform"
					>
						{service}
					</div>
				))}
			</div>
		</div>
	);
}

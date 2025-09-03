import React from "react";
import localFont from "next/font/local";
import {Manrope, Parisienne} from "next/font/google";
import TopNavbar from "@/components/ui/top-navbar";

import "./globals.css";

const ppEditorialNew = localFont({
	src: [
		{
			path: "../../public/PPEditorialNew-Regular-BF644b214ff145f.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/PPEditorialNew-Italic-BF644b214fb0c0a.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/PPEditorialNew-Ultralight-BF644b21500d0c0.otf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../public/PPEditorialNew-UltralightItalic-BF644b214ff1e9b.otf",
			weight: "200",
			style: "italic",
		},
		{
			path: "../../public/PPEditorialNew-Ultrabold-BF644b21500840c.otf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/PPEditorialNew-UltraboldItalic-BF644b214faef01.otf",
			weight: "800",
			style: "italic",
		},
	],
	variable: "--font-pp-editorial-new",
});

const ppWriter = localFont({
	src: [
		{
			path: "../../public/PPWriter-Regular-BF6445d4ec49712.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/PPWriter-RegularItalic-BF6445d4ec6ebbd.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/PPWriter-Book-BF6445d4ec72b68.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/PPWriter-Thin-BF6445d4ec6c162.otf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/PPWriter-Bold-BF6445d4eb4de60.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/PPWriter-BoldItalic-BF6445d4ec6e7ba.otf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../public/PPWriter-Ultrabold-BF6445d4ec25173.otf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/PPWriter-UltraboldItalic-BF6445d4ec717bb.otf",
			weight: "800",
			style: "italic",
		},
		{
			path: "../../public/PPWriter-BlackItalic-BF6445d4ec584c7.otf",
			weight: "900",
			style: "italic",
		},
	],
	variable: "--font-pp-writer",
});

const manrope = Manrope({subsets: ["latin"], variable: "--font-manrope"});

const parisienne = Parisienne({
	subsets: ["latin"],
	variable: "--font-parisienne",
	weight: "400",
});
export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" className={``}>
			<body
				className={`h-dvh bg-background antialiased ${ppEditorialNew.variable} ${ppWriter.variable} ${manrope.variable} ${parisienne.variable}`}
			>
				<TopNavbar />
				<main>{children}</main>
			</body>
		</html>
	);
}

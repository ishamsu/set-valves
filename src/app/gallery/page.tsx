import {Metadata} from "next";
import TopNavbar from "@/components/ui/top-navbar";
import AnimatedSections1 from "@/components/ui/animated-sections-1";
import Footer from "@/components/footer";
import Images from "@/config/constants/Images";

export async function generateMetadata(): Promise<Metadata> {
	const baseUrl = "https://trawild.vercel.app";

	return {
		metadataBase: new URL(baseUrl),
		title: "Gallery - Trawild",
		description:
			"Explore our stunning wildlife gallery featuring breathtaking moments captured in nature. Discover the beauty of wildlife through our curated collection of images and stories.",
		icons: {
			icon: [
				{url: Images.favicon},
				{url: Images.favicon96, type: "image/png", sizes: "32x32"},
				{url: Images.favicon96, type: "image/png", sizes: "16x16"},
				{url: Images.webAppManifest512, type: "image/png", sizes: "512x512"},
				{url: Images.webAppManifest192, type: "image/png", sizes: "192x192"},
			],
			apple: [{url: Images.appleTouchIcon, sizes: "180x180"}],
		},
		manifest: "/site.webmanifest",
		appleWebApp: {
			title: "Gallery - Trawild",
		},
		keywords: [
			"wildlife gallery",
			"nature photography",
			"wildlife images",
			"nature gallery",
			"wildlife moments",
			"trawild gallery",
			"wildlife photography collection",
		],
		openGraph: {
			title: "Wildlife Gallery - Trawild",
			description:
				"Explore our stunning wildlife gallery featuring breathtaking moments captured in nature.",
			url: "https://trawild.vercel.app/gallery",
			siteName: "Trawild",
			images: [
				{
					url: Images.webAppManifest512,
					width: 1200,
					height: 630,
					alt: "Trawild Wildlife Gallery",
				},
			],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: "Wildlife Gallery - Trawild",
			description:
				"Explore our stunning wildlife gallery featuring breathtaking moments captured in nature.",
			images: [
				{
					url: Images.webAppManifest512,
					width: 1200,
					height: 630,
					alt: "Trawild Wildlife Gallery",
				},
			],
		},
		robots: "index, follow",
	};
}

export default function GalleryPage() {
	return (
		<div className="min-h-screen">
			<AnimatedSections1 />
		</div>
	);
}

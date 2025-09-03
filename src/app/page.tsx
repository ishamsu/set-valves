/* eslint-disable react/jsx-indent */

/* eslint-disable prettier/prettier */

import {Metadata} from "next";

import Images from "@/config/constants/Images";
import PerspectiveSectionTransition from "@/components/PerspectiveSectionTransition";
import WhyChooseSection from "@/components/why-choose-section";
import {HeroParallax} from "@/components/ui/hero-parallax";
import ImmersiveScrollGallery from "@/components/blocks/immersive-scroll-gallery";
import WildlifeCarousel from "@/components/ui/wildlife-carousel";
import {SmoothScrollHero} from "@/components/ui/modern-hero";
import QuoteSlider from "@/components/quote-slider";
import Footer from "@/components/footer";
import ParallaxSections from "@/components/ParallaxSections";
import SvgImageSection from "@/components/ui/svg-image-section";
import {
	ContainerScrollAnimation,
	ContainerScrollScale,
	ContainerScrollTranslate,
} from "@/components/ui/scroll-trigger-animations";
import {ScrollTriggerVideo} from "@/components/ui/scroll-trigger-video";

// export async function generateMetadata(): Promise<Metadata> {
// 	// Get the base URL from environment variable or use a default
// 	const baseUrl = "https://trawild.vercel.app";

// 	return {
// 		metadataBase: new URL(baseUrl),
// 		title: "Setvalves",
// 		description:
// 			"Join us on incredible wildlife adventures! Explore the wild side of nature with Trawild - your ultimate destination for wildlife content and nature exploration.",
// 		icons: {
// 			icon: [
// 				{url: Images.favicon},
// 				{url: Images.favicon96, type: "image/png", sizes: "32x32"},
// 				{url: Images.favicon96, type: "image/png", sizes: "16x16"},
// 				{url: Images.webAppManifest512, type: "image/png", sizes: "512x512"},
// 				{url: Images.webAppManifest192, type: "image/png", sizes: "192x192"},
// 			],
// 			apple: [{url: Images.appleTouchIcon, sizes: "180x180"}],
// 		},
// 		manifest: "/site.webmanifest",
// 		appleWebApp: {
// 			title: "Trawild - Wildlife Adventures",
// 		},
// 		keywords: [
// 			"wildlife",
// 			"nature",
// 			"animals",
// 			"adventure",
// 			"youtube channel",
// 			"wildlife photography",
// 			"nature documentary",
// 			"wildlife exploration",
// 			"trawild",
// 			"nature videos",
// 		],
// 		openGraph: {
// 			title: "Trawild - Wildlife & Nature Adventures",
// 			description:
// 				"Join us on incredible wildlife adventures! Explore the wild side of nature with Trawild - your ultimate destination for wildlife content and nature exploration.",
// 			url: "https://trawild.vercel.app",
// 			siteName: "Trawild",
// 			images: [
// 				{
// 					url: Images.webAppManifest512,
// 					width: 1200,
// 					height: 630,
// 					alt: "Trawild Wildlife Channel",
// 				},
// 			],
// 			type: "website",
// 		},
// 		twitter: {
// 			card: "summary_large_image",
// 			title: "Trawild - Wildlife & Nature Adventures",
// 			description:
// 				"Join us on incredible wildlife adventures! Explore the wild side of nature with Trawild - your ultimate destination for wildlife content and nature exploration.",
// 			images: [
// 				{
// 					url: Images.webAppManifest512,
// 					width: 1200,
// 					height: 630,
// 					alt: "Trawild Wildlife Channel",
// 				},
// 			],
// 		},
// 		robots: "index, follow",
// 	};
// }

const products = [
	{
		title: "Wildlife Safari Adventure",
		link: "https://www.youtube.com/watch?v=Euxs0nB7DrU&t=485s",
		thumbnail:
			"https://ik.imagekit.io/ronjz0frs/TWP_3475-1.webp?updatedAt=1756791441898",
	},
	{
		title: "Elephant Family in the Wild",
		link: "https://www.youtube.com/watch?v=Euxs0nB7DrU&t=485s",
		thumbnail:
			"https://ik.imagekit.io/ronjz0frs/TWP_5775-Enhanced-NR-1.webp?updatedAt=1756791441679",
	},
	{
		title: "Lion Pride Hunting",
		link: "https://www.youtube.com/watch?v=Euxs0nB7DrU&t=485s",
		thumbnail:
			"https://ik.imagekit.io/ronjz0frs/B5.webp?updatedAt=1756791442670",
	},
	{
		title: "Gorilla in the Mist",
		link: "https://www.youtube.com/watch?v=Euxs0nB7DrU&t=485s",
		thumbnail:
			"https://ik.imagekit.io/ronjz0frs/AUG1.webp?updatedAt=1756791441534",
	},
	{
		title: "Tiger in the Jungle",
		link: "https://www.youtube.com/watch?v=Euxs0nB7DrU&t=485s",
		thumbnail:
			"https://ik.imagekit.io/ronjz0frs/AQ1_full.webp?updatedAt=1756791442449",
	},
	{
		title: "Penguin Colony",
		link: "https://www.youtube.com/watch?v=Euxs0nB7DrU&t=485s",
		thumbnail:
			"https://ik.imagekit.io/ronjz0frs/Cam_Part_3%2010.55.08%E2%80%AFAM.webp?updatedAt=1756791443363",
	},
	{
		title: "Dolphin Pod Swimming",
		link: "https://www.youtube.com/watch?v=Euxs0nB7DrU&t=485s",
		thumbnail:
			"https://ik.imagekit.io/ronjz0frs/TWV_002b.webp?updatedAt=1756791443060",
	},
	{
		title: "Eagle Soaring High",
		link: "https://www.youtube.com/watch?v=Euxs0nB7DrU&t=485s",
		thumbnail:
			"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center",
	},
];

function ScrollTriggerScaleDemo() {
	return (
		<ContainerScrollAnimation>
			<ContainerScrollTranslate className="h-dvh w-full py-0 px-0 -mt-40 flex justify-center items-center">
				<ContainerScrollScale
					className="overflow-hidden rounded-4xl shadow w-full aspect-video"
					scaleRange={[0.4, 1]}
				>
					<ScrollTriggerVideo
						src="https://ik.imagekit.io/ronjz0frs/%E0%B4%8F%E0%B4%B7%E0%B5%8D%E0%B4%AF%E0%B4%BE%E0%B4%A8%E0%B5%86%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B5%8D%20%E0%B4%A8%E0%B5%8D%E0%B4%AF%E0%B5%82%E0%B4%B8%E0%B5%8D%20-%20%E0%B4%97%E0%B5%BE%E0%B4%AB%E0%B5%8D%20%E0%B4%B1%E0%B5%97%E0%B4%A3%E0%B5%8D%E0%B4%9F%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%BF%E0%B5%BD%20%E0%B4%B8%E0%B4%82%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B5%87%E0%B4%B7%E0%B4%A3%E0%B4%82%20%E0%B4%9A%E0%B5%86%E0%B4%AF%E0%B5%8D%E0%B4%A4%20%E0%B4%B5%E0%B5%80%E0%B4%A1%E0%B4%BF%E0%B4%AF%E0%B5%8B.The%20Video%20featured%20on%20Asianet%20News%20-.mp4?updatedAt=1756843012030"
						poster="https://ik.imagekit.io/ronjz0frs/Cam_Part_3%2010.55.08%E2%80%AFAM.webp?updatedAt=1756791443363"
					/>
				</ContainerScrollScale>
			</ContainerScrollTranslate>
		</ContainerScrollAnimation>
	);
}

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Choose one of these components: */}

			{/* Basic Perspective Transition (following tutorial structure) */}
			<PerspectiveSectionTransition />

			{/* Why Choose Us Section */}
			<WhyChooseSection />

			{/* SVG Image Section */}

			<Footer />
		</div>
	);
}

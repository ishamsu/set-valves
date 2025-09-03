"use client";

import {Parallax} from "react-parallax";

interface ParallaxSection {
	id: string;
	imageUrl: string;
	alt: string;
	title: string;
}

const parallaxSections: ParallaxSection[] = [
	{
		id: "mountains",
		imageUrl:
			"https://ik.imagekit.io/ronjz0frs/TWV_001a-ezgif.com-jpg-to-webp-converter.webp?updatedAt=1756679485186",
		alt: "Mountain View",
		title: "Majestic Mountains",
	},
	{
		id: "ocean",
		imageUrl:
			"https://ik.imagekit.io/ronjz0frs/ezgif.com-webp-maker.webp?updatedAt=1756680253431",
		alt: "Ocean Wave",
		title: "Ocean Power",
	},
	{
		id: "forest",
		imageUrl:
			"https://ik.imagekit.io/ronjz0frs/TWV_001a-ezgif.com-jpg-to-webp-converter.webp?updatedAt=1756679485186",
		alt: "Forest Path",
		title: "Serene Forest",
	},
	{
		id: "city",
		imageUrl:
			"https://ik.imagekit.io/ronjz0frs/TWV_001a-ezgif.com-jpg-to-webp-converter.webp?updatedAt=1756679485186",
		alt: "City Skyline",
		title: "Urban Lights",
	},
];

export default function ParallaxSections() {
	return (
		<div className="overflow-x-hidden">
			{parallaxSections.map((section, index) => (
				<Parallax
					key={section.id}
					blur={0}
					bgImage={section.imageUrl}
					bgImageAlt={section.alt}
					strength={200}
					className="h-screen w-full bg-center bg-cover"
				>
					<div className="h-screen w-full flex items-center justify-center">
						<div className="text-white text-4xl md:text-6xl lg:text-7xl font-bold pointer-events-none z-10 drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] text-center">
							{section.title}
						</div>
					</div>
				</Parallax>
			))}
		</div>
	);
}

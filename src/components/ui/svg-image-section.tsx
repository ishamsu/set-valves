import React from "react";

interface SvgImageSectionProps {
	imageUrl?: string;
	className?: string;
}

export default function SvgImageSection({
	imageUrl = "https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=1200&auto=format&fit=crop",
	className = "",
}: SvgImageSectionProps) {
	return (
		<section
			className={`dark:bg-black mt-4 bg-white rounded-lg p-5 ${className}`}
		>
			{/* Off-screen SVG for clipPath definition */}
			<svg className="clipppy absolute -top-[999px] -left-[999px] w-0 h-0">
				<defs>
					<clipPath id="clip-pattern7" clipPathUnits={"objectBoundingBox"}>
						<path
							d="M0 0.578143V0H0.298507C0.725373 0.027027 0.958209 0.27027 1 0.518214V1H0.25V0.85H0.061194V0.578143H0Z"
							fill="#D9D9D9"
						/>
					</clipPath>
				</defs>
			</svg>
			<figure className="relative group">
				<svg width={"400px"} height={"400px"} viewBox="0 0 100 100">
					<image
						clipPath="url(#clip-pattern7)"
						preserveAspectRatio="xMidYMid slice"
						width={"100%"}
						height={"100%"}
						xlinkHref={imageUrl}
					></image>
				</svg>
			</figure>
		</section>
	);
}

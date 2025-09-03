"use client";
import React from "react";
import {motion} from "framer-motion";
import {SpinningText} from "./ui/spinning-text";
import {useIsMobile} from "../hooks/use-mobile";
import {ChevronsDown} from "lucide-react";

export default function PerspectiveSectionTransition() {
	return (
		<main className="relative">
			<Section1 />
			<Section2 />
		</main>
	);
}

const Section1 = () => {
	const isMobile = useIsMobile();

	return (
		<div className="h-screen text-white flex flex-col items-center justify-center overflow-hidden">
			{/* Background Video with Linear Gradient Overlay */}
			<div className="absolute inset-0 overflow-hidden bg-black">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source
						src="https://www.pexels.com/download/video/2406631/"
						type="video/mp4"
					/>
				</video>
				{/* Gradient overlay with fadeout at bottom */}
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.9) 90%, rgba(0,0,0,1) 100%)`,
					}}
				></div>
			</div>
			<div className="text-center space-y-8 z-10 relative px-4">
				<h1 className="text-5xl md:text-8xl  tracking-tight font-manrope font-light text-[#e3ccca]">
					South East Texas <br /> Valves and Automation{" "}
					<span className="font-manrope text-3xl ml-1"> ●</span>
				</h1>

				<p className="text-lg md:text-2xl font-semibold max-w-2xl mx-auto font-manrope tracking-wide uppercase text-[#e3ccca]">
					Driven by Qulaity Defined by speed
				</p>

				<div className="flex items-center justify-center mt-8">
					<div className="w-48 h-px bg-gradient-to-r from-transparent via-[#e3ccca] to-transparent"></div>
				</div>
			</div>

			{/* Background elements for depth */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-20 w-16 h-16 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl"></div>
				<div className="absolute bottom-20 right-20 w-12 h-12 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>
			</div>
		</div>
	);
};

const Section2 = () => {
	const isMobile = useIsMobile();

	return (
		<div className="relative h-full bg-black text-gray-900 flex items-center justify-between md:pt-40">
			<div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between h-full py-8 lg:py-0 gap-8 lg:gap-0">
				{/* Left Side - Text Content */}
				<div className="w-full lg:w-1/2 lg:pr-12 space-y-6 lg:space-y-8 mb-8 lg:mb-0 order-2 lg:order-1">
					<div className="space-y-4 lg:space-y-6">
						<p className="text-lg md:text-xl font-medium text-white font-manrope tracking-wider ">
							<span className="font-manrope uppercase font-thin">
								Why choose us
							</span>{" "}
						</p>
						<h2 className="text-3xl md:text-5xl  text-white leading-snug tracking-wide font-manrope font-semibold uppercase">
							<span className="">
								trusted partner in performance and reliability.{" "}
							</span>
						</h2>
						<div className="space-y-3 lg:space-y-4 text-white leading-relaxed tracking-wider font-pp-writer">
							<p className="text-lg sm:text-2xl font-thin">
								At SET Valves, we deliver more than products we deliver
								confidence. Our valves are built with precision, speed, and
								reliability, ensuring consistent performance in demanding
								industries like refining, petrochemical, power generation, gas
								utilities, and manufacturing. With strict quality standards and
								customer-first approach, SET Valves is your trusted partner in
								performance and reliability.
							</p>
						</div>
					</div>
				</div>
				{/* Right Side - Image */}
				<div className="w-full lg:w-1/2 flex items-center justify-center md:justify-end order-1 lg:order-2">
					<div className="relative w-full max-w-md h-[350px] md:h-[500px] rounded-none shadow-2xl">
						<img
							src="https://ik.imagekit.io/ronjz0frs/ChatGPT%20Image%20Aug%2010,%202025,%2005_58_45%20PM%20(1).png?updatedAt=1756881104526"
							alt="SET Valves - Quality and Speed"
							className="w-full h-full object-cover rounded-none"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
						{/* SpinningText positioned at top left corner of image */}
						<div className="absolute top-4 left-4 text-white z-10 hidden md:block">
							<SpinningText
								radius={isMobile ? 3 : 5}
								fontSize={isMobile ? 0.8 : 1.2}
								className="font-medium leading-none tracking-wide font-manrope"
							>
								{` speed • quality • reliability • `}
							</SpinningText>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

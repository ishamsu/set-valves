"use client";
import {useRef} from "react";
import {useMotionValueEvent} from "motion/react";
import {useContainerScrollAnimationContext} from "./scroll-trigger-animations";

interface ScrollTriggerVideoProps {
	src: string;
	poster: string;
	className?: string;
	controls?: boolean;
	preload?: "none" | "metadata" | "auto";
	muted?: boolean;
}

export function ScrollTriggerVideo({
	src,
	poster,
	className = "w-full h-auto object-cover aspect-video",
	controls = true,
	preload = "metadata",
	muted = true,
}: ScrollTriggerVideoProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const {scrollYProgress} = useContainerScrollAnimationContext();

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (videoRef.current) {
			// Start playing when scroll progress is greater than 0.1 (10%)
			if (latest > 0.1 && videoRef.current.paused) {
				// Always play muted to respect autoplay policies
				videoRef.current.muted = true;
				videoRef.current.play().catch(console.error);
			}
			// Pause when scroll progress is less than 0.1
			else if (latest <= 0.1 && !videoRef.current.paused) {
				videoRef.current.pause();
			}
		}
	});

	return (
		<video
			ref={videoRef}
			src={src}
			poster={poster}
			className={className}
			controls={controls}
			preload={preload}
			muted={muted}
		/>
	);
}

"use client";
import React from "react";
import {useEffect, useRef, useState, useCallback} from "react";
import {motion, useScroll, useTransform, useSpring} from "framer-motion";
import Image from "next/image";
import {ArrowUpRight, Asterisk, MoveRight} from "lucide-react";

interface Product {
	title: string;
	link?: string;
	thumbnail: string;
	video?: boolean;
}

export const ScrollableRow = ({products}: {products: Product[]}) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isScrollable, setIsScrollable] = useState(false);
	const [showLeft, setShowLeft] = useState(false);

	const checkOverflow = useCallback(() => {
		if (scrollRef.current) {
			const el = scrollRef.current;
			setIsScrollable(el.scrollWidth > el.clientWidth);
			setShowLeft(false);
		}
	}, []);

	const handleScroll = useCallback(() => {
		if (scrollRef.current) {
			const {scrollLeft} = scrollRef.current;
			setShowLeft(scrollLeft > 10);
		}
	}, []);

	useEffect(() => {
		checkOverflow();
		window.addEventListener("resize", checkOverflow);
		return () => {
			window.removeEventListener("resize", checkOverflow);
		};
	}, [checkOverflow]);

	useEffect(() => {
		const el = scrollRef.current;
		if (el) {
			el.addEventListener("scroll", handleScroll, {passive: true});
			return () => {
				el.removeEventListener("scroll", handleScroll);
			};
		}
	}, [handleScroll]);

	return (
		<div className="relative w-full group">
			<motion.div
				ref={scrollRef}
				className="flex flex-row justify-start space-x-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory relative"
				style={{scrollBehavior: "smooth"}}
			>
				{products.map((product) => {
					return <ProductCard product={product} key={product.title} />;
				})}

				{isScrollable && !showLeft && (
					<motion.div
						initial={{opacity: 0, x: 10}}
						animate={{opacity: 1, x: 0}}
						transition={{
							duration: 0.5,
							ease: "easeOut",
						}}
						className="absolute top-1/2 right-0 text-white text-sm px-3 py-1 font-handwritten pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-20 font-nohemi font-light uppercase"
					>
						Scroll →
					</motion.div>
				)}
			</motion.div>
		</div>
	);
};

export const HeroParallax = ({products}: {products: Product[]}) => {
	const firstRow = products.slice(0, 4);
	const secondRow = products.slice(4, 8);
	const ref = React.useRef(null);

	return (
		<div
			ref={ref}
			className="px-2 md:px-2 h-fit md:h-[fit] py-0 md:py-0 antialiased flex flex-col [perspective:1000px] [transform-style:preserve-3d] bg-white relative mx-auto w-full"
		>
			<div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-0 mb-10">
				{/* Transparent background - removed black gradients */}
			</div>
			<motion.div className="">
				<ScrollableRow products={firstRow} />
				<ScrollableRow products={secondRow} />
			</motion.div>
		</div>
	);
};

export const ProductCard = ({product}: {product: Product}) => {
	const handleThumbnailClick = () => {
		window.open("https://www.youtube.com/watch?v=Euxs0nB7DrU&t=485s", "_blank");
	};

	return (
		<motion.div
			whileHover={{
				y: -10,
			}}
			key={product.title}
			className="group/product h-72 w-80 md:h-96 md:w-[30rem] relative flex-shrink-0 mb-2 z-20"
		>
			<div
				onClick={handleThumbnailClick}
				className="block group-hover/product:shadow-2xl cursor-pointer"
			>
				<Image
					src={product.thumbnail}
					height={600}
					width={600}
					className="object-cover absolute h-full w-full inset-0"
					alt={product.title}
				/>

				<div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover/product:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

				<div className="absolute inset-0 h-full w-full bg-black/30 opacity-0 group-hover/product:opacity-40 transition-opacity duration-300 pointer-events-none"></div>

				<h2
					className="absolute bottom-4 left-4 opacity-1 group-hover/product:opacity-0 text-white z-50 font-light font-nohemi tracking-widest 
                text-ellipsis overflow-hidden whitespace-nowrap max-w-[90%] uppercase drop-shadow-lg"
				>
					{product.title}
				</h2>

				<div className="absolute inset-0 opacity-0 group-hover/product:opacity-100 flex items-center justify-center text-white text-4xl font-nohemi tracking-wider text-center px-4 font-thin">
					<h2 className="break-words text-ellipsis overflow-hidden max-w-full font-nohemi font-thin uppercase drop-shadow-lg">
						{product.title}
					</h2>
				</div>

				<motion.div
					initial={{opacity: 0, y: -10}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.3}}
					className="absolute top-4 right-4 opacity-0 group-hover/product:opacity-100 text-white/90 z-50"
				>
					<ArrowUpRight className="w-6 h-6 drop-shadow-lg" />
				</motion.div>
			</div>
		</motion.div>
	);
};

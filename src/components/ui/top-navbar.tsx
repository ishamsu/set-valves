"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Bell, ChevronRight, MoveRight, Phone} from "lucide-react";
import {CHANNEL_NAME} from "@/config/constants/stringConstant";
import Images from "@/config/constants/Images";

interface NavItem {
	label: string;
	href: string;
}

const navItems: NavItem[] = [
	{label: "Home", href: "/"},
	{label: "Services", href: "#services"},
	{label: "About", href: "#services"},
	{label: "Contact us", href: "/contact"},
];

export default function TopNavbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleSmoothScroll = (href: string) => {
		if (href.startsWith("#")) {
			const elementId = href.substring(1);
			const element = document.getElementById(elementId);
			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Show navbar only when at the very top
			if (currentScrollY < 10) {
				setIsNavbarVisible(true);
			}
			// Hide navbar when scrolling down and keep it hidden
			else if (currentScrollY > 100) {
				setIsNavbarVisible(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, {passive: true});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/0 transition-transform duration-300 ease-in-out ${
				isNavbarVisible ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<div className=" mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center h-16">
					{/* Brand Name and Logo - Left Side */}
					<Link
						href="/"
						className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
					>
						{/* Brand Logo */}
						<Image
							src="https://ik.imagekit.io/ronjz0frs/Screenshot%202025-09-03%20at%203.19.49%E2%80%AFPM.png?updatedAt=1756893385222"
							alt="Brand Logo"
							width={40}
							height={40}
							className="object-contain rounded-full"
						/>
						{/* Brand Name */}
						<span className="text-lg md:text-2xl font-normal text-white tracking-wide font-manrope uppercase">
							{CHANNEL_NAME}
						</span>
					</Link>

					{/* Desktop Navigation - Right Side */}
					<div className="hidden md:flex items-center space-x-8 ml-auto">
						{navItems.map((item) =>
							item.label === "Contact us" ? (
								<Link
									key={item.label}
									href={item.href}
									className="text-white font-manrope uppercase border border-white px-4 py-2 text-sm font-semibold tracking-wider transition-all duration-200 hover:bg-white hover:text-black flex items-center gap-2"
								>
									{item.label}
									<MoveRight className="w-4 h-4 font-extralight text-white/60" />
								</Link>
							) : item.href.startsWith("/") ? (
								<Link
									key={item.label}
									href={item.href}
									className="text-white  font-manrope uppercase hover:text-[#B8860B] px-3 py-2 rounded-md text-sm font-semibold tracking-wider transition-colors duration-200 hover:bg-white/10"
								>
									{item.label}
								</Link>
							) : (
								<a
									key={item.label}
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										handleSmoothScroll(item.href);
									}}
									className="text-white font-manrope uppercase hover:text-[#B8860B] px-3 py-2 rounded-md text-sm font-semibold tracking-wider transition-colors duration-200 hover:bg-white/10"
								>
									{item.label}
								</a>
							),
						)}
						{/* Phone Call Button */}
						<a
							href="tel:+16102176305"
							className="text-white hover:text-[#B8860B] p-2 rounded-md transition-colors duration-200 hover:bg-white/10"
							aria-label="Call us"
						>
							<Phone className="w-5 h-5" />
						</a>
					</div>

					{/* Mobile Menu Button - Right Side */}
					<div className="md:hidden ml-auto">
						<button
							onClick={toggleMobileMenu}
							className="text-white hover:text-[#B8860B] p-2 rounded-md transition-colors duration-200"
							aria-label="Toggle mobile menu"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								{isMobileMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-transparent">
							{navItems.map((item) =>
								item.label === "Contact us" ? (
									<Link
										key={item.label}
										href={item.href}
										className="text-white font-manrope uppercase border border-white flex items-center gap-2 px-4 py-2 text-base font-light transition-all duration-200 hover:bg-white hover:text-black"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{item.label}
										<ChevronRight className="w-4 h-4" />
									</Link>
								) : item.href.startsWith("/") ? (
									<Link
										key={item.label}
										href={item.href}
										className="text-white  hover:text-[#B8860B] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{item.label}
									</Link>
								) : (
									<a
										key={item.label}
										href={item.href}
										onClick={(e) => {
											e.preventDefault();
											handleSmoothScroll(item.href);
											setIsMobileMenuOpen(false);
										}}
										className="text-white hover:text-[#B8860B] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
									>
										{item.label}
									</a>
								),
							)}
							{/* Phone Call Button for Mobile */}
							<a
								href="tel:+16102176305"
								className="text-white hover:text-[#B8860B] flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<Phone className="w-5 h-5" />
								Call Us
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

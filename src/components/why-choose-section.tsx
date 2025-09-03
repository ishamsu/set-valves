import React from "react";
import Image from "next/image";

const WhyChooseSection = () => {
	return (
		<section
			id="services"
			className="relative bg-black text-white pb-16 lg:py-24"
		>
			<div className="container mx-auto px-4 sm:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<p className="text-lg md:text-xl font-medium text-white font-manrope tracking-wider mb-4">
						<span className="font-manrope uppercase font-thin text-white">
							Our Services
						</span>
					</p>
					<h2 className="text-3xl md:text-5xl text-white leading-snug tracking-wide font-manrope font-semibold uppercase">
						<span className="">Driven by Quality</span>{" "}
						<span className="font-manrope">Defined by Speed</span>
					</h2>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Service 1: Valve Manufacturing */}
					<div className="group">
						<div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl mb-6">
							<Image
								src="https://ik.imagekit.io/ronjz0frs/ChatGPT%20Image%20Aug%2010,%202025,%2005_58_43%20PM.png?updatedAt=1756881105174"
								alt="Valve Manufacturing Excellence"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
						</div>
						<div className="space-y-3">
							<h3 className="text-2xl font-bold text-white font-manrope uppercase tracking-wide">
								Valve Manufacturing
							</h3>
							<p className="text-white/80 leading-relaxed font-pp-writer text-xl">
								Precision-engineered, built for durability and long-term
								reliability
							</p>
						</div>
					</div>

					{/* Service 2: Automation Solutions */}
					<div className="group">
						<div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl mb-6">
							<Image
								src="https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg"
								alt="Automation Solutions"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							{/* Enhanced overlay with multiple layers */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
							<div className="absolute inset-0 bg-gradient-to-r from-[#e3ccca]/10 to-transparent"></div>
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
						</div>
						<div className="space-y-3">
							<h3 className="text-2xl font-bold text-white font-manrope uppercase tracking-wide">
								Automation Solutions
							</h3>
							<p className="text-white/80 leading-relaxed font-pp-writer text-xl">
								Custom-designed packages to match your operational needs
							</p>
						</div>
					</div>

					{/* Service 3: Product Range */}
					<div className="group">
						<div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl mb-6">
							<Image
								src="https://images.pexels.com/photos/26329233/pexels-photo-26329233.jpeg"
								alt="Product Range"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
						</div>
						<div className="space-y-3">
							<h3 className="text-2xl font-bold text-white font-manrope uppercase tracking-wide">
								Product Range
							</h3>
							<p className="text-white/80 leading-relaxed font-pp-writer text-xl">
								From standard valves to specialty applications, trusted across
								refining, petrochemical, power generation, gas utilities, and
								manufacturing
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseSection;

"use client";

import React from "react";
import {Mail, Phone, MapPin} from "lucide-react";
import Footer from "@/components/footer";

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-20">
			{/* Hero Section */}
			<section className="pt-20 lg:pt-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h1 className="text-4xl md:text-6xl font-light font-pp-editorial-new  tracking-wide mb-6">
							Contact Us
						</h1>
						<p className="text-xl md:text-2xl text-white/80 font-manrope font-thin max-w-3xl mx-auto leading-relaxed">
							Get in touch with our team of experts. Wet re here to help you find
							the perfect valve solutions for your needs.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Information Section */}
			<section className="py-0 lg:pb-20 relative">
				{/* Background pattern */}
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="max-w-5xl mx-auto">
						{/* Contact Details Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Phone */}
							<div className="group relative">
								<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
									<div className="flex items-start gap-6">
										<div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300">
											<Phone className="w-7 h-7 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-semibold font-manrope uppercase tracking-wide mb-3 text-white">
												Phone
											</h3>
											<p className="text-white/80 font-manrope font-thin text-lg">
												<a
													href="tel:+16102176305"
													className="hover:text-white transition-colors duration-200 hover:underline"
												>
													+1-(610)-217-6305
												</a>
											</p>
											<p className="text-white/50 font-manrope font-thin text-sm mt-2">
												Available 24/7 for urgent inquiries
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Email */}
							<div className="group relative">
								<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
									<div className="flex items-start gap-6">
										<div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300">
											<Mail className="w-7 h-7 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-semibold font-manrope uppercase tracking-wide mb-3 text-white">
												Email
											</h3>
											<p className="text-white/80 font-manrope font-thin text-lg">
												<a
													href="mailto:sales@setvalves.com"
													className="hover:text-white transition-colors duration-200 hover:underline"
												>
													sales@setvalves.com
												</a>
											</p>
											<p className="text-white/50 font-manrope font-thin text-sm mt-2">
												We respond within 24 hours
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Address */}
							<div className="group relative">
								<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
									<div className="flex items-start gap-6">
										<div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300">
											<MapPin className="w-7 h-7 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-semibold font-manrope uppercase tracking-wide mb-3 text-white">
												Address
											</h3>
											<p className="text-white/80 font-manrope font-thin text-lg">
												123 Anywhere St., Any City, State 12345
											</p>
											<p className="text-white/50 font-manrope font-thin text-sm mt-2">
												Visit us for in-person consultations
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}

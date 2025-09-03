/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import React from "react";

export default function Footer() {
	return (
		<footer className="bg-black text-white border-t border-white/10">
			<div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				{/* Call to Action Section */}
				<div className="mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
					<div>
						<h2 className="text-4xl lg:text-5xl font-bold mb-4 font-manrope">
							Get in touch with us
						</h2>
						<p className="text-lg text-gray-300 font-thin font-manrope">
							We are always here to help you.
						</p>
					</div>
					<div>
						<button className="inline-flex bg-white items-center gap-2 border-2 border-white/30 px-8 py-4 text-black hover:bg-white hover:text-black transition-colors font-manrope">
							<span>Request a quote</span>
							<span className="inline-block">→</span>
						</button>
					</div>
				</div>

				{/* Four Column Footer */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{/* Company Column */}
					<div>
						<h3 className="text-lg font-light mb-6 font-manrope uppercase">
							Company
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Home Page
								</a>
							</li>
							<li>
								<a
									href="/about"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="/services"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Services
								</a>
							</li>
						</ul>
					</div>

					{/* Valves Column */}
					<div>
						<h3 className="text-lg font-light mb-6 uppercase font-manrope">
							Valves
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/products/valves/trunnion-ball"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Trunnion Ball Valves
								</a>
							</li>
							<li>
								<a
									href="/products/valves/floating-ball"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Floating Ball Valves
								</a>
							</li>
							<li>
								<a
									href="/products/valves/plug"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Plug Valves
								</a>
							</li>
							<li>
								<a
									href="/products/valves/gate-globe-check"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Gate, Globe, Check Valves
								</a>
							</li>
							<li>
								<a
									href="/products/valves/pipeline"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Pipeline Valves
								</a>
							</li>
							<li>
								<a
									href="/products/valves/butterfly"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Butterfly Valves
								</a>
							</li>
							<li>
								<a
									href="/products/valves/specialty"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Specialty Valves
								</a>
							</li>
						</ul>
					</div>

					{/* Actuation Column */}
					<div>
						<h3 className="text-lg font-light mb-6 uppercase font-manrope">
							Actuation
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/products/actuation/electric"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin				"
								>
									Electric
								</a>
							</li>
							<li>
								<a
									href="/products/actuation/pneumatic"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Pneumatic
								</a>
							</li>
							<li>
								<a
									href="/products/actuation/hydraulic"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Hydraulic
								</a>
							</li>
							<li>
								<a
									href="/products/actuation/accessories"
									className="text-gray-300 hover:text-white transition-colors font-manrope font-thin"
								>
									Accessories
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Column */}
					<div>
						<h3 className="text-lg font-light mb-6 uppercase font-manrope">
							Get in touch
						</h3>
						<ul className="space-y-3">
							<li className="text-gray-300 font-manrope">
								<span className="font-medium">Email:</span>{" "}
								<a
									href="mailto:sales@setvalves.com"
									className="hover:text-white transition-colors font-manrope font-thin"
								>
									sales@setvalves.com
								</a>
							</li>
							<li className="text-gray-300 font-manrope">
								<span className="font-medium">Website:</span>{" "}
								<a
									href="https://www.setvalves.com"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-white transition-colors font-manrope font-thin"
								>
									www.setvalves.com
								</a>
							</li>
							<li className="text-gray-300 font-manrope">
								<span className="font-medium">Phone:</span>{" "}
								<a
									href="tel:+16102176305"
									className="hover:text-white transition-colors font-manrope font-thin"
								>
									+1-(610)-217-6305
								</a>
							</li>
							<li className="text-gray-300 font-manrope">
								<span className="font-medium">Address:</span> 123 Anywhere St.,
								Any City
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
					<div className="text-gray-300 font-manrope font-thin">
						Set Valves © 2025 All rights reserved
					</div>
					<div className="flex items-center gap-6 text-gray-300 font-manrope">
						<a
							href="#"
							className="hover:text-white transition-colors font-manrope font-thin"
						>
							Privacy Policy
						</a>
						<span className="text-white/30 font-manrope">|</span>
						<a
							href="#"
							className="hover:text-white transition-colors font-manrope font-thin"
						>
							Terms & Conditions
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

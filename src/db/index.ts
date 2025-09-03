export interface iTestimonial {
	id: string;
	name: string;
	designation: string;
	desc: string;
	rating?: number;
	company?: string;
}

export interface iTestimonialData {
	ids: string[];
	details: Record<string, iTestimonial>;
}

export const testimonialData: iTestimonialData = {
	ids: ["1", "2", "3", "4", "5"],
	details: {
		"1": {
			id: "1",
			name: "Sassrah Johnson",
			designation: "Product Manager",
			company: "TechFlow Inc.",
			desc: "The quote slider component has completely transformed how we showcase customer feedback on our platform. The smooth animations and intuitive navigation make it a joy to use. Our users love the interactive experience, and it's helped increase our conversion rates significantly. The attention to detail in the design and the seamless mobile experience really sets it apart from other solutions we've tried.",
			rating: 5,
		},
		"2": {
			id: "2",
			name: "Michael Chen",
			designation: "Frontend Developer",
			company: "DigitalCraft Studio",
			desc: "As a developer, I appreciate the clean, well-structured code and the use of modern React patterns. The component is highly customizable and performs excellently even with large datasets. The touch gestures work flawlessly on mobile devices, and the accessibility features make it inclusive for all users. It's exactly what we needed for our client testimonials section.",
			rating: 5,
		},
		"3": {
			id: "3",
			name: "Emily Rodriguez",
			designation: "UX Designer",
			company: "CreativeMinds Agency",
			desc: "The visual design is absolutely stunning. The typography hierarchy, spacing, and color scheme create a professional and trustworthy appearance that perfectly complements our brand. The smooth transitions and micro-interactions add that extra layer of polish that makes users feel confident about our services. It's become a key part of our conversion funnel.",
			rating: 5,
		},
		"4": {
			id: "4",
			name: "David Thompson",
			designation: "Marketing Director",
			company: "GrowthFirst Solutions",
			desc: "We've seen a 40% increase in user engagement since implementing this testimonial slider. The ability to showcase multiple customer stories in an engaging way has been invaluable for building trust with potential clients. The responsive design ensures it looks great on all devices, and the performance is outstanding even with our growing testimonial collection.",
			rating: 5,
		},
		"5": {
			id: "5",
			name: "Lisa Wang",
			designation: "CEO & Founder",
			company: "InnovateTech",
			desc: "This component has become the centerpiece of our homepage. The elegant design and smooth functionality perfectly represent our brand's commitment to quality and innovation. Our customers frequently mention how professional and trustworthy our site feels, and I believe this testimonial slider plays a significant role in that perception. It's exceeded all our expectations.",
			rating: 5,
		},
	},
};

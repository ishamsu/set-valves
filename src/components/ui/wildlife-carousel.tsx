"use client";

import {Carousel, Card} from "./apple-cards-carousel";

const wildlifeCards = [
	{
		src: "https://ik.imagekit.io/ronjz0frs/TWP_5775-Enhanced-NR-1.webp?updatedAt=1756791441679",
		title: "Lion Pride",
		category: "Big Cats",
		content: (
			<div className="space-y-4">
				<p className="text-lg text-neutral-600 dark:text-neutral-300">
					Witness the majestic lion pride in their natural habitat. These
					magnificent creatures showcase the raw power and social dynamics of
					Africas apex predators.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							Habitat
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							African Savannah
						</p>
					</div>
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							Behavior
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							Social & Territorial
						</p>
					</div>
				</div>
			</div>
		),
	},
	{
		src: "https://ik.imagekit.io/ronjz0frs/TWP_3475-1.webp?updatedAt=1756791441898",
		title: "Elephant Family",
		category: "Gentle Giants",
		content: (
			<div className="space-y-4">
				<p className="text-lg text-neutral-600 dark:text-neutral-300">
					Experience the incredible bond of elephant families. These intelligent
					beings demonstrate complex social structures and emotional
					intelligence that rivals our own.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							Intelligence
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							Highly Advanced
						</p>
					</div>
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							Social
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							Matriarchal Herds
						</p>
					</div>
				</div>
			</div>
		),
	},
	{
		src: "https://ik.imagekit.io/ronjz0frs/AQ1_full.webp?updatedAt=1756791442449",
		title: "Tiger Territory",
		category: "Wild Cats",
		content: (
			<div className="space-y-4">
				<p className="text-lg text-neutral-600 dark:text-neutral-300">
					Explore the mysterious world of tigers in their natural habitat. These
					solitary hunters are masters of stealth and survival in dense forests.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							Hunting
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							Ambush Predator
						</p>
					</div>
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							Territory
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							Solitary & Vast
						</p>
					</div>
				</div>
			</div>
		),
	},
	{
		src: "https://ik.imagekit.io/ronjz0frs/AUG1.webp?updatedAt=1756791441534",
		title: "Gorilla Kingdom",
		category: "Primates",
		content: (
			<div className="space-y-4">
				<p className="text-lg text-neutral-600 dark:text-neutral-300">
					Discover the fascinating world of mountain gorillas. These gentle
					giants share 98% of our DNA and live in complex family groups in the
					misty mountains.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							DNA Similarity
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							98% Human
						</p>
					</div>
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							Family
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							Silverback Led
						</p>
					</div>
				</div>
			</div>
		),
	},
	{
		src: "https://ik.imagekit.io/ronjz0frs/Cam_Part_3%2010.55.08%E2%80%AFAM.webp?updatedAt=1756791443363",
		title: "Penguin Colony",
		category: "Marine Life",
		content: (
			<div className="space-y-4">
				<p className="text-lg text-neutral-600 dark:text-neutral-300">
					Journey to the icy realms where penguins thrive. These adorable birds
					have adapted perfectly to life in some of the harshest environments on
					Earth.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							Climate
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							Polar Regions
						</p>
					</div>
					<div className="bg-gray-100 p-4 dark:bg-neutral-800">
						<h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
							Adaptation
						</h4>
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							Cold Weather
						</p>
					</div>
				</div>
			</div>
		),
	},
];

export default function WildlifeCarousel() {
	return (
		<div className="w-full container mx-auto sm:px-4">
			<Carousel
				items={wildlifeCards.map((card, index) => (
					<Card key={index} card={card} index={index} />
				))}
			/>
		</div>
	);
}

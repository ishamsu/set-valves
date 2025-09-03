interface PlaceholderAvatarProps {
	initials: string;
	size?: number;
	className?: string;
}

const colors = [
	"#4F46E5", // Indigo
	"#DC2626", // Red
	"#059669", // Emerald
	"#7C3AED", // Violet
	"#EA580C", // Orange
	"#0891B2", // Cyan
	"#BE185D", // Pink
	"#65A30D", // Lime
	"#9333EA", // Purple
	"#C2410C", // Amber
];

export default function PlaceholderAvatar({
	initials,
	size = 40,
	className = "",
}: PlaceholderAvatarProps) {
	// Handle empty or undefined initials
	if (!initials || initials.trim() === "") {
		initials = "U";
	}

	// Ensure we have at least 2 characters for color calculation
	const safeInitials = initials.length >= 2 ? initials : initials + "U";

	const colorIndex =
		Math.abs(safeInitials.charCodeAt(0) + safeInitials.charCodeAt(1)) %
		colors.length;
	const bgColor = colors[colorIndex];

	return (
		<div
			className={`rounded-full flex items-center justify-center text-white font-semibold ${className}`}
			style={{
				width: size,
				height: size,
				backgroundColor: bgColor,
				fontSize: size * 0.4,
			}}
		>
			{initials}
		</div>
	);
}

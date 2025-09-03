# Cosmic Slideshow Component

A React component that creates a beautiful, interactive slideshow with cosmic-themed animations and effects.

## Features

- **Smooth Animations**: GSAP-powered transitions with scale, opacity, and filter effects
- **Interactive Navigation**: Multiple ways to navigate between slides
- **Responsive Design**: Works on desktop and mobile devices
- **Thumbnail Navigation**: Click thumbnails to jump to specific slides
- **Drag Lines**: Animated visual indicators that respond to hover states
- **Keyboard Support**: Arrow key navigation
- **Touch Support**: Swipe gestures on mobile devices
- **Scroll Support**: Mouse wheel navigation

## Installation

The component requires GSAP to be installed:

```bash
npm install gsap
# or
yarn add gsap
```

## Usage

### Basic Implementation

```tsx
import Slideshow from "@/components/Slideshow";

export default function MyPage() {
	const images = [
		"https://example.com/image1.jpg",
		"https://example.com/image2.jpg",
		"https://example.com/image3.jpg",
		// ... more images
	];

	return <Slideshow images={images} />;
}
```

### Props

| Prop     | Type       | Description                                     |
| -------- | ---------- | ----------------------------------------------- |
| `images` | `string[]` | Array of image URLs to display in the slideshow |

## Navigation Methods

### Mouse/Trackpad

- **Scroll wheel**: Scroll up/down to navigate
- **Click arrows**: Use the ⟪ ⟫ navigation buttons
- **Click thumbnails**: Click on thumbnail images to jump to specific slides

### Keyboard

- **Arrow Left**: Previous slide
- **Arrow Right**: Next slide

### Touch (Mobile)

- **Swipe up**: Next slide
- **Swipe down**: Previous slide

## Component Structure

The slideshow consists of several key elements:

1. **Main Slides**: Full-screen background images with smooth transitions
2. **Navigation UI**: Bottom-aligned controls and information
3. **Thumbnails**: Small preview images for quick navigation
4. **Drag Lines**: Animated visual indicators above thumbnails
5. **Slide Counter**: Current slide number and total count
6. **Slide Titles**: Animated text that changes with each slide

## CSS Customization

The component uses CSS custom properties for easy styling:

```css
:root {
	--color-text: #fff;
	--color-bg: #000;
	--thumb-width: 120px;
	--line-base-height: 15px;
	--line-max-height: 50px;
}
```

## Animation Features

- **Entrance Effects**: Slides enter with scale and position animations
- **Filter Transitions**: Smooth contrast and saturation changes
- **Thumbnail Hover**: Interactive drag line animations
- **Title Transitions**: Smooth text changes with enter/exit animations

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers with touch event support
- Requires CSS Grid and Flexbox support

## Performance Notes

- Images are loaded as background images for optimal performance
- GSAP animations are optimized with `will-change` CSS properties
- Event listeners are properly cleaned up to prevent memory leaks
- Animation state management prevents overlapping transitions

## Customization Examples

### Changing Slide Titles

```tsx
// In the Slideshow component, modify the slideTitles array:
const slideTitles = [
	"Your Title 1",
	"Your Title 2",
	"Your Title 3",
	// ... more titles
];
```

### Adjusting Animation Timing

```tsx
// Modify the GSAP timeline durations in the component:
duration: 0.7, // Change from 0.7 to your preferred duration
```

### Customizing Colors

```css
/* In your CSS, override the custom properties: */
:root {
	--color-text: #your-color;
	--color-bg: #your-bg-color;
}
```

## Troubleshooting

### Common Issues

1. **Images not loading**: Check that image URLs are accessible and valid
2. **Animations not working**: Ensure GSAP is properly installed and imported
3. **Touch events not working**: Verify the component is running in a touch-enabled environment

### Performance Issues

- Use optimized images (WebP format recommended)
- Consider lazy loading for large numbers of images
- Monitor memory usage on mobile devices

## License

This component is part of the Trawild project and follows the same licensing terms.

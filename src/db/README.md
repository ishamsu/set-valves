# Testimonial Data

This directory contains dummy testimonial data for the quote slider component.

## Structure

The testimonial data follows this structure:

```typescript
interface Testimonial {
	id: string;
	name: string;
	designation: string;
	desc: string;
	rating?: number;
	company?: string;
}

interface TestimonialData {
	ids: string[];
	details: Record<string, Testimonial>;
}
```

## Current Data

The dummy data includes 5 testimonials from fictional users:

1. **Sarah Johnson** - Product Manager at TechFlow Inc.
2. **Michael Chen** - Frontend Developer at DigitalCraft Studio
3. **Emily Rodriguez** - UX Designer at CreativeMinds Agency
4. **David Thompson** - Marketing Director at GrowthFirst Solutions
5. **Lisa Wang** - CEO & Founder at InnovateTech

## Usage

```typescript
import {testimonialData} from "@/db";

// Get all testimonial IDs
const ids = testimonialData.ids;

// Get a specific testimonial
const testimonial = testimonialData.details["1"];

// Get all testimonials as an array
const allTestimonials = ids.map((id) => testimonialData.details[id]);
```

## Customization

To add more testimonials:

1. Add a new ID to the `ids` array
2. Add the corresponding testimonial object to the `details` object
3. The component will automatically handle the new testimonials

## Profile Images

Currently using placeholder avatars with initials. To use real profile images:

1. Add images to the `public` folder
2. Update the `Images.testimonials` object in `src/config/constants/Images.ts`
3. Replace the `PlaceholderAvatar` component with `Image` component in the quote slider

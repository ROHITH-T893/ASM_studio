# ASM Photography - Premium Photography Portfolio

A production-ready Next.js photography website for ASM Photography featuring premium design, responsive layout, and integrated booking CTAs.

## Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Responsive Design** - Mobile-first approach
- **Image Optimization** - Next.js Image component
- **SEO Optimized** - Meta tags and structured data ready
- **Booking Integration** - WhatsApp and phone CTAs
- **Scroll Animations** - Reveal animations on scroll
- **Premium UI** - Dark theme with gold accents
- **Fast Performance** - Optimized bundle and lazy loading

## Project Structure

```
asm-photography/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── Portfolio.tsx        # Portfolio grid
│   ├── Services.tsx         # Services section
│   ├── Process.tsx          # Process section
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form
│   ├── FinalCTA.tsx         # Final CTA section
│   ├── Footer.tsx           # Footer
│   ├── WhatsAppButton.tsx   # Floating WhatsApp button
│   └── Reveal.tsx           # Scroll reveal component
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Sections

### Hero
- Full-screen hero with featured image
- Trust indicators (24+ years, 500+ shoots, 6 services)
- Service preview cards
- Primary and secondary CTAs

### Portfolio
- Bento grid layout with image gallery
- Hover effects with smooth scaling
- Service category tags
- Image-first design for visual storytelling

### Services
- Six core service offerings with icons
- Description and pricing hints
- Hover animations
- Easy scanning layout

### Process
- Three-step workflow
- Process image with booking growth metric
- Clear step-by-step explanation

### About
- Personal photographer story
- 24+ years experience highlights
- Trust and consistency messaging
- Grayscale hover effect on image

### Contact
- Booking form with all key fields
- Direct phone and WhatsApp links
- Location panel with Google Maps integration
- Fast response messaging

### Final CTA
- High-impact booking section
- Large gradient button
- Converstion-focused messaging

## Customization

### Colors
Update the color scheme in `tailwind.config.ts`:
- `gold: '#d4af37'` - Primary accent
- `background: '#0f0f0f'` - Background color
- `text: '#f5f5f4'` - Text color

### Contact Information
Update contact details in components:
- Phone: `+91 98425 74766`
- WhatsApp: Same as phone
- Location: `Namakkal, Tamil Nadu`

### Images
Replace placeholder images in components with your actual photography:
- Hero image in `Hero.tsx`
- Portfolio images in `Portfolio.tsx`
- About image in `About.tsx`
- Process image in `Process.tsx`

## Performance Optimization

- **Image Optimization**: Uses Next.js Image component with proper lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Optimization**: Tailwind CSS with PurgeCSS in production
- **Font Optimization**: Google Fonts with proper preloading

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables if needed
4. Deploy

### Other Platforms

```bash
npm run build
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 ASM Photography. All rights reserved.

## Contact

- **Phone**: +91 98425 74766
- **WhatsApp**: +91 98425 74766
- **Location**: Namakkal, Tamil Nadu

# ASM Photography - Quick Start Guide

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript

### 2. Run Development Server
```bash
npm run dev
```

The application will start at: **http://localhost:3000**

### 3. Build for Production
```bash
npm run build
npm run start
```

## Project Structure Overview

### `/app` - Next.js App Router
- `layout.tsx` - Root layout with metadata
- `globals.css` - Global styles and animations
- `page.tsx` - Home page (main entry point)

### `/components` - Reusable React Components
- `Navbar.tsx` - Fixed navigation bar
- `Hero.tsx` - Hero section with featured work
- `Portfolio.tsx` - Portfolio grid with images
- `Services.tsx` - Service cards (6 offerings)
- `Process.tsx` - Three-step workflow
- `About.tsx` - Photographer story
- `Contact.tsx` - Booking form and contact info
- `FinalCTA.tsx` - Final call-to-action section
- `Footer.tsx` - Footer with links
- `WhatsAppButton.tsx` - Floating WhatsApp button
- `Reveal.tsx` - Scroll animation component

## Key Features

### ✅ Premium Design
- Dark background (#0f0f0f) with gold accents (#d4af37)
- Professional typography with Cormorant Garamond & Inter
- Smooth scroll reveals and hover animations
- Glassmorphism effects

### ✅ Conversion Optimized
- WhatsApp floating button (always visible)
- Phone CTA in navbar
- Multiple booking pathways
- Contact form with all required fields
- Google Maps integration

### ✅ Responsive & Fast
- Mobile-first responsive design
- Next.js Image optimization
- Tailwind CSS for minimal CSS
- Lazy loading for images
- SEO optimized with meta tags

### ✅ Developer Friendly
- TypeScript for type safety
- Clean component structure
- Easy customization
- ESLint configured
- Prettier for code formatting

## Customization Guide

### Update Business Information
Edit the following files:

**Phone & WhatsApp:**
- `components/Navbar.tsx` - Line with `+919842574766`
- `components/Hero.tsx` - CTA links
- `components/Contact.tsx` - Contact links
- `components/FinalCTA.tsx` - Final CTA links
- `components/WhatsAppButton.tsx` - Button link

**Location:**
- `app/layout.tsx` - Meta description
- `components/Navbar.tsx` - Logo subtitle
- `components/Contact.tsx` - Location panel
- `components/Footer.tsx` - Footer address

### Replace Images

Images are sourced from Unsplash. Replace URLs in:
- `components/Hero.tsx` - Hero image
- `components/Portfolio.tsx` - Portfolio images
- `components/Process.tsx` - Process image
- `components/About.tsx` - About image

### Update Colors

Edit `tailwind.config.ts`:
```typescript
extend: {
  colors: {
    background: '#0f0f0f',    // Main background
    gold: '#d4af37',          // Primary accent
    text: '#f5f5f4',          // Text color
    // ... other colors
  }
}
```

### Update Content

Edit component files directly:
- Service descriptions in `Services.tsx`
- Process steps in `Process.tsx`
- About text in `About.tsx`
- Contact form fields in `Contact.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to vercel.com
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Your site is live

### Deploy Elsewhere

```bash
# Build production version
npm run build

# Start production server
npm run start
```

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Clear Cache
```bash
rm -rf .next
npm run dev
```

### TypeScript Errors
```bash
npm run build
```
This will show all TypeScript errors.

## Performance Tips

1. **Optimize Images**: Use tools like TinyPNG to compress images
2. **Lazy Load**: Images are already lazy-loaded with Next.js
3. **Monitor Performance**: Use Lighthouse (Chrome DevTools)
4. **Cache Strategy**: Next.js handles caching automatically

## Support & Documentation

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **React Docs**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org

## Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ Customize content and images
4. ✅ Test on mobile devices
5. ✅ Deploy to production

Happy building! 🚀

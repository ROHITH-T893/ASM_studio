# Project Architecture & Structure

## Overview

ASM Photography is a modern Next.js 14 website built with:
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **UI Components**: Custom React components
- **Images**: Next.js Image optimization
- **Animations**: CSS transitions & Intersection Observer API

## Directory Structure

```
asm-photography/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (HTML structure)
│   ├── globals.css              # Global styles & animations
│   ├── page.tsx                 # Home page
│   └── favicon.ico              # Favicon
│
├── components/                  # React Components
│   ├── Navbar.tsx               # Top navigation bar
│   ├── Hero.tsx                 # Hero section (h1, CTA, images)
│   ├── Portfolio.tsx            # Bento grid gallery
│   ├── Services.tsx             # 6 service cards
│   ├── Process.tsx              # 3-step workflow
│   ├── About.tsx                # Photographer story
│   ├── Contact.tsx              # Form + contact info
│   ├── FinalCTA.tsx             # Gradient CTA section
│   ├── Footer.tsx               # Footer with links
│   ├── WhatsAppButton.tsx       # Floating action button
│   └── Reveal.tsx               # Scroll reveal animation
│
├── public/                      # Static assets (future)
│
├── Configuration Files
│   ├── package.json             # Dependencies
│   ├── tsconfig.json            # TypeScript config
│   ├── tailwind.config.ts       # Tailwind config
│   ├── postcss.config.js        # PostCSS config
│   ├── next.config.js           # Next.js config
│   ├── .eslintrc.json           # ESLint rules
│   └── .prettierrc              # Code formatting
│
└── Documentation
    ├── README.md                # Full documentation
    ├── QUICKSTART.md            # Quick start guide
    └── DESIGN.md                # Design system (legacy)
```

## Component Architecture

### Page Layout (Vertical Stack)

```
┌─────────────────────────────────┐
│         Navbar (Fixed)          │  Always visible
├─────────────────────────────────┤
│            Hero                 │  Welcome + featured image
├─────────────────────────────────┤
│          Portfolio              │  Image gallery
├─────────────────────────────────┤
│          Services               │  6 service cards
├─────────────────────────────────┤
│          Process                │  3-step workflow
├─────────────────────────────────┤
│           About                 │  Photographer story
├─────────────────────────────────┤
│          Contact                │  Form + contact info
├─────────────────────────────────┤
│         Final CTA               │  Gradient section
├─────────────────────────────────┤
│          Footer                 │  Links + credits
└─────────────────────────────────┘
    + WhatsAppButton (Fixed)      Always visible (bottom-right)
```

## Component Relationships

```
page.tsx (Root)
├── Navbar
│   └── Links to all sections (#id anchors)
│
├── Hero
│   └── Reveal (animation wrapper)
│       └── Featured image + CTA buttons
│
├── Portfolio
│   └── Multiple Reveals
│       └── Image cards with overlays
│
├── Services
│   └── Multiple Reveals
│       └── Service card (icon + description)
│
├── Process
│   └── Reveals
│       └── Step cards + process image
│
├── About
│   └── Reveals
│       └── Photographer image + story
│
├── Contact
│   └── Form component
│       ├── Text inputs
│       ├── Select dropdown
│       ├── Textarea
│       └── Submit button
│
├── FinalCTA
│   └── Reveal
│       └── CTA buttons
│
├── Footer
│   └── Reveals
│       └── Links + info
│
└── WhatsAppButton
    └── Fixed position button
```

## Data Flow

```
page.tsx (Server Component)
    ↓
Components (Mix of Client/Server)
    ├── Navbar (Client - nav links)
    ├── Hero (Server - static content)
    ├── Portfolio (Server - static images)
    ├── Services (Server - static service list)
    ├── Process (Server - static steps)
    ├── About (Server - static story)
    ├── Contact (Client - form handling)
    ├── FinalCTA (Server - static CTA)
    ├── Footer (Server - static links)
    └── WhatsAppButton (Client - external link)
```

## Styling Strategy

### Tailwind CSS + CSS

**Tailwind for:**
- Layout (grid, flex)
- Spacing (padding, margin)
- Colors (text, background)
- Responsive (md:, lg:)
- Hover states

**Custom CSS for:**
- Animations (reveal, scale)
- Pseudo-elements (::before, ::after)
- Glass morphism
- Gradient overlays
- Media queries (prefers-reduced-motion)

## Responsive Breakpoints

- **Mobile**: < 768px (default)
- **Tablet**: md (768px) and above
- **Desktop**: lg (1024px) and above
- **Large**: xl (1280px) and above

## Animation System

### Reveal Animations
```typescript
// Uses Intersection Observer API
- Triggers when 15% visible
- Smooth fade-in + slide up
- Duration: 700ms
- Respects prefers-reduced-motion
```

### Image Hover
```typescript
// On hover:
- Scale: 1.05
- Filter: saturate(1.06) + contrast(1.02)
- Duration: 900ms
- Cubic-bezier easing
```

## Performance Optimizations

### Image Optimization
- Next.js `<Image>` component
- Automatic WebP format
- Responsive srcset
- Lazy loading (loading="lazy")
- CDN caching (Unsplash)

### Code Splitting
- Automatic per-route
- Client components only where needed
- Unused code removed (tree-shaking)

### CSS Optimization
- Tailwind PurgeCSS (production)
- Minified output
- Critical CSS inline

### Font Optimization
- Google Fonts with preload
- Font display: swap
- Minimal font weights

## Booking Flow

```
User lands on site
    ↓
Sees Navbar with "Book Your Shoot" button
    ↓ OR ↓ OR ↓
Navbar CTA    Hero CTA    WhatsApp Button
    ↓           ↓              ↓
  Phone      WhatsApp        WhatsApp
    ↓           ↓              ↓
Outbound      Message       Message
  Call      (Pre-filled)    (Pre-filled)
    ↓           ↓              ↓
  Booking   Conversation    Booking
```

## Form Handling

Contact form uses React state:
```typescript
- Collects: name, phone, shootType, date, message
- Validates: (client-side ready for enhancement)
- Submits: Logs to console (backend integration needed)
- Resets: Form after submission
```

## SEO Features

- Meta title & description
- Open Graph tags (og:title, og:description)
- Semantic HTML (h1, h2, h3, nav, main, footer)
- Mobile viewport meta tag
- Theme color meta tag
- Sitemap ready (can be generated)
- Robots.txt ready

## Accessibility Features

- Semantic HTML
- ARIA labels on images
- Color contrast ratios meet WCAG AA
- Keyboard navigation (tab through links)
- Screen reader friendly
- Respects prefers-reduced-motion
- Alt text on all images

## Future Enhancements

1. **Form Backend**: Connect to email service (SendGrid, Mailgun)
2. **Analytics**: Add Google Analytics or Plausible
3. **Blog**: Add /blog route for portfolio articles
4. **Admin**: Add /admin for content management
5. **Testimonials**: Add client testimonials slider
6. **Booking System**: Integrate with Calendly or similar
7. **Payment**: Add Stripe for booking deposits
8. **Dark/Light Toggle**: Add theme switcher
9. **Multilingual**: Add i18n for multiple languages
10. **PWA**: Add service worker for offline support

## Deployment Checklist

- [ ] Update contact info (phone, email)
- [ ] Replace placeholder images
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Setup analytics
- [ ] Configure domain DNS
- [ ] Add SSL certificate
- [ ] Set up email notifications
- [ ] Create database for form submissions
- [ ] Test form submission
- [ ] Deploy to production

## File Size Reference

Typical bundle sizes:
- HTML: ~15KB (gzipped)
- CSS: ~25KB (gzipped)
- JS: ~40KB (gzipped)
- Total: ~80KB (gzipped)

*Actual sizes depend on images and external resources*

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

## Security Considerations

- ✅ No sensitive data in frontend
- ✅ Form handling (backend integration needed)
- ✅ Next.js CSRF protection built-in
- ✅ Environment variables for secrets (.env.local)
- ⚠️ Add rate limiting for form submissions
- ⚠️ Add CAPTCHA to contact form
- ⚠️ Validate form data on backend

## Version History

- v1.0.0 - Initial release
  - All core sections
  - Responsive design
  - Premium styling
  - Booking CTAs

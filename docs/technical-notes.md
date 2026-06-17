# Technical Notes

## Frontend Architecture

The application uses Next.js 14 with the App Router. The home page (`app/page.tsx`) composes layout and section components in a single scrollable landing page. Root layout (`app/layout.tsx`) handles global styles, fonts, and SEO metadata.

```
app/
├── page.tsx          # Home page composition
├── layout.tsx        # Root layout and metadata
└── globals.css       # Global styles and utilities

components/
├── layout/           # Navbar, Footer
├── sections/         # Page sections
└── ui/               # Shared primitives

data/
├── features.ts
├── pricing.ts
├── testimonials.ts
└── faqs.ts

lib/
└── utils.ts          # cn() className helper
```

## Data Structure

Content is stored in typed TypeScript files under `data/`:

| File | Exports | Used By |
|------|---------|---------|
| `features.ts` | `features[]` with icon, title, description, styling | Features section |
| `pricing.ts` | `plans[]` with price, features, CTA | Pricing section |
| `testimonials.ts` | `testimonials[]` with quote, author, company | Testimonials section |
| `faqs.ts` | `faqs[]` with question and answer | FAQ section |

This pattern keeps marketing copy separate from presentation logic. To update content, edit the data files without modifying component structure.

## Styling

Tailwind CSS handles all styling with custom extensions in `tailwind.config.ts`:

- Custom colors: `background`, `primary`, `cyan`, `purple`
- Custom gradients: `gradient-hero`, `gradient-radial`
- Custom shadows: `glow`, `card`, `card-hover`
- Utility classes in `globals.css`: `.glass`, `.gradient-text`, `.section-padding`, `.container-max`

The design system uses a dark background (`#0A0A0F`) with indigo/purple/cyan accents and glassmorphism card patterns.

## Animations

Framer Motion powers:

- Hero entrance animations with staggered fade-up
- Scroll-triggered section reveals (`whileInView`)
- FAQ accordion expand/collapse
- Dashboard bar chart scale animation
- Navbar mobile menu transitions
- Subtle hover lifts on feature cards

`prefers-reduced-motion` is respected in `globals.css` to disable animations for accessibility.

## Responsiveness

The layout is mobile-first:

- Single-column grids on small screens
- Multi-column feature and pricing grids at `sm` and `md` breakpoints
- Dashboard mockup sidebar hidden on mobile
- Collapsible mobile navigation
- Flexible CTA button stacks on narrow viewports

## Deployment

The project is configured for Vercel with default Next.js settings. Set `NEXT_PUBLIC_SITE_URL` in environment variables for correct metadata URLs. See [architecture/deployment.md](../architecture/deployment.md) for the full deployment workflow.

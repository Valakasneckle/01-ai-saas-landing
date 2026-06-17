# Component Structure

```mermaid
flowchart TD
    AL[App Layout] --> NAV[Navbar]
    AL --> HP[Home Page]
    AL --> FT[Footer]

    HP --> H[Hero]
    HP --> LC[LogoCloud]
    HP --> FE[Features]
    HP --> PP[ProductPreview]
    HP --> PR[Pricing]
    HP --> TE[Testimonials]
    HP --> FAQ[FAQ]
    HP --> CTA[CTA]

    FE --> FC[FeatureCard]
    PR --> PC[PricingCard]
    TE --> TC[TestimonialCard]
    FAQ --> FQI[FAQItem]

    FC --> CARD[Card UI]
    PC --> BTN[Button UI]
    TC --> CARD
    FQI --> CARD

    NAV --> BTN
    CTA --> BTN
    H --> BTN
```

## Explanation

The root layout wraps every page with the **Navbar** and **Footer**. The home page composes eight section components in sequence.

Section components render specialized card subcomponents (**FeatureCard**, **PricingCard**, **TestimonialCard**, **FAQItem**) that share reusable UI primitives from `components/ui/`:

- **Button** — Primary, secondary, and outline variants for CTAs
- **Card** — Glassmorphism container with hover states
- **Badge** — Section labels and status indicators
- **Section** — Consistent padding and max-width wrapper

Content data is imported from `data/` files, keeping components focused on presentation.

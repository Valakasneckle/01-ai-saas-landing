export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  avatarColor: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Head of Operations",
    company: "Vertex Labs",
    avatar: "SC",
    avatarColor: "from-indigo-500 to-purple-500",
    quote:
      "NeuroFlow reduced our document retrieval time by 80%. What used to take hours now takes seconds. Our team can't imagine working without it.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "CTO",
    company: "Helios Finance",
    avatar: "MW",
    avatarColor: "from-cyan-500 to-indigo-500",
    quote:
      "The workflow automation alone paid for itself in the first week. We automated 12 manual processes and freed up two full-time engineers.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "VP of Product",
    company: "Orbit SaaS",
    avatar: "PN",
    avatarColor: "from-purple-500 to-pink-500",
    quote:
      "The knowledge base feature transformed how we onboard new hires. Our ramp-up time dropped from 3 weeks to under 5 days.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Director of Engineering",
    company: "Stratum AI",
    avatar: "JO",
    avatarColor: "from-emerald-500 to-cyan-500",
    quote:
      "Integration with our existing stack was seamless. NeuroFlow connected to Slack, Notion, and our internal tools in under an hour.",
    rating: 5,
  },
  {
    name: "Elena Volkov",
    role: "Chief of Staff",
    company: "Meridian Capital",
    avatar: "EV",
    avatarColor: "from-orange-500 to-pink-500",
    quote:
      "Smart Summaries cut my reading time in half. I stay on top of everything without drowning in docs. It's like having a personal analyst.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "NovaBridge",
    avatar: "DK",
    avatarColor: "from-indigo-500 to-cyan-500",
    quote:
      "We evaluated six AI platforms and NeuroFlow was the clear winner. The depth of its document intelligence is unmatched at this price point.",
    rating: 5,
  },
];

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
}

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams exploring AI automation.",
    features: [
      "Up to 5 team members",
      "10,000 AI queries / month",
      "5 GB document storage",
      "AI document search",
      "Smart summaries",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$89",
    period: "/month",
    description: "For growing teams that need power and flexibility.",
    features: [
      "Up to 25 team members",
      "100,000 AI queries / month",
      "100 GB document storage",
      "Everything in Starter",
      "Workflow automation",
      "Team knowledge base",
      "200+ integrations",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale organizations.",
    features: [
      "Unlimited team members",
      "Unlimited AI queries",
      "Unlimited storage",
      "Everything in Pro",
      "SSO & advanced security",
      "Custom AI model fine-tuning",
      "SLA & uptime guarantee",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: null,
  },
];

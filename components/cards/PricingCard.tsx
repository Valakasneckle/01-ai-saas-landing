"use client";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
  index: number;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted,
  badge,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-7 transition-all duration-300",
        highlighted
          ? "bg-gradient-to-b from-indigo-500/10 to-indigo-500/[0.03] border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.15)] scale-[1.02]"
          : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.12] hover:bg-white/[0.05]"
      )}
    >
      {/* Most popular badge */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-glow">
            {badge}
          </span>
        </div>
      )}

      {/* Plan name */}
      <div className="mb-5">
        <h3 className={cn("text-sm font-semibold uppercase tracking-widest mb-3", highlighted ? "text-indigo-400" : "text-white/50")}>
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && <span className="text-base text-white/40">{period}</span>}
        </div>
        <p className="text-sm text-white/40 mt-2 leading-relaxed">{description}</p>
      </div>

      {/* Divider */}
      <div className={cn("w-full h-px mb-5", highlighted ? "bg-indigo-500/20" : "bg-white/[0.06]")} />

      {/* Features list */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <div className={cn("w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5", highlighted ? "bg-indigo-500/20" : "bg-white/[0.06]")}>
              <Check className={cn("w-2.5 h-2.5", highlighted ? "text-indigo-400" : "text-white/40")} />
            </div>
            <span className="text-sm text-white/60 leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={highlighted ? "primary" : "secondary"}
        size="md"
        className="w-full justify-center"
        href="#"
      >
        {cta}
        <ArrowRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

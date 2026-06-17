"use client";

import PricingCard from "@/components/cards/PricingCard";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { plans } from "@/data/pricing";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <Section id="pricing" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="text-center mb-14 relative z-10">
        <SectionLabel>Pricing</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Simple, transparent pricing
          <br />
          <span className="gradient-text">that scales with you</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto text-base md:text-lg text-white/50 leading-relaxed"
        >
          Start free. No credit card required. Upgrade when you&apos;re ready.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
        {plans.map((plan, i) => (
          <PricingCard key={plan.name} {...plan} index={i} />
        ))}
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-sm text-white/30 mt-10 relative z-10"
      >
        All plans include a 14-day free trial · No credit card required · Cancel anytime
      </motion.p>
    </Section>
  );
}

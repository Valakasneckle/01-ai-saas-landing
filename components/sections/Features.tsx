"use client";

import FeatureCard from "@/components/cards/FeatureCard";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { features } from "@/data/features";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <Section id="features">
      {/* Header */}
      <div className="text-center mb-16">
        <SectionLabel>Platform Features</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Everything your team needs
          <br />
          <span className="gradient-text">to work at AI speed</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mx-auto text-base md:text-lg text-white/50 leading-relaxed"
        >
          Six powerful modules that work together seamlessly — from intelligent search
          to full workflow automation.
        </motion.p>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} index={i} />
        ))}
      </div>
    </Section>
  );
}

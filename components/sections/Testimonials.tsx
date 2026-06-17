"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="text-center mb-14">
        <SectionLabel>Testimonials</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Loved by teams that
          <br />
          <span className="gradient-text">move fast and think big</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto text-base text-white/50"
        >
          Join 2,400+ teams that have transformed how they work with NeuroFlow.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} {...t} index={i} />
        ))}
      </div>
    </Section>
  );
}

"use client";

import FAQItem from "@/components/cards/FAQItem";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { faqs } from "@/data/faqs";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Questions? We&apos;ve got
            <br />
            <span className="gradient-text">clear answers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-white/50"
          >
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
              Talk to our team
            </a>
          </motion.p>
        </div>

        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

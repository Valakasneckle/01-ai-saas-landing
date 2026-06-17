"use client";

import { motion } from "framer-motion";

const logoPartners = [
  { name: "Stripe", symbol: "S/" },
  { name: "Vercel", symbol: "▲" },
  { name: "Linear", symbol: "◆" },
  { name: "Notion", symbol: "N" },
  { name: "Figma", symbol: "F" },
  { name: "Loom", symbol: "L" },
];

export default function LogoCloud() {
  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="container-max mx-auto">
        {/* Divider line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-white/30 uppercase tracking-widest font-medium mb-10"
        >
          Trusted by teams at world-class companies
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logoPartners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-2.5 text-white/20 hover:text-white/40 transition-colors duration-300 cursor-default"
            >
              <span className="text-xl font-bold font-mono">{partner.symbol}</span>
              <span className="text-base font-semibold tracking-tight">{partner.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12" />
      </div>
    </section>
  );
}

"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Orb 1 — indigo */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none"
      />
      {/* Orb 2 — purple */}
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[100px] pointer-events-none"
      />
      {/* Orb 3 — cyan */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-max px-4 md:px-8 text-center">
        {/* Announcement badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-8"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.07] transition-all duration-300 text-sm"
          >
            <span className="flex items-center gap-1.5 text-indigo-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              New
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="text-white/60">Introducing AI Workflow Studio</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all duration-200" />
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          <span className="text-white">Turn business knowledge</span>
          <br />
          <span className="gradient-text">into intelligent workflows</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/55 leading-relaxed mb-10"
        >
          NeuroFlow AI helps teams automate workflows, search documents, summarize
          knowledge, and improve productivity with AI — all in one unified platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" href="#pricing">
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="secondary" href="#product">
            <Play className="w-4 h-4 fill-current" />
            View Demo
          </Button>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["SC", "MW", "PN", "JO"].map((initials, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-background flex items-center justify-center text-[9px] font-bold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span>Trusted by 2,400+ teams</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>
              <strong className="text-white/60">80%</strong> faster document retrieval
            </span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400">★★★★★</span>
            <span>4.9/5 on G2</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

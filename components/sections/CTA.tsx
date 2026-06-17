"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-purple-600/10 blur-[80px] pointer-events-none" />

      <div className="container-max mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-white/[0.1] bg-gradient-to-b from-indigo-500/10 to-purple-500/5 backdrop-blur-sm p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

          {/* Top border glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3 h-3" />
              14-day free trial · No credit card required
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-5 leading-tight">
              Ready to build your
              <br />
              <span className="gradient-text">AI-powered workspace?</span>
            </h2>

            <p className="max-w-lg mx-auto text-base md:text-lg text-white/50 leading-relaxed mb-10">
              Join 2,400+ forward-thinking teams already using NeuroFlow to automate
              workflows, surface insights, and ship faster than ever before.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" href="#pricing">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="secondary" href="#">
                Book a Demo
              </Button>
            </div>

            <p className="text-xs text-white/25 mt-6">
              Setup takes less than 5 minutes · SOC 2 Type II certified
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

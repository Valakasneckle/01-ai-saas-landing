"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  avatarColor: string;
  quote: string;
  rating: number;
  index: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  avatar,
  avatarColor,
  quote,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 p-6 flex flex-col gap-4"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-white/60 leading-relaxed flex-1 group-hover:text-white/70 transition-colors">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-9 h-9 rounded-full bg-gradient-to-br flex items-center justify-center text-xs font-bold text-white shrink-0",
            avatarColor
          )}
        >
          {avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          <div className="text-xs text-white/35">
            {role} · {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

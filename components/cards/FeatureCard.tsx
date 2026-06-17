"use client";

import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  iconBg: string;
  index: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  iconColor,
  iconBg,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden cursor-default"
    >
      <Card hover className="h-full p-6 relative overflow-hidden">
        {/* Card shine on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
            `bg-gradient-to-br ${gradient}`
          )}
        />

        {/* Icon */}
        <div
          className={cn(
            "relative z-10 w-11 h-11 rounded-xl flex items-center justify-center mb-5",
            iconBg
          )}
        >
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>

        {/* Content */}
        <h3 className="relative z-10 text-base font-semibold text-white mb-2.5 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="relative z-10 text-sm text-white/50 leading-relaxed group-hover:text-white/60 transition-colors">
          {description}
        </p>

        {/* Bottom accent line */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            `bg-gradient-to-r ${gradient.replace("/20", "").replace("/10", "")}`
          )}
        />
      </Card>
    </motion.div>
  );
}

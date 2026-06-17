import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "indigo" | "cyan" | "purple" | "green";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default:
      "bg-white/5 border-white/10 text-white/70",
    indigo:
      "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    cyan:
      "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    purple:
      "bg-purple-500/10 border-purple-500/20 text-purple-400",
    green:
      "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

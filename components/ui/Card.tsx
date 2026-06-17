import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
  glass = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08]",
        glass && "bg-white/[0.03] backdrop-blur-sm",
        hover &&
        "transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]",
        className
      )}
    >
      {children}
    </div>
  );
}

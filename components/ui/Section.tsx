import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export default function Section({
  id,
  className,
  children,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding relative", className)}>
      <div className={cn("container-max", containerClassName)}>{children}</div>
    </section>
  );
}

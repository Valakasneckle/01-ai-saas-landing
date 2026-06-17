import {
  BarChart3,
  BookOpen,
  FileSearch,
  Shield,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  iconBg: string;
}

export const features: Feature[] = [
  {
    icon: Zap,
    title: "AI Workflow Automation",
    description:
      "Build intelligent pipelines that route tasks, trigger actions, and keep your team in sync — all without writing a single line of code.",
    gradient: "from-cyan-500/20 to-indigo-500/10",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    description:
      "Instantly surface any insight across thousands of documents with semantic search powered by large language models. No more manual digging.",
    gradient: "from-indigo-500/20 to-purple-500/10",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
  },
  {
    icon: BookOpen,
    title: "Team Knowledge Base",
    description:
      "Create a living, AI-curated repository of your company's collective knowledge. Every answer is always up to date and attribution-tracked.",
    gradient: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    icon: Sparkles,
    title: "Smart Summaries",
    description:
      "Get executive-level summaries of lengthy reports, meeting transcripts, and contracts in seconds. Stay informed without reading everything.",
    gradient: "from-emerald-500/20 to-cyan-500/10",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track workflow efficiency, knowledge gaps, and team performance with real-time dashboards that turn raw data into actionable signals.",
    gradient: "from-pink-500/20 to-purple-500/10",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
  },
  {
    icon: Shield,
    title: "Secure Collaboration",
    description:
      "Role-based access, audit logs, and enterprise-grade encryption keep your internal knowledge safe while teams collaborate at scale.",
    gradient: "from-orange-500/20 to-yellow-500/10",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
  },
];

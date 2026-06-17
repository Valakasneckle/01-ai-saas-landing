"use client";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  LayoutDashboard,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const metrics = [
  {
    label: "Docs Processed",
    value: "12,847",
    change: "+18%",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    icon: FileText,
  },
  {
    label: "Queries Today",
    value: "4,291",
    change: "+24%",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    icon: Search,
  },
  {
    label: "Active Workflows",
    value: "38",
    change: "+5",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    icon: Zap,
  },
  {
    label: "Team Members",
    value: "24",
    change: "+2",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: Users,
  },
];

const recentActivity = [
  { label: "Q4 Strategy.pdf summarized", time: "2m ago", status: "done" },
  { label: "Slack → Notion sync triggered", time: "5m ago", status: "done" },
  { label: "Onboarding KB updated", time: "12m ago", status: "done" },
  { label: "Contract analysis running", time: "now", status: "running" },
];

const chartBars = [60, 80, 55, 90, 75, 95, 70, 88, 65, 92, 80, 100];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function ProductPreview() {
  return (
    <Section id="product" className="overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <SectionLabel>Product Preview</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Full visibility over
          <br />
          <span className="gradient-text">your entire AI workspace</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mx-auto text-base md:text-lg text-white/50 leading-relaxed"
        >
          Monitor documents, workflows, team activity, and AI performance — all from
          one beautifully designed command center.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-xl opacity-60 pointer-events-none" />

        <div className="relative rounded-2xl border border-white/[0.1] bg-[#0E0E18] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-[#0A0A12]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="max-w-xs mx-auto bg-white/[0.04] border border-white/[0.06] rounded-md px-3 py-1 text-xs text-white/30 text-center">
                app.neuroflow.ai / dashboard
              </div>
            </div>
            <Bell className="w-4 h-4 text-white/20" />
          </div>

          <div className="flex min-h-[520px] md:min-h-[580px]">
            <div className="hidden md:flex flex-col w-52 border-r border-white/[0.06] bg-[#0A0A12] p-3 shrink-0">
              <div className="flex items-center gap-2 px-2 mb-6 mt-1">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white fill-white" />
                </div>
                <span className="text-sm font-bold text-white">NeuroFlow</span>
              </div>

              {[
                { icon: LayoutDashboard, label: "Dashboard", active: true },
                { icon: Search, label: "AI Search" },
                { icon: Zap, label: "Workflows" },
                { icon: BookOpen, label: "Knowledge Base" },
                { icon: BarChart3, label: "Analytics" },
                { icon: Settings, label: "Settings" },
              ].map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 text-xs cursor-default ${active
                      ? "bg-indigo-500/15 text-indigo-400"
                      : "text-white/30 hover:text-white/50"
                    }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex-1 overflow-hidden p-4 md:p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">Good morning, Sarah 👋</h3>
                  <p className="text-xs text-white/30 mt-0.5">Here&apos;s what&apos;s happening today</p>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-xs text-white/30">
                  <Clock className="w-3 h-3" />
                  Last 30 days
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                {metrics.map((m) => (
                  <Card key={m.label} className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${m.bg}`}>
                        <m.icon className={`w-3.5 h-3.5 ${m.color}`} />
                      </div>
                      <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" />
                        {m.change}
                      </span>
                    </div>
                    <div className={`text-lg font-bold ${m.color}`}>{m.value}</div>
                    <div className="text-[10px] text-white/30 mt-0.5">{m.label}</div>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">
                <Card className="p-4 lg:col-span-1 border-indigo-500/20 bg-indigo-500/[0.04]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <span className="text-xs font-semibold text-white/70">AI Summary</span>
                  </div>
                  <p className="text-[11px] text-white/50 leading-relaxed mb-3">
                    Q4 Strategy highlights: revenue up 24%, three new enterprise pilots,
                    and a prioritized roadmap for workflow automation in finance ops.
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-indigo-400">
                    <FileText className="w-3 h-3" />
                    Generated from Q4 Strategy.pdf
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <span className="text-xs font-semibold text-white/70">Workflow Automation</span>
                  </div>
                  <div className="space-y-2">
                    {["Slack → Notion sync", "Contract review routing", "KB auto-update"].map(
                      (step, i) => (
                        <div key={step} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-cyan-500/15 flex items-center justify-center text-[9px] text-cyan-400 font-bold">
                            {i + 1}
                          </div>
                          <span className="text-[11px] text-white/50">{step}</span>
                        </div>
                      )
                    )}
                  </div>
                  <p className="text-[10px] text-emerald-400 mt-3">38 workflows active</p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Search className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                    <span className="text-xs font-semibold text-white/70">Document Intelligence</span>
                  </div>
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2 mb-3">
                    <p className="text-[10px] text-white/30 mb-1">Recent query</p>
                    <p className="text-[11px] text-white/60">
                      &quot;What are our Q4 expansion priorities?&quot;
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Strategy", "Contracts", "HR Policy"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-2.5 min-h-0">
                <Card className="lg:col-span-3 p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-white/60">AI Query Volume</span>
                    <span className="text-[10px] text-indigo-400 flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" />
                      +32% this month
                    </span>
                  </div>
                  <div className="flex-1 flex items-end gap-1 min-h-[100px]">
                    {chartBars.map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
                          style={{ height: `${h}%`, originY: 1 }}
                          className={`w-full rounded-sm ${i === 11
                              ? "bg-indigo-500"
                              : "bg-white/[0.08] hover:bg-white/[0.12]"
                            }`}
                        />
                        {i % 3 === 0 && (
                          <span className="text-[8px] text-white/20">{months[i]}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="lg:col-span-2 p-4 flex flex-col">
                  <span className="text-xs font-semibold text-white/60 mb-3">Recent Activity</span>
                  <div className="flex flex-col gap-3">
                    {recentActivity.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        {item.status === "done" ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin mt-0.5 shrink-0" />
                        )}
                        <div>
                          <p className="text-[11px] text-white/60 leading-tight">{item.label}</p>
                          <p className="text-[10px] text-white/25 mt-0.5">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

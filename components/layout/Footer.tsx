import { Github, Linkedin, Twitter, Zap } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Integrations", "Community", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "GDPR", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07070E]">
      <div className="container-max mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 w-fit group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-glow group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-shadow">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Neuro<span className="text-indigo-400">Flow</span>
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-[220px] mb-6">
              AI-powered workflows for teams that move at the speed of thought.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Github, label: "GitHub", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 hover:bg-white/[0.07] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} NeuroFlow AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-white/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

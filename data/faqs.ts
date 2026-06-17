export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What is NeuroFlow AI?",
    answer:
      "NeuroFlow AI is an intelligent workspace platform that helps teams automate workflows, search internal documents, summarize knowledge, and improve productivity with AI. It combines document intelligence, workflow automation, and a team knowledge base in one unified product.",
  },
  {
    question: "Who is it for?",
    answer:
      "NeuroFlow is built for AI startups, SaaS founders, product managers, operations teams, and knowledge workers at small and mid-sized businesses who need to move faster without adding engineering overhead.",
  },
  {
    question: "Can it work with internal documents?",
    answer:
      "Yes. NeuroFlow indexes PDFs, docs, wikis, contracts, and meeting notes from your connected sources. Semantic search understands meaning — not just keywords — so teams can ask natural language questions and get accurate, attributed answers.",
  },
  {
    question: "Is it secure?",
    answer:
      "NeuroFlow follows enterprise security standards including SOC 2 Type II certification and GDPR compliance. Data is encrypted in transit and at rest. Enterprise plans support SSO, private cloud deployment, custom data residency, and audit logs.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes — all plans include a 14-day free trial with full feature access and no credit card required. You can upgrade, downgrade, or cancel at any time.",
  },
  {
    question: "Can teams use it?",
    answer:
      "Absolutely. NeuroFlow is designed for team collaboration with role-based permissions, shared knowledge bases, workflow assignments, and activity tracking. Plans scale from small teams to enterprise organizations.",
  },
];

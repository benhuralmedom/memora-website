export interface Feature {
  name: string;
  desc: string;
  icon: string;
}

const features: Feature[] = [
  {
    name: "AI-powered search & Q&A",
    desc: "Ask in natural language, whether a quick lookup or a complex query. Text or speech. Fully tailored to your organization.",
    icon: "/icon.svg",
  },
  {
    name: "Connected to all your sources",
    desc: "Pulls answers from your documents, wikis, databases, chat apps, and more - with references for every answer.",
    icon: "/file.svg",
  },
  {
    name: "Real-time updates",
    desc: "Always up-to-date with your knowledge base.",
    icon: "/icon1.svg",
  },
  {
    name: "Enterprise-grade security",
    desc: "Data encrypted at rest and in transit. Deploy on-premises or in your private cloud.",
    icon: "/window.svg",
  },
  {
    name: "Admin controls and analytics",
    desc: "Monitor usage, manage permissions, track insights.",
    icon: "/icon2.svg",
  },
];

export default features;
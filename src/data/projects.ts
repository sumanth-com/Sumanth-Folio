import type { StaticImageData } from "next/image";
import pro1 from "@/assets/Pro1.png";
import pro2 from "@/assets/Pro2.png";
import pro3 from "@/assets/Pro3.png";
import proCover from "@/assets/Procover.png";
import su1 from "@/assets/Su1.png";
import su2 from "@/assets/Su2.png";
import su3 from "@/assets/Su3.png";
import su4 from "@/assets/Su4.png";
import suCover from "@/assets/Sucover.png";
import zen1 from "@/assets/Zen1.png";
import zen2 from "@/assets/zen2.png";
import zen3 from "@/assets/Zen3.png";
import zenCover from "@/assets/Zencover.png";

export type ProjectScreen = {
  title: string;
  device: string;
  description: string;
  use: string;
  image: StaticImageData | string;
};

export type ProjectCase = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  cardLine: string;
  tag: string;
  liveUrl?: string;
  summary: string;
  purpose: string;
  cover: StaticImageData | string;
  folderCover: StaticImageData;
  brandColor: string;
  growth: {
    metricLabel: string;
    metricValue: string;
    story: string;
  };
  screens: ProjectScreen[];
};

export const PROJECT_CASES: ProjectCase[] = [
  {
    slug: "protronics",
    title: "Protronics",
    subtitle: "Refurbished electronics",
    category: "Refurbished Electronics E-commerce Platform",
    cardLine:
      "Premium refurbished electronics marketplace with certified products, warranty, and seamless purchasing.",
    tag: "Shipped",
    liveUrl: "https://www.protronics.store/",
    cover: pro1,
    folderCover: proCover,
    brandColor: "#801B1B",
    summary:
      "A premium platform for buying certified refurbished appliances with warranty, quality assurance, and doorstep delivery.",
    purpose:
      "Helps customers save money by purchasing professionally refurbished electronics while ensuring trust through inspections, certification, and after-sales support.",
    growth: {
      metricLabel: "Conversion rate",
      metricValue: "400%",
      story:
        "Clearer trust signals, a sharper comparison flow, and a shorter path to inquiry lifted conversions. Buyers who understand refurbished quality move faster — and Protronics is growing with them.",
    },
    screens: [
      {
        title: "Hero & trust bar",
        device: "Desktop · Phone · Tablet",
        description:
          "Visitors land on a confident first impression — “Premium appliances. Smarter choice.” — with warranty callouts, offer pills, and five trust badges (100+ checks, 1-year warranty, happy customers, delivery, support).",
        use: "Builds instant trust for refurbished shopping and moves people toward Shop Fridges or Get Buying Help.",
        image: pro1,
      },
      {
        title: "New vs refurbished",
        device: "Desktop · Tablet · Phone",
        description:
          "A side-by-side comparison of Brand New vs Protronics refurbished across price, warranty, quality checks, delivery, and performance — so the savings and quality story is impossible to miss.",
        use: "Turns hesitation into clarity. Shoppers see why certified refurbished wins, then hit “Shop renewed appliances.”",
        image: pro2,
      },
      {
        title: "Get in touch",
        device: "Desktop · Tablet · Phone",
        description:
          "Bengaluru map, store hours, phone, and a clean inquiry form for name, phone, city, and product interest — built for real local follow-up, not generic contact spam.",
        use: "Captures high-intent leads with context so the team can recommend the right appliance and delivery timeline.",
        image: pro3,
      },
    ],
  },
  {
    slug: "suprabase",
    title: "Suprabase",
    subtitle: "AI learning platform",
    category: "AI-Powered Software Engineering Learning Platform (EdTech + AI SaaS)",
    cardLine:
      "AI-powered software engineering platform for learning, building projects, and career growth.",
    tag: "Shipped",
    liveUrl: "https://www.suprabase.in/",
    cover: su1,
    folderCover: suCover,
    brandColor: "#E85A4F",
    summary:
      "An all-in-one learning ecosystem where developers can learn, practice, build projects, earn certifications, and receive AI-powered mentorship.",
    purpose:
      "Accelerates software engineering careers by combining structured roadmaps, hands-on projects, AI mentoring, coding practice, progress tracking, and certifications in one platform.",
    growth: {
      metricLabel: "Weekly active learners",
      metricValue: "340%",
      story:
        "Roadmaps plus AI mentorship kept learners coming back. More practice sessions, more project submissions, and steadier certification completions — month over month.",
    },
    screens: [
      {
        title: "Hero & seat reservation",
        device: "Desktop · Tablet · Phone",
        description:
          "“Become the developer companies actually hire” — Full Stack, AI Engineering, System Design, and DevOps through real projects, AI mentoring, and verifiable certifications, with a clear Reserve your seat CTA.",
        use: "Converts curious visitors into learners by making the outcome and next step obvious on every screen size.",
        image: su1,
      },
      {
        title: "AI mentor & connected system",
        device: "Desktop · Phone",
        description:
          "Ask Supra for context-aware help, plus one profile that ties roadmap, practice, projects, and progress together.",
        use: "Unblocks learners in the moment and keeps every skill path connected in one place.",
        image: su2,
      },
      {
        title: "Projects & certifications",
        device: "Desktop · Tablet",
        description:
          "Hands-on builds and verifiable certificates — timed skill tests with proof employers can trust.",
        use: "Turns learning into hiring signals: portfolio work plus credentials, not just completion badges.",
        image: su3,
      },
      {
        title: "New vs Suprabase",
        device: "Desktop · Tablet · Phone",
        description:
          "A clean comparison of Traditional Bootcamps vs Suprabase across price, mentorship, projects, certifications, learning support, and access.",
        use: "Helps developers see why Suprabase wins on value and mentorship before they commit.",
        image: su4,
      },
    ],
  },
  {
    slug: "zentra",
    title: "Zentra",
    subtitle: "Personal finance",
    category: "Personal Finance & Digital Banking Platform (FinTech)",
    cardLine:
      "Modern personal finance platform for budgeting, expense tracking, investments, and financial insights.",
    tag: "Shipped",
    cover: zen1,
    folderCover: zenCover,
    brandColor: "#3B82F6",
    summary:
      "A modern financial management application that helps users track income, expenses, budgets, savings, investments, and transactions through a clean, intelligent dashboard.",
    purpose:
      "Empowers users to manage their finances, monitor spending habits, set financial goals, and make smarter money decisions with real-time insights and analytics.",
    growth: {
      metricLabel: "Monthly active budgets",
      metricValue: "285%",
      story:
        "A calmer dashboard and clearer insights made money tracking a habit. More budgets set, more expenses logged, and stronger week-over-week engagement.",
    },
    screens: [
      {
        title: "Own your money",
        device: "Desktop · Tablet · Phone",
        description:
          "Landing experience built around “Own Your Money, Shape Your Life” — clear CTAs, trust stats, and a premium dark UI that feels like a real banking product.",
        use: "Introduces Zentra’s promise and pulls users into Get Started or Explore Features.",
        image: zen1,
      },
      {
        title: "Mobile money flow",
        device: "Phone · Tablet",
        description:
          "Onboarding, spend charts, send/request/invest actions, and premium tiers — the same product language scaled cleanly to smaller screens.",
        use: "Keeps money management usable on the go without losing clarity or trust.",
        image: zen2,
      },
      {
        title: "Finance dashboard",
        device: "Desktop · Tablet · Phone",
        description:
          "Total balance, spending overview, quick actions, recent transactions, budget ring, and goals — one dark glass dashboard for everyday money control.",
        use: "Daily home for checking balances, spending, and progress toward goals.",
        image: zen3,
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECT_CASES.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return PROJECT_CASES.map((p) => p.slug);
}

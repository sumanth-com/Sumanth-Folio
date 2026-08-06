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
        title: "First impression that sells",
        device: "Acquisition",
        description:
          "A confident brand entry that makes quality and warranty feel obvious before the pitch gets long. Trust badges and clear offers do the heavy lifting.",
        use: "Builds credibility fast and pushes high-intent visitors into shopping or buying help.",
        image: pro1,
      },
      {
        title: "Why refurbished wins",
        device: "Conversion",
        description:
          "A direct comparison against brand-new options — price, checks, warranty, and delivery — so the smarter choice is hard to ignore.",
        use: "Removes hesitation and turns comparison into purchase momentum.",
        image: pro2,
      },
      {
        title: "Local lead capture",
        device: "Growth",
        description:
          "A clean path for serious buyers — location, hours, and a focused inquiry flow built for real follow-up in Bengaluru.",
        use: "Converts interest into qualified leads the team can close with context.",
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
        title: "Career outcome, clear path",
        device: "Acquisition",
        description:
          "Positioned for developers who want hire-ready skills through real projects, mentorship, and proof — with a direct seat reservation CTA.",
        use: "Turns curiosity into committed learners with an obvious next step.",
        image: su1,
      },
      {
        title: "AI mentorship that unblocks",
        device: "Retention",
        description:
          "Context-aware help tied to one connected profile — roadmap, practice, projects, and progress in a single system.",
        use: "Keeps learners moving when they get stuck and compounds weekly engagement.",
        image: su2,
      },
      {
        title: "Proof employers can trust",
        device: "Differentiation",
        description:
          "Hands-on builds and verifiable certifications that turn learning into hiring signals, not empty completion badges.",
        use: "Strengthens career outcomes and makes the product defensible in a crowded EdTech market.",
        image: su3,
      },
      {
        title: "Why Suprabase wins",
        device: "Conversion",
        description:
          "A sharp comparison against traditional bootcamps on price, mentorship, projects, support, and access.",
        use: "Helps serious learners choose value and commit with confidence.",
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
        device: "Acquisition",
        description:
          "A premium brand promise with clear entry points — built to feel like a serious finance product from the first second.",
        use: "Establishes trust and pulls users into getting started with intent.",
        image: zen1,
      },
      {
        title: "Money on the move",
        device: "Engagement",
        description:
          "Fast paths for send, request, invest, and spend awareness — designed for daily use without losing clarity.",
        use: "Makes money management a habit people return to through the week.",
        image: zen2,
      },
      {
        title: "Command center for cashflow",
        device: "Retention",
        description:
          "Balances, spending, budgets, and goals in one calm system — so users always know where they stand.",
        use: "Becomes the daily home for financial control and long-term product stickiness.",
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

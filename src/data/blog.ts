export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  overview: string[];
  takeaways: string[];
  sections: BlogSection[];
  /** Extra mid-article images (furniture, spaces, real robot feel) */
  gallery: string[];
  category: string;
  tag: string;
  readTime: string;
  date: string;
  views: string;
  image: string;
  featured?: boolean;
};

export const BLOG_CATEGORIES = [
  "All",
  "AI Engineering",
  "Systems",
  "Startups",
  "Career",
  "Security",
  "Product",
] as const;

const img = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&dpr=1`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "agentic-coding-2026",
    title: "Stop Writing Code Alone: How Young Builders Win With AI Agents in 2026",
    excerpt:
      "The winners are not the people who type fastest. They are the ones who design work so robots and agents do the grind, while humans own judgment, taste, and accountability.",
    overview: [
      "Why typing speed stopped being a career moat",
      "How PMs and CEOs actually use agents day to day",
      "A simple system any ambitious student can start this week",
      "What to practice if you want FAANG-level leverage",
    ],
    takeaways: [
      "Own the goal, not every keystroke",
      "Treat agents like junior teammates with rules",
      "Measure outcomes: speed, quality, cost",
      "Keep humans on irreversible decisions",
    ],
    sections: [
      {
        heading: "The game changed. Most people did not.",
        paragraphs: [
          "If you are 18 to 28 and still competing on who can write the longest function from memory, you are playing last decade’s game. The real shift is this: software is becoming a team sport between humans and agents. Your job is to be the captain.",
          "Great product leaders think like this every day. Sundar’s world at Google is not “who coded the most lines.” It is “who moved the product, the user, and the company.” Elon’s operating instinct is similar: compress the feedback loop, remove waste, push the bottleneck to the machine when the machine is better.",
          "You do not need a title to think that way. You need a habit: define the outcome, design the workflow, let tools execute, then review like an owner.",
        ],
      },
      {
        heading: "Agents are not magic. They are leverage.",
        paragraphs: [
          "An agent is useful when it can plan, use tools, check its work, and stop when it is unsure. That is the same standard you would set for a sharp intern. Give it a messy chat and no boundaries, and it will look clever in demos and break in real life.",
          "If you want a real feel for the future, picture a clean studio desk, a calm room, and a capable robot teammate handling the repetitive parts while you decide what matters. That is the lifestyle and the operating model. Not neon code rain. Not fake hacker aesthetic.",
          "Youth advantage: you can build this muscle early, before bad habits calcify. Start small. One workflow. One checklist. One weekly review.",
        ],
      },
      {
        heading: "A CEO-simple operating model you can steal",
        paragraphs: [
          "Write the goal in one sentence. List tools the agent may use. List tools it must never touch. Define what “done” looks like with examples. Decide when a human must approve.",
          "Then track three numbers: time saved, quality score, and cost per successful task. If you cannot see those numbers, you are vibing, not building.",
          "Put yourself on the expensive edges: money, trust, identity, deletion, public communication. Let agents move fast in the safe middle. That is how serious companies scale without gambling the brand.",
        ],
      },
      {
        heading: "What to do this month if you are young and ambitious",
        paragraphs: [
          "Pick one pain: notes to tasks, research to brief, bug triage, or content draft to publish checklist. Build an agent workflow around it. Use it daily for two weeks.",
          "Write a one-page memo like a PM: problem, users, workflow, risks, metrics, kill switch. Share it with a mentor or post it publicly. Clarity is a career signal.",
          "Remember: the market will not reward you for being busy with AI. It will reward you for shipping outcomes with taste and ownership.",
        ],
      },
    ],
    gallery: [img(7688336), img(2102416), img(8566473)],
    category: "AI Engineering",
    tag: "AGENTS",
    readTime: "14 min",
    date: "Aug 2, 2026",
    views: "128k",
    image: img(3182812),
    featured: true,
  },
  {
    slug: "context-engineering",
    title: "Your AI Is Only as Smart as the Room You Put It In",
    excerpt:
      "Context is the furniture of intelligence. If the room is cluttered, every answer looks messy. Design the room, and the model suddenly feels brilliant.",
    overview: [
      "Why “smarter model” is often the wrong fix",
      "How great PMs design information like product UX",
      "What youth should practice instead of prompt spam",
      "A clean context checklist you can reuse",
    ],
    takeaways: [
      "Curate facts like a product surface",
      "Separate durable truth from temporary noise",
      "Version what you feed the model",
      "Replay failures with the exact package",
    ],
    sections: [
      {
        heading: "Intelligence is environmental",
        paragraphs: [
          "Walk into a calm apartment with good light, a clear desk, and the right tools within reach. You think better. AI is the same. Most “model failures” are room failures: wrong docs, stale rules, noisy chat history.",
          "Experienced CEOs obsess over operating context: what the team knows, what is true, what is outdated. Sundar-level product thinking is the same for AI. The interface is not only the chat box. The interface is the information package.",
        ],
      },
      {
        heading: "Design context like furniture, not like a junk drawer",
        paragraphs: [
          "Put durable facts in stable places: policies, product goals, user preferences, constraints. Summarize long threads on purpose. Do not wait until the window explodes.",
          "If retrieval is part of your system, test it on real questions from real users. A pretty architecture slide means nothing if the top answers are wrong on Monday morning tickets.",
        ],
      },
      {
        heading: "Youth skill that compounds",
        paragraphs: [
          "Learn to write clean briefs. One page. Goal, audience, must-include facts, must-avoid claims, definition of done. That brief is context engineering in human language.",
          "When something fails, save the exact package that produced the answer. Replay it. Fix the room. This is how you become the person teams trust with AI features.",
        ],
      },
    ],
    gallery: [img(4164418), img(1181675), img(574071)],
    category: "AI Engineering",
    tag: "CONTEXT",
    readTime: "12 min",
    date: "Jul 28, 2026",
    views: "96k",
    image: img(3183150),
  },
  {
    slug: "agentic-projects-fail",
    title: "Why Most AI Projects Die After the Demo (And How Yours Won’t)",
    excerpt:
      "Demos create applause. Production creates trust. If you cannot explain identity, cost, and undo, you do not have a product yet.",
    overview: [
      "The demo-to-reality gap nobody warns you about",
      "Boring requirements that decide winners",
      "How CEOs greenlight AI without gambling the company",
      "A go-live checklist for young builders",
    ],
    takeaways: [
      "Ship identity and logs before autonomy",
      "Budget latency and cost like product specs",
      "Always keep a human override",
      "Launch small, compare to a human baseline",
    ],
    sections: [
      {
        heading: "Applause is not a business model",
        paragraphs: [
          "Every campus hackathon and startup demo can look magical now. Then Monday arrives: who approved the action, what did it cost, and how do we reverse the mistake?",
          "Senior operators care about those questions first. Elon’s taste for first principles shows up here: strip the theater, keep the physics. If the system cannot be measured and stopped, it is not ready.",
        ],
      },
      {
        heading: "Build the boring layer like a professional",
        paragraphs: [
          "Auth for tools. Logs for actions. Rate limits. Latency budgets. Approval for irreversible side effects. This is not “phase two.” This is the product.",
          "Name an owner. Orphan AI features fail quietly until they fail loudly in front of customers.",
        ],
      },
      {
        heading: "A youth-ready launch path",
        paragraphs: [
          "Ship behind a flag. Compare quality and time against a human baseline. Expand only when numbers stay stable for two weeks.",
          "Write the incident template before the first incident. Calm process is a leadership skill, even if your company is just you and two friends.",
        ],
      },
    ],
    gallery: [img(3184291), img(3861969), img(1181396)],
    category: "Systems",
    tag: "PRODUCTION",
    readTime: "13 min",
    date: "Jul 21, 2026",
    views: "112k",
    image: img(3184292),
  },
  {
    slug: "inference-economics",
    title: "AI Bills Will Eat Your Future Startup If You Don’t Learn This",
    excerpt:
      "Cheap tokens still make expensive products. Young founders who win optimize cost per successful outcome, not vibes per chat.",
    overview: [
      "Why price cuts did not make AI free",
      "How operators think about model portfolios",
      "Simple habits that protect margin",
      "Dashboards finance and product can share",
    ],
    takeaways: [
      "Track cost per successful task",
      "Route easy work to smaller models",
      "Cache repeated work",
      "Put cost next to quality in reviews",
    ],
    sections: [
      {
        heading: "Usage beat the discount",
        paragraphs: [
          "Token prices fell. Product usage exploded. Retries, long contexts, and silent background jobs can multiply spend overnight.",
          "A CEO asks one clean question: what does a successful user outcome cost? If you only know cost per thousand tokens, you are not ready to scale.",
        ],
      },
      {
        heading: "Build a portfolio, not a religion",
        paragraphs: [
          "Frontier models for hard judgment. Smaller models for sorting, drafting, extracting. Caches for repeated knowledge. A router in front. Log every route.",
          "Revisit monthly. Model quality and price move. Static choices become expensive.",
        ],
      },
      {
        heading: "Youth founder discipline",
        paragraphs: [
          "Kill waste before you buy more models. Deduplicate prompts. Cap retries. Separate interactive spend from batch spend.",
          "Put cost beside quality in every review. A feature that saves ten minutes but burns margin may still be the wrong business decision.",
        ],
      },
    ],
    gallery: [img(6153354), img(8294606), img(1181298)],
    category: "Systems",
    tag: "COST",
    readTime: "12 min",
    date: "Jul 14, 2026",
    views: "87k",
    image: img(3861964),
  },
  {
    slug: "multi-agent-coordination",
    title: "One Agent Is a Helper. A Fleet Is a Company. Don’t Build Chaos.",
    excerpt:
      "Multi-agent demos look futuristic. Real leverage comes from roles, handoffs, and one shared source of truth.",
    overview: [
      "When one agent is enough",
      "How to design roles like a tiny org chart",
      "Conflict rules that save money and sanity",
      "A simple fleet young teams can run",
    ],
    takeaways: [
      "One clear job per agent",
      "Typed handoffs, not vague paragraphs",
      "One shared truth log",
      "Escalate disagreements to humans",
    ],
    sections: [
      {
        heading: "Stop cloning the same brain",
        paragraphs: [
          "If every agent has the same tools and the same prompt, you did not build a fleet. You built a crowd. Crowds argue. Crowds burn tokens.",
          "Think like a product org. Planner. Doer. Reviewer. Human for irreversible steps. That is how serious companies stay fast without becoming noisy.",
        ],
      },
      {
        heading: "Contracts beat vibes",
        paragraphs: [
          "Define what “done” means as a typed artifact. Prefer event logs over silent memory. When something breaks, you need a timeline.",
          "If planner and executor disagree three times, stop. Infinite agent debate is not intelligence. It is a cost bomb.",
        ],
      },
      {
        heading: "A fleet that feels real",
        paragraphs: [
          "Keep it small. Three sharp roles beat seven overlapping ones. Publish a simple RACI. It sounds corporate. It prevents chaos.",
          "Youth teams that learn coordination early become the people who can lead AI-native orgs later.",
        ],
      },
    ],
    gallery: [img(3184360), img(8566473), img(8438918)],
    category: "AI Engineering",
    tag: "ARCHITECTURE",
    readTime: "12 min",
    date: "Jul 7, 2026",
    views: "74k",
    image: img(3184418),
  },
  {
    slug: "ai-native-orgs",
    title: "The Career Ladder Just Changed: How to Become Useful in AI-Native Teams",
    excerpt:
      "Managers will not promote lines of code. They will promote judgment, ownership, and the ability to supervise machine speed.",
    overview: [
      "What AI changes inside real companies",
      "New metrics managers actually respect",
      "How to signal staff-level thinking early",
      "A 90-day experiment any student can run",
    ],
    takeaways: [
      "Measure outcomes, not activity",
      "Lead one workflow end to end",
      "Teach verification, not only generation",
      "Publish before/after metrics",
    ],
    sections: [
      {
        heading: "AI is an org redesign, not a plugin",
        paragraphs: [
          "Leaner teams can ship more only if process changes with them. Otherwise you get faster chaos. That is why great CEOs redesign review, ownership, and career ladders.",
          "If your personal brand is still “I code all night,” upgrade it to “I make systems and people reliably better.”",
        ],
      },
      {
        heading: "What to show in reviews and interviews",
        paragraphs: [
          "What did you prevent? What did you make reliable? What did you teach others to verify? Those answers sound like leadership.",
          "Staff-level signal today includes harnesses, evals, and operating models. Put agent boundaries and failure modes in your design docs.",
        ],
      },
      {
        heading: "A 90-day youth plan",
        paragraphs: [
          "Pick one workflow. Own it. Define metrics. Ship a harness. Review weekly. Share results publicly.",
          "One proven system beats ten half-finished AI experiments. Focus is a CEO skill.",
        ],
      },
    ],
    gallery: [img(3182774), img(3184339), img(3183197)],
    category: "Career",
    tag: "LEADERSHIP",
    readTime: "12 min",
    date: "Jun 30, 2026",
    views: "103k",
    image: img(3184291),
  },
  {
    slug: "eval-harnesses",
    title: "If You Can’t Score It, You Can’t Trust It: Evals for Young Builders",
    excerpt:
      "Vibe checks do not survive real users. Build a small golden set, score honestly, and put quality in the release path.",
    overview: [
      "Why “it feels good” fails at scale",
      "How to start with 30 real tasks",
      "Rubrics that beat opinions",
      "Making evals a weekly habit",
    ],
    takeaways: [
      "Replay failures with exact context",
      "Score with rubrics",
      "Put evals before traffic",
      "Roll back when scores drop",
    ],
    sections: [
      {
        heading: "Taste needs measurement",
        paragraphs: [
          "Great PMs have taste. Great operators also have scoreboards. AI needs both. Without evals, every prompt change is a coin flip.",
          "Model updates move behavior. Retrieval changes move behavior. If you cannot replay failures, you cannot improve.",
        ],
      },
      {
        heading: "Start small, stay honest",
        paragraphs: [
          "Collect 30 to 100 real tasks. Write expected outcomes. Include hard cases on purpose: missing data, policy conflicts, adversarial prompts.",
          "Separate correctness, tone, and policy. One blended score hides what broke.",
        ],
      },
      {
        heading: "Make it a habit",
        paragraphs: [
          "Wire evals into your release path. Publish a weekly scoreboard. When scores drop, roll back first and debate later.",
          "Add new failing cases within 48 hours. That is how the harness stays alive and how you build a reputation for reliability.",
        ],
      },
    ],
    gallery: [img(574071), img(2102416), img(4164418)],
    category: "AI Engineering",
    tag: "QUALITY",
    readTime: "11 min",
    date: "Jun 22, 2026",
    views: "69k",
    image: img(1181675),
  },
  {
    slug: "startup-defensibility-ai",
    title: "AI Made Building Fast. Moats Now Live Elsewhere.",
    excerpt:
      "If your only edge is coding speed, a well-funded team can copy you in sixty days. Own the loop, the trust, and the distribution.",
    overview: [
      "Why build speed alone is not a moat",
      "What investors ask after the wow demo",
      "Compounding loops young founders can own",
      "A simple defensibility test",
    ],
    takeaways: [
      "Own workflow + data loop",
      "Protect taste and distribution",
      "Velocity is necessary, not enough",
      "Show retention and switching costs",
    ],
    sections: [
      {
        heading: "Everyone can ship features now",
        paragraphs: [
          "AI compressed the build phase. That is exciting for youth founders and dangerous for shallow products. Feature parity arrives quickly when every team has agents.",
          "Differentiation moves to distribution, trust, and proprietary loops. Code alone is not the company.",
        ],
      },
      {
        heading: "Think like an investor after the demo",
        paragraphs: [
          "What compounds next week? What improves because users keep coming back? What is hard to copy even if the UI is cloned?",
          "Show retention mechanics and unit economics with AI spend included. Margin after inference is part of the model now.",
        ],
      },
      {
        heading: "Practical founder moves",
        paragraphs: [
          "Instrument critical workflows. Feed outcomes back into ranking and personalization. Protect a sharp point of view on UX.",
          "Build distribution habits early. AI does not invent demand. People and trust do.",
        ],
      },
    ],
    gallery: [img(3184465), img(8728565), img(3182812)],
    category: "Startups",
    tag: "FOUNDERS",
    readTime: "13 min",
    date: "Jun 15, 2026",
    views: "141k",
    image: img(3184465),
  },
  {
    slug: "secure-coding-agents",
    title: "Give a Robot Keys to Your House Only If You Designed the Locks",
    excerpt:
      "An agent with broad access is a privileged teammate that never sleeps. Least privilege, audit trails, and kill switches are not optional.",
    overview: [
      "The new risk model for ambitious builders",
      "Least privilege patterns that feel practical",
      "Prompt injection is a containment problem",
      "Incident response before the first scare",
    ],
    takeaways: [
      "Authenticate every tool call",
      "Limit blast radius by default",
      "Log actions like deploys",
      "Practice response for agent mistakes",
    ],
    sections: [
      {
        heading: "Autonomy without brakes is liability",
        paragraphs: [
          "If your agent can reach production secrets, delete data, or message customers, you already have a security product decision. Treat agent actions like production changes: authenticated, logged, reversible.",
          "FAANG-grade teams assume accidents and attacks. Youth builders should copy that seriousness early. It is a career advantage.",
        ],
      },
      {
        heading: "Design locks before you hand over keys",
        paragraphs: [
          "Split tools into read, write, and dangerous. Require stronger approval for dangerous tools. Prefer short-lived credentials. Sandbox file access.",
          "Assume prompt injection will happen. Design for containment, not hope.",
        ],
      },
      {
        heading: "Be ready when something goes wrong",
        paragraphs: [
          "Every tool call needs who, what, when, why. Practice incident response for agent mistakes the same way you practice security incidents.",
          "Ship with a kill switch. Autonomy without brakes is not speed.",
        ],
      },
    ],
    gallery: [img(2599244), img(8728380), img(3861969)],
    category: "Security",
    tag: "TRUST",
    readTime: "12 min",
    date: "Jun 8, 2026",
    views: "91k",
    image: img(7688336),
  },
  {
    slug: "faang-interviews-ai-era",
    title: "FAANG Still Hires Judgment: How Youth Should Prepare When AI Writes Code",
    excerpt:
      "LeetCode did not disappear. The differentiator is how you verify, explain tradeoffs, and stay calm when the first answer looks “done.”",
    overview: [
      "What interview signal is shifting toward",
      "How to practice verification out loud",
      "System design with AI in the loop",
      "A 30-day prep plan that respects reality",
    ],
    takeaways: [
      "Explain tradeoffs under time pressure",
      "Show how you catch AI mistakes",
      "Pair algorithms with system judgment",
      "Keep a notebook of caught mistakes",
    ],
    sections: [
      {
        heading: "Fundamentals stay. Dependency does not impress.",
        paragraphs: [
          "Companies still test fundamentals. They also care whether you can supervise AI output without becoming helpless without it.",
          "Do not abandon practice. Add a second skill: verification discipline and clear communication under ambiguity.",
        ],
      },
      {
        heading: "The new mock loop",
        paragraphs: [
          "Generate a solution with an assistant, then spend equal time attacking it: edge cases, complexity, security, maintainability.",
          "Interviewers listen for how you think when the first answer looks finished. That moment is senior signal.",
        ],
      },
      {
        heading: "A 30-day plan for serious youth",
        paragraphs: [
          "Weeks 1–2: fundamentals. Week 3: system design with failure modes. Week 4: agent-assisted coding with strict verification rituals.",
          "Keep a notebook of mistakes you caught. Those become interview stories about judgment, which is what strong loops reward.",
        ],
      },
    ],
    gallery: [img(1181354), img(3184360), img(2102416)],
    category: "Career",
    tag: "INTERVIEWS",
    readTime: "12 min",
    date: "Jun 1, 2026",
    views: "158k",
    image: img(3183150),
  },
];

export function getFeaturedPost() {
  return BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
}

export function getRelatedPosts(limit = 9, excludeSlug?: string) {
  const featured = getFeaturedPost();
  const exclude = excludeSlug ?? featured.slug;
  return BLOG_POSTS.filter((p) => p.slug !== exclude).slice(0, limit);
}

export function getBlogBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getAdjacentPosts(slug: string) {
  const index = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? BLOG_POSTS[index - 1] : null,
    next: index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null,
  };
}

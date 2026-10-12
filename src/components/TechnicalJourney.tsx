"use client";

import { motion, useReducedMotion } from "framer-motion";

type YearMonth = [year: number, month: number];

function tenure(start: YearMonth, end?: YearMonth) {
  const now = new Date();
  const [ey, em] = end ?? [now.getFullYear(), now.getMonth() + 1];
  const months = Math.max(1, (ey - start[0]) * 12 + (em - start[1]) + 1);
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y ? `${y} yr${y > 1 ? "s" : ""}` : "", m ? `${m} mo${m > 1 ? "s" : ""}` : ""]
    .filter(Boolean)
    .join(" ");
}

const FEATURED = {
  title: "Product and Technical Lead",
  org: "iFranchise",
  period: "Apr 2026 — Present",
  start: [2026, 4] as YearMonth,
  summary:
    "Owning the product and the engineering behind it — from deciding what gets built to how it is architected, secured, and shipped.",
  contributions: [
    "Product ownership across the HRMS and CRM platforms — direction, priorities, and release decisions.",
    "System architecture and database design built to carry the business as it grows.",
    "API integrations, application security, and production deployment.",
    "Coordinating the engineering team from scoping through delivery.",
  ],
  tags: [
    "Enterprise Software",
    "Enterprise HRMS",
    "Enterprise CRM",
    "Product Ownership",
    "Technical Leadership",
    "System Architecture",
    "Database Design",
    "API Integrations",
    "Application Security",
    "Production Deployment",
  ],
};

const OWNERSHIP_STACK = [
  { key: "product", value: "direction · priorities" },
  { key: "platforms", value: "enterprise HRMS · CRM" },
  { key: "architecture", value: "system design" },
  { key: "data", value: "database design" },
  { key: "integrations", value: "APIs" },
  { key: "security", value: "access · hardening" },
  { key: "delivery", value: "deployment" },
  { key: "team", value: "coordination" },
];

const ALPHABOTS = {
  index: "02",
  title: "Junior Software Engineer",
  org: "AlphaBots",
  period: "Aug 2025 — Apr 2026",
  start: [2025, 8] as YearMonth,
  end: [2026, 4] as YearMonth,
  summary:
    "Where the backend became home — designing systems, shaping data, and building the APIs that products depend on.",
  contributions: [
    "Backend development and API design",
    "System design for reliable services",
    "Database management and data modelling",
  ],
  tags: ["Backend", "System Design", "REST APIs", "Databases", "Software Engineering"],
};

const FREELANCE = {
  index: "03",
  title: "Product-Focused Web Developer",
  org: "Freelancer.com",
  period: "Jun 2024 — Apr 2026",
  start: [2024, 6] as YearMonth,
  end: [2026, 4] as YearMonth,
  summary:
    "Owning client projects end to end — understanding the brief, building responsive products, and taking them all the way to production.",
  contributions: [
    "End-to-end client projects",
    "Responsive web applications and UI implementation",
    "Direct client communication and production delivery",
  ],
  tags: ["Responsive Web Apps", "UI Implementation", "Client Delivery", "Production"],
};

const PIPELINE = ["Brief", "Design", "Build", "Ship"];

const CAREER_LINE = [
  { date: "Apr 2024", label: "CODTECH IT Solution", note: "Web Developer Intern" },
  { date: "Jun 2024", label: "Freelancer.com", note: "Product-Focused Web Developer" },
  { date: "Aug 2025", label: "AlphaBots", note: "Junior Software Engineer" },
  { date: "Apr 2026", label: "iFranchise", note: "Product and Technical Lead" },
];

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function TechnicalJourney() {
  return (
    <section
      id="technical-journey"
      aria-labelledby="technical-journey-heading"
      className="relative z-20 overflow-hidden px-4 py-16 md:px-10 md:py-20"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          {...reveal}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
        >
          <span className="mb-5 inline-flex rounded-full border border-black/10 bg-[#e4e4e2] px-3.5 py-1 text-[12px] font-medium text-black/65">
            My Technical Journey
          </span>
          <h2
            id="technical-journey-heading"
            className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.12] tracking-tight text-black"
          >
            From Building Interfaces to Leading Engineering
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-black/55">
            Every role added a new layer — from writing code to owning products
            and engineering decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3.5 md:gap-4 lg:grid-cols-2">
          <FeaturedRoleCard />
          <AlphaBotsCard />
          <FreelanceCard />
        </div>

        <JourneyContinues />
      </div>
    </section>
  );
}

function Tags({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Focus areas">
      {items.map((tag) => (
        <li
          key={tag}
          className={`rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-tight transition-colors md:text-[12px] ${
            dark
              ? "border-white/12 bg-white/[0.04] text-white/75 hover:bg-white hover:text-black"
              : "border-black/[0.08] bg-white text-black/70 hover:bg-black hover:text-white"
          }`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ContributionList({
  items,
  dark = false,
  className = "",
}: {
  items: string[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <ol className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
          className={`group/item relative flex items-start gap-3.5 text-[13px] leading-relaxed md:text-[14px] ${
            dark ? "text-white/75" : "text-black/65"
          }`}
        >
          {i < items.length - 1 && (
            <span
              aria-hidden
              className={`absolute bottom-[-12px] left-[13px] top-[28px] w-px ${
                dark ? "bg-white/10" : "bg-black/10"
              }`}
            />
          )}
          <span
            aria-hidden
            className={`relative flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg border font-mono text-[10px] transition-colors ${
              dark
                ? "border-white/15 bg-white/[0.05] text-white/70 group-hover/item:border-emerald-400/60 group-hover/item:text-emerald-300"
                : "border-black/10 bg-[#f4f4f2] text-black/60 group-hover/item:border-black group-hover/item:bg-black group-hover/item:text-white"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="pt-[2px]">{item}</span>
        </motion.li>
      ))}
    </ol>
  );
}

function RoleMeta({
  period,
  duration,
  dark = false,
}: {
  period: string;
  duration: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] ${
        dark ? "text-white/50" : "text-black/50"
      }`}
    >
      <span>{period}</span>
      <span aria-hidden className={dark ? "text-white/25" : "text-black/25"}>
        /
      </span>
      <span>{duration}</span>
    </p>
  );
}

function FeaturedRoleCard() {
  const reduce = useReducedMotion();

  return (
    <motion.article
      {...reveal}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[28px] bg-[#141416] p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.25)] md:p-9 lg:col-span-2"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 70% 80% at 85% 30%, black 10%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <div className="flex min-w-0 flex-col">
          <span className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] py-1.5 pl-3 pr-4 text-[13px] font-semibold tracking-tight text-white">
            <span className="relative flex h-2 w-2">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Current role
          </span>

          <RoleMeta period={FEATURED.period} duration={tenure(FEATURED.start)} dark />
          <h3 className="mt-3 text-[clamp(1.6rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-tight">
            {FEATURED.title}
          </h3>
          <p className="mt-1.5 text-[15px] font-medium text-white/60">{FEATURED.org}</p>

          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-white/70 md:text-[15px]">
            {FEATURED.summary}
          </p>

          <ContributionList items={FEATURED.contributions} dark className="mt-6" />

          <div className="mt-7">
            <Tags items={FEATURED.tags} dark />
          </div>
        </div>

        <OwnershipStack />
      </div>
    </motion.article>
  );
}

function OwnershipStack() {
  return (
    <div
      className="relative flex flex-col self-stretch overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      aria-label="Scope of ownership at iFranchise"
      role="group"
    >
      <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3.5 md:px-6">
        <span className="font-mono text-[12px] text-white/80">ownership.stack</span>
        <span className="font-mono text-[11px] text-white/40">
          {OWNERSHIP_STACK.length} layers
        </span>
      </div>

      <div className="relative flex flex-1 flex-col px-5 py-3 md:px-6">
        <div aria-hidden className="absolute bottom-7 left-[24px] top-7 w-px bg-white/10 md:left-[28px]" />
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute bottom-7 left-[24px] top-7 w-px origin-top bg-gradient-to-b from-emerald-400/80 via-white/40 to-white/10 md:left-[28px]"
        />

        <ul className="flex flex-1 flex-col justify-between">
          {OWNERSHIP_STACK.map((row, i) => (
            <motion.li
              key={row.key}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.08 }}
              className="group flex items-center gap-4 py-2"
            >
              <span className="relative z-10 h-[9px] w-[9px] shrink-0 rounded-full border border-white/40 bg-[#141416] transition-colors group-hover:border-emerald-400 group-hover:bg-emerald-400" />
              <span className="flex min-w-0 flex-1 items-baseline justify-between gap-4">
                <span className="text-[13px] font-medium tracking-tight text-white/90">
                  {row.key.charAt(0).toUpperCase() + row.key.slice(1)}
                </span>
                <span className="truncate text-right font-mono text-[11px] text-white/45 transition-colors group-hover:text-white/75">
                  {row.value}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AlphaBotsCard() {
  const reduce = useReducedMotion();
  const nodes = [
    { x: 8, label: "client" },
    { x: 116, label: "api" },
    { x: 224, label: "database" },
  ];

  return (
    <motion.article
      {...reveal}
      transition={{ duration: 0.55, delay: 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-[26px] border border-black/[0.06] bg-white p-6 shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_20px_44px_rgba(0,0,0,0.09)] md:p-8"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <RoleMeta
            period={ALPHABOTS.period}
            duration={tenure(ALPHABOTS.start, ALPHABOTS.end)}
          />
          <h3 className="mt-3 text-[clamp(1.3rem,2.2vw,1.65rem)] font-bold leading-tight tracking-tight text-black">
            {ALPHABOTS.title}
          </h3>
          <p className="mt-1 text-[14px] font-medium text-black/55">{ALPHABOTS.org}</p>
        </div>
        <span className="font-serif text-[3.25rem] leading-[0.8] tracking-tight text-black/[0.12] md:text-[4.25rem]">
          {ALPHABOTS.index}
        </span>
      </div>

      <div className="mb-6 rounded-2xl border border-black/[0.06] bg-[#f6f6f4] px-4 py-5">
        <svg
          viewBox="0 0 300 64"
          className="mx-auto h-auto w-full max-w-[360px]"
          role="img"
          aria-label="Request flowing from client to API to database"
        >
          {[0, 1].map((i) => (
            <motion.line
              key={i}
              x1={nodes[i].x + 68}
              x2={nodes[i + 1].x}
              y1={32}
              y2={32}
              stroke="#111"
              strokeOpacity={0.35}
              strokeWidth={1.2}
              strokeDasharray="4 4"
              animate={reduce ? undefined : { strokeDashoffset: [0, -16] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          ))}
          {nodes.map((n, i) => (
            <g key={n.label}>
              <rect
                x={n.x}
                y={14}
                width={68}
                height={36}
                rx={10}
                fill={i === 1 ? "#111" : "#fff"}
                stroke="#111"
                strokeOpacity={i === 1 ? 1 : 0.15}
              />
              <text
                x={n.x + 34}
                y={36}
                textAnchor="middle"
                className="font-mono"
                fontSize={11}
                fill={i === 1 ? "#fff" : "#111"}
                fillOpacity={i === 1 ? 1 : 0.7}
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
        <p className="mt-3 text-center font-mono text-[11px] text-black/45">
          request → service → query
        </p>
      </div>

      <p className="text-[14px] leading-relaxed text-black/60">{ALPHABOTS.summary}</p>

      <ContributionList items={ALPHABOTS.contributions} className="mt-5" />

      <div className="mt-auto pt-6">
        <Tags items={ALPHABOTS.tags} />
      </div>
    </motion.article>
  );
}

function FreelanceCard() {
  return (
    <motion.article
      {...reveal}
      transition={{ duration: 0.55, delay: 0.12 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-[26px] border border-black/[0.06] bg-[#f8f8f6] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_20px_44px_rgba(0,0,0,0.09)] md:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "linear-gradient(200deg, black 0%, transparent 45%)",
        }}
      />

      <div className="relative mb-5 flex items-start justify-between gap-4">
        <span className="font-serif text-[3.25rem] leading-[0.8] tracking-tight text-black/[0.12] md:text-[4.25rem]">
          {FREELANCE.index}
        </span>
        <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-black/60">
          Independent
        </span>
      </div>

      <div className="relative">
        <RoleMeta period={FREELANCE.period} duration={tenure(FREELANCE.start, FREELANCE.end)} />
        <h3 className="mt-3 text-[clamp(1.3rem,2.2vw,1.65rem)] font-bold leading-tight tracking-tight text-black">
          {FREELANCE.title}
        </h3>
        <p className="mt-1 text-[14px] font-medium text-black/55">{FREELANCE.org}</p>

        <p className="mt-5 text-[14px] leading-relaxed text-black/60">{FREELANCE.summary}</p>

        <ContributionList items={FREELANCE.contributions} className="mt-5" />
      </div>

      <div className="relative mt-auto pt-6">
        <DeliveryPipeline />
        <div className="mt-5">
          <Tags items={FREELANCE.tags} />
        </div>
      </div>
    </motion.article>
  );
}

function DeliveryPipeline() {
  return (
    <div
      role="img"
      aria-label="Delivery pipeline: brief, design, build, ship"
      className="rounded-2xl border border-black/[0.06] bg-white px-4 pb-3 pt-4"
    >
      <div className="relative">
        <div className="absolute left-[5px] right-[5px] top-[5px] h-px bg-black/10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute inset-0 origin-left bg-black"
          />
        </div>
        <div className="relative flex justify-between">
          {PIPELINE.map((step, i) => (
            <div
              key={step}
              className={`flex flex-col gap-2.5 ${
                i === 0 ? "items-start" : i === PIPELINE.length - 1 ? "items-end" : "items-center"
              }`}
            >
              <motion.span
                initial={{ backgroundColor: "#ffffff", borderColor: "rgba(0,0,0,0.2)" }}
                whileInView={{ backgroundColor: "#111111", borderColor: "#111111" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.25, delay: 0.25 + i * 0.36 }}
                className="h-[11px] w-[11px] rounded-full border"
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-black/50">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JourneyContinues() {
  return (
    <motion.div
      {...reveal}
      transition={{ duration: 0.55 }}
      className="mt-4 rounded-[26px] border border-black/[0.06] bg-white/70 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.04)] backdrop-blur-sm md:mt-5 md:p-8"
    >
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="inline-flex rounded-full border border-black/10 bg-[#e4e4e2] px-3.5 py-1 text-[12px] font-medium text-black/65">
            Earlier &amp; alongside
          </span>
          <h3 className="mt-3 text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold leading-tight tracking-tight text-black">
            And the journey continues…
          </h3>
        </div>
        <p className="max-w-sm text-[13px] leading-relaxed text-black/55 md:text-right">
          The path so far, start to now — each stop building on the last.
        </p>
      </div>

      <CareerLine />
    </motion.div>
  );
}

function CareerLine() {
  return (
    <ol className="relative grid grid-cols-1 gap-5 pl-6 md:grid-cols-4 md:gap-4 md:pl-0 md:pt-7">
      <span aria-hidden className="absolute bottom-[50px] left-[5px] top-1 w-px bg-black/10 md:hidden" />
      <motion.span
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[50px] left-[5px] top-1 w-px origin-top bg-black/60 md:hidden"
      />
      <span aria-hidden className="absolute left-[5px] right-0 top-[5px] hidden h-px bg-black/10 md:block" />
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[5px] right-0 top-[5px] hidden h-px origin-left bg-gradient-to-r from-black/60 via-black/60 to-black/10 md:block"
      />

      {CAREER_LINE.map((stop, i) => {
        const current = i === CAREER_LINE.length - 1;
        return (
          <motion.li
            key={stop.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 + i * 0.18 }}
            className="relative"
          >
            <span
              aria-hidden
              className={`absolute -left-6 top-1 h-[11px] w-[11px] rounded-full border md:-top-7 md:left-0 ${
                current
                  ? "border-black bg-black ring-4 ring-black/10"
                  : "border-black/40 bg-white"
              }`}
            />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-black/45">
              {stop.date}
            </p>
            <p className="mt-1 text-[14px] font-semibold tracking-tight text-black">
              {stop.label}
            </p>
            <p className="text-[12px] text-black/55">{stop.note}</p>
          </motion.li>
        );
      })}
    </ol>
  );
}

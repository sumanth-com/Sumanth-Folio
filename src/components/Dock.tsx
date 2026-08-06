"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, useEffectEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Icons = {
  Home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  User: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Code: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  Star: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  BookOpen: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  Contact: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
};

const DOCK_ITEMS = [
  { id: "home", icon: Icons.Home, label: "Home", href: "/" },
  { id: "about", icon: Icons.User, label: "About", href: "/about" },
  { id: "projects", icon: Icons.Code, label: "Projects", href: "/projects" },
  { id: "testimonials", icon: Icons.Star, label: "Testimonials", href: "/testimonials" },
  { id: "blog", icon: Icons.BookOpen, label: "Blog", href: "/blog" },
  { id: "contact", icon: Icons.Contact, label: "Contact", href: "/contact" },
];

export default function Dock() {
  const mouseX = useMotionValue(Infinity);
  const pathname = usePathname();
  const [launchingId, setLaunchingId] = useState<string | null>(null);

  // Hide dock on individual blog article pages only
  const isBlogArticle = /^\/blog\/[^/]+/.test(pathname);

  const onLaunch = useEffectEvent((id: string) => {
    setLaunchingId(id);
  });

  useEffect(() => {
    if (!launchingId) return;
    const t = setTimeout(() => setLaunchingId(null), 900);
    return () => clearTimeout(t);
  }, [launchingId, pathname]);

  if (isBlogArticle) return null;

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-4 left-1/2 z-50 flex h-[72px] -translate-x-1/2 items-end gap-3 rounded-2xl border border-black/12 bg-white/90 px-3 pb-2.5 pt-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
    >
      {DOCK_ITEMS.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <DockIcon
            key={item.id}
            mouseX={mouseX}
            item={item}
            active={active}
            launching={launchingId === item.id}
            onLaunch={() => onLaunch(item.id)}
          />
        );
      })}
    </motion.div>
  );
}

function DockIcon({
  mouseX,
  item,
  active,
  launching,
  onLaunch,
}: {
  mouseX: MotionValue<number>;
  item: (typeof DOCK_ITEMS)[0];
  active: boolean;
  launching: boolean;
  onLaunch: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [bounce, setBounce] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [42, 72, 42]);
  const width = useSpring(widthSync, {
    mass: 0.12,
    stiffness: 220,
    damping: 14,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (active) return;
    setBounce(true);
    onLaunch();
    window.setTimeout(() => setBounce(false), 750);
    window.setTimeout(() => {
      router.push(item.href);
    }, 140);
  };

  return (
    <div className="relative flex flex-col items-center">
      <Link href={item.href} onClick={handleClick} aria-label={item.label}>
        <motion.div
          ref={ref}
          style={{ width }}
          animate={
            bounce || launching
              ? { y: [0, -22, 0, -12, 0, -5, 0] }
              : { y: 0 }
          }
          transition={
            bounce || launching
              ? { duration: 0.75, ease: "easeOut", times: [0, 0.2, 0.4, 0.55, 0.7, 0.85, 1] }
              : { type: "spring", stiffness: 400, damping: 28 }
          }
          whileTap={{ scale: 0.88 }}
          className={`group relative flex aspect-square items-center justify-center rounded-[14px] border will-change-transform ${
            active
              ? "border-black bg-black text-white shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
              : "border-black/10 bg-white text-black shadow-sm hover:border-black/20"
          }`}
        >
          <item.icon
            className={`h-[46%] w-[46%] ${
              active ? "text-white" : "text-black"
            }`}
          />

          <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-black/10 bg-white px-2 py-1 text-[11px] font-medium text-black opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
            {item.label}
          </span>
        </motion.div>
      </Link>

      {/* macOS-style active indicator */}
      <motion.span
        aria-hidden
        className="mt-1 h-1 w-1 rounded-full bg-black/70"
        initial={false}
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      />
    </div>
  );
}

/** Page open / minimize (scale + soft genie toward dock) */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          scale: 0.86,
          y: 48,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scaleX: 0.35,
          scaleY: 0.12,
          y: 120,
          filter: "blur(10px)",
        }}
        transition={{
          duration: 0.48,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "50% 100%" }}
        className="min-h-screen will-change-transform"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

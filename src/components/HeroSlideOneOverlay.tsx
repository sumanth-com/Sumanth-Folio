"use client";

import {
  MotionValue,
  motion,
  useTransform,
} from "framer-motion";
import HeroInfoCard from "@/components/HeroInfoCard";
import HeroIntro from "@/components/HeroIntro";

interface HeroSlideOneOverlayProps {
  scrollYProgress: MotionValue<number>;
  total: number;
}

/** Left + right hero UI — visible only on the 1st scrolly image. */
export default function HeroSlideOneOverlay({
  scrollYProgress,
  total,
}: HeroSlideOneOverlayProps) {
  const segmentSize = 1 / total;
  const end = segmentSize;
  const fade = segmentSize * 0.2;

  const opacity = useTransform(
    scrollYProgress,
    [0, end - fade, Math.min(1, end + fade * 0.25)],
    [1, 1, 0]
  );

  const visibility = useTransform(opacity, (value) =>
    value <= 0.001 ? "hidden" : "visible"
  );

  const pointerEvents = useTransform(opacity, (value) =>
    value <= 0.001 ? "none" : "auto"
  );

  return (
    <motion.div
      style={{ opacity, visibility, pointerEvents }}
      className="absolute inset-0 z-30"
    >
      <HeroIntro />
      <HeroInfoCard />
    </motion.div>
  );
}

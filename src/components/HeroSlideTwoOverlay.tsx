"use client";

import {
  MotionValue,
  motion,
  useTransform,
} from "framer-motion";
import HeroSlideTwoLeft from "@/components/HeroSlideTwoLeft";
import HeroSlideTwoRight from "@/components/HeroSlideTwoRight";

interface HeroSlideTwoOverlayProps {
  scrollYProgress: MotionValue<number>;
  total: number;
}

/** Hero UI for the 2nd scrolly image — left formula, right Mac terminal. */
export default function HeroSlideTwoOverlay({
  scrollYProgress,
  total,
}: HeroSlideTwoOverlayProps) {
  const segmentSize = 1 / total;
  const index = 1;
  const start = index * segmentSize;
  const end = (index + 1) * segmentSize;
  const fade = segmentSize * 0.2;

  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - fade * 0.25),
      start + fade,
      end - fade,
      Math.min(1, end + fade * 0.25),
    ],
    [0, 1, 1, 0]
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
      <HeroSlideTwoLeft />
      <HeroSlideTwoRight />
    </motion.div>
  );
}

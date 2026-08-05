"use client";

import {
  MotionValue,
  motion,
  useTransform,
} from "framer-motion";
import HeroSlideThreeAmbience from "@/components/HeroSlideThreeAmbience";
import HeroSlideThreeLeft from "@/components/HeroSlideThreeLeft";
import HeroSlideThreeRight from "@/components/HeroSlideThreeRight";

interface HeroSlideThreeOverlayProps {
  scrollYProgress: MotionValue<number>;
  total: number;
}

/** Hero UI for the 3rd scrolly image — ambience, left copy, right impact card. */
export default function HeroSlideThreeOverlay({
  scrollYProgress,
  total,
}: HeroSlideThreeOverlayProps) {
  const segmentSize = 1 / total;
  const index = total - 1;
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
    [0, 1, 1, 1]
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
      <HeroSlideThreeAmbience />
      <HeroSlideThreeLeft />
      <HeroSlideThreeRight />
    </motion.div>
  );
}

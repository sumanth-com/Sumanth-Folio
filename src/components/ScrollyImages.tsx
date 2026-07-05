"use client";

import {
  MotionValue,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef } from "react";
import HeroSlideOneOverlay from "@/components/HeroSlideOneOverlay";
import HeroSlideThreeOverlay from "@/components/HeroSlideThreeOverlay";
import HeroSlideTwoOverlay from "@/components/HeroSlideTwoOverlay";

interface ScrollyImagesProps {
  images: string[];
}

function ScrollyImageLayer({
  src,
  index,
  total,
  scrollYProgress,
}: {
  src: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const segmentSize = 1 / total;
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
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0]
  );

  const visibility = useTransform(opacity, (value) =>
    value <= 0.001 ? "hidden" : "visible"
  );

  return (
    <motion.div
      style={{ opacity, visibility, zIndex: index + 1 }}
      className="absolute inset-0 flex items-start justify-center pt-10 pb-6 md:pt-14"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-full w-full max-h-[calc(100vh-4rem)] object-contain object-top"
        draggable={false}
        decoding="sync"
        fetchPriority={index === 0 ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function ScrollyImages({ images }: ScrollyImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[480vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {images.map((src, index) => (
          <ScrollyImageLayer
            key={src}
            src={src}
            index={index}
            total={images.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
        <HeroSlideOneOverlay
          scrollYProgress={scrollYProgress}
          total={images.length}
        />
        <HeroSlideTwoOverlay
          scrollYProgress={scrollYProgress}
          total={images.length}
        />
        <HeroSlideThreeOverlay
          scrollYProgress={scrollYProgress}
          total={images.length}
        />
      </div>
    </div>
  );
}

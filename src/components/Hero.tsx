"use client";

import ScrollyImages from "@/components/ScrollyImages";
import { HERO_IMAGES } from "@/assets/hero";

export default function Hero() {
  return (
    <div className="relative" id="home">
      <ScrollyImages images={HERO_IMAGES} />
    </div>
  );
}

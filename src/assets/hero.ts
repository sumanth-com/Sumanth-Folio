import { StaticImageData } from "next/image";

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const images: StaticImageData[] = [img1, img2, img3];

export const HERO_IMAGES = images.map((img) => img.src);

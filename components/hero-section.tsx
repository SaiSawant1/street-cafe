import { Star } from "lucide-react";
import Image from "next/image";
import { HeroContent } from "./hero-content";

export const HeroSection = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-brand_bg  px-44 py-40 relative -z-10">
      <Image
        height={500}
        width={500}
        alt="beans"
        className="absolute right-0 -top-10"
        src={"/bg_img_hero.svg"}
      />
      <Image
        height={400}
        width={700}
        alt="beans"
        className="absolute -left-20 z-10 -bottom-40"
        src={"/bg_img_hero2.svg"}
      />
      <HeroContent />
    </div>
  );
};

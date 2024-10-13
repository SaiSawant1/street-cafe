import { AboutUs } from "@/components/about";
import { HeroSection } from "@/components/hero-section";
import { NavBar } from "@/components/nav-bar";
import { PopularNow } from "@/components/popular-now";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <PopularNow />
      <AboutUs />
    </main>
  );
}

import Image from "next/image";
import { Header } from "./container/header";
import { FeaturedGames } from "./components/featured-game";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { LeaderboardsPreview } from "./components/leaders-board";
import { CommunityTestimonials } from "./components/testimonial";
import { Footer } from "./container/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <FeaturedGames />
      <LeaderboardsPreview />
      <CommunityTestimonials />
      <Footer />
    </main>
  );
}

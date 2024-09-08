import { AboutSection } from "./components/AboutSection";
import { FavoriteProjects } from "./components/FavouriteProjects";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Section2 } from "./components/Section2";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <Section2 />
      <AboutSection />
      <FavoriteProjects />
      <Footer />
    </div>
  );
}

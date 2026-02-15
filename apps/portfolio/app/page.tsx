import { AboutSection } from "~/components/about-section";
import { PortfolioSection } from "~/components/portfolio-section";
import { TestimonialSection } from "~/components/testimonial-section";

export default function Home() {
  return (
    <main className="space-y-10">
      <AboutSection />
      <TestimonialSection />
      <PortfolioSection />
    </main>
  );
}

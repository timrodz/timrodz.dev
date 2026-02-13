import { Footer } from "@repo/ui/components/footer";
import { AboutSection } from "~/components/about-section";
import { PortfolioSection } from "~/components/portfolio-section";
import { TestimonialSection } from "~/components/testimonial-section";

export default function Home() {
  return (
    <main className="landing">
      <AboutSection />
      <TestimonialSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}

import { Footer } from "@repo/ui/components/footer";
import { AboutSection } from "~/components/about-section";
import { PortfolioSection } from "~/components/portfolio-section";
import { TestimonialSection } from "~/components/testimonial-section";
import { PageContainer } from "~/components/page-container";

export default function Home() {
  return (
    <PageContainer>
      <AboutSection />
      <TestimonialSection />
      <PortfolioSection />
      <Footer />
    </PageContainer>
  );
}

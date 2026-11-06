import HeroSlider from "@/components/home/HeroSlider";
import TrustTicker from "@/components/home/TrustTicker";
import KeyMetricsStrip from "@/components/home/KeyMetricsStrip";
import SolutionsMatrix from "@/components/home/SolutionsMatrix";
import GridCoreConsole from "@/components/home/GridCoreConsole";
import CaseStudies from "@/components/home/CaseStudies";
import BriefingSection from "@/components/home/BriefingSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustTicker />
      <KeyMetricsStrip />
      <SolutionsMatrix />
      <GridCoreConsole />
      <CaseStudies />
      <BriefingSection />
    </>
  );
}

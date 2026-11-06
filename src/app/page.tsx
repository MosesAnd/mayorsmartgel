import HeroSlider from "@/components/home/HeroSlider";
import KeyMetricsStrip from "@/components/home/KeyMetricsStrip";
import SolutionsMatrix from "@/components/home/SolutionsMatrix";
import GridCoreConsole from "@/components/home/GridCoreConsole";
import CaseStudies from "@/components/home/CaseStudies";
import BriefingSection from "@/components/home/BriefingSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <KeyMetricsStrip />
      <SolutionsMatrix />
      <GridCoreConsole />
      <CaseStudies />
      <BriefingSection />
    </>
  );
}

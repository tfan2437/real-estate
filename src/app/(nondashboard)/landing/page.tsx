// components
import HeroSection from "@/app/(nondashboard)/landing/HeroSection";
import FeatureSection from "@/app/(nondashboard)/landing/FeatureSection";
import DiscoverSection from "@/app/(nondashboard)/landing/DiscoverSection";
import CallToAction from "@/app/(nondashboard)/landing/CallToAction";
import FooterSection from "@/app/(nondashboard)/landing/FooterSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <DiscoverSection />
      <CallToAction />
      <FooterSection />
    </div>
  );
};

export default Landing;

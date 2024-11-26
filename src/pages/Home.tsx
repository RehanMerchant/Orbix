import HeroSection from "@/components/Home/HeroSection";
import PricingSection from "@/components/Home/PricingSection";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/section2";

import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <Section1/>
      <Section3/>
      <Section2/>
      <Section4/>
      <PricingSection/>
    </section>
  );
};

export default Home;

import { Banner } from "@/components/banner";
import { FeatureSection } from "@/components/featureSection";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/heroSection";
import { HowItWorks } from "@/components/howItWorks";
import { NavBar } from "@/components/navBar";
import { WhySharply } from "@/components/whySharply";

export default function Home() {
  
  return (
    <div className="">
      <NavBar/>
      <HeroSection/>
      <FeatureSection/>
      <WhySharply/>
      <HowItWorks/>
      <Banner/>
      <Footer/>
    </div>
    );
}

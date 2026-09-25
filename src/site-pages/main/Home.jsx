"use client";

import { useLanguage } from "@/components/context/LanguageContext";

import HeroSection from "@/components/Home_components/HeroSection";
import Dashboard from "@/components/Home_components/Dashboard";
import StatsSection from "@/components/Home_components/StatsSection";
import FeaturesSection from "@/components/Home_components/FeaturesSection";
import PlatformSection from "@/components/Home_components/PlatformSection";
import WhyChooseUs from "@/components/Home_components/WhyChooseUs";
import Testimonials from "@/components/Home_components/Testimonials";
import FaqComponent from "@/components/Home_components/FaqComponent";
import Pricing from "@/components/Home_components/Pricing";
import CTASection from "@/components/Home_components/CTASection";

const SITE_URL = "https://bidconnectors.com";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

const Home = () => {
  const { t, lang } = useLanguage();
  const h = t.home;
  const pageUrl = lang === "ar" ? `${SITE_URL}/ar` : `${SITE_URL}/`;

  return (
    <>


      <main>
        <HeroSection />
        <Dashboard />
        <StatsSection stats={h.stats} />
        <FeaturesSection />
        <PlatformSection />
        <WhyChooseUs />
        <Testimonials />

        <FaqComponent
          title={h.faq.title}
          highlight={h.faq.highlight}
          description=""
          faqs={h.faq.items}
        />

        <Pricing />

        <CTASection
          titleLine1={h.cta.titleLine1}
          titleHighlight={h.cta.titleHighlight}
          subText={h.cta.subText}
          primaryBtnText={h.cta.primaryBtn}
          primaryBtnLink={REGISTER_URL}
          primaryBtnNewTab={true}
          secondaryBtnText={h.cta.secondaryBtn}
          secondaryBtnLink={REGISTER_URL}
          secondaryBtnNewTab={true}
          noteText={h.cta.note}
        />
      </main>
    </>
  );
};

export default Home;
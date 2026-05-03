import HeroSlider from '../components/HeroSlider';
import StatsSection from '../components/StatsSection';
import LeadingNGOSection from '../components/LeadingNGOSection';
import FounderSection from '../components/FounderSection';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <LeadingNGOSection />
      <FounderSection />
      <Timeline />
      <Testimonial />
      <CTASection />
    </>
  );
};

export default HomePage;

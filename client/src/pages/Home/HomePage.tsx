import HeroSection from "../../components/Home/HeroSection";
import ProjectSection from "../../components/Home/ProjectSection";
import AmenitiesSection from "../../components/Home/AmenitiesSection";
import NearbySection from "../../components/Home/NearbySection";
import FloorPlanSection from "../../components/Home/FloorPlanSection";
import ScrollTop from "../../components/Common/ScrollTop";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <NearbySection />
      <AmenitiesSection />
      <FloorPlanSection />
      <ScrollTop />
    </div>
  );
};

export default HomePage;

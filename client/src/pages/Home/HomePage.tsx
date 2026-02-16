import HeroSection from "../../components/Home/HeroSection";
import ProjectSection from "../../components/Home/ProjectSection";
import AmenitiesSection from "../../components/Home/AmenitiesSection";
import NearbySection from "../../components/Home/NearbySection";
import FloorPlanSection from "../../components/Home/FloorPlanSection";
import VideoSection from "../../components/Home/VideoSection";
import AboutDevSection from "../../components/Home/AboutDevSection";
import ScrollTop from "../../components/Common/ScrollTop";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <NearbySection />
      <AmenitiesSection />
      <FloorPlanSection />
      <VideoSection />
      <AboutDevSection />
      <ScrollTop />
    </div>
  );
};

export default HomePage;

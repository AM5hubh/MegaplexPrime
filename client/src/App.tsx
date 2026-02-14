import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Public website pages
import HeroSection from "./components/Home/HeroSection";
import ProjectSection from "./components/Home/ProjectSection";
import AmenitiesSection from "./components/Home/AmenitiesSection";
import NearbySection from "./components/Home/NearbySection";
import ScrollTop from "./components/Common/ScrollTop";
// Admin pages
import { Login } from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";
import { Overview } from "./pages/admin/Overview";
import { HeroSectionForm } from "./pages/admin/HeroSectionForm";
import { ProjectSectionForm } from "./pages/admin/ProjectSectionForm";
import { AmenitiesSectionForm } from "./pages/admin/AmenitiesSectionForm";
import { NearbySectionForm } from "./pages/admin/NearbySectionForm";
import { AboutSectionForm } from "./pages/admin/AboutSectionForm";
import { ConstructionSectionForm } from "./pages/admin/ConstructionSectionForm";
import { FAQSectionForm } from "./pages/admin/FAQSectionForm";

// Public website component
function Website() {
  return (
    <div className="min-h-screen bg-sand">
      <HeroSection />
      <ProjectSection />
      <AmenitiesSection />
      <NearbySection />
      <ScrollTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public website route */}
          <Route path="/" element={<Website />} />

          {/* Admin login route */}
          <Route path="/admin/login" element={<Login />} />

          {/* Protected admin routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Overview />} />
            <Route path="hero" element={<HeroSectionForm />} />
            <Route path="project" element={<ProjectSectionForm />} />
            <Route path="amenities" element={<AmenitiesSectionForm />} />
            <Route path="nearby" element={<NearbySectionForm />} />
            <Route path="about" element={<AboutSectionForm />} />
            <Route path="construction" element={<ConstructionSectionForm />} />
            <Route path="faq" element={<FAQSectionForm />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

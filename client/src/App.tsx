import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
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
import HomePage from "./pages/Home/HomePage";

// Public website component

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public website route */}
          <Route path="/" element={<HomePage />} />

          {/* Admin login route */}
          <Route path="/admin/login" element={<Login />} />

          {/* Protected admin routes */}9
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

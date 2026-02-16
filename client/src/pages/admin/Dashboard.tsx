import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  LayoutDashboard,
  Home,
  FolderOpen,
  Sparkles,
  MapPin,
  Info,
  HardHat,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navigationItems = [
  { name: "Overview", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Hero Section", path: "/admin/dashboard/hero", icon: Home },
  {
    name: "Project Section",
    path: "/admin/dashboard/project",
    icon: FolderOpen,
  },
  {
    name: "Amenities Section",
    path: "/admin/dashboard/amenities",
    icon: Sparkles,
  },
  { name: "Nearby Section", path: "/admin/dashboard/nearby", icon: MapPin },
  { name: "About Section", path: "/admin/dashboard/about", icon: Info },
  {
    name: "Construction Updates",
    path: "/admin/dashboard/construction",
    icon: HardHat,
  },
  { name: "FAQ Section", path: "/admin/dashboard/faq", icon: HelpCircle },
];

export const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, adminEmail } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-64 bg-white border-r border-gray-200 flex flex-col`}
      >
        {/* Sidebar header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent">
              Admin Panel
            </h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">{adminEmail}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      isActive
                        ? "bg-lime-50 text-lime-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              {<Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              {navigationItems.find((item) => item.path === location.pathname)
                ?.name || "Dashboard"}
            </h1>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                target="_blank"
                className="px-4 py-2 text-sm font-medium text-lime-700 bg-lime-50 rounded-lg hover:bg-lime-100 transition"
              >
                View Website
              </Link>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

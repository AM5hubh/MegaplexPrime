import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  FolderOpen,
  Sparkles,
  MapPin,
  Info,
  HardHat,
  HelpCircle,
} from "lucide-react";

const sections = [
  {
    name: "Hero Section",
    path: "/admin/dashboard/hero",
    icon: Home,
    description: "Main landing section with heading and pricing",
  },
  {
    name: "Project Section",
    path: "/admin/dashboard/project",
    icon: FolderOpen,
    description: "Project overview and description",
  },
  {
    name: "Amenities Section",
    path: "/admin/dashboard/amenities",
    icon: Sparkles,
    description: "List of project amenities",
  },
  {
    name: "Nearby Section",
    path: "/admin/dashboard/nearby",
    icon: MapPin,
    description: "Nearby locations and distances",
  },
  {
    name: "About Section",
    path: "/admin/dashboard/about",
    icon: Info,
    description: "About the project information",
  },
  {
    name: "Construction Updates",
    path: "/admin/dashboard/construction",
    icon: HardHat,
    description: "Construction progress updates",
  },
  {
    name: "FAQ Section",
    path: "/admin/dashboard/faq",
    icon: HelpCircle,
    description: "Frequently asked questions",
  },
];

export const Overview: React.FC = () => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Admin Dashboard
        </h2>
        <p className="text-gray-600">
          Manage all website content from this dashboard. Select a section below
          to start editing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.path}
              to={section.path}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-lime-50 rounded-lg group-hover:bg-lime-100 transition">
                  <Icon className="w-6 h-6 text-lime-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-lime-600 transition">
                    {section.name}
                  </h3>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-lime-50 to-mint-50 rounded-xl shadow-sm p-6 mt-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-lime-600 font-bold">•</span>
            <span>All changes are saved immediately to the database</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lime-600 font-bold">•</span>
            <span>Images are static and cannot be changed via this panel</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lime-600 font-bold">•</span>
            <span>
              Use the "View Website" button in the top bar to preview changes
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

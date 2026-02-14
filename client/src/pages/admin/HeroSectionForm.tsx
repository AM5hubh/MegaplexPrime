import React, { useState, useEffect } from "react";
import { Save, AlertCircle, CheckCircle } from "lucide-react";
import { contentService } from "../../services/contentService";
import type { HeroSectionContent } from "../../services/contentService";

export const HeroSectionForm: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<HeroSectionContent>({
    heading: "",
    subheading: "",
    price: "",
    priceLabel: "",
    priceUnit: "",
    highlights: ["", "", ""],
  });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const content = await contentService.getContent();
      setFormData(content.heroSection);
    } catch (err: any) {
      setError("Failed to load content");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    field: keyof HeroSectionContent,
    value: string,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleHighlightChange = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.map((item, i) =>
        i === index ? value : item,
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess(false);

    try {
      await contentService.updateSection("heroSection", formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Current Content Preview */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Current Content on Website
        </h3>
        <div className="space-y-3 text-sm">
          <div className="bg-white/70 rounded-lg p-4">
            <p className="text-gray-600 font-medium mb-1">Heading:</p>
            <p className="text-gray-900 text-lg font-bold">
              {formData.heading || "Not set"}
            </p>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <p className="text-gray-600 font-medium mb-1">Subheading:</p>
            <p className="text-gray-900">{formData.subheading || "Not set"}</p>
          </div>
          <div className="bg-white/70 rounded-lg p-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-gray-600 font-medium mb-1">Price:</p>
              <p className="text-gray-900 font-semibold">
                {formData.price || "Not set"}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-1">Price Label:</p>
              <p className="text-gray-900">
                {formData.priceLabel || "Not set"}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-1">Price Unit:</p>
              <p className="text-gray-900">{formData.priceUnit || "Not set"}</p>
            </div>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <p className="text-gray-600 font-medium mb-2">Highlights:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-900">
              {formData.highlights?.map((item, idx) => (
                <li key={idx}>{item || "(empty)"}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Edit Hero Section
        </h2>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-green-700">
              Changes saved successfully!
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Heading
            </label>
            <input
              placeholder="Enter main heading"
              type="text"
              value={formData.heading}
              onChange={(e) => handleInputChange("heading", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subheading
            </label>
            <input
              placeholder="Enter subheading"
              type="text"
              value={formData.subheading}
              onChange={(e) => handleInputChange("subheading", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
                placeholder="70L"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Label
              </label>
              <input
                type="text"
                value={formData.priceLabel}
                onChange={(e) =>
                  handleInputChange("priceLabel", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
                placeholder="Starting Price"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Unit
              </label>
              <input
                type="text"
                value={formData.priceUnit}
                onChange={(e) => handleInputChange("priceUnit", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
                placeholder="Onwards"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Highlights (3 items)
            </label>
            <div className="space-y-3">
              {formData.highlights.map((highlight, index) => (
                <input
                  key={index}
                  type="text"
                  value={highlight}
                  onChange={(e) => handleHighlightChange(index, e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
                  placeholder={`Highlight ${index + 1}`}
                  required
                />
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lime-500 to-lime-600 text-white font-semibold rounded-lg hover:from-lime-600 hover:to-lime-700 focus:ring-4 focus:ring-lime-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-5 h-5" />
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

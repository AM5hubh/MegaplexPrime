import React, { useState, useEffect } from "react";
import { Save, AlertCircle, CheckCircle, Plus, Trash2 } from "lucide-react";
import { contentService } from "../../services/contentService";
import type { ConstructionSectionContent } from "../../services/contentService";

export const ConstructionSectionForm: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<ConstructionSectionContent>({
    heading: "",
    updates: [],
  });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const content = await contentService.getContent();
      setFormData(content.constructionSection);
    } catch (err: any) {
      setError("Failed to load content");
    } finally {
      setLoading(false);
    }
  };

  const handleHeadingChange = (value: string) => {
    setFormData((prev) => ({ ...prev, heading: value }));
  };

  const handleUpdateChange = (
    index: number,
    field: "title" | "description" | "date",
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      updates: prev.updates.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const addUpdate = () => {
    setFormData((prev) => ({
      ...prev,
      updates: [...prev.updates, { title: "", description: "", date: "" }],
    }));
  };

  const removeUpdate = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      updates: prev.updates.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess(false);

    try {
      await contentService.updateSection("constructionSection", formData);
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
        <div className="space-y-3">
          <div className="bg-white/70 rounded-lg p-4">
            <p className="text-gray-600 font-medium mb-1">Heading:</p>
            <p className="text-gray-900 text-lg font-bold">
              {formData.heading || "Not set"}
            </p>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <p className="text-gray-600 font-medium mb-2">
              Construction Updates ({formData.updates?.length || 0}):
            </p>
            <div className="space-y-3">
              {formData.updates?.map((update, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-3 border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-gray-900 font-semibold">
                      {update.title}
                    </p>
                    <span className="text-xs text-lime-600 bg-lime-50 px-2 py-1 rounded">
                      {update.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{update.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Edit Construction Updates
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
              Heading
            </label>
            <input
              type="text"
              value={formData.heading}
              onChange={(e) => handleHeadingChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
              placeholder="Construction Updates"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Updates
              </label>
              <button
                type="button"
                onClick={addUpdate}
                className="flex items-center gap-2 px-3 py-2 text-sm bg-lime-50 text-lime-700 rounded-lg hover:bg-lime-100 transition"
              >
                <Plus className="w-4 h-4" />
                Add Update
              </button>
            </div>

            <div className="space-y-4">
              {formData.updates.map((update, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-sm font-medium text-gray-700">
                      Update {index + 1}
                    </h4>
                    <button
                      type="button"
                      onClick={() => removeUpdate(index)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded transition"
                    >
                      {<Trash2 className="w-4 h-4" />}
                    </button>
                  </div>
                  <input
                    type="text"
                    value={update.title}
                    onChange={(e) =>
                      handleUpdateChange(index, "title", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
                    placeholder="Update title"
                    required
                  />
                  <textarea
                    value={update.description}
                    onChange={(e) =>
                      handleUpdateChange(index, "description", e.target.value)
                    }
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Update description"
                    required
                  />
                  <input
                    type="text"
                    value={update.date}
                    onChange={(e) =>
                      handleUpdateChange(index, "date", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
                    placeholder="Date (e.g., January 2024)"
                    required
                  />
                </div>
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

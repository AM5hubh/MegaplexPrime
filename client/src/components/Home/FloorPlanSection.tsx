import React, { useState } from "react";
import { Download } from "lucide-react";

interface FloorPlan {
  id: string;
  type: string;
  bhk: string;
  area: string;
  price: string;
  image: string;
  thumbnail: string;
}

const FloorPlanSection: React.FC = () => {
  const [selectedWing, setSelectedWing] = useState("All");
  const [selectedBhk, setSelectedBhk] = useState("1 bhk");

  const wings = ["All", "East Wing", "West Wing", "North Wing", "South Wing"];
  const bhkTypes = ["1 bhk", "2 bhk", "3-6 bhk"];

  // Sample floor plan data - replace with actual data from backend
  const floorPlans: FloorPlan[] = [
    {
      id: "1",
      type: "1Bhk",
      bhk: "1 bhk",
      area: "380-411 RCA Sq ft",
      price: "Click for price",
      image: "/about-main.jpg",
      thumbnail: "/about-main.jpg",
    },
    {
      id: "2",
      type: "2Bhk",
      bhk: "2 bhk",
      area: "580-650 RCA Sq ft",
      price: "Click for price",
      image: "/floor-plans/2bhk-main.jpg",
      thumbnail: "/floor-plans/2bhk-thumb.jpg",
    },
    {
      id: "3",
      type: "3-6Bhk",
      bhk: "3-6 bhk",
      area: "850-1200 RCA Sq ft",
      price: "Click for price",
      image: "/floor-plans/3bhk-main.jpg",
      thumbnail: "/floor-plans/3bhk-thumb.jpg",
    },
  ];

  const currentPlan =
    floorPlans.find((plan) => plan.bhk === selectedBhk) || floorPlans[0];

  return (
    <section
      id="floor-plans"
      className="bg-linear-to-br from-mint to-teal/20 px-5 py-16 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Wing Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {wings.map((wing) => (
            <button
              key={wing}
              onClick={() => setSelectedWing(wing)}
              className={`text-sm font-medium transition-all md:text-base ${
                selectedWing === wing
                  ? "border-b-2 border-teal pb-1 text-ink"
                  : "text-muted hover:text-ink-soft"
              }`}
            >
              {wing}
            </button>
          ))}
        </div>

        {/* Floor Plan Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Floor Plan Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
              <div className="aspect-square overflow-hidden rounded-2xl border-4 border-ink bg-stone">
                {/* Placeholder for floor plan image */}
                <div className="flex h-full items-center justify-center bg-linear-to-br from-stone to-sand text-muted">
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-4 h-24 w-24 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <p className="text-sm">{currentPlan.type} Floor Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Details and Options */}
          <div className="flex flex-col justify-center">
            {/* BHK Type Tabs */}
            <div className="mb-8 flex flex-wrap gap-3">
              {bhkTypes.map((bhk) => (
                <button
                  key={bhk}
                  onClick={() => setSelectedBhk(bhk)}
                  className={`rounded-lg px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all ${
                    selectedBhk === bhk
                      ? "bg-teal text-white shadow-lg"
                      : "bg-white text-muted hover:bg-stone"
                  }`}
                >
                  {bhk}
                </button>
              ))}
            </div>

            {/* Floor Plan Details Card */}
            <div className="mb-6 rounded-2xl bg-white p-8 shadow-xl">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted">TYPE</p>
                  <p className="text-2xl font-bold text-ink">
                    {currentPlan.type}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted">AREA</p>
                  <p className="text-xl font-semibold text-ink-soft">
                    {currentPlan.area}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted">PRICE</p>
                  <p className="text-xl font-semibold text-teal">
                    {currentPlan.price}
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-lime to-lime-dark px-6 py-3 font-semibold text-ink shadow-lg transition hover:scale-105 hover:brightness-95">
                <Download className="h-5 w-5" />
                <span>Download Floor Plan</span>
              </button>
            </div>

            {/* Thumbnail Previews */}
            <div className="grid grid-cols-3 gap-3">
              {floorPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedBhk(plan.bhk)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 bg-white transition-all hover:scale-105 ${
                    selectedBhk === plan.bhk
                      ? "border-teal shadow-lg"
                      : "border-stone hover:border-teal/50"
                  }`}
                >
                  <div className="flex h-full items-center justify-center bg-stone p-2 text-xs text-muted">
                    {plan.type}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSection;

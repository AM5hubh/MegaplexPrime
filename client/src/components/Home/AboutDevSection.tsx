import React from "react";

const AboutDevSection: React.FC = () => {
  const stats = [
    { value: "6", label: "Decades" },
    { value: "1.32 LAC", label: "sq. ft. delivered" },
    { value: "449+", label: "Projects" },
    { value: "3.77 LAC", label: "sq. ft. ongoing" },
    { value: "2.7 LAC", label: "sq. ft. Area upcoming" },
  ];

  return (
    <section
      id="about-developer"
      className="bg-white px-5 py-16 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-6 text-center font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
          About Developer
        </h2>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-5xl text-center text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
          Vighneshwara Developers is more than a real estate company; we are
          committed to building not just homes, but better lives. With a legacy
          of expert craftsmanship and a forward-thinking approach, we're
          transforming skies and setting new standards in urban living. Our
          foundation rests on integrity, excellence, and innovation, ensuring
          every project is a perfect blend of creativity, functionality, and
          sustainability.
        </p>

        {/* Statistics Bar and Building Image Container */}
        <div className="relative">
          {/* Statistics Bar - Overlays the image */}
          <div className="relative z-10 mx-auto max-w-6xl -mb-8 sm:-mb-12 lg:-mb-16">
            <div className="rounded-2xl bg-linear-to-r from-mint via-teal to-mint px-4 py-6 shadow-xl sm:px-6 sm:py-8 lg:px-8 lg:py-10">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-display text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-ink/80 sm:text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Building Image */}
          <div className="overflow-hidden rounded-4xl shadow-2xl">
            <img
              src="/about-main.jpg"
              alt="Modern glass buildings with greenery"
              className="h-100 w-full object-cover sm:h-125 lg:h-150 "
              onError={(e) => {
                // Fallback to gradient if image doesn't exist
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            {/* Fallback gradient background */}
            <div className="hidden h-100 w-full bg-linear-to-br from-stone via-sand to-mint/20 sm:h-125 lg:h-150" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDevSection;

import { Dumbbell, Baby, Footprints, Sparkles } from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    {
      name: "Gymnasium",
      icon: <Dumbbell className="h-12 w-12" />,
    },
    {
      name: "Kids Play Area",
      icon: <Baby className="h-12 w-12" />,
    },
    {
      name: "Kids Play Area",
      icon: <Baby className="h-12 w-12" />,
    },
    {
      name: "Jogging Track",
      icon: <Footprints className="h-12 w-12" />,
    },
    {
      name: "Yoga Deck",
      icon: <Sparkles className="h-12 w-12" />,
    },
    {
      name: "Yoga Deck",
      icon: <Sparkles className="h-12 w-12" />,
    },
  ];

  return (
    <section
      id="amenities"
      className="relative bg-mint/20 px-5 py-16 sm:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-3 font-display text-[2.5rem] font-semibold text-forest sm:text-[3rem]">
          Amenities
        </h2>
        <p className="mb-10 text-[0.9rem] leading-relaxed text-muted">
          Thoughtfully crafted surroundings that reflect tradition, comfort, and
          a human-centered design approach.
        </p>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            <img
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              src="/about-main.jpg"
              alt="Amenities aerial view"
            />
          </div>

          <div>
            <div className="grid grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110"
                >
                  <div className="mb-3 text-teal">{amenity.icon}</div>
                  <p className="text-sm font-medium text-muted">
                    {amenity.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                className="rounded-lg bg-linear-to-r from-lime to-lime-dark p-4 font-semibold text-neutral-900 shadow-lg transition hover:brightness-95 hover:scale-110"
                type="button"
              >
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;

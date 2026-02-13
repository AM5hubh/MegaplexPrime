const ProjectSection = () => {
  return (
    <section
      id="overview"
      className="relative bg-mint px-5 pb-20 pt-12 sm:px-10 lg:px-14"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative flex items-center justify-center py-10">
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-[8px] border-white shadow-[0_20px_35px_rgba(0,0,0,0.15)] sm:h-80 sm:w-80">
            <img
              className="h-full w-full object-cover"
              src="/about-main.jpg"
              alt="Project lifestyle view"
            />
          </div>
          <div className="absolute -left-4 top-14 h-24 w-24 overflow-hidden rounded-full border-[6px] border-white shadow-[0_14px_26px_rgba(0,0,0,0.14)] sm:-left-6 sm:top-12 sm:h-28 sm:w-28">
            <img
              className="h-full w-full object-cover"
              src="/about-small-1.jpg"
              alt="Interior space"
            />
          </div>
          <div className="absolute -bottom-2 left-16 h-24 w-24 overflow-hidden rounded-full border-[6px] border-white shadow-[0_14px_26px_rgba(0,0,0,0.14)] sm:-bottom-4 sm:left-20 sm:h-28 sm:w-28">
            <img
              className="h-full w-full object-cover"
              src="/about-small-2.jpg"
              alt="Project amenities"
            />
          </div>
        </div>

        <div>
          <h3 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
            About Project
          </h3>
          <p className="mt-4 text-sm leading-6 text-ink-soft">
            At Vighnaharta Enclave, every detail reflects the grandest gesture
            of life in the most authentic and desirable home. Guided by a
            humanist approach, the architectural process places people at the
            heart of the space. Built on the foundations of comfort, it evokes a
            true sense of freedom, protection, and belonging.
          </p>
          <p className="mt-4 text-sm leading-6 text-ink-soft">
            “The moment I entered the house, it felt welcomed” - this feeling
            defines the privilege Vighnaharta Enclave offers. Thoughtfully
            designed with crafted amenities and timeless choices, the space
            resonates with the warmth and authenticity that you and your family
            truly deserve. It’s the place your soul has long been searching for.
          </p>
          <button
            className="mt-6 rounded-md bg-lime px-5 py-2 text-sm font-semibold text-neutral-900 shadow-[0_8px_16px_rgba(182,243,90,0.35)] transition hover:brightness-95"
            type="button"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

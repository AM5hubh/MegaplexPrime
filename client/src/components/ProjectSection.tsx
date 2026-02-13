const ProjectSection = () => {
  return (
    <section
      id="overview"
      className="relative -mt-2 bg-mint px-5 pb-20 pt-12 sm:px-10 lg:px-14"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative flex items-center justify-center py-10 ">
          <div className="relative h-100 w-100 overflow-hidden rounded-full outline-12 outline-mint">
            <img
              className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
              src="/about-main.jpg"
              alt="Project lifestyle view"
            />
          </div>
          <div className="absolute left-20 top-6 h-42 w-42 overflow-hidden rounded-full outline-12 outline-mint  ">
            <img
              className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
              src="/about-small-1.jpg"
              alt="Interior space"
            />
          </div>
          <div className="absolute right-24 h-36 w-36 overflow-hidden rounded-full outline-12 outline-mint bottom-4">
            <img
              className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
              src="/about-small-2.jpg"
              alt="Project amenities"
            />
          </div>
        </div>

        <div>
          <h3 className="font-display text-5xl font-bold text-forest ">
            About Project
          </h3>
          <p className="mt-5 text-[0.9rem] leading-[1.7] text-ink-soft">
            At Vighnaharta Enclave, every detail reflects the grandest gesture
            of life in the most authentic and desirable home. Guided by a
            humanist approach, the architectural process places people at the
            heart of the space. Built on the foundations of comfort, it evokes a
            true sense of freedom, protection, and belonging.
          </p>
          <p className="mt-4 text-[0.9rem] leading-[1.7] text-ink-soft">
            “The moment I entered the house, it felt welcomed” - this feeling
            defines the privilege Vighnaharta Enclave offers. Thoughtfully
            designed with crafted amenities and timeless choices, the space
            resonates with the warmth and authenticity that you and your family
            truly deserve. It’s the place your soul has long been searching for.
          </p>
          <br />
          <button
            className="rounded-lg bg-linear-to-r from-lime to-lime-dark p-4 font-semibold text-neutral-900 shadow-lg transition hover:brightness-95 hover:scale-110"
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

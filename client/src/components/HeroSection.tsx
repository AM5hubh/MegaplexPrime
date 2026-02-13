const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-sand px-5 pb-20 pt-10 sm:px-10 lg:px-14"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
          <div className="px-7 pt-8 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Thinking
            </p>
            <h1 className="mt-3 font-display text-[1.7rem] font-semibold uppercase text-ink sm:text-[2.1rem]">
              Of a <span className="text-crimson">Fantastic Vicinity</span>?
            </h1>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
              <span>20+ Podium Luxurious Amenities</span>
              <span className="hidden h-3 w-px bg-muted/40 sm:inline-block" />
              <span>Spacious Balcony Homes*</span>
            </div>
          </div>
          <div className="relative mt-6">
            <img
              className="h-[320px] w-full object-cover sm:h-[380px]"
              src="/hero-building.jpg"
              alt="Aerial view of the residential project"
            />
            <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-t from-sand via-sand/80 to-transparent" />
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[28px] bg-white px-6 py-10 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-forest/30">
            <svg
              className="h-9 w-9 text-forest"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 10c-4 6-6 11-6 16 0 7 4 12 6 12s6-5 6-12c0-5-2-10-6-16Z"
                fill="currentColor"
              />
              <path
                d="M14 26c2 7 7 11 13 11 3 0 5-1 6-2-2-4-6-7-10-9-4-2-7-2-9 0Z"
                fill="currentColor"
              />
              <path
                d="M50 26c-2 7-7 11-13 11-3 0-5-1-6-2 2-4 6-7 10-9 4-2 7-2 9 0Z"
                fill="currentColor"
              />
              <path
                d="M32 36c-6 0-11 5-11 11h22c0-6-5-11-11-11Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="mt-5 font-display text-xs uppercase tracking-[0.3em] text-muted">
            Vighnaharta
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-[0.2em] text-ink">
            Infinity
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3 text-muted">
            <span className="h-px w-16 bg-muted/50" />
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
              <rect
                x="5"
                y="0"
                width="2"
                height="12"
                fill="currentColor"
                opacity="0.5"
              />
              <rect
                x="0"
                y="5"
                width="12"
                height="2"
                fill="currentColor"
                opacity="0.5"
              />
              <rect
                x="3"
                y="3"
                width="6"
                height="6"
                transform="rotate(45 6 6)"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.7"
              />
            </svg>
            <span className="h-px w-16 bg-muted/50" />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                Smart 1 BHK
              </p>
              <p className="mt-1 text-[0.8rem] font-medium text-muted">
                @ <span className="text-crimson line-through">74.99 Lacs</span>
              </p>
              <p className="mt-1 text-[1.7rem] font-bold leading-tight text-ink">
                Rs 69.99 Lacs*
              </p>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-ink/40" />
                <span className="text-xs uppercase tracking-[0.25em] text-muted">
                  Onwards
                </span>
                <span className="h-px w-8 bg-ink/40" />
              </div>
            </div>
            <div className="hidden h-28 w-px bg-muted/30 sm:block" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                Premium 2 BHK
              </p>
              <p className="mt-1 text-[0.8rem] font-medium text-muted">
                @ <span className="text-crimson line-through">1.05 CR</span>
              </p>
              <p className="mt-1 text-[1.7rem] font-bold leading-tight text-ink">
                Rs 96.99 Lacs*
              </p>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-ink/40" />
                <span className="text-xs uppercase tracking-[0.25em] text-muted">
                  Onwards
                </span>
                <span className="h-px w-8 bg-ink/40" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-ink-soft">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-muted/40">
              <svg
                className="h-4 w-4 text-crimson"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </span>
            <span className="text-center">
              <span className="font-semibold">Bldg. No. 223/224,</span>
              <br className="sm:hidden" />
              Circle - Kannamwar Nagar 1, Vikhroli (East)
            </span>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80C240 120 480 120 720 90C960 60 1200 20 1440 30V120H0V80Z"
          fill="var(--color-mint, #eaf7f3)"
        />
      </svg>
    </section>
  );
};

export default HeroSection;

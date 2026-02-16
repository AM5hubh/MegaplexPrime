const Navbar = () => {
  const navlink = [
    { name: "Home", href: "/#" },
    { name: "Overview", href: "/#overview" },
    { name: "Connectivities", href: "/#nearby" },
    { name: "Amenities", href: "/#amenities" },
    { name: "Floor Plans", href: "/#floor-plans" },
    { name: "Developer", href: "/#developer" },
    { name: "Contact", href: "/#contact" },
  ];
  return (
    <header className="sticky top-0  z-100 flex flex-wrap items-center justify-between gap-6 bg-white px-5 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.06)] sm:px-10 lg:flex-nowrap lg:px-12">
      <div className="flex items-center gap-3">
        <div
          className="relative grid h-11 w-11 place-items-center rounded-full bg-lime-soft"
          aria-hidden="true"
        >
          <div className="absolute inset-1.5 rounded-full border-2 border-lime-border" />
          <div className="h-4 w-4 translate-y-0.5 rotate-45 border-b-[3px] border-l-[3px] border-r-[3px] border-lime-deep" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[1.05rem] font-bold tracking-[0.02em] text-lime-deep">
            Lime Roofing
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            Builders & Developers
          </span>
        </div>
      </div>

      <nav
        className="hidden items-center gap-6 text-[0.95rem] font-medium text-ink-soft lg:flex"
        aria-label="Primary"
      >
        {navlink.map((link) => (
          <a
            key={link.name}
            className="transition-all hover:text-lime-deep hover:scale-110 "
            href={link.href}
          >
            {link.name}
          </a>
        ))}
      </nav>
      <button
        className="rounded-lg bg-linear-to-r from-lime to-lime-dark px-6 py-2.5 font-semibold text-neutral-900 shadow-lg transition hover:brightness-95 hover:scale-110"
        type="button"
        onClick={() => (window.location.href = "/admin/login")}
      >
        Enquiry Now
      </button>
    </header>
  );
};

export default Navbar;

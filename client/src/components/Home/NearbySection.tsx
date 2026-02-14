import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const NearbySection = () => {
  const buildings = [
    {
      id: 1,
      name: "Vighnaharta Aaradhya",
      image: "/about-main.jpg",
    },
    {
      id: 2,
      name: "Newly Launched - Vighnaharta Enclave",
      image: "/about-small-1.jpg",
    },
    {
      id: 3,
      name: "Newly Launched - Vighnaharta Heights",
      image: "/about-small-2.jpg",
    },
  ];

  const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
    return (
      hasPrev && (
        <button
          onClick={clickHandler}
          className="absolute left-20 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-lime p-3 shadow-lg transition hover:scale-110 hover:brightness-95 sm:-translate-x-12"
          type="button"
          aria-label="Previous building"
        >
          <ChevronLeft className="h-6 w-6 text-forest" />
        </button>
      )
    );
  };

  const renderArrowNext = (clickHandler: () => void, hasNext: boolean) => {
    return (
      hasNext && (
        <button
          onClick={clickHandler}
          className="absolute right-20 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-lime p-3 shadow-lg transition hover:scale-110 hover:brightness-95 sm:translate-x-12"
          type="button"
          aria-label="Next building"
        >
          <ChevronRight className="h-6 w-6 text-forest" />
        </button>
      )
    );
  };

  return (
    <section id="nearby" className="bg-teal px-5 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-display text-[2.5rem] font-semibold text-black sm:text-[3rem]">
          Explore More Buildings in the Township
        </h2>

        <div className="relative mx-auto max-w-6xl">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            showIndicators={false}
            renderArrowPrev={renderArrowPrev}
            renderArrowNext={renderArrowNext}
            swipeable={true}
            emulateTouch={true}
            centerMode={true}
            centerSlidePercentage={80}
          >
            {buildings.map((building) => (
              <div key={building.id} className="px-4 pb-4">
                <div className="mx-auto gap-3 max-w-md overflow-hidden rounded-2xl bg-linear-to-b from-purple-400/20 to-purple-600/40 shadow-xl">
                  <img
                    src={building.image}
                    alt={building.name}
                    className="h-75 w-full object-cover sm:h-87.5"
                  />
                  <div className="bg-linear-to-b from-mint/90 to-mint p-4">
                    <p className="text-center text-sm font-medium text-forest sm:text-base">
                      {building.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NearbySection;

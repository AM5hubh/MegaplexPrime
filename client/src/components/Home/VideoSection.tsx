import React, { useState } from "react";
import { Play, X } from "lucide-react";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace with actual video URL or embed code
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgxcQ";

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <section id="video" className="relative px-5 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Video Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Background Image/Thumbnail */}
          {!isPlaying && (
            <div className="relative aspect-video w-full">
              {/* Background Image - Replace with actual image path */}
              <img
                src="/video-thumbnail.jpg"
                alt="Project Video"
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Fallback to gradient if image doesn't exist
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove(
                    "hidden",
                  );
                }}
              />
              {/* Fallback gradient background */}
              <div className="hidden absolute inset-0 bg-linear-to-br from-teal via-mint to-lime opacity-20" />

              {/* Cityscape with greenery overlay effect */}
              <div className="absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent" />

              {/* Play Button Overlay */}
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center transition-transform hover:scale-105"
                aria-label="Play video"
              >
                <div className="group relative">
                  {/* Outer circle with animation */}
                  <div className="absolute inset-0 animate-pulse rounded-full bg-white/30 blur-xl" />

                  {/* Play button circle */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white/90 shadow-2xl transition-all group-hover:bg-lime group-hover:border-lime sm:h-32 sm:w-32 lg:h-40 lg:w-40">
                    <Play className="h-10 w-10 fill-ink text-ink transition-colors group-hover:fill-white group-hover:text-white sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
                  </div>
                </div>
              </button>
            </div>
          )}

          {/* Video Player (shown when playing) */}
          {isPlaying && (
            <div className="relative aspect-video w-full bg-ink">
              {/* Close Button */}
              <button
                onClick={handleCloseClick}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-crimson text-white shadow-lg transition hover:scale-110 hover:bg-crimson-dark"
                aria-label="Close video"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Video Iframe */}
              <iframe
                src={videoUrl}
                title="Project Video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Optional: Video Title/Description */}
        <div className="mt-8 text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Experience Lime Roofing
          </h2>
          <p className="mt-4 text-lg text-muted sm:text-xl">
            Watch our video to explore the stunning architecture, world-class
            amenities, and vibrant community
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

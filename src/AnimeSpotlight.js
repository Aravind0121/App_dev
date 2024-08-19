import React, { useState, useRef, useEffect } from 'react';
import './AnimeSpotlight.css';
import Modal from './Modal';

const slides = [
  {
    title: "Solo Leveling!",
    description: "A weak man strives to become stronger and explore the world.",
    image: "./images/fates.jpg",
    video: "./images/solw.mp4",
    category: "Adventure",
  },
  {
    title: "Attack on Titan",
    description: "Humans fight for survival against terrifying Titans in a post-apocalyptic world.",
    image: "./images/aot.jpg",
    video: "./images/slay.mp4",
    category: "Action, Fantasy",
  },
  {
    title: "One Piece",
    description: "A superhero story that follows Izuku Midoriya's journey to become a Pro Hero.",
    image: "./images/might.jpg",
    video: "./images/one.mp4",
    category: "Action",
  },
  {
    title: "Jujutsu Kaisen",
    description: "A Japanese manga series written and illustrated by Gege Akutami.",
    image: "./images/demoaa.jpg",
    video: "./images/jk.mp4",
    category: "Action, Fantasy",
  },
  {
    title: "Demon Slayer",
    description: "Tanjiro and his sister Nezuko survive a demon attack and seek revenge.",
    image: "./images/demoaa.jpg",
    video: "./images/dem.mp4",
    category: "Action, Fantasy",
  },
];

const AnimeSpotlight = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const toggleMute = () => setIsMuted((prev) => !prev);
  const watchNow = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const currentVideo = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (currentVideo) {
          entry.isIntersecting ? currentVideo.play() : currentVideo.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, [currentSlide]);

  return (
    <div className="anime-spotlight">
      <div className="slide">
        {slides[currentSlide].video && (
          <video
            ref={videoRef}
            src={slides[currentSlide].video}
            className="slide-video"
            autoPlay
            loop
            muted={isMuted}
          />
        )}
        <div className="slide-content">
          <div className="category">{slides[currentSlide].category}</div>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <button className="watch-now-btn" onClick={watchNow}>
            Watch Now
          </button>
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <button className="mute-toggle" onClick={toggleMute}>
        {isMuted ? '🔇' : '🔊'}
      </button>

      {isModalOpen && (
        <Modal videoUrl={slides[currentSlide].video} onClose={closeModal} />
      )}
    </div>
  );
};

export default AnimeSpotlight;

import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/assets/images/1.png',
    '/assets/images/2.png',
    '/assets/images/3.png',
    '/assets/images/4.png',
    '/assets/images/6.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (<section className="relative h-screen min-h-[520px] md:min-h-[620px] pt-[90px] overflow-hidden flex items-center justify-center text-center">


    {/* BACKGROUND SLIDER */}
    <div className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1200ms] ${index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          style={{ backgroundImage: `url('${slide}')` }}
        ></div>
      ))}
    </div>

    {/* CLEAN DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/55"></div>

    {/* CONTENT */}
    <div className="relative z-10 max-w-[900px] px-6">

      {/* TAGLINE */}
      <p className="text-green-500 font-semibold uppercase tracking-wide text-sm md:text-base mb-4">
        Uplifting Rural Lives
      </p>

      {/* MAIN HEADING */}
      <h1 className="text-white font-bold leading-[1.2] text-[2.4rem] md:text-[3.8rem] lg:text-[4.2rem] mb-6">
        Empowering Rural
        <br />
        Voice, Transforming
        <br />
        Communities
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-200 text-[1.05rem] md:text-[1.3rem] leading-relaxed mb-8">
        Fostering sustainable rural development through education, healthcare, and skill empowerment.
      </p>

      {/* CTA */}
      <div className="flex justify-center">
        <Button
          variant="contained"
          href="https://docs.google.com/forms/d/e/1FAIpQLScIu571TRGETKdjeBrrWgN9CRWTgV3mr681GiFTdg5jTvw3sA/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderRadius: '999px',
            px: '38px',
            py: '14px',
            fontSize: '1rem',
            fontWeight: 600,
            backgroundColor: '#2e7d32',
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#1b5e20',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.25)'
            }
          }}
        >
          Get Involved
        </Button>
      </div>

    </div>
  </section>


  );
};

export default HeroSlider;

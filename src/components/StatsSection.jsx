import { useState, useEffect, useRef } from 'react';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          setIsVisible(true);
          hasStarted.current = true;
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const end = parseInt(target.replace(/\D/g, ''));
    if (isNaN(end)) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  const suffix = target.replace(/[0-9]/g, '');

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-8 mt-10 mb-10" id="impact">
      <div className="bg-primary text-white py-16 relative z-[2] rounded-[12px] shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="stat-item">
            <h3 className="text-[3rem] font-extrabold mb-2">
              <Counter target="100+" />
            </h3>
            <p className="text-[1.1rem] opacity-90">Villages Impacted</p>
          </div>
          <div className="stat-item">
            <h3 className="text-[3rem] font-extrabold mb-2">
              <Counter target="20k+" />
            </h3>
            <p className="text-[1.1rem] opacity-90">Women Empowered</p>
          </div>
          <div className="stat-item">
            <h3 className="text-[3rem] font-extrabold mb-2">
              <Counter target="50k+" />
            </h3>
            <p className="text-[1.1rem] opacity-90">Beneficiaries</p>
          </div>
          <div className="stat-item">
            <h3 className="text-[3rem] font-extrabold mb-2">
              <Counter target="30+" />
            </h3>
            <p className="text-[1.1rem] opacity-90">Active Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

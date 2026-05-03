import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const FounderSection = () => {
  return (<section className="bg-gray-50 py-12" id="founder"> <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-[3rem] text-primary font-bold inline-block relative">
        Founder's Vision
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-green-500 rounded-full"></div>
      </h2>
    </div>

    {/* CUSTOM GRID (40% - 60%) */}
    <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.3fr] gap-6 md:gap-10 items-center">

      {/* LEFT — IMAGE (COMPRESSED SQUARE STYLE) */}
      <div className="w-full h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center">
        <img
          src="/assets/images/Founders Photo.png"
          alt="Nirmala Balwant Purandare — Founder of Vanasthali"
          className="w-full h-full object-cover object-[50%_25%]"
        />
      </div>

      {/* RIGHT — EXTENDED QUOTE BOX */}
      <div className="relative bg-green-700 h-[260px] md:h-[300px] flex flex-col justify-between p-6 md:p-8 rounded-xl shadow-lg">

        {/* Opening quote */}
        <span className="absolute top-4 left-4 text-yellow-400 text-3xl opacity-50">
          &ldquo;
        </span>

        {/* Quote */}
        <p className="text-white text-sm md:text-base lg:text-lg font-medium leading-relaxed mt-4 italic">
          We provide a strong foundation that connects people to their potential through empowerment, equality and empathy. It is not that rural women lack ability; they simply lack the opportunity. Once they are trained and given responsibility, they are the ones who can truly transform their villages.
        </p>

        {/* Attribution */}
        <p className="text-sm md:text-base font-semibold text-gray-100 mt-3 border-l-2 border-yellow-400 pl-3">
          — Nirmala Balwant Purandare, Founder of Vanasthali
        </p>

        {/* Button */}
        <Button
          component={Link}
          to="/about"
          variant="contained"
          sx={{
            mt: 1,
            px: '12px',
            py: '4px',
            fontSize: '0.75rem',
            fontWeight: 600,
            backgroundColor: 'white',
            color: '#15803d',
            textTransform: 'none',
            borderRadius: '6px',
            boxShadow: 'none',
            width: 'fit-content',
            '&:hover': {
              backgroundColor: '#f3f4f6',
            },
          }}
        >
          Know More
        </Button>

        {/* Closing quote */}
        {/* <span className="absolute bottom-4 right-4 text-yellow-400 text-3xl opacity-50">
          &rdquo;
        </span> */}

      </div>

    </div>
  </div>
  </section>

  );
};

export default FounderSection;

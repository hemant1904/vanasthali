import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Balwadi Pre-schools",
      desc: "Providing pre-primary education to children in rural areas, focusing on holistic development and school readiness.",
      img: "/assets/images/primary-school.jpg",
    },
    {
      title: "Teacher Training Course",
      desc: "Empowering local women to become educators, improving the quality of primary education in rural schools.",
      img: "/assets/images/teacher-training.jpg",
    },
    {
      title: "Leap Learning Enhancement",
      desc: "Leveraging technology to bridge educational gaps and provide personalized learning experiences to students in rural areas.",
      img: "/assets/images/leap-learning.jpg",
    },
    {
      title: "Science Exhibition and Laboratories",
      desc: "Empowering young minds through hands-on scientific exploration, innovation, and experimentation.",
      img: "/assets/images/science-expo.jpg",
    },
    {
      title: "Library Programmes",
      desc: "Running evening learning centers and libraries to support school-going children and combat dropout rates.",
      img: "/assets/images/library.jpg",
    },
    {
      title: "Summer and Winter Camps",
      desc: "Organizing camps during vacations to engage children in constructive activities, art, and cultural exploration.",
      img: "/assets/images/summer-camp.jpg",
    }
  ];

  return (
    <section className="py-12 md:py-20" id="programs">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        
        <h2 className="text-[1.8rem] md:text-[2.5rem] text-primary text-center font-bold mb-12 md:mb-8">
          Our Core Programs
        </h2>
        <p className="text-center text-[#666] max-w-[600px] mx-auto -mt-8 md:-mt-4 mb-12 text-[1.1rem]">
          We focus on holistic development through targeted initiatives designed to
          address the specific needs of rural communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <div key={index} className="bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group overflow-hidden">
              <div className="h-[200px] overflow-hidden">
                <img 
                  src={prog.img} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="p-6 flex-grow flex flex-col items-start">
                <h3 className="text-primary text-[1.5rem] font-bold mb-4">{prog.title}</h3>
                <p className="text-[#666] text-base mb-6 flex-grow">{prog.desc}</p>
                <Button 
                  component={Link}
                  to="/programs"
                  variant="outlined" 
                  sx={{ 
                    borderRadius: '30px', 
                    px: '24px', 
                    py: '8px',
                    color: '#2e7d32',
                    borderColor: '#2e7d32',
                    borderWidth: '2px',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#2e7d32',
                      color: 'white',
                      borderColor: '#2e7d32',
                      borderWidth: '2px',
                    }
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;

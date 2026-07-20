import { Button } from '@mui/material';

import { useState } from "react";
import {
  CheckCircle,
  School,
  BookOpen,
  Microscope,
  Book,
  Sun,
  GraduationCap,
} from "lucide-react";
import DonateModal from "../components/DonateModal";

const ProgramCard = ({
  title,
  description,
  items,
  image,
  icon: Icon,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
  <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

    {/* Image */}
    <div className="relative overflow-hidden">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Icon + Title */}
      <div className="absolute bottom-5 left-5 flex items-center gap-3">

        <div className="bg-green-600 text-white p-3 rounded-full shadow-xl">
          <Icon size={24} />
        </div>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

      </div>

    </div>

    {/* Green Line */}
    <div className="h-1 bg-gradient-to-r from-green-500 to-green-700"></div>

    {/* Content */}
    <div className="p-7">

      <p className="text-gray-600 leading-7">
        {expanded
          ? description
          : description.substring(0, 110) + "..."}
      </p>

      {/* Bullet Points */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          expanded ? "max-h-[500px] mt-6" : "max-h-[120px] mt-6"
        }`}
      >
        {(expanded ? items : items.slice(0, 2)).map((item, index) => (
          <div key={index} className="flex items-start gap-3 mb-3">

            <CheckCircle
              size={18}
              className="text-green-600 mt-1 flex-shrink-0"
            />

            <p className="text-gray-700">
              {item}
            </p>

          </div>
        ))}
      </div>

      {/* Read More */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
      >
        {expanded ? "Show Less ↑" : "Read More →"}
      </button>

    </div>

  </div>
);};

const ProgramsPage = () => {
  const [donateOpen, setDonateOpen] = useState(false);
  const programs = [
        {
      title: "Balewadi Pre-schools",
      icon: School,
      image: "/assets/images/primary-school.jpg",
      description:
        "Providing pre-primary education to children in rural areas, focusing on holistic development and school readiness.",
      items: [
        "Provides early childhood education for ages 3–6.",
        "Builds discipline, habits, and social skills.",
        "Includes games, recitation and creative activities.",
        "Introduces reading, writing and arithmetic.",
        "Ensures nursery education for underserved communities.",
      ],
    },
    {
      title: "Teacher Training Course",
      icon: GraduationCap,
      image: "/assets/images/teacher-training.jpg",
      description:
        "Empowering local women to become educators and improve the quality of rural education.",
      items: [
        "Structured 6-month teacher training.",
        "Child psychology, health and nutrition.",
        "Creative teaching methods.",
        "Confidence and leadership development.",
        "Career opportunities in education.",
      ],
    },
    {
      title: "Leap Learning Enhancement",
      icon: BookOpen,
      image: "/assets/images/leap-learning.jpg",
      description:
        "Technology-enabled learning to strengthen reading, writing and overall academic performance.",
      items: [
        "Daily enrichment sessions.",
        "Improves reading and writing skills.",
        "Drawing, theatre and poetry.",
        "Environmental awareness projects.",
        "Boosts confidence and learning interest.",
      ],
    },
    {
      title: "Science Exhibition & Labs",
      icon: Microscope,
      image: "/assets/images/science-expo.jpg",
      description:
        "Hands-on science learning through experiments, innovation and practical activities.",
      items: [
        "Science experiments for schools.",
        "Observation-based learning.",
        "Science kits for classrooms.",
        "Science Day exhibitions.",
        "Support from QUEST & IUCAA.",
      ],
    },
    {
      title: "Library Programmes",
      icon: Book,
      image: "/assets/images/library.jpg",
      description:
        "Encouraging reading habits through community libraries and mobile book initiatives.",
      items: [
        "Thousands of books distributed.",
        "Village library access.",
        "Storytelling and reading sessions.",
        "Doorstep library service.",
        "Community reading programmes.",
      ],
    },
    {
      title: "Summer & Winter Camps",
      icon: Sun,
      image: "/assets/images/summer-camp.jpg",
      description:
        "Creative camps that help children explore art, culture and teamwork during vacations.",
      items: [
        "3–5 day residential camps.",
        "Pottery, puppetry and folk arts.",
        "Learning with children from other villages.",
        "Community participation.",
        "Nature and bird watching activities.",
      ],
    },
  ];

  
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <div
        className="relative h-[50vh] md:h-[65vh] flex items-center justify-center text-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/our programme bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        
        <div className="relative text-center px-4 md:px-6 max-w-[900px] z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-center">
            Our Programs
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-[850px] mx-auto px-2">
            Comprehensive initiatives designed to address the multifaceted challenges faced
            by rural communities across Maharashtra.
          </p>
        </div>
      </div>

      {/* PROGRAMS LIST */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            
            <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-6 inline-block border-b-4 border-green-600 pb-2">Empowering Through Action</h2>
            <p className="text-gray-600 text-lg max-w-[800px] mx-auto">
              Our diverse range of programs focuses on early childhood education, teacher empowerment, and community engagement to ensure sustainable rural development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

    {programs.map((prog,index)=>(
        <ProgramCard
            key={index}
            {...prog}
        />
    ))}

</div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

        <div className="relative max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Make an Impact?
          </h2>

          <p className="text-lg md:text-xl text-green-100 mb-12 max-w-[700px] mx-auto leading-relaxed">
            Your support can transform lives. Join us in our mission to bring quality education 
            and empowerment to the heart of rural Maharashtra.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => setDonateOpen(true)}
              className="bg-white text-green-800 px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-gray-100 hover:scale-105 transition duration-300 text-lg"
            >
              Donate Now
            </button>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScIu571TRGETKdjeBrrWgN9CRWTgV3mr681GiFTdg5jTvw3sA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-green-800 transition duration-300 inline-block text-center text-lg"
            >
              Get Involved
            </a>
          </div>
        </div>
        <DonateModal open={donateOpen} handleClose={() => setDonateOpen(false)} />
      </section>
    </div>
  );
};

export default ProgramsPage;


import { Link } from 'react-router-dom';

const images = [
  {
    src: "/assets/images/img1.png",
    alt: "Rural community empowerment",
    text: "Empowering rural women through education & community support."
  },
  {
    src: "/assets/images/img2.png",
    alt: "Women skill development",
    text: "Skill development programs enabling self-reliance."
  },
  {
    src: "/assets/images/img3.png",
    alt: "Education and child welfare",
    text: "Child welfare and education initiatives in rural areas."
  },
  {
    src: "/assets/images/img4.png",
    alt: "Community development programs",
    text: "Strengthening villages through grassroots programs."
  }
];

const LeadingNGOSection = () => {
  return (<section className="py-16 bg-white" id="about-ngo"> <div className="max-w-6xl mx-auto px-6">


    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch min-h-[500px] md:min-h-[550px]">

      {/* LEFT — IMAGE GRID */}
      <div className="grid grid-cols-2 gap-4 h-full">

        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer h-full"
          >

            {/* IMAGE */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* HOVER CURTAIN */}
            <div className="absolute inset-0 flex items-end opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-500 origin-bottom">

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

              {/* TEXT */}
              <p className="relative text-white text-sm md:text-base font-semibold p-4 leading-snug translate-y-6 group-hover:translate-y-0 transition duration-500">
                {img.text}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* RIGHT — TEXT */}
      <div className="max-w-xl h-full flex flex-col justify-center">

        <h2 className="text-3xl md:text-4xl lg:text-[2.7rem] font-bold text-indigo-900 leading-[1.2]">
          Leading NGO in India for <br />
          Rural Development, Women Empowerment & <br />
          Skill Development
        </h2>

        <div className="w-full h-[3px] bg-green-500 mt-6 mb-6"></div>

        <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">

          <p>
            For over two decades, Vanasthali has been empowering rural communities through rural development initiatives, women and child welfare, and skill development programs. Our mission is to foster self-reliance, dignity, and sustainable growth among women, children, and families across India.
          </p>

          <p>
            Through grassroots initiatives and community-driven programs, Vanasthali continues to create lasting impact by empowering women, nurturing children, and strengthening rural livelihoods.
          </p>

          <p>
            Learn more about how Vanasthali is driving positive change across{' '}
            <Link to="/programs" className="text-indigo-600 underline hover:text-indigo-800 font-medium">
              rural development
            </Link>,{' '}
            <Link to="/programs" className="text-indigo-600 underline hover:text-indigo-800 font-medium">
              women empowerment
            </Link>,{' '}
            <Link to="/programs" className="text-indigo-600 underline hover:text-indigo-800 font-medium">
              education & skill development
            </Link>,{' '}
            <Link to="/programs" className="text-indigo-600 underline hover:text-indigo-800 font-medium">
              healthcare & nutrition
            </Link>, and{' '}
            <Link to="/programs" className="text-indigo-600 underline hover:text-indigo-800 font-medium">
              sustainable livelihoods
            </Link>{' '}
            in India.
          </p>

        </div>

      </div>

    </div>
  </div>
  </section>


  );
};

export default LeadingNGOSection;

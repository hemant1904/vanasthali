const Timeline = () => {
  return (
    <section className="bg-beige py-12 md:py-20">
      <div className="container max-w-[1200px] mx-auto px-8">
        <h2 className="text-[1.8rem] md:text-[2.5rem] text-primary text-center font-bold mb-12 md:mb-8">
          Our Journey of Impact
        </h2>
        <p className="text-center text-[#666] max-w-[600px] mx-auto -mt-8 md:-mt-4 mb-12 text-[1.1rem]">
          Tracing the inspiring journey of 45 years of Vanasthali, from its humble
          beginnings to becoming a beacon of change for rural empowerment.
        </p>

        <div className="relative max-w-[800px] mx-auto after:content-[''] after:absolute after:w-[4px] after:bg-primary after:top-0 after:bottom-0 after:left-[31px] md:after:left-1/2 after:-ml-[2px] after:rounded-[2px]">

          {/* Left Item */}
          <div className="relative w-full md:w-1/2 pl-[70px] pr-[25px] md:pl-[40px] md:pr-[40px] py-[10px] left-0 after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-white after:border-4 after:border-primary after:top-[15px] after:rounded-full after:z-[1] after:left-[21px] md:after:-right-[10px] md:after:left-auto">
            <div className="p-5 md:p-8 bg-white relative rounded-[12px] shadow-sm">
              <h3 className="text-primary text-[1.5rem] md:text-[1.8rem] font-bold mb-2">1981</h3>
              <p><strong>Foundation:</strong> VRDC was established with a small office run within Nirmalatai's home on December 21, 1981 in Pune</p>
            </div>
          </div>

          {/* Right Item */}
          <div className="relative w-full md:w-1/2 pl-[70px] pr-[25px] md:pl-[40px] md:pr-[40px] py-[10px] left-0 md:left-1/2 after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-white after:border-4 after:border-primary after:top-[15px] after:rounded-full after:z-[1] after:left-[21px] md:after:-left-[10px]">
            <div className="p-5 md:p-8 bg-white relative rounded-[12px] shadow-sm">
              <h3 className="text-primary text-[1.5rem] md:text-[1.8rem] font-bold mb-2">1996</h3>
              <p><strong>Expanding into Primary Education: </strong> Responding to local demand, VRDC established the Jejuri Primary School, expanding beyond pre-primary education to offer semi-English curriculum and computer training. </p>
            </div>
          </div>

          {/* Left Item */}
          <div className="relative w-full md:w-1/2 pl-[70px] pr-[25px] md:pl-[40px] md:pr-[40px] py-[10px] left-0 after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-white after:border-4 after:border-primary after:top-[15px] after:rounded-full after:z-[1] after:left-[21px] md:after:-right-[10px] md:after:left-auto">
            <div className="p-5 md:p-8 bg-white relative rounded-[12px] shadow-sm">
              <h3 className="text-primary text-[1.5rem] md:text-[1.8rem] font-bold mb-2">2021</h3>
              <p><strong>Formalizing Women Empowerment: </strong> VRDC launched Gruhaudyogini, a dedicated initiative providing financial support and interest-free loans to women, enabling them to start their own household businessesno.</p>
            </div>
          </div>

          {/* Right Item */}
          <div className="relative w-full md:w-1/2 pl-[70px] pr-[25px] md:pl-[40px] md:pr-[40px] py-[10px] left-0 md:left-1/2 after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-white after:border-4 after:border-primary after:top-[15px] after:rounded-full after:z-[1] after:left-[21px] md:after:-left-[10px]">
            <div className="p-5 md:p-8 bg-white relative rounded-[12px] shadow-sm">
              <h3 className="text-primary text-[1.5rem] md:text-[1.8rem] font-bold mb-2">2026</h3>
              <p><strong>Growth Milestone:</strong> VRDC's work is now spread across 9 districts of Maharasthra including about 26 talukas and about 100 villages</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;

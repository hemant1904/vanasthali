const Testimonial = () => {
  return (
    <section className="py-12 md:py-20" id="testimonial">
      <div className="container max-w-[1200px] mx-auto px-8">
        
        <div className="max-w-[800px] mx-auto bg-white p-8 md:p-12 rounded-[12px] shadow-md text-center relative">
          <i className="fas fa-quote-left text-[3rem] md:text-[4rem] text-secondary absolute top-4 left-4 md:top-8 md:left-8 z-0"></i>
          
          <p className="text-[1.1rem] md:text-[1.2rem] italic mb-8 relative z-10 text-[#333]">
            "Before joining the Vanasthali skill training program, I struggled to make
            ends meet. Today, I run my own tailoring shop and employ three other women from my village. They
            didn't just teach me a skill; they gave me my dignity back."
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
              alt="Testimonial Author" 
              className="w-[80px] h-[80px] rounded-full object-cover border-3 border-primary"
            />
            <div>
              <h4 className="font-bold text-[1.1rem] mb-1 text-[#333]">Sunita Devi</h4>
              <span className="text-[#666] text-[0.9rem]">Beneficiary, Livelihood Program</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;

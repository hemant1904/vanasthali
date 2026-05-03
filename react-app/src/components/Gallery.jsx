const Gallery = () => {
  return (
    <section className="bg-beige py-12 md:py-20">
      <div className="container max-w-[1200px] mx-auto px-8">
        
        <h2 className="text-[1.8rem] md:text-[2.5rem] text-primary text-center font-bold mb-12 md:mb-8">
          Glimpses of Hope
        </h2>
        <p className="text-center text-[#666] max-w-[600px] mx-auto -mt-8 md:-mt-4 mb-12 text-[1.1rem]">
          Moments captured from our fields, classrooms, and community centers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-dense">
          
          <div className="rounded-[12px] overflow-hidden row-span-1 md:row-span-2 col-span-1 sm:col-span-1">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="rounded-[12px] overflow-hidden row-span-1 col-span-1 sm:col-span-1">
            <img src="https://images.unsplash.com/photo-1593113560645-3b02e737bcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="rounded-[12px] overflow-hidden row-span-1 col-span-1 sm:col-span-2">
            <img src="https://images.unsplash.com/photo-1603831828355-6627c2eb0393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="rounded-[12px] overflow-hidden row-span-1 col-span-1 sm:col-span-1">
            <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="rounded-[12px] overflow-hidden row-span-1 md:row-span-2 col-span-1 sm:col-span-1">
            <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="rounded-[12px] overflow-hidden row-span-1 col-span-1 sm:col-span-1">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 6" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Gallery;

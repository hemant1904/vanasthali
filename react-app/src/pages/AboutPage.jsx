import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Eye, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <div className="pt-32 pb-16 bg-beige text-center">
        <div className="container max-w-[1200px] mx-auto px-8">
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-bold mb-4">About Vanasthali</h1>
          <p className="text-center text-[#666] max-w-[600px] mx-auto text-[1.1rem]">
            Dedicated to creating sustainable change at the grassroots level.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container max-w-[1200px] mx-auto px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            <div>
              <h2 className="text-[1.8rem] md:text-[2.5rem] text-primary text-left font-bold mb-6">
                Our Story
              </h2>
              <p className="text-[#666] mb-4 text-base leading-[1.6]">
                Vanasthali Rural Development Centre was born out of a simple observation: when you empower a
                woman, you empower an entire community. Back in 1998, we started with just a handful of
                passionate volunteers going village to village, setting up makeshift classrooms under trees.
              </p>
              <p className="text-[#666] mb-4 text-base leading-[1.6]">
                Over the decades, we have evolved into a comprehensive development organization, but our core
                philosophy remains unchanged. We believe in participatory development—where the community is not
                just a beneficiary but an active stakeholder in their own progress.
              </p>
              <p className="text-[#666] text-base leading-[1.6]">
                Today, our network spans across hundreds of villages, bringing together educators, healthcare
                professionals, and social workers united by a single vision: equity and opportunity for all.
              </p>
            </div>
            <div className="rounded-[12px] overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1593113560645-3b02e737bcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Community" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <Card className="text-center border-none shadow-sm p-8 bg-white hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-[1.5rem] font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#666]">
                  A society where rural communities, especially women and children, have equal access to resources,
                  education, and opportunities to lead lives of dignity and self-reliance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-sm p-8 bg-white hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-[1.5rem] font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#666]">
                  To facilitate holistic rural development through scalable programs in education, livelihood,
                  health, and women's empowerment, fostering local leadership and sustainable practices.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutPage;

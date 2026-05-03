import { Button } from '@mui/material';
import { CheckCircle } from 'lucide-react';

const ProgramsPage = () => {
  return (
    <>
      <div className="pt-32 pb-16 bg-beige text-center">
        <div className="container max-w-[1200px] mx-auto px-8">
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-bold mb-4">Our Programs</h1>
          <p className="text-center text-[#666] max-w-[600px] mx-auto text-[1.1rem]">
            Comprehensive initiatives designed to address the multifaceted challenges faced
            by rural communities.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container max-w-[1200px] mx-auto px-8">
          
          {/* Detail Card 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
            <div className="rounded-[12px] overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dc8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Skill Training" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-[2rem] text-primary font-bold mb-4">Skill Training & Vocational Courses</h3>
              <p className="text-[#666] mb-6">
                Our skill training programs are tailored to the local economy and market demands. We believe that
                equipping women with marketable skills is the first step towards financial independence.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>6-month intensive tailoring and embroidery courses.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Basic computer literacy and data entry training.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Handicraft production utilizing local materials.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Marketing and sales workshops to help sell products.</span></li>
              </ul>
            </div>
          </div>

          {/* Detail Card 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 dir-rtl lg:[direction:rtl]">
            <div className="rounded-[12px] overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Teacher Training" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="lg:[direction:ltr]">
              <h3 className="text-[2rem] text-primary font-bold mb-4">Teacher Training & Capacity Building</h3>
              <p className="text-[#666] mb-6">
                A community is only as strong as its educators. We empower local women with minimum educational
                qualifications to become effective teachers in pre-primary and primary schools.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Pedagogical training focusing on interactive learning.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Child psychology and inclusive education methods.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Development of low-cost teaching aids.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Continuous mentorship and classroom observation.</span></li>
              </ul>
            </div>
          </div>

          {/* Detail Card 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="rounded-[12px] overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Livelihood Support" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-[2rem] text-primary font-bold mb-4">Sustainable Livelihood Support</h3>
              <p className="text-[#666] mb-6">
                Beyond training, we provide the necessary support to turn skills into sustainable livelihoods
                through micro-finance and cooperative formation.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Formation and support of Self-Help Groups (SHGs).</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Facilitating access to micro-credit and loans.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Establishing market linkages for artisan products.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Agricultural training for improved crop yields.</span></li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section for Programs */}
      <section className="bg-primary text-white text-center py-24 px-4">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-[1.8rem] md:text-[2.5rem] text-white font-bold mb-4 text-center">
            Support A Program
          </h2>
          <p className="text-[1.2rem] mb-8 opacity-90 max-w-[800px] mx-auto">
            Your contribution can directly fund a woman's training or a child's education.
          </p>
          <div className="flex justify-center px-8 sm:px-0">
            <Button 
              variant="outlined" 
              sx={{ 
                borderRadius: '30px', 
                px: '32px', 
                py: '16px', 
                fontSize: '1.1rem', 
                fontWeight: 600,
                color: 'white',
                borderColor: 'white',
                borderWidth: '2px',
                textTransform: 'none',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#2e7d32',
                  borderColor: 'white',
                  borderWidth: '2px',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Donate to Programs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;

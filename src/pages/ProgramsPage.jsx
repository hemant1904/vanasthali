import { Button } from '@mui/material';
import { CheckCircle } from 'lucide-react';

const ProgramsPage = () => {
  return (
    <>
      <div
        className="pt-40 pb-24 text-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/our programme bg.jpg')"
        }}
      >
        <div className="container max-w-[1200px] mx-auto px-8 relative z-10">
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-bold mb-4 text-white">Our Programs</h1>
          <p className="text-center text-gray-100 max-w-[600px] mx-auto text-[1.2rem] font-medium">
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
                src="/assets/images/primary-school.jpg"
                alt="Balewadi Pre-schools"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-[2rem] text-primary font-bold mb-4">Balewadi Pre-schools</h3>
              <p className="text-[#666] mb-6">
                Providing pre-primary education to children in rural areas, focusing on holistic development and school readiness.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Provides early childhood education for ages 3–6.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Builds discipline, habits, and social skills based on child psychology.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Includes games, recitation, and creative activities for development.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Introduces basic reading, writing, and arithmetic.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Ensures nursery education access for underserved rural communities.</span></li>
              </ul>
            </div>
          </div>

          {/* Detail Card 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 dir-rtl lg:[direction:rtl]">
            <div className="rounded-[12px] overflow-hidden shadow-md">
              <img
                src=" /assets/images/teacher-training.jpg"
                alt="Teacher Training Course"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="lg:[direction:ltr]">
              <h3 className="text-[2rem] text-primary font-bold mb-4">Teacher Training Course</h3>
              <p className="text-[#666] mb-6">
                Empowering local women to become educators, improving the quality of primary education in rural schools.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span> Structured 6-month programme to become educators and leaders.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Covers child psychology, health, nutrition & social welfare.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Training in teaching methods, learning aids, songs, stories, and games.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Builds confidence with social recognition and economic independence.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Prepares graduates for roles in educational institutions.</span></li>
              </ul>
            </div>
          </div>

          {/* Detail Card 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="rounded-[12px] overflow-hidden shadow-md">
              <img
                src="/assets/images/leap-learning.jpg"
                alt="Leap Learning Enhancement"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-[2rem] text-primary font-bold mb-4">Leap Learning Enhancement</h3>
              <p className="text-[#666] mb-6">
                Leveraging technology to bridge educational gaps and provide personalized learning experiences to students in rural areas.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Provides daily enrichment sessions for children aged 6–12 in schools.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Strengthens reading and writing skills for those lagging in education.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Encourages creativity through drawing, painting, theatre, and poetry.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Promotes environmental sensitivity through waste-based projects.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Builds confidence and interest in studies through engaging experiences.</span></li>
              </ul>
            </div>
          </div>

          {/* Detail Card 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 dir-rtl lg:[direction:rtl]">
            <div className="rounded-[12px] overflow-hidden shadow-md">
              <img
                src=" /assets/images/science-expo.jpg"
                alt="Science Exhibition and Laboratories"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="lg:[direction:ltr]">
              <h3 className="text-[2rem] text-primary font-bold mb-4">Science Exhibition and Laboratories</h3>
              <p className="text-[#666] mb-6">
                Empowering young minds through hands-on scientific exploration, innovation, and experimentation.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Performing textbook experiments despite limited school facilities.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Encourages observation, exploration, and independent understanding.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Provides “Vidnyan Petya” science kits to support experiments.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Organizes Science Day exhibitions to showcase student projects.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Partners with organizations like QUEST and IUCAA.</span></li>
              </ul>
            </div>
          </div>

          {/* Detail Card 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="rounded-[12px] overflow-hidden shadow-md">
              <img
                src="/assets/images/library.jpg"
                alt="Library Programmes"
                className="w-full h-auto object -cover"
              />
            </div>
            <div>
              <h3 className="text-[2rem] text-primary font-bold mb-4">Library Programmes</h3>
              <p className="text-[#666] mb-6">
                Running evening learning centers and libraries to support school-going children and combat dropout rates.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Distributes 1000s of books across centers for both children & adults.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Delivers books and learning materials to villages lacking libraries.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Promotes reading through storytelling and skits.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Brings books directly to households via a doorstep library initiative.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Strengthens access to information via programs like “Vachanalayas.”</span></li>
              </ul>
            </div>
          </div>

          {/* Detail Card 6 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 dir-rtl lg:[direction:rtl]">
            <div className="rounded-[12px] overflow-hidden shadow-md">
              <img
                src=" /assets/images/summer-camp.jpg"
                alt="Summer and Winter Camps"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="lg:[direction:ltr]">
              <h3 className="text-[2rem] text-primary font-bold mb-4">Summer and Winter Camps</h3>
              <p className="text-[#666] mb-6">
                Organizing camps during vacations to engage children in constructive activities, art, and cultural exploration.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Organizes 3–5 day camps during summers for engaging experiences.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Includes mask making, storytelling, pottery, puppetry, and folk arts.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Brings children from different villages together for shared learning.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Involves locals in supporting camps with materials and snacks.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Offers special sessions like bird watching with expert guidance.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ProgramsPage;

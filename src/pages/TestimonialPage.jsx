import { Quote } from 'lucide-react';
import { useState } from 'react';
import DonateModal from '../components/DonateModal';

const testimonials = [
  {
    name: "Shri Prataprao Pawar",
    role: "Chairman, Sakal Media Group",
    text: "Vanasthali is a beacon of change for rural empowerment. From a small home office to a movement spanning nine districts, its journey reflects vision and dedication. Unlocking the potential of rural women is not just impactful—it is the most practical and sustainable solution to grassroots educational challenges."
  },
  {
    name: "Varsha Sahasrabuddhe",
    role: "Educationist & Nirmal Karya Gaurav Awardee",
    text: "Vanasthali’s work stands as a powerful example of grassroots development driven by quality, access, and inclusion. Its true strength lies in its dedicated teachers who overcome personal challenges to create meaningful change in their communities."
  },
  {
    name: "Tushar Ranjankar",
    role: "Managing Trustee, Vidyarthi Sahayyak Samiti",
    text: "For decades, we have been proud to support Vanasthali’s initiatives by hosting its personality development camps. The commitment and passion demonstrated by the entire team—from field workers to administrative staff—leave a lasting impression on everyone who engages with them."
  },
  {
    name: "Zilla Parishad Primary School Teachers",
    role: "Local Educational Authority",
    text: "Children from Vanasthali Balwadis transition smoothly into formal schooling with strong foundational skills. Their confidence, adaptability, and lower dropout rates clearly reflect the effectiveness of the program."
  },
  {
    name: "Sushama Sathaye",
    role: "Treasurer, VRDC",
    text: "Vanasthali recognized early on the immense potential of rural women as educators and facilitators. With timely institutional support, we have been able to strengthen our teacher training programs, which continue to serve as the backbone of our educational initiatives."
  },
  {
    name: "Léa Arson",
    role: "International Visitor & Observer",
    text: "It is inspiring to witness the enthusiasm of children and the dedication of teachers. Women come together, share experiences, and create a vibrant, supportive community that influences society in meaningful yet respectful ways."
  },
  {
    name: "Kalpana Gunaki",
    role: "Supervisor & Trainer, Somatne Phata",
    text: "I had studied only up to Class 10 when I joined Vanasthali. Through this journey, I not only understood the value of education but went on to complete my M.A. in Sociology. Today, I have the confidence to stand on my own feet—something I owe entirely to this experience."
  },
  {
    name: "Nanda Barbhai",
    role: "Parent & Community Member",
    text: "This program transformed our understanding of education and family life. Having married at a young age, we made a conscious decision to provide a better future for our child. Vanasthali gave us the awareness and guidance to make that change."
  }
];

const TestimonialPage = () => {
  const [donateOpen, setDonateOpen] = useState(false);
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <div
        className="relative h-[50vh] md:h-[70vh] flex items-center justify-center text-white bg-cover bg-[center_25%] bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/testimonail_backgroundimage.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-6 max-w-[900px] z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center">
            Voices from the Community
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-[850px] mx-auto">
            Discover real stories of transformation from individuals and communities whose lives have been positively shaped through our work.
          </p>
        </div>
      </div>

      {/* TESTIMONIALS GRID */}
      <section className="py-20 px-6">
        <div className="container max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 inline-block border-b-4 border-green-600 pb-2">
              What Our Community Shares
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group border-t-4 border-green-700 hover:-translate-y-1"
              >
                {/* Decorative Quote Icon */}
                <Quote className="w-14 h-14 text-green-100/60 absolute top-6 right-6 group-hover:text-green-200 transition-colors duration-300" />

                <p className="text-gray-700 text-[1.1rem] leading-relaxed italic mb-10 relative z-10">
                  "{t.text}"
                </p>

                {/* AUTHOR DETAILS */}
                <div className="flex items-center gap-5 mt-auto border-t border-gray-100 pt-6">
                  <div className="w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm group-hover:bg-green-800 transition-colors">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 text-[1.1rem] tracking-tight">{t.name}</h4>
                    <span className="text-gray-500 text-[0.95rem] font-medium mt-1 block">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-green-800 text-white text-center relative overflow-hidden">
        {/* 🔸 Subtle Background Glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]"></div>

        <div className="relative max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Where Change Becomes a Story
          </h2>

          <p className="text-[1.05rem] md:text-lg text-green-100 mb-8 max-w-[650px] mx-auto leading-relaxed">
            Join us in creating a brighter future for rural children and empowering women
            to lead sustainable change across communities.
          </p>

          {/* 🔸 Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary */}
            <button 
              onClick={() => setDonateOpen(true)}
              className="bg-white text-green-700 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition duration-300"
            >
              Donate Now
            </button>

            {/* Secondary */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScIu571TRGETKdjeBrrWgN9CRWTgV3mr681GiFTdg5jTvw3sA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition duration-300 inline-block text-center"
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

export default TestimonialPage;

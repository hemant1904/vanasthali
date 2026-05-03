import { useEffect, useState } from "react";
import { Card } from "../components/ui/card";
import { Eye, Target, HeartHandshake } from "lucide-react";

const AboutPage = () => {

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [target]);

    return <span>{count.toLocaleString()}+</span>;
  };

  return (
    <div className="bg-white">

      {/* 🔹 HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/assets/images/About_us_Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-6 max-w-[900px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center">
            <span className="block">Empowering Minds.</span>
            <span className="block">Transforming Communities.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-[700px] mx-auto">
            Empowering rural communities through early childhood education and women’s leadership across Maharashtra.
          </p>
        </div>
      </div>

      {/* 🔹 WHO WE ARE */}
      <section className="py-16 px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 inline-block border-b-4 border-green-600 pb-2 mb-6">
              Who We Are: About Vanasthali Rural Development Centre
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed text-[1.1rem]">
              Founded on December 21, 1981, Vanasthali Rural Development Centre (VRDC) is a Pune-based voluntary organization dedicated to grassroots rural development through education. We operate across nine districts of Maharashtra, focusing on rural areas where early educational facilities are often limited or non-existent. Our core purpose is to bridge the critical learning gap for children between infancy and age six, ensuring they are well-prepared for formal schooling and reducing dropout rates.
            </p>

            <p className="text-gray-600 leading-relaxed text-[1.1rem]">
              Our philosophy centers on community-driven change, where transformation begins from within the village itself. We empower semi-literate rural women by training them as professional educators and leaders known as "Balwaditais." These women not only nurture young minds but also become role models within their communities, achieving socio-economic independence. Today, VRDC serves over 150 villages and reaches more than 30,000 children annually, using education as a powerful tool to drive long-term social change.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">

          {/* BOX 1 */}
          <div className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-xl transition duration-300">
            <img
              src="/assets/images/aboutus1.png"
              alt="Children learning"
              className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
          </div>

          {/* BOX 2 */}
          <div className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-xl transition duration-300">
            <img
              src="/assets/images/aboutus2.png"
              alt="Women training"
              className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
          </div>

          {/* BOX 3 */}
          <div className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-xl transition duration-300">
            <img
              src="/assets/images/aboutus3.png"
              alt="Community engagement"
              className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
          </div>

          {/* BOX 4 */}
          <div className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-xl transition duration-300">
            <img
              src="/assets/images/aboutus4.png"
              alt="Impact"
              className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
          </div>

        </div>
      </section>
      {/* 🔹 IMPACT STATS */}
      <section className="py-16 px-6">
        <div className="bg-green-700 text-white rounded-xl max-w-[1200px] mx-auto py-12 px-8 shadow-md">

          <div className="flex flex-wrap md:flex-nowrap justify-between text-center">

            {/* ITEM */}
            {[
              { value: 18000, label: "Women Trained" },
              { value: 30000, label: "Children Reached" },
              { value: 150, label: "Villages" },
              { value: 9, label: "Districts" },
              { value: 42, label: "Years" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center flex-1 basis-1/5 min-w-[160px]"
              >
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  <Counter target={item.value} />
                </h3>
                <p className="text-sm mt-2 opacity-90 whitespace-nowrap">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* 🔹 GEOGRAPHICAL PRESENCE */}
      <section className="py-14 px-6">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* 🔸 MAP */}
          <div className="flex justify-center">
            <img
              src="/assets/images/maharashtra_map.png"
              alt="Vanasthali Presence Map"
              className="w-full max-w-[420px] object-contain rounded-xl shadow-md"
            />
          </div>

          {/* 🔸 TEXT */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 inline-block border-b-4 border-green-600 pb-2">
              Our Reach Across Maharashtra
            </h2>

            <p className="text-gray-700 leading-relaxed text-[1.05rem] mb-4">
              Vanasthali Rural Development Centre has steadily expanded its grassroots presence across
              <span className="font-semibold text-green-700"> 9 districts of Maharashtra</span>,
              reaching some of the most underserved rural communities where access to early education is limited.
            </p>

            <p className="text-gray-700 leading-relaxed text-[1.05rem] mb-4">
              Through a network of trained "Balwaditais" and community-driven initiatives,
              the organization currently serves over
              <span className="font-semibold text-green-700"> 150+ villages</span>,
              ensuring strong early education foundations.
            </p>

            <p className="text-gray-700 leading-relaxed text-[1.05rem]">
              By embedding education within communities, VRDC creates sustainable development that empowers women and nurtures the next generation.
            </p>

          </div>

        </div>
      </section>
      {/* 🔹 FOUNDER'S VISION */}
      <section className="py-12 px-6">
        <div className="bg-green-50 rounded-xl max-w-[1200px] mx-auto px-8 py-12 shadow-sm">

          <div className="grid md:grid-cols-10 gap-10 items-stretch">

            {/* 🔸 TEXT (70%) */}
            <div className="md:col-span-7 flex flex-col justify-center">

              <h2 className="text-3xl md:text-4xl font-bold text-green-700 inline-block border-b-4 border-green-600 pb-2 mb-6">
                The Visionary Behind Vanasthali
              </h2>

              <p className="text-gray-700 leading-relaxed text-[1.1rem] mb-4">
                Nirmala Purandare, fondly called “Tai,” was a noted social activist with over 40 years of experience in rural education. While working with the Students' Welfare Association since 1957, she identified that alarming dropout rates—especially among girls—were caused by a complete absence of pre-primary foundation.
              </p>

              <p className="text-gray-700 leading-relaxed text-[1.1rem] mb-4">
                Driven by her powerful motto, <span className="font-semibold text-green-700">“A Balwadi for every village,”</span> she founded Vanasthali Rural Development Centre in December 1981 with a single workshop for 35 women. Her revolutionary vision addressed two critical challenges—providing early childhood education while empowering semi-literate rural women socially and economically.
              </p>

              <p className="text-gray-700 leading-relaxed text-[1.1rem]">
                Tai strongly believed that an enlightened personality must be nurtured at an early age through child psychology. Even after her passing in 2019, her legacy continues through thousands of "Balwaditais" who carry forward her mission of education, dignity, and empowerment across rural Maharashtra.
              </p>

            </div>

            {/* 🔸 IMAGE + INFO (30%) */}
            <div className="md:col-span-3 flex flex-col items-center justify-center text-center">

              {/* IMAGE FRAME */}
              <div className="w-full max-w-[300px] h-[360px] rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="/assets/images/Founders Photo.png"
                  alt="Founder Nirmala Purandare"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* NAME + TITLE */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-green-700">
                  Nirmala Balwant Purandare
                </h2>
                <p className="text-sm text-gray-600">
                  Founder, Vanasthali Rural Development Centre
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 🔹 BOARD MEMBERS */}
      <section className="py-14 px-6">
        <div className="max-w-[1000px] mx-auto">

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
            Board Members
          </h2>

          {/* CARD CONTAINER */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border">

            {/* HEADER */}
            <div className="grid grid-cols-2 bg-green-700 text-white font-semibold text-lg text-center py-4">
              <div>Name</div>
              <div>Designation</div>
            </div>

            {/* BODY */}
            <div className="divide-y">

              {[
                ["Nirmal Pendharkar", "President"],
                ["Bharati Bhide", "Secretary"],
                ["Sushama Sathaye", "Treasurer"],
                ["Manik Kotwal", "Trustee"],
                ["Meenaxi Pawar", "Trustee"],
                ["Vrunda Gupte", "Trustee"],
                ["Abhay Shah", "Trustee"],
              ].map((member, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 text-center py-4 px-6 
                       text-gray-700 text-[1.05rem]
                       hover:bg-green-50 transition duration-300"
                >
                  <div className="font-medium">{member[0]}</div>
                  <div className="text-gray-600">{member[1]}</div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* 🔹 PARTNERS SECTION */}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 text-center">

          {/* 🔸 HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">
            Our Supporting Partners & Collaborators
          </h2>

          {/* 🔸 LOGO TRACK */}
          <div className="relative overflow-hidden">

            <div className="flex gap-8 animate-scroll whitespace-nowrap">

              {[
                "/assets/images/partner_aboutus1.png",
                "/assets/images/partner_aboutus2.png",
                "/assets/images/partner_aboutus3.png",
                "/assets/images/partner_aboutus4.png",
                "/assets/images/partner_aboutus5.png",
                "/assets/images/partner_aboutus6.png",
                "/assets/images/partner_aboutus7.png",
                "/assets/images/partner_aboutus8.png",
                "/assets/images/partner_aboutus9.png",
                "/assets/images/partner_aboutus10.png",
              ]
                // 🔁 DUPLICATE FOR INFINITE LOOP
                .concat([
                  "/assets/images/partner_aboutus1.png",
                  "/assets/images/partner_aboutus2.png",
                  "/assets/images/partner_aboutus3.png",
                  "/assets/images/partner_aboutus4.png",
                  "/assets/images/partner_aboutus5.png",
                  "/assets/images/partner_aboutus6.png",
                  "/assets/images/partner_aboutus7.png",
                  "/assets/images/partner_aboutus8.png",
                  "/assets/images/partner_aboutus9.png",
                  "/assets/images/partner_aboutus10.png",
                ])
                .map((logo, i) => (
                  <div
                    key={i}
                    className="w-44 h-24 bg-white rounded-xl shadow-md flex items-center justify-center p-4 hover:shadow-lg transition duration-300"
                  >
                    <img
                      src={logo}
                      alt="Partner Logo"
                      className="max-h-full max-w-full object-contain opacity-00 group-hover:opacity-100 transition duration-300" />
                  </div>
                ))}

            </div>
          </div>

        </div>
      </section>
      {/* 🔹 CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-green-800 text-white text-center relative overflow-hidden">

        {/* 🔸 Subtle Background Glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]"></div>

        <div className="relative max-w-[900px] mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Help Us Bring a <span className="text-green-200">Balwadi</span> to Every Village
          </h2>

          <p className="text-[1.05rem] md:text-lg text-green-100 mb-8 max-w-[650px] mx-auto leading-relaxed">
            Join us in creating a brighter future for rural children and empowering women
            to lead sustainable change across communities.
          </p>

          {/* 🔸 Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* Primary */}
            <button className="bg-white text-green-700 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition duration-300">
              Donate Now
            </button>

            {/* Secondary (optional but recommended) */}
            <button className="border border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition duration-300">
              Get Involved
            </button>

          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;
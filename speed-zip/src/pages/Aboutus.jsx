import React from 'react';
import Header from '../Components/Header';
import { Eye, Target, Users, BriefcaseBusiness } from 'lucide-react';
import Footer from '../Components/footer';


const Aboutus = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F4F7FA]  flex flex-col items-center justify-center pt-10  md:px-10 w-full">
        <div className="bg-[#FFFFFF] px-20 md:p-10 rounded-xl w-full max-w-6xl">
          <h2 className="text-2xl md:text-3xl text-center font-bold text-green-900 mb-6">
            Our Architectural Philosophy
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
            At Speed House Eng. Consultant, we understand that architecture is more than just constructing buildings — it's about creating meaningful experiences that inspire and endure. Every structure we design reflects a deep commitment to innovation, quality, and contextual relevance.

.
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
             Our approach is guided by a holistic vision that seamlessly blends aesthetics, functionality, technology, and sustainability. We believe great design is not only visually compelling but also intuitive, efficient, and environmentally responsible.


            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
             From the initial concept through to the final handover, our team works in close collaboration with clients, consultants, and key stakeholders to ensure that each project reflects a shared vision brought to life with precision, care, and creativity. Our processes are transparent, adaptive, and rooted in a deep understanding of both user needs and spatial dynamics.




            </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 py-12 gap-10 bg-[#F4F7FA]  ">
        <div className="w-full md:w-1/2 h-80 text-center md:text-left bg-[#FFFFFF] p-8 rounded-xl shadow-lg">
          <Eye size={50} className="mx-auto md:mx-0 mb-4 text-green-800" />
          <h3 className="text-2xl font-bold mb-4 text-green-800">Our Vision</h3>
          <p className="text-gray-700">
            At Speed House Engineering Consultant LLC, our vision is to be a leading force in delivering innovative,
            sustainable, and transformative engineering solutions across Dubai and beyond. We are driven by expertise,
            guided by passion, and committed to excellence in every project we undertake.
          </p>
        </div>

        <div className="w-full md:w-1/2 h-80 text-center md:text-left bg-[#FFFFFF] p-8 rounded-xl shadow-lg">
          <Target size={50} className="mx-auto md:mx-0 mb-4 text-blue-800" />
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to establish Speed House Engineering Consultant LLC as a benchmark for excellence
            in engineering consultancy by consistently delivering innovative, sustainable, and high-quality
            solutions. We aim to expand our footprint across the UAE and internationally, build long-term
            client partnerships, and contribute meaningfully to the region’s architectural and infrastructural development.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-[#F0F7F4]">
        <div className="max-w-6xl mx-auto px-6 bg-[#FFFFFF] p-20 rounded-xl shadow-md">
        <h2 className="text-3xl text-center font-bold text-[#2563EB] mb-10">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { name: "Name", title: "Managing Director", img: "./famale.png" },
            { name: "Name", title: "Senior Architect", img: "./man-icon.png" },
            { name: "Name", title: "Project Manager", img: "./man-icon.png" }
          ].map((member, index) => (
            <div key={index} className="bg-[#F0F7F4] p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover mb-4" />
              <h4 className="text-xl font-semibold text-center">{member.name}</h4>
              <p className="text-center text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-16 bg-[#F4F7FA]">
        <div className="max-w-6xl mx-auto px-6 bg-[#FFFFFF] p-10 rounded-xl shadow-md">
        <div className="max-w-5xl mx-auto text-center px-6">
          <BriefcaseBusiness size={50} className="mx-auto mb-4 text-indigo-700" />
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Our Experience</h2>
          <p className="text-gray-700 text-lg">
            With over a decade of experience, Speed House Engineering Consultant LLC has successfully delivered more than 250 projects,
            ranging from luxury villas to large-scale commercial buildings and industrial parks. Our team brings technical excellence,
            deep market understanding, and unmatched creativity to each project.
          </p>
        </div>
        </div>
      </section>

      {/* Authority Approvals Section */}
      <section className="py-16 bg-[#F4F7FA]">
        <div
          className='max-w-6xl mx-auto px-6 bg-[#FFFFFF] p-10 rounded-xl shadow-md overflow-x-auto max-w-6xl mx-auto px-6 bg-[#FFFFFF]  rounded-xl shadow-md'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
        <h2 className='text-3xl text-center font-bold text-[#1E3A8A] mb-10'>Authority Approvals</h2>
          <div className='flex flex-wrap justify-center items-center gap-6'>
            {[
              './dubai.png',
              './trakhees_logo.png',
              './rta.png',
              './Nakheel.png',
              './Dwc.png',
              './Emaar.jpg',
              './TECOM.png',
              './dubaisilicon.png',
              './dewa.jpg',
              './du.png'
            ].map((src, index) => (
              <img key={index} src={src} alt='Authority Logo' className='w-32 h-auto object-contain transition-transform hover:scale-105 duration-300' />
            ))}
          </div> 
         </div> 
      </section>

      <Footer />
    </>
  );
};

export default Aboutus;

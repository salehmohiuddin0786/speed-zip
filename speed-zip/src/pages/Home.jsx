import React from 'react';
import bg from '../assets/bg.jpg';
import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <section className="bg-white/10 backdrop-blur-md text-center p-6 rounded-lg max-w-xl mx-4 shadow-lg">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Design is LIVE!</h1>
  <p className="text-lg md:text-xl font-semibold text-gray-800">
    Contact us to discover how Design can support your business 🚀
  </p>
  <Link
    to="/contact"
    className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
  >
    Get Started
  </Link>
</section>

        
      </div>

      {/* Introduction Section */}
      <div className="bg-[#F4F7FA]  flex flex-col items-center justify-center pt-10  md:px-10 w-full">
        <div className="bg-[#FFFFFF] px-20 md:p-10 rounded-xl w-full max-w-6xl">
          <h2 className="text-2xl md:text-3xl text-center font-bold text-green-900 mb-6">
            Speed House Engineering Consultant
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
            Welcome to Speed House Engineering Consultant L.L.C., a leading architectural design firm proudly based in
             Dubai, UAE. Since our inception, we have been dedicated to shaping the future of the built environment by
              delivering innovative, sustainable, and client-focused design solutions. Our passion lies in creating
             spaces that not only serve a purpose but also evoke inspiration, beauty, and a strong connection to their
            surroundings.
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
              At Speed House Eng. Consultant, we understand that architecture is more than just constructing 
              buildings — it's about creating experiences. Each project is approached with a holistic vision
               that integrates aesthetics, functionality, technology, and sustainability. From initial concept
                through to completion, we work closely with clients, consultants, and stakeholders to bring 
                visionary ideas to life with precision and purpose.
            </p>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="bg-[#F4F7FA] pt-10 py-16 px-6 md:px-10 w-full">
        <div className='max-w-6xl mx-auto text-center bg-[#FFFFFF] p-7 rounded-xl shadow-md'>
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Al Quoz First', image: './FirstProject.jpg' },
            { title: 'Oud Al Muteena Villa', image: './villa.jpg' },
            { title: 'Dubai Investment Park', image: './Interior.jpg' },
          ].map((project, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#F4F7FA] py- pb-14   px-6 md:px-">
        <div className='max-w-6xl mx-auto text-center bg-[#FFFFFF] pt-10 p-10 rounded-xl shadow-md'>
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Why Choose Us</h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
        <div className="max-w-4xl mx-auto text-left text-lg text-gray-700 space-y-5">
          <p>✅ Trusted by hundreds of clients across Dubai</p>
          <p>✅ Creative and sustainable design philosophy</p>
          <p>✅ Professional team with years of experience</p>
          <p>✅ On-time delivery and detailed project management</p>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;

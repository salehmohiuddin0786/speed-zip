import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';
import bg from '../assets/bg.avif';

const Service = () => {
  return (
    <>
      {/* Background Wrapper with Header */}
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />

        {/* Vision & Mission Section */}
        <section className="bg-[#F4F7FA]/90 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-12">Our Vision & Mission</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 text-lg">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Our Vision</h3>
              <p>
                To be the leading provider of innovative, sustainable, and inspiring engineering solutions in Dubai and beyond, delivering exceptional results through our expertise, passion, and commitment to excellence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Our Mission</h3>
              <p>
                To provide innovative, sustainable, and functional engineering solutions through expert design, project management, and construction supervision—while exceeding client expectations on safety, quality, and timely delivery.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="bg-[#F4F7FA] py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Architectural Design','Interior Design','Landscape Architecture','Commercial Projects','Villa Design','Sustainable Solutions',
            ].map((service, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-blue-50 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
              </div>
            ))}
          </div>
          </div>
        </section>
      </div>

      {/* Project Categories */}
      <section className="bg-[#F4F7FA] py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">Project Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-800 max-w-7xl mx-auto">
          {[
            {
              title: 'Architecture',
              img: './Architecture.jpg',
              desc: `By blending artistry, technology, and unrivalled services, we deliver end-to-end solutions with exceptional design across all architectural scales.`,
            },
            {
              title: 'Interior Design',
              img: './Interiord.jpg',
              desc: `We curate eye-catching interiors through custom furniture, art direction, and material selection, balancing beauty and utility.`,
            },
            {
              title: 'Commercial',
              img: './Commercial.jpg',
              desc: `We deliver elegant and functional commercial spaces tailored to client goals and local regulations.`,
            },
            {
              title: 'Residential',
              img: './Residential.avif',
              desc: `Our designs combine aesthetic appeal and Vastu principles to create ideal homes with zero space wastage.`,
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-5 text-center">
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <img src={item.img} className="rounded-xl p-2 mx-auto h-40 object-cover" alt={item.title} />
              <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

     

      <Footer />
    </>
  );
};

export default Service;

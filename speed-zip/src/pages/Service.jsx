import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';
import bg from '../assets/bg.avif';

// Service Images
import service1 from '../assets/img1.jpg';
import service2 from '../assets/Interior.jpg';
import service3 from '../assets/3.jpg';
import service4 from '../assets/4.jpg';
import service5 from '../assets/bg.jpg';
import service6 from '../assets/hero.jpg';

// Expertise Images
import architectureImg from '../assets/img1.jpg';
import interiorImg from '../assets/2.jpg';
import commercialImg from '../assets/3.jpg';
import residentialImg from '../assets/4.jpg';

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      title: 'Architectural Design',
      img: service1,
      desc: 'We craft innovative architectural concepts with a focus on function, form, and future-ready designs At Speed House Eng. Consultant, our architectural design approach balances innovation, functionality, and aesthetics to craft inspiring spaces that stand the test of time. We don’t just design structures — we shape environments that reflect identity, purpose, and vision Every project begins with a deep understanding of the client’s needs, context, and goals. From conceptual sketches to detailed blueprints, our team leverages advanced tools, sustainable principles, and regional insights to deliver designs that are future-ready, efficient, and visually compelling.',

    },
    {
      title: 'Interior Design',
      img: service2,
      desc: 'Our team designs interiors that reflect personality, purpose, and modern aesthetics At Speed House Eng. Consultant, our interior design philosophy centers on elevating everyday spaces into environments that inspire, comfort, and reflect personal or brand identity. We believe interiors should not only look beautiful — they should feel purposeful and intuitive.From concept to execution, we craft interiors that balance form, function, and emotion. Our team curates custom furniture, selects harmonious color palettes and textures, and integrates lighting and materials to create atmospheres that resonate with the people who live or work in them.Whether it’s a residential retreat, a commercial space, or a hospitality venue, our designs are tailored to enhance user experience while adhering to the highest standards of quality and sustainability.',
    },
    {
      title: 'Landscape Architecture',
      img: service3,
      desc: 'We design outdoor spaces that harmonize nature, beauty, and built structures At Speed House Eng. Consultant, our landscape architecture services transform outdoor spaces into harmonious extensions of the built environment. We believe that landscapes should not only enhance the aesthetic appeal of a property but also promote sustainability, biodiversity, and community well-being.Our approach integrates natural elements with architectural features to create cohesive, functional, and visually stunning outdoor areas. From residential gardens to urban parks and commercial landscapes, we design spaces that invite interaction, foster relaxation, and celebrate the beauty of nature while respecting the local ecosystem.Our team collaborates closely with clients to understand their vision and needs, ensuring that each landscape design is not only beautiful but also practical and sustainable. We utilize native plants, innovative irrigation systems, and environmentally friendly materials to create landscapes that thrive in harmony with their surroundings and require minimal maintenance.',
    },
    {
      title: 'Commercial Projects',
      img: service2,
      desc: 'We create efficient and appealing commercial spaces aligned with business goals At Speed House Eng. Consultant, our commercial design services focus on creating spaces that are not only functional and efficient but also visually appealing and aligned with the client’s a perfect balance between the two.Our team works closely with clients to understand their specific requirements, brand identity, and target audience. From office buildings and retail outlets to hospitality venues and mixed-use developments, we design commercial spaces that enhance productivity, foster collaboration, and create memorable experiences for users.Our designs incorporate innovative layouts, sustainable materials, and cutting-edge technologies to ensure that each project is not only aesthetically pleasing but also energy-efficient and future-ready  ',
    },
    {
      title: 'Villa Design',
      img: service5,
      desc: 'At Speed House Eng. Consultant, our villa design services blend luxury, At Speed House Eng. Consultant, our villa design services are rooted in a passion for creating exclusive, elegant, and highly personalized living spaces. Each villa we design is a reflection of our client’s lifestyle, values, and aspirations — blending architectural sophistication with residential warmth From sprawling estates to modern retreats, we focus on spatial harmony, natural light, seamless indoor-outdoor flow, and intelligent layouts that maximize both luxury and livability. We also integrate Vastu principles, smart technology, and sustainable practices to ensure every villa is timeless, efficient, and future-ready.Whether minimalist or grand, our villas are designed to offer comfort, prestige, and lasting value — truly a home that tells your story comfort, and personalized elegance to create timeless living spaces. Each villa is uniquely tailored to reflect the client’s lifestyle, aspirations, and spatial needs — whether it’s a contemporary retreat or a classically inspired estate.',
    },
    {
      title: 'Sustainable Solutions',
      img: service6,
      desc: 'Eco-friendly designs that prioritize energy efficiency and environmental impact At Speed House Eng. Consultant, our Sustainable Solutions are designed to reduce environmental impact while enhancing long-term value and efficiency. We integrate green building practices, energy-efficient technologies, and eco-conscious materials into every stage of the design and construction process.Whether it’s optimizing natural light and ventilation, using low-impact materials, or incorporating renewable energy systems — our approach ensures that sustainability is not an afterthought, but a core design principle.We create spaces that are not only environmentally responsible but also healthier, more cost-effective, and future-ready — because we believe great design should serve both people and the planet.',
    },
  ];

  const projectExpertise = [
    {
      title: 'Architecture',
      img: architectureImg,
      desc: 'By blending artistry, technology, and unrivalled services, we deliver end-to-end solutions with exceptional design across all architectural scales.',
    },
    {
      title: 'Interior Design',
      img: interiorImg,
      desc: 'We curate eye-catching interiors through custom furniture, art direction, and material selection, balancing beauty and utility.',
    },
    {
      title: 'Commercial',
      img: commercialImg,
      desc: 'We deliver elegant and functional commercial spaces tailored to client goals and local regulations.',
    },
    {
      title: 'Residential',
      img: residentialImg,
      desc: 'Our designs combine aesthetic appeal and Vastu principles to create ideal homes with zero space wastage.',
    },
  ];

  return (
    <>
      {/* Background Wrapper with Header */}
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />

        {/* What We Offer Section */}
        <div className="bg-[#F4F7FA] flex flex-col items-center justify-center pt-10 md:px-10 w-full">
          <div className="bg-white px-6 md:px-20 py-10 rounded-xl w-full max-w-6xl shadow-lg">
            <h2 className="text-2xl md:text-3xl text-center font-bold text-green-900 mb-6">
              What We Offer
            </h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify mb-4">
              At Speed House Eng. Consultant, we understand that architecture is more than just constructing buildings — it's about creating meaningful experiences that inspire and endure. Every structure we design reflects a deep commitment to innovation, quality, and contextual relevance.
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify mb-4">
              Our approach is guided by a holistic vision that seamlessly blends aesthetics, functionality, technology, and sustainability. We believe great design is not only visually compelling but also intuitive, efficient, and environmentally responsible.
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
              From the initial concept through to the final handover, our team works in close collaboration with clients, consultants, and key stakeholders to ensure that each project reflects a shared vision brought to life with precision, care, and creativity. Our processes are transparent, adaptive, and rooted in a deep understanding of both user needs and spatial dynamics.
            </p>
          </div>
        </div>

        {/* Our Services Section */}
        <section className="bg-[#F4F7FA] py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedService(service);
                    setShowModal(true);
                  }}
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-blue-50 hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal Popup */}
        {showModal && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl relative">
              <button
                className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">{selectedService.title}</h3>
              <p className="text-gray-700 text-sm">{selectedService.desc}</p>
            </div>
          </div>
        )}

        {/* Project Expertise Section */}
        <section className="bg-[#F4F7FA] py-16 px-6 md:px-10 w-full">
          <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">Project Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-800">
              {projectExpertise.map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-5 text-center">
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <img src={item.img} className="rounded-xl p-2 mx-auto h-40 object-cover" alt={item.title} />
                  <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Service;

import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/footer'

const Ourproject = () => {
  return (
    <>
      <Header />

      <div className="bg-[#F4F7FA] py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 ">Our Projects</h2>

        {/* Project 1 */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center bg-[#FFFFFF] rounded-xl p-6 lg:p-10 mb-10 gap-8">
          <div className="lg:w-1/2 ">
            <img src="./FirstProject.jpg" alt="Al Quoz First Project" className="rounded-xl w-full" />
          </div>
          <div className="lg:w-1/2  ">
            <h3 className="text-3xl font-bold text-blue-800 text-center pb-4 ">Al Quoz First</h3>
            <ul className="list-disc list-inside  space-y-2 pl-30 pb-15 text-left">
              <li><strong>Client:</strong> Mr. Hassan Ahmed Ghuloom Ahmed Albhalooshi</li>
              <li><strong>Location:</strong> Al Quoz First, Dubai, UAE</li>
              <li><strong>Project Type:</strong> Residential Villa</li>
              <li><strong>Building Configuration:</strong> Ground + 1 Floor (G+1)</li>
            </ul>
          </div>
        </div>

        {/* Project 2 */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center bg-[#FFFFFF] rounded-xl p-6 lg:p-10 mb-10 gap-8">
          <div className="lg:w-1/2 w-full text-Black">
            <h3 className="text-3xl font-bold text-center p-10 text-green-600 ">Oud Al Muteena Second</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Client:</strong> Mr. Zeid Ali</li>
              <li><strong>Location:</strong> Oud Al Muteena, Second – Dubai, UAE</li>
              <li><strong>Project Type:</strong> Private Residential Development</li>
              <li><strong>Building Configuration:</strong> Ground + 1 Floor (G+1)</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <img src="./villa.jpg" alt="Oud Al Muteena Project" className="rounded-xl w-full" />
          </div>
        </div>

        {/* Project 3 */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center bg-[#FFFFFF] rounded-xl p-6 lg:p-10 gap-8">
          <div className="lg:w-1/2 w-full">
            <img src="./Interior.jpg" alt="Dubai Investment Park Project" className="rounded-xl w-full" />
          </div>
          <div className="lg:w-1/2 w-full text-Black">
            <h3 className="text-3xl font-bold text-center text-blue-900 pb-10 ">Dubai Investment Park 1</h3>
            <ul className="list-disc list-inside  space-y-2">
              <li><strong>Client:</strong> Mr. Akrar</li>
              <li><strong>Location:</strong> Dubai Investment Park 1 (DIP 1), Dubai, UAE</li>
              <li><strong>Built-Up Area:</strong> 150,000 sq. ft.</li>
              <li><strong>Building Configuration:</strong> Ground + 3 Floors + Roof (G+3+R)</li>
              <li><strong>Project Type:</strong> Commercial/Industrial Development</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ourproject;
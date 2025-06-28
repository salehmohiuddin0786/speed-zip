import Footer from "../Components/footer";
import Header from "../Components/Header";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <>
      <Header />
      <div className="bg-cover bg-no-repeat bg-center min-h-screen w-full bg-[#F4F7FA]"> 

      
      <div className="container mx-auto px-4 py-12 ">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-10">
            We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
          </p>
        </div>

        {/* Side-by-Side Layout */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-white shadow-md p-8 rounded-lg"
          >
            <div className="flex flex-col">
              <label htmlFor="Name" className="font-bold mb-1">Name</label>
              <input
                type="text"
                id="Name"
                name="name"
                required
                placeholder="Enter your name"
                className="border-2 border-gray-300 p-2 mb-4 rounded"
              />

              <label htmlFor="Email" className="font-bold mb-1">Email</label>
              <input
                type="email"
                id="Email"
                name="email"
                required
                placeholder="Enter your email"
                className="border-2 border-gray-300 p-2 mb-4 rounded"
              />

              <label htmlFor="Message" className="font-bold mb-1">Message</label>
              <textarea
                id="Message"
                name="message"
                required
                placeholder="Enter your message"
                rows="4"
                className="border-2 border-gray-300 p-2 mb-4 rounded"
              />

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Google Map */}
          <div className="w-full md:w-1/2">
            <iframe
              className="w-full h-[435px] rounded-xl shadow-lg"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=dubai%20golf%20club+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

// Image imports for featured materials
import cementImg from "../assets/images/cement.jpg";
import rodImg from "../assets/images/rod.jpg";
import bricksImg from "../assets/images/bricks.jpg";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Hero />


{/* Services Section */}
<section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 underline">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              {
                title: "Material Supply",
                desc: "High-quality construction materials delivered to your site.",
                link: "/materials"
              },
              {
                title: "On-Site Delivery",
                desc: "Fast and reliable logistics for your orders."
              },
              {
                title: "Custom Orders",
                desc: "Tailored orders based on your specific project needs."
              },
              {
              title: "Labour",
              desc: "Skilled labour available for all kinds of construction work.",
              link: "/labour"
            },
              {
                title: "Architecture of House",
                desc: "Professional planning & design for residential projects."
              },
              {
                title: "Engineer",
                desc: "Expert engineering services to ensure safety and quality."
              },
              {
                title: "Contractor",
                desc: "Experienced contractors to manage your site efficiently."
              },
              {
                title: "Raj Mistri",
                desc: "Book the traditional craftsmanship with Raj Mistri experts."
              },
              
              {
                title: "Interior Designer",
                desc: "Creative interior solutions to beautify your living spaces."
              }
            ].map((service, i) => {
              const card = (
                <div
                  className="bg-white p-6 shadow-md rounded-lg hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              );

              return service.link ? (
                <Link to={service.link} key={i}>
                  {card}
                </Link>
              ) : (
                <div key={i}>{card}</div>
              );
            })}

          </div>
        </div>
      </section>


      {/* Featured Materials Section
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-700 underline">
            Featured Materials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: 1, name: "Cement", price: 350, image: cementImg },
              { id: 2, name: "Rod", price: 550, image: rodImg },
              { id: 3, name: "Bricks", price: 7, image: bricksImg },
            ].map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
                <div className="mt-4 flex justify-between">
                  <Link
                    to="/materials"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    to="/checkout"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/materials"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              View All Materials
            </Link>
          </div>
        </div>
      </section> */}



<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6">
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 underline">
      Plan Your Construction Smarter
    </h2>

    {/* Cards Container */}
    <div className="flex flex-col lg:flex-row gap-10 justify-center items-stretch">

      {/* Labour Booking Card */}
      <div className="bg-white p-6 shadow-lg rounded-lg w-full lg:w-1/2 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Skilled Labour Booking
        </h3>
        <p className="text-gray-600 mb-6">
          Hire experienced labourers for all kinds of construction work. 
          Quick and hassle-free booking for your site needs.
        </p>
        <Link
          to="/labour"
          className="inline-block w-full px-6 py-3 bg-[#009688] text-white rounded-md hover:bg-[#009687d7] transition duration-300"
        >
          Book Labour
        </Link>
      </div>

      {/* Construction Calculator Card */}
      <div className="bg-white p-6 shadow-lg rounded-lg w-full lg:w-1/2 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Construction Calculator
        </h3>
        <p className="text-gray-600 mb-6">
          Estimate the quantity of bricks, cement, and sand required for your project. 
          Plan smart and reduce material waste with quick calculations.
        </p>
        <Link
          to="/calculator"
          className="inline-block w-full px-6 py-3 bg-[#009688] text-white rounded-md hover:bg-[#009687dd] transition duration-300"
        >
          Try Calculator
        </Link>
      </div>

    </div>
  </div>
</section>




      

      

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 underline">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 shadow-md rounded-md">
              <p className="italic text-gray-700">"Coming Soon"</p>
              <p className="mt-4 font-bold text-primary">– </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <p className="italic text-gray-700">"Coming Soon"</p>
              <p className="mt-4 font-bold text-primary">– </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 underline">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Top 5 Cement Brands in India", date: "March 2025" },
              { title: "Guide to Eco-Friendly Construction", date: "April 2025" },
              { title: "Budgeting Your Building Project", date: "April 2025" },
            ].map((article, i) => (
              <div key={i} className="text-left bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-500 text-sm">{article.date}</p>
                <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

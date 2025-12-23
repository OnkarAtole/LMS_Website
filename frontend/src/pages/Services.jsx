import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    { title: "Custom Software Development", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { title: "Cloud Integration & Migration", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { title: "Mobile App Development", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { title: "Enterprise Web Applications", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { title: "AI & Data Engineering", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  return (
    <div className="bg-white text-gray-800 pt-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Software Services That Drive Transformation
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui,
          dicta illum perspiciatis odit. Delivering scalable and secure digital
          products tailored to businesses.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} desc={service.desc} />
        ))}
      </section>

      {/* Approach Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Discovery",
              "Design",
              "Development",
              "Deployment"
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {step}
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Build Your Next Big Software Idea
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We help businesses build reliable, scalable and modern software solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;

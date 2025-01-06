// src/app/about/page.jsx

import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Discover who we are, what we stand for, and how we aim to serve you.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <strong>Your Brand Name</strong>, our mission is to provide
            high-quality products that enhance your lifestyle. We are committed
            to delivering exceptional value, outstanding service, and
            sustainable practices to ensure your satisfaction.
          </p>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                We ensure every product meets the highest quality standards.
              </p>
            </div>
            <div className="text-center bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Customer-Centric
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority, and we strive to exceed your
                expectations.
              </p>
            </div>
            <div className="text-center bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Sustainable Practices
              </h3>
              <p className="text-gray-600">
                We are committed to reducing our environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our team is passionate about creating a seamless shopping
            experience. We are a group of dedicated professionals who love what
            we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Add team members dynamically */}
          <div className="text-center">
            <img
              src="/team-member-1.jpg"
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Asad Akbar</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="/team-member-2.jpg"
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Abrar Faysal</h3>
            <p className="text-gray-600">Product Manager</p>
          </div>
          <div className="text-center">
            <img
              src="/team-member-3.jpg"
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Tina Siddik</h3>
            <p className="text-gray-600">Head of Marketing</p>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Join Us on Our Journey!
          </h2>
          <p className="mb-6">
            Experience the difference and become part of our growing community.
          </p>
          <a
            href="/shop"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

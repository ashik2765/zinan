'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 600,
      easing: "ease",
      once: true,
    });
  }, []);
  const banners = [
    {
      title: "বাখুর স্টিক",
      description: "মান ও ঘ্রানে ১০০% নিশ্চয়তা পাবেন আমাদের বাখুর স্টিকে!",
      next: "#slide2",
      prev: "#slide4"
    },
    {
      title: "আতর - খাঁটি সৌরভের স্পর্শ",
      description: "দীর্ঘস্থায়ী ঘ্রাণ খাঁটি ও অ্যালকোহলমুক্ত প্রতিদিনের ব্যবহার ও উপহার দেওয়ার জন্য আদর্শ  ",
      next: "#slide3",
      prev: "#slide1"
    },
    {
      title: "ওউদ ধূপকাঠি বা বখুর স্টিক",
      description: "বিশুদ্ধ ঘ্রাণ আধ্যাত্মিক প্রশান্তি ঘরের সৌন্দর্য বাড়াতে অনন্য!",
      next: "#slide4",
      prev: "#slide2"
    },
    {
      title: "এরাবিয়ান মুখাল্লাত রৌজ",
      description: "যাদের চন্দন, রৌজ ফ্লেভার পছন্দ তাদের জন্য সবচেয়ে বেস্ট একটি আতর। পেইজের কাস্টমার রিভিউ কমেন্ট দেখেন বুঝতে পারবেন।",
      next: "#slide1",
      prev: "#slide3"
    },
  ]
  return (
    <div data-aos="zoom-in" className="container mx-auto">
      <div className="carousel w-full mt-10">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/banners/banner${index + 1}.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] bg-top bg-no-repeat bg-cover rounded">

            <div className="w-full h-full flex items-center pl-4 md:pl-10 lg:pl-36">
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{banner.title}</h1>
                <p className="text-sm md:text-base lg:text-lg">{banner.description}</p>
                <div className="flex flex-col md:flex-row mt-5 md:mt-10 pe-5">
                  <button className="btn btn-md btn-primary">Discover More</button>
                  <button className="btn btn-primary btn-outline hidden md:block md:ms-5 mt-2 md:mt-0">
                    Latest Products
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-between mt-40 lg:mt-0 transform right-4 bottom-4 md:right-12 md:bottom-12 space-x-5 z-10">
              <a href={banner.prev} className="btn btn-circle btn-primary btn-outline">❮</a>
              <a href={banner.next} className="btn btn-circle btn-primary">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

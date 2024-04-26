"use client"
import React from 'react';
import Link from 'next/link';
// Author = Rohit Shitole

const experts = [
  { name: "Deny Json", specialty: "Stocks, IPO, Portfolio", location: "kothrud", approvalRate: "98%", experience: "22 Years Exp", image: "/profile1.jpg" },

  { name: "Rohit Shitole", specialty: "Stocks, IPO, Portfolio", location: "kothrud", approvalRate: "98%", experience: "22 Years Exp", image: "/profile.jpg" },
  { name: "Ritika Patil ", specialty: "Stocks, IPO, Portfolio", location: "Pune", approvalRate: "98%", experience: "22 Years Exp", image: "/profile2.jpg" },
];

const ProfileSlide = () => {
  return (
    <div className="container mx-auto px-10 py-8">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold">Experts Near You</h1>
        <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">View All &gt;</a>
      </div>
      
      <Link  href="/pages/xpertprofile">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {experts.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {experts.map((expert, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="2000">
              <div className="bg-white rounded overflow-hidden shadow-lg p-5">
                <img className="w-32 h-32 rounded-full mx-auto mb-4" src={expert.image} alt={`Expert ${index + 1}`} />
                <h2 className="text-center text-lg font-semibold mb-2">{expert.name}</h2>
                <p className="text-center text-gray-600 mb-2">{expert.specialty}</p>
                <p className="text-center text-gray-600 mb-4"><i className="fas fa-map-marker-alt"></i> {expert.location}</p>
                <div className="flex justify-center items-center mb-2">
                  <i className="fas fa-thumbs-up text-green-500"></i>
                  <span className="text-green-500 ml-2">{expert.approvalRate}</span>
                </div>
                <p className="text-center text-gray-600">{expert.experience}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></Link>
    </div>
  );
}

export default ProfileSlide;



















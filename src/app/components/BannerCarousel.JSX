import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Author= Rohit Shitole
const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide rounded-2xl" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src="/1.png" className="d-block w-100 rounded-2xl" alt="Slide 1"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/2.png" className="d-block w-100 rounded-2xl" alt="Slide 2"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/3.png" className="d-block w-100 rounded-2xl" alt="Slide 3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;

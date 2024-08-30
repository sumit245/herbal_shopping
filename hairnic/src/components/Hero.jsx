import React from "react";
import "../lib/animate/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Hero() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    Natural & Organic
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    Hair <span className="fw-light text-dark">Shampoo</span> For
                    Healthy Hair
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam feugiat rutrum lectus, sed auctor ex malesuada id.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes.
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="/img/shampoo1.png"
                    alt="Shampoo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    100% Natural
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    Organic{" "}
                    <span className="fw-light text-dark">Conditioner</span> For
                    Vibrant Hair
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="/img/conditioner.png"
                    alt="Conditioner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    Herbal Remedies
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    Rejuvenating{" "}
                    <span className="fw-light text-dark">Face Masks</span> For
                    Glowing Skin
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="/img/facemask.png"
                    alt="Face Mask"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    Pure Ingredients
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    Nourishing{" "}
                    <span className="fw-light text-dark">Body Lotions</span> For
                    Soft Skin
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="/img/bodylotion.png"
                    alt="Body Lotion"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    Eco-Friendly
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    All-Natural{" "}
                    <span className="fw-light text-dark">Herbal Teas</span> For
                    Relaxation
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="/img/herbaltea.png"
                    alt="Herbal Tea"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <ul style={{ margin: "0", padding: "0", display: "flex" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          color: "white",
          border: "1px solid white",
          borderRadius: "50%",
          textAlign: "center",
          cursor: "pointer",
        }}
        className="custom-dot"
      >
        {i + 1}
      </div>
    ),
    beforeChange: (current, next) => {
      const dots = document.querySelectorAll(".custom-dot");
      dots.forEach((dot, index) => {
        dot.style.color = index === next ? "black" : "white";
      });
    },
  };

  return (
    <div>
      <div className="container-fluid testimonial bg-primary my-5 py-5">
        <div className="container text-white py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              maxWidth: 600,
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <h1 className="text-white mb-3">
              Our Customer Said{" "}
              <span className="fw-light text-dark">
                About Our Natural Shampoo
              </span>
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Slider {...settings}>
                <div
                  className="testimonial-item text-center d-flex flex-column align-items-center"
                  style={{ minHeight: "400px" }} // Adjust height as needed
                >
                  <img
                    className="img-fluid border p-2 mb-4"
                    src="img/testimonial-1.jpg"
                    alt=""
                    style={{ maxWidth: "150px", borderRadius: "50%" }} // adjust maxWidth as needed
                  />
                  <h5 className="fw-light lh-base text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis aliquet, erat non malesuada consequat, nibh erat tempus
                    risus, vitae porttitor purus nisl vitae purus. Praesent
                    tristique odio ut rutrum pellentesque. Fusce eget molestie
                    est, at rutrum est. Nullam scelerisque libero nunc, vitae
                    ullamcorper elit volutpat ut.
                  </h5>
                  <h5 className="mb-1">Client Name</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Profession
                  </h6>
                </div>

                <div
                  className="testimonial-item text-center d-flex flex-column align-items-center"
                  style={{ minHeight: "400px" }} // Adjust height as needed
                >
                  <img
                    className="img-fluid border p-2 mb-4"
                    src="img/testimonial-2.jpg"
                    alt=""
                    style={{ maxWidth: "150px", borderRadius: "50%" }} // adjust maxWidth as needed
                  />
                  <h5 className="fw-light lh-base text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis aliquet, erat non malesuada consequat, nibh erat tempus
                    risus, vitae porttitor purus nisl vitae purus. Praesent
                    tristique odio ut rutrum pellentesque. Fusce eget molestie
                    est, at rutrum est. Nullam scelerisque libero nunc, vitae
                    ullamcorper elit volutpat ut.
                  </h5>
                  <h5 className="mb-1">Client Name</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Profession
                  </h6>
                </div>

                <div
                  className="testimonial-item text-center d-flex flex-column align-items-center"
                  style={{ minHeight: "400px" }} // Adjust height as needed
                >
                  <img
                    className="img-fluid border p-2 mb-4"
                    src="img/testimonial-3.jpg"
                    alt=""
                    style={{ maxWidth: "150px", borderRadius: "50%" }} // adjust maxWidth as needed
                  />
                  <h5 className="fw-light lh-base text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis aliquet, erat non malesuada consequat, nibh erat tempus
                    risus, vitae porttitor purus nisl vitae purus. Praesent
                    tristique odio ut rutrum pellentesque. Fusce eget molestie
                    est, at rutrum est. Nullam scelerisque libero nunc, vitae
                    ullamcorper elit volutpat ut.
                  </h5>
                  <h5 className="mb-1">Client Name</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Profession
                  </h6>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
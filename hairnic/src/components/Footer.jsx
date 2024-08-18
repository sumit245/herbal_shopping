import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-white footer">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-primary">Hairnic</h1>
              </a>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquet, erat non malesuada consequat, nibh erat tempus risus,
                vitae porttitor purus nisl vitae purus.
              </p>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <h5 className="mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-instagram" />
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <h5 className="mb-4">Our Products</h5>
              <a className="btn btn-link" href="">
                Hair Shining Shampoo
              </a>
              <a className="btn btn-link" href="">
                Anti-dandruff Shampoo
              </a>
              <a className="btn btn-link" href="">
                Anti Hair Fall Shampoo
              </a>
              <a className="btn btn-link" href="">
                Hair Growing Shampoo
              </a>
              <a className="btn btn-link" href="">
                Anti smell Shampoo
              </a>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeIn",
              }}
            >
              <h5 className="mb-4">Popular Link</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="">
                Career
              </a>
            </div>
          </div>
        </div>
        <div
          className="container wow fadeIn"
          data-wow-delay="0.1s"
          style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeIn",
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default Footer;
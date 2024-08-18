import React from "react";
import '../css/bootstrap.min.css';
import '../css/style.css';
import "../lib/animate/animate.min.css";
const Product = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
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
            <h1 className="text-primary mb-3">
              <span className="fw-light text-dark">Best Benefits Of Our</span>{" "}
              Natural Hair Shampoo
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row g-4 align-items-center">
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <div className="row g-5">
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>Natural &amp; Organic</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Lorem ipsum dolor sit amet adipiscing elit aliquet.
                    </span>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>Anti Hair Fall</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Lorem ipsum dolor sit amet adipiscing elit aliquet.
                    </span>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>Anti-dandruff</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Lorem ipsum dolor sit amet adipiscing elit aliquet.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn text-center"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <img
                className="img-fluid animated pulse infinite"
                src="./img/shampoo.png"
                alt="Natural Hair Shampoo"
              />
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div className="row g-5">
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>No Internal Side Effect</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Lorem ipsum dolor sit amet adipiscing elit aliquet.
                    </span>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>No Skin Irritation</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Lorem ipsum dolor sit amet adipiscing elit aliquet.
                    </span>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>No Artificial Smell</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Lorem ipsum dolor sit amet adipiscing elit aliquet.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
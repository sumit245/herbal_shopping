// import React from "react";
// import '../lib/animate/animate.min.css';

// export default function Hero() {
//   return (
//     <div className="container-fluid bg-primary hero-header mb-5">
//       <div className="container">
//         <div className="row g-5 align-items-center">
//           <div className="col-lg-6 text-center text-lg-start">
//             <h3 className="fw-light text-white animated slideInRight">
//               Natural & Organic
//             </h3>
//             <h1 className="display-4 text-white animated slideInRight">
//               Hair <span className="fw-light text-dark">Shampoo</span> For
//               Healthy Hair
//             </h1>
//             <p className="text-white mb-4 animated slideInRight">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
//               feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius
//               natoque penatibus et magnis dis parturient montes.
//             </p>
//             <a
//               href="#"
//               className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
//             >
//               Shop Now
//             </a>
//             <a
//               href="#"
//               className="btn btn-outline-dark py-2 px-4 animated slideInRight"
//             >
//               Contact Us
//             </a>
//           </div>
//           <div className="col-lg-6">
//             <img
//               className="img-fluid animated pulse infinite"
//               src="/img/shampoo.png"
//               alt="Shampoo"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../lib/animate/animate.min.css";

export default function Hero() {
  return (
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius
              natoque penatibus et magnis dis parturient montes.
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
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={3000}
              showStatus={false}
            >
              <div>
                <img
                  src="/img/dabur.webp"
                  alt="Shampoo 1"
                  style={{ height: "500px", width: "auto" }}
                />
              </div>
              <div>
                <img
                  src="/img/baidyanath.webp"
                  alt="Shampoo 2"
                  style={{ height: "500px", width: "auto" }}
                />
              </div>
              <div>
                <img
                  src="/img/kerala.jpg"
                  alt="Shampoo 3"
                  style={{ height: "500px", width: "auto" }}
                />
              </div>
              <div>
                <img
                  src="/img/himalaya.webp"
                  alt="Shampoo 4"
                  style={{ height: "500px", width: "auto" }}
                />
              </div>
              <div>
                <img
                  src="/img/vysa.png"
                  alt="Shampoo 5"
                  style={{ height: "500px", width: "auto" }}
                />
              </div>
              <div>
                <img
                  src="/img/aimil.webp"
                  alt="Shampoo 5"
                  style={{ height: "500px", width: "auto" }}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

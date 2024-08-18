import React from "react";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();

  const goToSignin = () =>{
    navigate('/sign-in')
  }
  return (
    <div
      className="container-fluid sticky-top bg-primary shadow-sm"
      style={{ top: 0 }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a href="index.html" className="navbar-brand">
            <h2 className="text-white">Hairnic</h2>
          </a>
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="product.html" className="nav-item nav-link">
                Products
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu bg-light mt-2">
                  <a href="feature.html" className="dropdown-item">
                    Features
                  </a>
                  <a href="how-to-use.html" className="dropdown-item">
                    How To Use
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="blog.html" className="dropdown-item">
                    Blog Articles
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <button
              href=""
              className="btn btn-dark py-2 px-4 d-none d-lg-inline-block"
              onClick={goToSignin}
            >
              Sign in
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MyNavbar;
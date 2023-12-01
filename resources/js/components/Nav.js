
import React from 'react';



export default function Nav(){

    return(
        <nav className="container-fluid navbar bg-success navbar-expand-md fixed-top mb-5 color px-5">
  <a className="navbar-brand text-black" aria-current="page" href="">
    <img src="assets/Santa-Year-Round-Logo.png" height="70px" alt="logo" />
    <span className="text-danger" />
  </a>
  <button
    className="navbar-toggler "
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div
    className=" collapse navbar-collapse justify-content-end  "
    id="navbarSupportedContent"
  >
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item px-1">
        <a className="nav-link active text-black" aria-current="page" href="">
          Home
        </a>
      </li>
      <li className="nav-item px-1">
        <a className="nav-link  text-black" href="#services">
          Services
        </a>
      </li>
      <li className="nav-item px-1 ">
        <a className="nav-link text-black" href="#testimonials">
          Testimonials
        </a>
      </li>
      <li className="nav-item px-1 ">
        <a className="nav-link text-black" href="#contact">
          Contact Us
        </a>
      </li>
      <li className="nav-item px-1 ">
        <a
          className="nav-link text-white rounded px-3 py-2 bg-black"
          href="#contact"
        >
          Get a quote
        </a>
      </li>
    </ul>
  </div>
</nav>

    )


}
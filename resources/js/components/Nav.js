
import React from 'react';
import "/css/app.css";




export default function Nav(){

    return(<div className='container-fluid color pb-5'>
        <nav className="container-fluid navbar  navbar-expand-md fixed-top mb-5 color px-5">
  <a className="navbar-brand text-black" aria-current="page" href="">Tuko site
    
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
        <a className="nav-link active text-black" aria-current="page" href="">
          Pricing
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
          Sign In
        </a>
      </li>
    </ul>
  </div>
</nav>
<div className='container mt-5 py-3'>
<div className='row mt-5'>
    <div className='col-lg pt-2'>
      <h2 className='text-white pt-3'>Hello</h2>
      <p className='pt-5'>Lorem cx vhjzxbjbzcjhz zbjhzfh fhbxhb sdjbjhxb bjhjx</p>
    </div>
    <div className='col-lg px-2'> 
    <img src='/storage/web.png' height={300}/>

    </div>
  </div>
</div>
</div>

    )


}
import React from 'react';
import "/css/app.css";


export default function Footer(){

    return (
    <div>
    <section className>
        {/* Footer */}
        <footer className="text-center text-white" style={{backgroundColor: '#0a4275'}}>
          {/* Grid container */}
          <div className="container p-4 pb-0">
            {/* Section: CTA */}
            <section className>
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button data-mdb-ripple-init type="button" className="btn btn-outline-light btn-rounded">
                  Sign up!
                </button>
              </p>
            </section>
            {/* Section: CTA */}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">TukoSite.com</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </section>
      </div>

    );
}
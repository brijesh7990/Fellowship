import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="container w-container">
        <div
          id="w-node-_26d6574c-5e77-c36a-641a-c77e8a2c5ef7-8a2c5ef5"
          data-w-id="26d6574c-5e77-c36a-641a-c77e8a2c5ef7"
          className="menu-button w-nav-button"
          style={{ WebkitUserSelect: "text" }}
          aria-label="menu"
          role="button"
          tabIndex={0}
          aria-controls="w-nav-overlay-0"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <div className="icon w-icon-nav-menu" />
          <img
            src="https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/666c530fcc1527326993c433_Vector.svg"
            loading="lazy"
            width={10}
            alt=""
            className="image-17"
          />
          <img
            src="https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/666c540586bce6f112e46ac1_Group%201461.svg"
            loading="lazy"
            data-w-id="052229b7-f31a-7a1e-1813-da00c4e877b9"
            alt=""
            className="image-18"
            style={{ display: "none" }}
          />
        </div>
        <a
          href="/"
          aria-current="page"
          className="brand w-nav-brand w--current"
          aria-label="home"
        >
          <img
            src="https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/660c16e63dc8e9d9633cd098_logo-horizontal.svg"
            loading="lazy"
            width="Auto"
            height={40}
            alt=""
            className="image-10"
          />
        </a>
        <nav
          role="navigation"
          id="w-node-_26d6574c-5e77-c36a-641a-c77e8a2c5efb-8a2c5ef5"
          className="nav-menu w-nav-menu"
        >
          <div className="nav-links">
            <a
              href="/technology"
              className="nav-link nav-mobile-link w-nav-link"
              style={{ maxWidth: 940 }}
            >
              Technology
            </a>
            <a
              href="/offering"
              className="nav-link with-line-right nav-mobile-link w-nav-link"
              style={{ maxWidth: 940 }}
            >
              Offering
            </a>
            <div className="div-block-24" />
            <a
              href="/about"
              className="nav-link with-line-left align-left nav-mobile-link w-nav-link"
              style={{ maxWidth: 940 }}
            >
              About us
            </a>
            <a
              href="/careers"
              className="nav-link with-line-right with-line-left align-left nav-mobile-link w-nav-link"
              style={{ maxWidth: 940 }}
            >
              Careers
            </a>
            <div className="div-block-24" />
            <a
              href="/news"
              className="nav-link with-line-left align-left nav-mobile-link w-nav-link"
              style={{ maxWidth: 940 }}
            >
              NEWS
            </a>
            <a
              href="/contact"
              className="nav-link nav-mobile-link w-nav-link"
              style={{ maxWidth: 940 }}
            >
              Contact
            </a>
          </div>
          <div className="nav-button align-with-dots">
            <a
              href="#"
              className="cta-button button-nav hide-desktop grow w-button"
            >
              Discuss project
            </a>
          </div>
        </nav>
        <a href="/contact" className="cta-button button-nav w-button">
          Get in touch
        </a>
      </div>
      <div className="header-holder hp">
        <div
          data-w-id="2b231835-a4a0-f5cb-0fab-5b194ff5cdb5"
          className="floating-block broader special plus-40 show-mobile-only"
        >
          <div className="hp-titile first hp-title">
            <div className="dot-block" />
            <div className="decsriptor">The challenge</div>
          </div>
          <div className="floating-block-copy minus-ten">
            <h1>
              Over 90% of plastics worldwide are not recycled. This needs to
              change!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

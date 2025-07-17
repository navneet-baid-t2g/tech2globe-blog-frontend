"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu,scroll }: any) {
  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      <div className={`mobile-header mobile-header-main d-block d-lg-none ${
            scroll ? "position-fixed" : "position-relative"
          }`}>
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href="/index1">
                  <img src="/assets/img/logo/tech2globe-logo.png" alt="Tech2Globe" />
                </Link>
              </div>
              <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                <i className="fa-duotone fa-bars-staggered" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-sidebar d-block d-lg-none ${
          isMobileMenu ? "mobile-menu-active" : ""
        }`}
      >
        <div className="logo-m">
          <Link href="/">
            <img src="/assets/img/logo/tech2globe-logo.png" alt="Tech2Globe" />
          </Link>
        </div>
        <div className="menu-close" onClick={handleMobileMenu}>
          <i className="fa-solid fa-xmark" />
        </div>
        <div className="mobile-nav">
          <ul>
            <li className="has-dropdown">
              <span
                onClick={() => handleAccordion(1)}
              >
                <em />
              </span>
              <Link href="/">Home</Link>
            </li>

            <li className="has-dropdown">
              <span
                className={`submenu-button ${
                  isAccordion == 2 ? "submenu-opened" : ""
                }`}
                onClick={() => handleAccordion(2)}
              >
                <em />
              </span>
              <Link href="/#" className="main">
                About Us <i className="fa-solid fa-angle-down" />
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}
              >
                <li>
                  <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/about-us`}>
                    About Tech2Globe
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/Infrastructure`}
                  >
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/values`}>
                    Values
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/associations-ascription`}
                  >
                    Associations Ascription
                  </Link>
                </li>
                <li>
                  <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/clients`}>
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/csr-initiatives`}
                  >
                    CSR Initiatives
                  </Link>
                </li>
                <li>
                  <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/our-team`}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/life-at-tech2globe`}
                  >
                    Life@Tech2globe
                  </Link>
                </li>
                <li>
                  <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/career`}>
                    Career
                  </Link>
                </li>
              </ul>
            </li>

            <li className="has-dropdown">
              <span
                className={`submenu-button ${
                  isAccordion == 3 ? "submenu-opened" : ""
                }`}
                onClick={() => handleAccordion(3)}
              >
                <em />
              </span>
              <Link href="/#" className="main">
                Services <i className="fa-solid fa-angle-down" />
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}
              >
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/amazon-consulting-services`}
                  >
                    Ecommerce Data & Development
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/restaurant-menu-entry-services`}
                  >
                    BPO / KPO / Data Management
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/digital-marketing-services`}
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/software-development`}
                  >
                    Web & Mobile
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/photo-editing-services`}
                  >
                    Graphic Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/HR-solutions`}
                  >
                    HRO Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/Oracle-Products-And-Solutions`}
                  >
                    Oracle Products & Solutions
                  </Link>
                </li>
              </ul>
            </li>

            <li className="has-dropdown">
              <span
                className={`submenu-button ${
                  isAccordion == 4 ? "submenu-opened" : ""
                }`}
                onClick={() => handleAccordion(4)}
              >
                <em />
              </span>
              <Link href="/#" className="main">
                Technologies <i className="fa-solid fa-angle-down" />
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}
              >
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/web-development`}
                  >
                    Custom Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/e-commerce-development-service`}
                  >
                    E-commerce-Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/mobile-application-design-services`}
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/emerging-technology`}
                  >
                    Emerging Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/ui-ux-design-services`}
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/manual-testing-services`}
                  >
                    Testing Services
                  </Link>
                </li>
              </ul>
            </li>

            <li className="has-dropdown">
              <span
                className={`submenu-button ${
                  isAccordion == 5 ? "submenu-opened" : ""
                }`}
                onClick={() => handleAccordion(5)}
              >
                <em />
              </span>
              <Link href="/#" className="main">
                Resources <i className="fa-solid fa-angle-down" />
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}
              >
                <li>
                  <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/faq`}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/testimonial`}
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/case-studies`}
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/portfolio`}>
                    Portfolio
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="mobile-button">
            <Link className="theme-btn1" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/contact-us`}>
              Get A Quote <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="footer-contact-area1 md:pl-0 pl-20 sm:pl-0 mt-30">
            <h3 className="text-24 leading-26 font-semibold title1 pb-10">
              Get in touch
            </h3>
            <div className="contact-box d-flex">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon1.svg" alt="vexon" />
              </div>
              <div className="text">
                <Link href="mailto:info@tech2globe.com">info@tech2globe.com</Link>
              </div>
            </div>
            <div className="contact-box d-flex">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon2.svg" alt="vexon" />
              </div>
              <div className="text">
                  701, 7th Floor, Tower B, Logix Cyber Park,
                  <br/>C Block, Phase 2, Sector 62<br/>Noida, Uttar Pradesh 201301
              </div>
            </div>
            <div className="contact-box d-flex">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon3.svg" alt="vexon" />
              </div>
              <div className="text">
                <Link href="tel: +91-9899675039">+91-9899675039</Link>
              </div>
            </div>
          </div>
          <div className="contact-infos">
            <h3>Our Social Network</h3>
            <ul className="social-icon">
              <li>
                <Link href="https://www.facebook.com/tech2globe.software">
                  <i className="fa-brands fa-facebook" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/tech2globe">
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Tech2Globe">
                  <i className="fa-brands fa-x-twitter" />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/user/Tech2Globe">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/tech2globeweb/">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

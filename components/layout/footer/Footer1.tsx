import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <div className="footer1 mt-80 md:mt-40 sm:mt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="logo">
                <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`}>
                  <img
                    src="/assets/img/logo/tech2globe-logo.png"
                    alt="Tech2Globe"
                  />
                </Link>
              </div>
              <div className="heading1 mt-16">
                <p>
                  Tech2Globe is a global IT and BPO service provider, delivering
                  innovative, scalable, and secure digital solutions. We help
                  businesses grow through technology, data, and expert-driven
                  services.
                </p>
                <div className="footer-social1">
                  <ul className="social-links">
                    <li>
                      <Link
                        href="https://www.facebook.com/tech2globe.software"
                        aria-label="Visit Tech2Globe on Facebook"
                        title="Facebook"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          className="fa-brands fa-facebook-f"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/tech2globe"
                        aria-label="Visit Tech2Globe on LinkedIn"
                        title="LinkedIn"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          className="fa-brands fa-linkedin-in"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/tech2globeweb/"
                        aria-label="Visit Tech2Globe on Instagram"
                        title="Instagram"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          className="fa-brands fa-instagram"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.youtube.com/user/Tech2Globe"
                        aria-label="Visit Tech2Globe on YouTube"
                        title="YouTube"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          className="fa-brands fa-youtube"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">YouTube</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/Tech2Globe"
                        aria-label="Visit Tech2Globe on X (Twitter)"
                        title="X (Twitter)"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          className="fa-brands fa-x-twitter"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">X (Twitter)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-50 sm:mb-30 sm:mt-30">
              <div className="footer-list1 ml-80 md:ml-0 sm:ml-0">
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/about-us`}
                    >
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
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/clientsF`}
                    >
                      Clients
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/our-team`}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/life-at-tech2globe`}
                    >
                      Life@Tech2Globe
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-list1 ml-50 md:ml-0 sm:ml-0 mb-50 sm:mb-30">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/amazon-consulting-services`}
                    >
                      Ecommerce
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
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/post-processing-of-real-estate-images`}
                    >
                      Photo Editing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/e-commerce-development`}
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/oracle-applications`}
                    >
                      Oracle Products & Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/seo-services`}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact-list1 mb-50 sm:mb-30">
                <h3>Contact Us</h3>
                <div className="footer-contact-box1">
                  <div className="icon">
                    <img
                      src="/assets/img/icons/footer1-icon1.svg"
                      alt="vexon"
                    />
                  </div>
                  <div className="text">
                    <Link href="mailto:info@tech2globe.com">
                      info@tech2globe.com
                    </Link>
                  </div>
                </div>
                <div className="footer-contact-box1">
                  <div className="icon">
                    <img
                      src="/assets/img/icons/footer1-icon3.svg"
                      alt="vexon"
                    />
                  </div>
                  <div className="text">
                    <Link href="tel:+91-9899675039">+91-9899675039</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="coppyrihgt1">
            <div className="row coppyrihgt-border">
              <div className="col-md-6">
                <p className="coppyrihgt">
                  © 2025 Tech2Globe. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6">
                <div className="conditions">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/Privacy-Policy`}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/sitemap.xml`}
                  >
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

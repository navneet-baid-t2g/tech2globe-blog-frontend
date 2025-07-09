import Link from "next/link";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
}: any) {
  return (
    <>
      <header>
        <div
          className={`header-area header-area1 d-none d-lg-block ${
            scroll ? "sticky" : ""
          }`}
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`}>
                      <img
                        src="/assets/img/logo/tech2globe-logo.png"
                        alt="Tech2Globe"
                      />
                    </Link>
                  </div>
                  <div className="main-menu-ex main-menu-ex1">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li className="dropdown-menu-parrent">
                        <Link href="/#" className="main1">
                          About Us <i className="fa-solid fa-angle-down" />
                        </Link>
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
                            <Link
                              href={`${process.env.NEXT_PUBLIC_BASE_PATH}/values`}
                            >
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
                              href={`${process.env.NEXT_PUBLIC_BASE_PATH}/clients`}
                            >
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
                              Life@Tech2globe
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={`${process.env.NEXT_PUBLIC_BASE_PATH}/career`}
                            >
                              Career
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu-parrent">
                        <Link href="/#" className="main1">
                          Services <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul>
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
                      <li className="dropdown-menu-parrent">
                        <Link href="/#" className="main1">
                          Technologies <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul>
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
                      <li className="dropdown-menu-parrent">
                        <Link href="/#" className="main1">
                          Resources <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul>
                          <li>
                            <Link
                              href={`${process.env.NEXT_PUBLIC_BASE_PATH}/faq`}
                            >
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
                            <Link
                              href={`${process.env.NEXT_PUBLIC_BASE_PATH}/portfolio`}
                            >
                              Portfolio
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="header1-buttons">
                    <div className="vl-search-top">
                      <button
                        className="search-open-btn"
                        onClick={handleSearch}
                        aria-label="Open search"
                        title="Open search"
                      >
                        <i
                          className="fa-regular fa-magnifying-glass"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">Search</span>
                      </button>
                    </div>

                    <Link
                      className="theme-btn1"
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/contact-us`}
                    >
                      Contact Us{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

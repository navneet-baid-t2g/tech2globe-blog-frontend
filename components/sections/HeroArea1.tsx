export default function HeroArea1() {
  return (
    <>
      <div className="hero1">
        <div className="container">
          <div
            className="hero1-bg bg-cover"
            style={{ backgroundImage: "url(/assets/img/bg/hero1-bg.jpg)" }}
          >
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="main-image reveal">
                  <img src="/assets/img/hero/hero1-image.png" alt="vexon" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="main-heading1">
                  <h1 className="text-anime-style-3">
                    360° Digital Marketing Business Processing Solutions.
                  </h1>
                  <p
                    className="mt-16"
                    data-aos="fade-left"
                    data-aos-duration={400}
                    data-aos-delay={100}
                  >
                    At Tech2Globe, social media is more than marketing—it's a strategic asset. We deliver data-driven campaigns that
                    enhance brand visibility, build customer trust, and drive measurable results across platforms.
                  </p>
                  <div className="form-area">
                    <form
                      action="#"
                      data-aos="fade-left"
                      data-aos-duration={400}
                      data-aos-delay={100}
                    >
                      <input type="email" placeholder="Enter Your Email" />
                      <div className="button">
                        <button className="theme-btn1">Get Started</button>
                      </div>
                    </form>
                  </div>
                  <p
                    className="bottom-content"
                    data-aos="fade-left"
                    data-aos-duration={1100}
                    data-aos-delay={100}
                  >
                    ❊ Empower your brand with Tech2Globe’s social media expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

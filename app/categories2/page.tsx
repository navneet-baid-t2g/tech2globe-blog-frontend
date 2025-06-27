

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Categories2() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-hero bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/inner-hero-bg.jpg)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="main-heading">
										<div className="page-prog">
											<Link href="/">Home</Link>
											<span><i className="fa-solid fa-angle-right" /></span>
											<p>Blog</p>
											<span><i className="fa-solid fa-angle-right" /></span>
											<p className="bold">Categories 02</p>
										</div>
										<h1>Categories 02</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA END=======*/}
					{/*===== BLOG CETEGORYS START=======*/}
					<div className="blog1-cetegorys sp">
						<div className="container">
							<div className="row mt-30 sm:mt-0 md:mt-0">
								<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={450}>
									<div className="blog1-cetegory-box mt-30 text-center">
										<div className="image image-anime">
											<img src="/assets/img/categories/categories-image1.png" alt="vexon" />
										</div>
										<div className="heading1 mt-16">
											<h3><Link href="/blog">Social Media </Link></h3>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
									<div className="blog1-cetegory-box mt-30 text-center">
										<div className="image image-anime">
											<img src="/assets/img/categories/categories-image2.png" alt="vexon" />
										</div>
										<div className="heading1 mt-16">
											<h3><Link href="/blog">Digital Marketing </Link></h3>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
									<div className="blog1-cetegory-box mt-30 text-center">
										<div className="image image-anime">
											<img src="/assets/img/categories/categories-image3.png" alt="vexon" />
										</div>
										<div className="heading1 mt-16">
											<h3><Link href="/blog">UI/UX </Link></h3>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
									<div className="blog1-cetegory-box mt-30 text-center">
										<div className="image image-anime">
											<img src="/assets/img/categories/categories-image4.png" alt="vexon" />
										</div>
										<div className="heading1 mt-16">
											<h3><Link href="/blog">Business </Link></h3>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
									<div className="blog1-cetegory-box mt-30 text-center">
										<div className="image image-anime">
											<img src="/assets/img/categories/categories-image5.png" alt="vexon" />
										</div>
										<div className="heading1 mt-16">
											<h3><Link href="/blog">Technology </Link></h3>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
									<div className="blog1-cetegory-box mt-30 text-center">
										<div className="image image-anime">
											<img src="/assets/img/categories/categories-image6.png" alt="vexon" />
										</div>
										<div className="heading1 mt-16">
											<h3><Link href="/blog">Travel </Link></h3>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
									<div className="blog1-cetegory-box mt-30 text-center">
										<div className="image image-anime">
											<img src="/assets/img/categories/categories-image7.png" alt="vexon" />
										</div>
										<div className="heading1 mt-16">
											<h3><Link href="/blog">Trends </Link></h3>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
									<div className="blog1-cetegory-box mt-30 text-center">
										<div className="image image-anime">
											<img src="/assets/img/categories/categories-image8.png" alt="vexon" />
										</div>
										<div className="heading1 mt-16">
											<h3><Link href="/blog">Startup </Link></h3>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
									<div className="blog1-cetegory-box mt-30 text-center">
										<div className="image image-anime">
											<img src="/assets/img/categories/categories-image9.png" alt="vexon" />
										</div>
										<div className="heading1 mt-16">
											<h3><Link href="/blog">News </Link></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== BLOG CETEGORYS END=======*/}
					{/*===== CTA AREA START=======*/}
					<div className="cta1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="heading1-w">
										<h2>Ready to Elevate Your Social Media Game?</h2>
										<p className="mt-16">Unlock the tools and insights you need to thrive on social media with Vexon. Join our community for expert tips, trending strategies, and resources that empower you to stand out and succeed.</p>
										<div className="form-area">
											<form action="#">
												<input type="email" placeholder="Enter Your Email" />
												<div className="button">
													<button className="theme-btn1">Get Started</button>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="image text-end sm:text-start md:text-start sm:mt-30 md:mt-30">
										<img src="/assets/img/hero/hero1-image.png" alt="vexon" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}
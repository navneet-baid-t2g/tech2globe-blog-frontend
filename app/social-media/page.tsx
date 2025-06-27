

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function SocialMedia() {

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
											<p>Category</p>
											<span><i className="fa-solid fa-angle-right" /></span>
											<p className="bold">Social Media</p>
										</div>
										<h1>Social Media</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA END=======*/}
					{/*===== SOCIAL AREA START=======*/}
					<div className="social-media sp">
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={100}>
									<div className="blog1-single-box">
										<div className="thumbnail image-anime">
											<img src="/assets/img/blog/blog1-image1.png" alt="vexon" />
										</div>
										<div className="heading1">
											<div className="social-area">
												<Link href="/#" className="social">Social Media</Link>
												<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
											</div>
											<h4><Link href="/blog-single">The Art of Building a Strong Personal Brand on Social Media</Link></h4>
											<p className="mt-16">This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with audience.</p>
											<div className="author-area">
												<div className="author">
													<div className="author-tumb">
														<img src="/assets/img/blog/blog1-author1.png" alt="vexon" />
													</div>
													<span className="author-text">Kimberly Mastrangelo</span>
												</div>
												<div className="date">
													<span><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 26, 2025 </span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
									<div className="blog1-single-box sm:mt-30">
										<div className="thumbnail image-anime">
											<img src="/assets/img/blog/blog1-image2.png" alt="vexon" />
										</div>
										<div className="heading1">
											<div className="social-area">
												<Link href="/#" className="social">Social Media</Link>
												<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
											</div>
											<h4><Link href="/blog-single">Proven Strategies to Boost Your Social Media Metrics</Link></h4>
											<p className="mt-16">Engagement is key to building a loyal following. Learn techniques for crafting posts that invite interaction, encouraging shares.</p>
											<div className="author-area">
												<div className="author">
													<div className="author-tumb">
														<img src="/assets/img/blog/blog1-author2.png" alt="vexon" />
													</div>
													<span className="author-text">Kathy Pacheco</span>
												</div>
												<div className="date">
													<span><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 21, 2025 </span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
									<div className="blog1-single-box sm:mt-30 md:mt-30">
										<div className="thumbnail image-anime">
											<img src="/assets/img/blog/blog1-image3.png" alt="vexon" />
										</div>
										<div className="heading1">
											<div className="social-area">
												<Link href="/#" className="social">Brand’s</Link>
												<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
											</div>
											<h4><Link href="/blog-single">The Power of Storytelling: How to Make Your Brand’s Voice Stand Out</Link></h4>
											<p className="mt-16">Discover ways to create relatable and impactful stories that reinforce your brand and keep followers coming back.</p>
											<div className="author-area">
												<div className="author">
													<div className="author-tumb">
														<img src="/assets/img/blog/blog1-author3.png" alt="vexon" />
													</div>
													<span className="author-text">Corina McCoy</span>
												</div>
												<div className="date">
													<span><img src="/assets/img/icons/date1.svg" alt="vexon" /> Nov 2, 2025 </span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={500}>
									<div className="blog1-single-box mt-30">
										<div className="thumbnail image-anime">
											<img src="/assets/img/blog/blog1-image4.png" alt="vexon" />
										</div>
										<div className="heading1">
											<div className="social-area">
												<Link href="/#" className="social">Content</Link>
												<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
											</div>
											<h4><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent and Strategic.</Link></h4>
											<p className="mt-16">Consistency is crucial for success on social media. This guide helps you create an effective content calendar to stay organized.</p>
											<div className="author-area">
												<div className="author">
													<div className="author-tumb">
														<img src="/assets/img/blog/blog1-author4.png" alt="vexon" />
													</div>
													<span className="author-text">Rodger Struck</span>
												</div>
												<div className="date">
													<span><img src="/assets/img/icons/date1.svg" alt="vexon" /> Nov 6, 2025 </span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
									<div className="blog1-single-box mt-30">
										<div className="thumbnail image-anime">
											<img src="/assets/img/blog/blog1-image5.png" alt="vexon" />
										</div>
										<div className="heading1">
											<div className="social-area">
												<Link href="/#" className="social">Trending</Link>
												<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
											</div>
											<h4><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to Adapt </Link></h4>
											<p className="mt-16">The social media landscape evolves quickly. Stay ahead of the curve by understanding key trends for 2025,</p>
											<div className="author-area">
												<div className="author">
													<div className="author-tumb">
														<img src="/assets/img/blog/blog1-author5.png" alt="vexon" />
													</div>
													<span className="author-text">Rhonda Rhodes</span>
												</div>
												<div className="date">
													<span><img src="/assets/img/icons/date1.svg" alt="vexon" /> Nov 6, 2025 </span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
									<div className="blog1-single-box mt-30">
										<div className="thumbnail image-anime">
											<img src="/assets/img/blog/blog1-image6.png" alt="vexon" />
										</div>
										<div className="heading1">
											<div className="social-area">
												<Link href="/#" className="social">Brand Consistency</Link>
												<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
											</div>
											<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
											<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
											<div className="author-area">
												<div className="author">
													<div className="author-tumb">
														<img src="/assets/img/blog/blog1-author5.png" alt="vexon" />
													</div>
													<span className="author-text">Katie Sims</span>
												</div>
												<div className="date">
													<span><img src="/assets/img/icons/date1.svg" alt="vexon" /> Nov 6, 2025 </span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== SOCIAL AREA END=======*/}
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
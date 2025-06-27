

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

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
											<p className="bold">Contact Us</p>
										</div>
										<h1>Contact Us</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA END=======*/}
					{/*===== CONTACT AREA START=======*/}
					<div className="contact-page-sec sp">
						<div className="container">
							<div className="row">
								<div className="col-lg-7 m-auto">
									<div className="heading1 text-center">
										<h2>We’d Love to Hear From You</h2>
										<p className="mt-16">Whether you have questions, feedback, or just want to say hello, we’re here to connect. Your thoughts and insights help us make Vexon better every day, and we’re always excited to hear from our readers.</p>
									</div>
									<div className="contact-page-from">
										<div className="heading1">
											<h5>Leave a Reply</h5>
											<p className="mt-10">Provide clear contact information, including phone number, email, and address.</p>
										</div>
										<form action="#">
											<div className="row">
												<div className="col-md-6">
													<div className="single-input">
														<input type="text" placeholder="First Name" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="single-input">
														<input type="text" placeholder="Last Name" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="single-input">
														<input type="email" placeholder="Email" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="single-input">
														<input type="number" placeholder="Phone" />
													</div>
												</div>
												<div className="col-md-12">
													<div className="single-input">
														<input type="text" placeholder="Subject" />
													</div>
												</div>
												<div className="col-md-12">
													<div className="single-input">
														<textarea rows={5} placeholder="Message" />
													</div>
													<div className="button mt-30">
														<button className="theme-btn1" type="submit">Submit Request</button>
													</div>
												</div>
											</div>
										</form>
									</div>
									<div className="row pt-20">
										<div className="col-lg-4 col-md-6">
											<div className="contact-page-box">
												<div className="icon">
													<img src="/assets/img/icons/contact-page-box1.svg" alt="vexon" />
												</div>
												<div className="heading">
													<h4>Send Email</h4>
													<Link href="/mailto:support@vexon.com">support@vexon.com</Link>
													<Link href="/mailto:contact@vexon.com">contact@vexon.com</Link>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="contact-page-box">
												<div className="icon">
													<img src="/assets/img/icons/contact-page-box2.svg" alt="vexon" />
												</div>
												<div className="heading">
													<h4>Office Address</h4>
													<Link href="/#">8708 Technology Forest Pl Suite 125 -G, The Woodlands</Link>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="contact-page-box">
												<div className="icon">
													<img src="/assets/img/icons/contact-page-box3.svg" alt="vexon" />
												</div>
												<div className="heading">
													<h4>Contact Number</h4>
													<Link href="/tel:123-456-7890">123-456-7890</Link>
													<Link href="/tel:123-456-7890">123-456-7890</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CONTACT AREA END=======*/}
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
import Link from 'next/link'

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	return (
		<>
			<header>
				<div className={`header-area header-area3 d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/">
											<img src="/assets/img/logo/header-logo3.png" alt="vexon" />
										</Link>
									</div>
									<div className="main-menu-ex main-menu-ex1">
										<ul>
											<li>
												<Link href="/#">Home <i className="fa-solid fa-angle-down" /></Link>
												<div className="tp-submenu">
													<div className="row">
														<div className="col-lg-12">
															<div className="all-images-menu">
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/demo/demo1.jpg" alt="vexon" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="header-btn1" href="/">View Page <i className="fa-solid fa-arrow-right" /></Link>
																	</div>
																	<Link className="text" href="/">Modern Blog 01</Link>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/demo/demo2.jpg" alt="vexon" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="header-btn1" href="/index2">View Page <i className="fa-solid fa-arrow-right" /></Link>
																	</div>
																	<Link className="text" href="/index2">Modern Blog 02</Link>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/demo/demo3.jpg" alt="vexon" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="header-btn1" href="/index3">View Page <i className="fa-solid fa-arrow-right" /></Link>
																	</div>
																	<Link className="text" href="/index3">Modern Blog 03</Link>
																</div>
																<div className="homemenu-thumb" style={{ margin: 0 }}>
																	<div className="img1">
																		<img src="/assets/img/demo/demo4.jpg" alt="vexon" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="header-btn1" href="/index4">View Page <i className="fa-solid fa-arrow-right" /></Link>
																	</div>
																	<Link className="text" href="/index5">Modern Blog 04</Link>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
											<li className="dropdown-menu-parrent">
												<Link href="/#" className="main1">Blog <i className="fa-solid fa-angle-down" /></Link>
												<ul>
													<li><Link href="/blog">Blog Format 1</Link></li>
													<li><Link href="/blog2">Blog Format 2</Link></li>
													<li><Link href="/blog3">Blog Format 3</Link></li>
												</ul>
											</li>
											<li className="dropdown-menu-parrent">
												<Link href="/#" className="main1">Single Posts <i className="fa-solid fa-angle-down" /></Link>
												<ul>
													<li><Link href="/blog-details1">Standard Format</Link></li>
													<li><Link href="/blog-details2">Split Format</Link></li>
													<li><Link href="/blog-details3">Overlay Format</Link></li>
													<li><Link href="/blog-details-sidebar-left">Sidebar Left</Link></li>
													<li><Link href="/blog-details-sidebar-right">Sidebar Right</Link></li>
													<li><Link href="/blog-single">Single Post</Link></li>
												</ul>
											</li>
											<li className="dropdown-menu-parrent">
												<Link href="/#" className="main1">Categories <i className="fa-solid fa-angle-down" /></Link>
												<ul>
													<li><Link href="/categories">Categories 01</Link></li>
													<li><Link href="/categories2">Categories 02</Link></li>
												</ul>
											</li>
											<li className="dropdown-menu-parrent">
												<Link href="/#" className="main1">Pages <i className="fa-solid fa-angle-down" /></Link>
												<ul>
													<li><Link href="/author">Author</Link></li>
													<li><Link href="/search">Search Result</Link></li>
													<li><Link href="/contact">Contact Us</Link></li>
													<li><Link href="/social-media">Social Media</Link></li>
													<li><Link href="/404">404</Link></li>
												</ul>
											</li>
											<li className="dropdown-menu-parrent">
												<Link href="/#" className="main1">Account <i className="fa-solid fa-angle-down" /></Link>
												<ul>
													<li><Link href="/login">Login</Link></li>
													<li><Link href="/sigup">Sign Up</Link></li>
													<li><Link href="/forgot">Forgot</Link></li>
													<li><Link href="/reset">Reset Password</Link></li>
													<li><Link href="/verify">Verify</Link></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="header1-buttons">
										<div className="vl-search-top">
											<button className="search-open-btn"><i className="fa-regular fa-magnifying-glass"  onClick={handleSearch}/></button>
										</div>
										<Link className="theme-btn3" href="/blog">Explore Articles </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}

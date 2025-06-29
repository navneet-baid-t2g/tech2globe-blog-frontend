'use client'
import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import { sidebarSliderWidget } from '@/util/SlickOptions'
import SearchBarWidget from '@/components/blog/SearchBarWidget'

type Author = {
    displayName: string;
    description: string;
    profileImage: string;
    socialHandles: {
        facebook: string;
        instagram: string;
        linkedin: string;
        tumblr: string;
        twitter: string;
        youtube: string;
        wikipedia: string;
        pinterest: string;
    };
};

interface SidebarProps {
    author?: Author | null;
}

const Sidebar: React.FC<SidebarProps> = ({ author }) => {
    return (
        <div className="blog1-sidebar-area mt-40 ml-30 sm:ml-0 md:ml-0 md:mt-30 sm:mt-30">
            <SearchBarWidget />

            <div className="sidebar-details-widget_1 _recent-posts mt-40">
                <h3>Recent Post</h3>
                <div className="blog1-recent-box">
                    <div>
                        <div className="recent-thumb">
                            <img src="/assets/img/blog/blog1-recent1.png" alt="vexon" />
                        </div>
                    </div>
                    <div className="heading">
                        <Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 13, 2025</Link>
                        <h5><Link href="/blog-single">The Power of Storytelling: How Make Your Brand’s Voice...</Link></h5>
                    </div>
                </div>
                <div className="blog1-recent-box mt-16">
                    <div>
                        <div className="recent-thumb">
                            <img src="/assets/img/blog/blog1-recent2.png" alt="vexon" />
                        </div>
                    </div>
                    <div className="heading">
                        <Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 12, 2025</Link>
                        <h5><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent Strat...</Link></h5>
                    </div>
                </div>
                <div className="blog1-recent-box mt-16">
                    <div>
                        <div className="recent-thumb">
                            <img src="/assets/img/blog/blog1-recent3.png" alt="vexon" />
                        </div>
                    </div>
                    <div className="heading">
                        <Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 21, 2025</Link>
                        <h5><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to...</Link></h5>
                    </div>
                </div>
                <div className="blog1-recent-box mt-16">
                    <div>
                        <div className="recent-thumb">
                            <img src="/assets/img/blog/blog1-recent4.png" alt="vexon" />
                        </div>
                    </div>
                    <div className="heading">
                        <Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 19, 2025 </Link>
                        <h5><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic &amp; Brand Consi...</Link></h5>
                    </div>
                </div>
            </div>
            {author && (
                <div className="sidebar-details-widget_1 _author-intro mt-40">
                    <div className="sidebar-author-thumb text-center">
                        <img src={author.profileImage} alt={author.displayName} />
                        <h4>{author.displayName}</h4>
                        <div className="heading1">
                            <p>{author.description || "No author bio available."}</p>
                        </div>
                        <div className="footer-social1">
                            <ul>
                                {author.socialHandles.facebook && (
                                    <li>
                                        <Link href={author.socialHandles.facebook}><i className="fa-brands fa-facebook-f" /></Link>
                                    </li>
                                )}
                                {author.socialHandles.linkedin && (
                                    <li>
                                        <Link href={author.socialHandles.linkedin}><i className="fa-brands fa-linkedin-in" /></Link>
                                    </li>
                                )}
                                {author.socialHandles.instagram && (
                                    <li>
                                        <Link href={author.socialHandles.instagram}><i className="fa-brands fa-instagram" /></Link>
                                    </li>
                                )}
                                {author.socialHandles.twitter && (
                                    <li>
                                        <Link href={author.socialHandles.twitter}><i className="fa-brands fa-twitter" /></Link>
                                    </li>
                                )}
                                {author.socialHandles.youtube && (
                                    <li>
                                        <Link href={author.socialHandles.youtube}><i className="fa-brands fa-youtube" /></Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <Slider {...sidebarSliderWidget} className="sidebar-slider-widget mt-40">
                <div className="sidebar-single-slider">
                    <div className="social-top">
                        <Link href="/social-media" className="social">Social Media</Link>
                        <Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
                    </div>
                    <div className="heading-area">
                        <div className="_author-area">
                            <div className="author">
                                <div className="author_thumb">
                                    <img src="/assets/img/blog/blog1-author2.png" alt="vexon" />
                                </div>
                                <span className="author-name">Lorri Warf</span>
                            </div>
                            <span className="date"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 21, 2025</span>
                        </div>
                        <h4><Link href="/blog-single">Handling Negative Feedback: Maintaining Brand Reputation on Social Media</Link></h4>
                    </div>
                </div>
                <div className="sidebar-single-slider">
                    <div className="social-top">
                        <Link href="/social-media" className="social">Social Media</Link>
                        <Link href="/categories" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
                    </div>
                    <div className="heading-area">
                        <div className="_author-area">
                            <div className="author">
                                <div className="author_thumb">
                                    <img src="/assets/img/blog/blog1-author2.png" alt="vexon" />
                                </div>
                                <span className="author-name">Lorri Warf</span>
                            </div>
                            <span className="date"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 21, 2025</span>
                        </div>
                        <h4><Link href="/blog-single">Handling Negative Feedback: Maintaining Brand Reputation on Social Media</Link></h4>
                    </div>
                </div>
                <div className="sidebar-single-slider">
                    <div className="social-top">
                        <Link href="/social-media" className="social">Social Media</Link>
                        <Link href="/categories" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
                    </div>
                    <div className="heading-area">
                        <div className="_author-area">
                            <div className="author">
                                <div className="author_thumb">
                                    <img src="/assets/img/blog/blog1-author2.png" alt="vexon" />
                                </div>
                                <span className="author-name">Lorri Warf</span>
                            </div>
                            <span className="date"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 21, 2025</span>
                        </div>
                        <h4><Link href="/blog-single">Handling Negative Feedback: Maintaining Brand Reputation on Social Media</Link></h4>
                    </div>
                </div>
            </Slider>
            <div className="sidebar-details-widget_1 mt-70 _experience">
                <h3>Work Experience</h3>
                <div className="_experience-box divider">
                    <p className="bold-text">Product Design</p>
                    <p className="normal-text">2020 - Now</p>
                </div>
                <div className="_experience-box divider">
                    <p className="bold-text">Brand Expertise</p>
                    <p className="normal-text">2018 - Now</p>
                </div>
                <div className="_experience-box divider">
                    <p className="bold-text">UI/UX Design</p>
                    <p className="normal-text">2021 - Now</p>
                </div>
                <div className="_experience-box">
                    <p className="bold-text">SEO Expert</p>
                    <p className="normal-text">2019 - Now</p>
                </div>
            </div>
            <div className="sidebar-details-widget_1 instagram-feed mt-40">
                <h3>Instagram Posts</h3>
                <div className="feed-all">
                    <div className="row">
                        <div className="col-4">
                            <div className="feed-single">
                                <div className="image">
                                    <img src="/assets/img/blog/blog1-feed1.png" alt="vexon" />
                                    <Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feed-single">
                                <div className="image">
                                    <img src="/assets/img/blog/blog1-feed2.png" alt="vexon" />
                                    <Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feed-single">
                                <div className="image">
                                    <img src="/assets/img/blog/blog1-feed3.png" alt="vexon" />
                                    <Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feed-single mt-20">
                                <div className="image">
                                    <img src="/assets/img/blog/blog1-feed4.png" alt="vexon" />
                                    <Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feed-single mt-20">
                                <div className="image">
                                    <img src="/assets/img/blog/blog1-feed5.png" alt="vexon" />
                                    <Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feed-single mt-20">
                                <div className="image">
                                    <img src="/assets/img/blog/blog1-feed6.png" alt="vexon" />
                                    <Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/#" className="insta-btn">View on Instagram <span><i className="fa-regular fa-arrow-right" /></span></Link>
            </div>
        </div>)
}

export default Sidebar
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Header extends React.Component {
	componentDidMount() {
		console.log("Header location => pathname: ", this.props.location);
	}

	render() {
		return (
			<header id="masthead" className="site-header clearfix" role="banner">
				<div className="container">
					<div className="row">
						<div className="site-branding col-5 d-flex align-items-center">
							<a href="https://www.axonactive.com/" className="custom-logo-link">
								<img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/images/logo.svg" className="custom-logo" alt="" />
							</a>
							<div className="branding-inner">

							</div>
						</div>
						<div className="col-7 m-0">
							<div className="row d-flex justify-content-end">
								<div className="col-10 d-flex justify-content-end p-0 site-header__searchbox">
									<div className="col-6 col-xl-4 mt-2">
										<div className="row d-flex align-items-center">
											<div className="col-12 p-0">

											</div>
										</div>
									</div>
								</div>
								<div className="col-auto d-flex align-items-center justify-content-end">
									<div className="font-italic langbar text-right mt-2 pc-only" style={{ fontSize: '14px' }}>
										<a className="current-language" href="#">EN</a> |
                                    <a className="" href="http://ja.axonactive.com/">JA</a>
									</div>
								</div>
							</div>
							<nav id="site-navigation" className="main-navigation" role="navigation">
								<div className="menu-header-board-container">
									<ul id="primary-menu" className="menu">
										<li id="menu-item-16" className="menu-item-home menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-16">
											<NavLink to="/">Home</NavLink>
										</li>
										<li id="menu-item-17" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17">
											<Link to="/services">Services</Link>
											<ul className="sub-menu">
												<li id="menu-item-30" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-30">
													<a href="/services/odc">Offshore Development Center</a>
													<ul className="sub-menu">
														<li id="menu-item-498" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-498">
															<a href="/services/odc/web-app-development">Web Application</a>
														</li>
														<li id="menu-item-499" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-499">
															<a href="/services/odc/mobile-app-development">Mobile Development</a>
														</li>
														<li id="menu-item-500" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-500">
															<a href="/services/odc/big-data">Big Data</a>
														</li>
														<li id="menu-item-501" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-501">
															<a href="/services/odc/internet-of-things/">Internet of Things</a>
														</li>
														<li id="menu-item-502" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-502">
															<a href="/services/odc/business-intelligence">Business Intelligence</a>
														</li>
														<li id="menu-item-2189" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2189">
															<a href="/services/odc/fintech">Fintech</a>
														</li>
														<li id="menu-item-2190" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2190">
															<a href="/services/odc/biotech">Biotech</a>
														</li>
													</ul>
												</li>
												<li id="menu-item-31" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-31">
													<a href="/services/otc">Offshore Testing Center</a>
													<ul className="sub-menu">
														<li id="menu-item-503" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-503">
															<a href="/services/otc/automation-testing">Automation Testing</a>
														</li>
														<li id="menu-item-504" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-504">
															<a href="/services/otc/manual-testing">Manual Testing</a>
														</li>
														<li id="menu-item-505" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-505">
															<a href="/services/otc/quality-assurance/">Quality Assurance</a>
														</li>
														<li id="menu-item-506" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-506">
															<a href="/services/otc/software-maintenance">Software Maintenance</a>
														</li>
														<li id="menu-item-507" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-507">
															<a href="/services/otc/system-integration-testing">System Integration Testing</a>
														</li>
													</ul>
												</li>
												<li id="menu-item-468" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-468">
													<a href="#">ICT Services</a>
												</li>
												<li id="menu-item-469" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-469">
													<a href="/services/agile-coaching-ict">Agile Coaching and ICT</a>
												</li>
												<li id="menu-item-472" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-472">
													<a href="#">Portfolio</a>
												</li>
											</ul>
										</li>
										<li id="menu-item-18" className="menu-item-about-us menu-item menu-item-type-custom menu-item-object-custom menu-item-18">
											<NavLink to="/about-us">About us</NavLink>
										</li>
										<li id="menu-item-557" className="menu-item-news menu-item menu-item-type-custom menu-item-object-custom menu-item-557">
											<NavLink to="/news-events">News</NavLink>
										</li>
										<li id="menu-item-19" className="menu-item-careers menu-item menu-item-type-custom menu-item-object-custom menu-item-19">
											<NavLink to="/careers">Careers</NavLink>
										</li>
										<li id="menu-item-21" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-21">
											<NavLink to="/contact" replace>Contact us</NavLink>
										</li>
									</ul>
								</div>
								<hr className="w-50 mobile-only" />
								<div className="mobile-only text-center main-navigation__language">
									<strong>English</strong> /
                                <a href="https://ja.axonactive.com/">Japanese</a>
								</div>
								<div className="btn-close-menu">
									<i className="btn-close-menu__icon"></i>
								</div>
							</nav>
							<div className="btn-menu">
								<i className="icon-menu"></i>
							</div>
						</div>

					</div>
				</div>
			</header>
		);
	}
}

export default Header;
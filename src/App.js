import React, { Component } from 'react';
import Header from './js/Header';
import Section0 from './js/Section0';
import Section1 from './js/Section1';
import Section2 from './js/Section2';
import Section3 from './js/Section3';
import Section4 from './js/Section4';
import Section5 from './js/Section5';
import Section6 from './js/Section6';
import Section7 from './js/Section7';
import Section8 from './js/Section8';
import Section9 from './js/Section9';
import Section10 from './js/Section10';
import './cssModule.js';
import $ from "jquery";
import jQuery from "jquery";

class App extends Component {
	render() {
		return (
			<div id="page" className="site">
				<Header />
				<div id="content">
					<div className="">
						<div id="content" className="page-wrap aa-main-content">
							<div className="content-wrapper">
								<div className="">
									<div id="primary" className="fp-content-area">
										<main id="main" className="site-main" role="main">
											<div className="entry-content">
												<div id="fullpage">
													<Section0 />
													<Section1 />
													<Section2 />
													<Section3 />
													<Section4 />
													<Section5 />
													<Section6 />
													<Section7 />
													<Section8 />
													<Section9 />
													<Section10 />
													{/* <div className="section fp-auto-height-responsive" id="location-mobile"></div>
													<div className="section fp-auto-height-responsive" id="footer-mobile"></div> */}
												</div>
											</div>
											<div className="button-contact-us">
												<a href="/contact"><span className="button-contact-us__around"></span></a>
												<span className="button-contact-us__label">Get a quote</span>
											</div>                                                                          <div className="rotate-device">
												<div className="d-flex justify-content-center align-items-center w-100 h-100">
													<div className="rotate-device__button">
														<div className="rotate-device__button-close p-1">
															<img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/small-device-popup/img/close.svg" />
														</div>
													</div>
													<div className="rotate-device__content">
														<div className="mobile-msg">Please rotate your device to fit display screen</div>
														<div className="tablet-msg">Please rotate your device for better display screen</div>
														<img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/small-device-popup/img/rotate.svg" />
													</div>
												</div>
											</div>
										</main>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

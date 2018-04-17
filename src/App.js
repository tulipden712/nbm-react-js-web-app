import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home/';
import AboutUs from './views/AboutUs/';
import Careers from './views/Careers/';
import Contact from './views/Contact/';
import NewsEvent from './views/NewsEvent/';
import Services from './views/Services/';
import Header from './js/Header';

import './cssModule.js';
import $ from "jquery";
import jQuery from "jquery";

const routes = [
	{
		path: "/",
		exact: true,
		sidebar: Home,
		main: () => <h2>Home</h2>
	},
	{
		path: "/services",
		sidebar: Services,
		main: () => <h2>Services</h2>
	},
	{
		path: "/about-us",
		sidebar: AboutUs,
		main: () => <h2>About-us</h2>
	},
	{
		path: "/news-events",
		sidebar: NewsEvent,
		main: () => <h2>News-events</h2>
	},
	{
		path: "/careers",
		sidebar: Careers,
		main: () => <h2>Careers</h2>
	},
	{
		path: "/contact",
		sidebar: Contact,
		main: () => <h2>Contact</h2>
	}
];

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
												<Switch>
													{routes.map((route, index) => (
														// You can render a <Route> in as many places
														// as you want in your app. It will render along
														// with any other <Route>s that also match the URL.
														// So, a sidebar or breadcrumbs or anything else
														// that requires you to render multiple things
														// in multiple places at the same URL is nothing
														// more than multiple <Route>s.
														<Route
															key={index}
															path={route.path}
															exact={route.exact}
															component={route.sidebar}
														/>
													))}
													<Redirect from="/" to="/home" />
												</Switch>
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

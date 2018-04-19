import React, { Component } from 'react';

class Section10 extends Component {
	componentWillMount() {
	}

	render() {
		return (
			<div className="section" id="section10">
				<img data-src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/bg.jpg" alt="" className="lazy-bg" />
				<div className="footer-section">
					<div className="contact-us section-container">
						<div className="container">
							<div className="">
								<div className="contact-us-content col-12 col-lg-6">
									<div className="row contact-us-content__header animated fadeIn">
										<h1 className="text-xl font-italic">Contact us</h1>
									</div>
								</div>
								<div className="contact-us-content__detail col-12">
									<div className="row">
										<div className="col-12">
											<div className="row mb-3 animate--delay-200 fadeIn animated">
												<div>
													<p>Please feel free to contact us by filling
															the form below or sending email to�
                           <a href="mailto:info@axonactive.com">
															<span className="contact-us-content__detail__mail-link">info@axonactive.com</span>
														</a>. We will be in touch shortly.</p>
												</div>
											</div>
										</div>
										<div className="col-12 p-0">
											<div className="row contact-us-content__detail__form">
												<div className="col-lg-6">
													<div className="col-12 animate--delay-400 fadeIn animated p-0">

														<form method="post" enctype="multipart/form-data">
															<div className="row">
																<div className="col">
																	<input className="form-control text-sm aavn-contact-field__firstname" name="firstname" id="firstname" placeholder="First name (*)"
																		type="text" />
																</div>
																<div className="col">
																	<input className="form-control text-sm aavn-contact-field__lastname" name="lastname" id="lastname" placeholder="Last name (*)"
																		type="text" />
																</div>
															</div>
															<div className="row">
																<div className="col-lg-12 col-lg-12 col-sm-12 mt-3">
																	<input className="form-control text-sm aavn-contact-field__email" name="email" id="email" placeholder="Email address (*)" type="text"
																	/>
																</div>
															</div>
															<div className="row">
																<div className="col-lg-12 col-lg-12 col-sm-12 mt-3">
																	<input className="form-control text-sm aavn-contact-field__company" name="company" id="company" placeholder="Company" type="text"
																	/>
																</div>
															</div>
															<div className="row">
																<div className="col-lg-12 col-lg-12 col-sm-12 mt-3">
																	<textarea className="form-control text-sm aavn-contact-field__enquiry" placeholder="Enquiry (*)" rows="2"
																		name="enquiry" id="enquiry"></textarea>
																</div>
															</div>
															<input type="hidden" id="aa_contact_us_field" name="aa_contact_us_field" value="59ff200f59" />
															<input type="hidden" name="_wp_http_referer"
																value="/" />
															<div className="row mt-3">
																<div className="col-12 col-lg-6 g-recaptcha-box">
																	<div id="recaptcha" className="google-recaptcha g-recaptcha w-100 h-100" data-callback="onloadCallback" data-theme="light" data-sitekey="6LcyYSgTAAAAABUX4fImsO62-tuIha4pTw32a1Hl"></div>

																	<input type="text" name="hidden_recaptcha" id="hidden_recaptcha" />

																</div>
																<div className="col-6 col-lg-6">
																	<p>
																		<a className="w-100 d-flex justify-content-center btn explore-btn px-5 contact-us-submit">Submit <i className="icon-inside-btn d-flex align-items-center" aria-hidden="true"></i>
																		</a>
																	</p>
																</div>
															</div>
															{/* <div className="contact-us-validation fadeIn animated">
                                                                        <span className="contact-us-validation__close_btn"></span>
                                                                        <div className="col mt-2">
                                                                            <ul className="contact-us-validation__message">
                                                                            </ul>
                                                                        </div>
                                                                    </div> */}
														</form>


													</div>
												</div>
												<div className="col-lg-6 contact-info mt-3 mt-sm-3 mt-md-0 mt-lg-0">
													<div className="row animate--delay-800 ml-0 fadeIn animated pl-lg-5">
														<ul className="col-12 contact-us-content__detail__contact">
															<li className="contact-us-content__detail__contact-head mb-1">
																<a href="#">
																	<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />Head office - Ho Chi Minh City</a>
																<div className="contact-info-detail active">
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
																			<div className="contact-us-content__detail__contact-add__desc col-9">
																				<a href="https://www.google.com/maps/place/Axon+Active+Vietnam/@10.8093991,106.6616457,17z/data=!4m8!1m2!2m1!1s39B+Truong+Son+Str,+Tan+Binh+Dist.,+HCMC!3m4!1s0x3175293cb57e2cad:0x8f2bef857837085f!8m2!3d10.8092065!4d106.6641128"
																					target="_blank"
																					rel="noopener">Hai Au Building
																					10th
																					Floor,
																					39B Truong
																					Son Street,
																					Ward
																					4, Tan
																					Binh
																					District,
																					Ho Chi
                                                                                    Minh City,Vietnam</a>
																			</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
																			<div className="col-9">+84.28.71 09
                                                                                                                1234</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Fax:</div>
																			<div className="col-9">+84.28.629 738
                                                                                                                86</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
																			<div className="col-9">info@axonactive.com</div>
																		</div>
																	</div>
																</div>
															</li>


															<li className="contact-us-content__detail__contact-head mb-1">
																<a href="#">
																	<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />Da Nang</a>
																<div className="contact-info-detail ">
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
																			<div className="contact-us-content__detail__contact-add__desc col-9">
																				<a href="https://www.google.com/maps/place/Axon+Active+Vietnam/@16.0409761,108.2183043,17z/data=!3m1!4b1!4m5!3m4!1s0x314219e9fae5b5f3:0x938e9d3475a89baf!8m2!3d16.040971!4d108.220493"
																					target="_blank"
																					rel="noopener">PVcomBank
																					Building
																					13th
																					Floor,
																					30/4
																					Street,
																					Hai Chau
																					District,
																					Da Nang,
                                                                                                                    Vietnam</a>
																			</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
																			<div className="col-9">+84.236.71 09
                                                                                                                123</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
																			<div className="col-9">info@axonactive.com</div>
																		</div>
																	</div>
																</div>
															</li>


															<li className="contact-us-content__detail__contact-head mb-1">
																<a href="#">
																	<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />Can Tho</a>
																<div className="contact-info-detail ">
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
																			<div className="contact-us-content__detail__contact-add__desc col-9">
																				<a href="https://www.google.com/maps/place/Axon+Active+Vietnam/@10.0491946,105.7750347,18z/data=!3m1!4b1!4m5!3m4!1s0x31a08806aaa38811:0x1d0d8af2d0462a3b!8m2!3d10.049192!4d105.776129"
																					target="_blank"
																					rel="noopener">Toyota Ninh
																					Kieu
																					Building
																					3rd Floor,
																					57-59A
																					Cach
																					Mang
																					Thang
																					Tam Street,
																					Ninh
																					Kieu
																					District,
																					Can Tho,
                                                                                                                    Vietnam</a>
																			</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
																			<div className="col-9">+84.28.71 09
                                                                                                                1234</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
																			<div className="col-9">info@axonactive.com</div>
																		</div>
																	</div>
																</div>
															</li>


															<li className="contact-us-content__detail__contact-head mb-1">
																<a href="#">
																	<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />San Francisco</a>
																<div className="contact-info-detail ">
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
																			<div className="contact-us-content__detail__contact-add__desc col-9">
																				<a href="https://www.google.com/maps/place/Axon+Active+Inc./@37.7849172,-122.4129357,17z/data=!3m1!4b1!4m5!3m4!1s0x8085808f9025ce29:0x88675a56056af0ac!8m2!3d37.784913!4d-122.410747?hl=vi"
																					target="_blank"
																					rel="noopener">281 Ellis
																					Str.,
																					San Francisco,
                                                                                                                    CA, USA</a>
																			</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
																			<div className="col-9">+1.415.76 11
                                                                                                                824</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
																			<div className="col-9">info@axonactive.com</div>
																		</div>
																	</div>
																</div>
															</li>


															<li className="contact-us-content__detail__contact-head mb-1">
																<a href="#">
																	<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />Luzern</a>
																<div className="contact-info-detail ">
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
																			<div className="contact-us-content__detail__contact-add__desc col-9">
																				<a href="https://www.google.com/maps/place/Axon+Active+Inc./@47.0504279,8.2953462,17z/data=!4m8!1m2!2m1!1sSchl%C3%B6ssli+Sch%C3%B6negg,+Wilhelmsh%C3%B6he,+Luzern+6003,+Switzerland!3m4!1s0x478ffb0b2df2e3a1:0x5b40af4685e176d7!8m2!3d47.0502456!4d8.2978078"
																					target="_blank"
																					rel="noopener">Schl�ssli
																					Sch�negg,
																					Wilhelmsh�he,
																					Luzern
                                                                                    6003, Switzerland</a>
																			</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
																			<div className="col-9">+41.41.24 92
                                                                                                                570</div>
																		</div>
																	</div>
																	<div className="contact-us-content__detail__contact-add">
																		<div className="row">
																			<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
																			<div className="col-9">info@axonactive.com</div>
																		</div>
																	</div>
																</div>
															</li>


														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="footer fadeIn animated">
							<div className="container contact-us-content__detail-footer">
								<div className="row m-0">
									<div className="col-6 col-lg-2 p-0">
										<ul className="pl-lg-0">
											<li className="title-top-no-image">
												<a className="font-weight-bold" href="https://www.axonactive.com/services/odc/">ODC</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/odc/web-app-development/">Web App Development</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/odc/mobile-app-development/">Mobile App Development</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/odc/internet-of-things/">IoT Development</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/odc/big-data/">Big Data</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/odc/business-intelligence/">Business Intelligence</a>
											</li>

										</ul>
									</div>
									<div className="col-6 col-lg-2 p-0">
										<ul className="pl-lg-0">
											<li className="title-top-no-image">
												<a className="font-weight-bold" href="https://www.axonactive.com/services/otc/">OTC</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/otc/quality-assurance/">Quality Assurance</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/otc/software-maintenance/">Software Maintenance</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/otc/system-integration-testing/">System Integration Testing</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/otc/manual-testing/">Manual Testing</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/services/otc/automation-testing/">Automation Testing</a>
											</li>

										</ul>
									</div>
									<div className="col-6 col-lg-2 p-0">
										<ul className="pl-lg-0">
											<li className="title-top-no-image">
												<a className="font-weight-bold" href="https://www.axonactive.com/about-us/">About Us</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/about-us/agile-software-development/">How We Work</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/about-us/#2008">Who We Are</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/news-events/">News</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/careers/">Careers</a>
											</li>


											<li className="contact-us-content__detail-footer-menu-link">
												<a href="https://www.axonactive.com/contact/">Contact Us</a>
											</li>

										</ul>
									</div>
									<div className="col-6 col-lg-2 pl-lg-0 p-0">
										<ul className="pl-0 col-12">
											<li className="title-top-no-image">
												<a className="font-weight-bold cursor-default">Career Contact</a>
											</li>

											<li className="contact-us-content__detail-footer-menu-link">
												<div className="row">
													<div className="col-4 pr-0">Email:</div>
													<div className="col-8 p-0">
														<a href="mailto:job@axonactive.com" target="_top">job@axonactive.com</a>
													</div>
												</div>
											</li>
											<li className="contact-us-content__detail-footer-menu-link">
												<div className="row">
													<div className="col-4 pr-0">Skype:</div>
													<div className="col-8 p-0">
														<a href="skype:axon.job" target="_top">axon.job</a>
													</div>
												</div>
											</li>
											<li className="contact-us-content__detail-footer-menu-link">
												<div className="row">
													<div className="col-4 pr-0">Tel:</div>
													<div className="col-8 p-0">
														<a href="tel:+842871091234" target="_top">+84 28 7109 1234
                                                                                            <br />(ext: 102)</a>
													</div>
												</div>
											</li>

										</ul>
									</div>
									<div className="col-6 col-lg-2 p-0">
										<ul className="pl-lg-0 mr-3">

											<li className="title-top-no-image">
												<a className="font-weight-bold" href="https://partnercenter.microsoft.com/en-us/pcv/solution-providers/axon-active-vietnam_4298586967/1061189_2"
													target="_blank">Certificates</a>
											</li>
											<li className="contact-us-content__detail-footer-menu-link pr-lg-4">
												<a className="font-weight-bold" href="https://partnercenter.microsoft.com/en-us/pcv/solution-providers/axon-active-vietnam_4298586967/1061189_2"
													target="_blank">
													<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/microsoft-gold-member-deac.png" alt="" />
												</a>
											</li>

										</ul>
									</div>
									<div className="col-6 col-lg-2 p-0">
										<div className="pl-lg-0">
											<div className="title-top-no-image">
												<a className="font-weight-bold font-italic cursor-default">Follow Us</a>
											</div>
											<div>


												<div className="row p-0">

													<div className="col pb-2">
														<a target="_blank" href="https://www.facebook.com/AxonActiveVietnam">
															<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/facebook.svg" alt="" />
														</a>
													</div>


													<div className="col pb-2">
														<a target="_blank" href="http://www.meetup.com/Scrum-Breakfast-Vietnam-Agile-and-Scrum-Meetup/">
															<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/flickr.svg" alt="" />
														</a>
													</div>


													<div className="col pb-2">
														<a target="_blank" href="https://plus.google.com/113862750603505476555/posts">
															<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/ggplus.svg" alt="" />
														</a>
													</div>


													<div className="col pb-2">
														<a target="_blank" href="http://www.linkedin.com/company/axon-active-vietnam-ltd-">
															<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/linkedin.svg" alt="" />
														</a>
													</div>

												</div>
												<div className="row p-0">

													<div className="col pb-2">
														<a target="_blank" href="http://www.slideshare.net/AxonActiveVietnam">
															<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/slideshare.svg" alt="" />
														</a>
													</div>


													<div className="col pb-2">
														<a target="_blank" href="http://twitter.com/#!/AxonActiveVN">
															<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/twitter.svg" alt="" />
														</a>
													</div>
													<div className="col pb-2">
														<a target="_blank" href="http://www.xing.com/companies/axonactivevietnamco.ltd.">
															<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/xing.svg" alt="" />
														</a>
													</div>
													<div className="col pb-2">
														<a target="_blank" href="https://www.youtube.com/AxonActiveVietnam">
															<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/youtube.svg" alt="" />
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="footer-coppy-right py-lg-1">
								<section className="container row">
									<div className="col-5 d-flex justify-content-start p-0">
										<div className="aa-text-footer-left">
											AXON ACTIVE VIETNAM � 2018 | All Rights Reserved </div>
									</div>
									<div className="col-7 d-flex justify-content-end p-0">
										<div className="aa-text-footer-right">
											<a href="https://www.axonactive.com/sitemap/">Sitemap</a>
											&nbsp;|&nbsp;
                                            <a href="https://www.axonactive.com/privacy-policy/">Privacy Policy</a>
											&nbsp;|&nbsp;
                                            <a href="https://www.axonactive.com/terms-conditions/">Terms & Conditions</a>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-section mobile-only">
					<div className="footer fadeIn animated">
						<div className="col-12 mobile-only mobile-title">
							<h1 className="text-xl text-right font-italic">
								Our locations </h1>
						</div>
						<div className="container contact-us-content__detail-footer mt-3">
							<div className="row m-0 pb-3">
								<div className="col-12 contact-info mt-3 mt-sm-3 mt-md-0 mt-lg-0">

									<div className="row animate--delay-800 fadeIn animated">
										<ul className="col-12 contact-us-content__detail__contact">


											<li className="contact-us-content__detail__contact-head mb-1">
												<a>
													<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />Head office - Ho Chi Minh City</a>
												<div className="contact-info-detail active">
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
															<div className="contact-us-content__detail__contact-add__desc col-9">
																<a href="https://www.google.com/maps/place/Axon+Active+Vietnam/@10.8093991,106.6616457,17z/data=!4m8!1m2!2m1!1s39B+Truong+Son+Str,+Tan+Binh+Dist.,+HCMC!3m4!1s0x3175293cb57e2cad:0x8f2bef857837085f!8m2!3d10.8092065!4d106.6641128"
																	target="_blank" rel="noopener">Hai Au Building 10th Floor,
																	39B Truong Son Street,
																	Ward 4, Tan Binh District,
                                                                                                    Ho Chi Minh City, Vietnam</a>
															</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
															<div className="col-9">+84.28.71 09 1234</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Fax:</div>
															<div className="col-9">+84.28.629 738 86</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
															<div className="col-9">info@axonactive.com</div>
														</div>
													</div>
												</div>
											</li>


											<li className="contact-us-content__detail__contact-head mb-1">
												<a>
													<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />Da Nang</a>
												<div className="contact-info-detail ">
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
															<div className="contact-us-content__detail__contact-add__desc col-9">
																<a href="https://www.google.com/maps/place/Axon+Active+Vietnam/@16.0409761,108.2183043,17z/data=!3m1!4b1!4m5!3m4!1s0x314219e9fae5b5f3:0x938e9d3475a89baf!8m2!3d16.040971!4d108.220493"
																	target="_blank" rel="noopener">PVcomBank Building 13th Floor,
																	30/4 Street, Hai Chau
                                                                                                    District, Da Nang, Vietnam</a>
															</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
															<div className="col-9">+84.236.71 09 123</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
															<div className="col-9">info@axonactive.com</div>
														</div>
													</div>
												</div>
											</li>


											<li className="contact-us-content__detail__contact-head mb-1">
												<a>
													<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />Can Tho</a>
												<div className="contact-info-detail ">
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
															<div className="contact-us-content__detail__contact-add__desc col-9">
																<a href="https://www.google.com/maps/place/Axon+Active+Vietnam/@10.0491946,105.7750347,18z/data=!3m1!4b1!4m5!3m4!1s0x31a08806aaa38811:0x1d0d8af2d0462a3b!8m2!3d10.049192!4d105.776129"
																	target="_blank" rel="noopener">Toyota Ninh Kieu Building
																	3rd Floor, 57-59A Cach
																	Mang Thang Tam Street,
																	Ninh Kieu District, Can
                                                                                                    Tho, Vietnam</a>
															</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
															<div className="col-9">+84.28.71 09 1234</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
															<div className="col-9">info@axonactive.com</div>
														</div>
													</div>
												</div>
											</li>


											<li className="contact-us-content__detail__contact-head mb-1">
												<a>
													<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />San Francisco</a>
												<div className="contact-info-detail ">
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
															<div className="contact-us-content__detail__contact-add__desc col-9">
																<a href="https://www.google.com/maps/place/Axon+Active+Inc./@37.7849172,-122.4129357,17z/data=!3m1!4b1!4m5!3m4!1s0x8085808f9025ce29:0x88675a56056af0ac!8m2!3d37.784913!4d-122.410747?hl=vi"
																	target="_blank" rel="noopener">281 Ellis Str., San Francisco,
                                                                                                    CA, USA</a>
															</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
															<div className="col-9">+1.415.76 11 824</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
															<div className="col-9">info@axonactive.com</div>
														</div>
													</div>
												</div>
											</li>


											<li className="contact-us-content__detail__contact-head mb-1">
												<a>
													<img className="mb-1 mr-1" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/contact-us/img/pin.svg" />Luzern</a>
												<div className="contact-info-detail ">
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Add:</div>
															<div className="contact-us-content__detail__contact-add__desc col-9">
																<a href="https://www.google.com/maps/place/Axon+Active+Inc./@47.0504279,8.2953462,17z/data=!4m8!1m2!2m1!1sSchl%C3%B6ssli+Sch%C3%B6negg,+Wilhelmsh%C3%B6he,+Luzern+6003,+Switzerland!3m4!1s0x478ffb0b2df2e3a1:0x5b40af4685e176d7!8m2!3d47.0502456!4d8.2978078"
																	target="_blank" rel="noopener">Schl�ssli Sch�negg, Wilhelmsh�he,
                                                                                                    Luzern 6003, Switzerland</a>
															</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Tel:</div>
															<div className="col-9">+41.41.24 92 570</div>
														</div>
													</div>
													<div className="contact-us-content__detail__contact-add">
														<div className="row">
															<div className="contact-us-content__detail__contact-add__prefix pl-4 col-3">Email:</div>
															<div className="col-9">info@axonactive.com</div>
														</div>
													</div>
												</div>
											</li>


										</ul>
									</div>
								</div>
								<div className="w-100 py-4">
									<hr className="p-0 m-0" />
								</div>
								<div className="col-9 p-0">
									<ul className="pl-lg-0">
										<li className="title-top-no-image">
											<a className="font-weight-bold cursor-default">Career Contact</a>
										</li>

										<li className="contact-us-content__detail-footer-menu-link">
											<div className="row">
												<div className="col-4 pr-0 font-weight-bold">Email:</div>
												<div className="col-8 p-0">
													<a href="mailto:job@axonactive.com" target="_top">job@axonactive.com</a>
												</div>
											</div>
										</li>
										<li className="contact-us-content__detail-footer-menu-link">
											<div className="row">
												<div className="col-4 pr-0 font-weight-bold">Skype:</div>
												<div className="col-8 p-0">
													<a href="skype:axon.job" target="_top">axon.job</a>
												</div>
											</div>
										</li>
										<li className="contact-us-content__detail-footer-menu-link">
											<div className="row">
												<div className="col-4 pr-0 font-weight-bold">Tel:</div>
												<div className="col-8 p-0">
													<a href="tel:+842871091234" target="_top">+84 28 7109 1234
                                                                                        <br />(ext: 102)</a>
												</div>
											</div>
										</li>

									</ul>
								</div>
								<div className="w-100 py-4">
									<hr className="p-0 m-0" />
								</div>
								<div className="col-6 p-0">
									<ul className="pl-lg-0">
										<li className="title-top-no-image">
											<a className="font-weight-bold" href="https://www.axonactive.com/services/odc/">ODC</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/odc/web-app-development/">Web App Development</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/odc/mobile-app-development/">Mobile App Development</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/odc/internet-of-things/">IoT Development</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/odc/big-data/">Big Data</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/odc/business-intelligence/">Business Intelligence</a>
										</li>

									</ul>
								</div>
								<div className="col-6 p-0">
									<ul className="pl-lg-0">
										<li className="title-top-no-image">
											<a className="font-weight-bold" href="https://www.axonactive.com/services/otc/">OTC</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/otc/quality-assurance/">Quality Assurance</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/otc/software-maintenance/">Software Maintenance</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/otc/system-integration-testing/">System Integration Testing</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/otc/manual-testing/">Manual Testing</a>
										</li>


										<li className="contact-us-content__detail-footer-menu-link">
											<a href="https://www.axonactive.com/services/otc/automation-testing/">Automation Testing</a>
										</li>

									</ul>
								</div>
								<div className="w-100 py-4">
									<hr className="p-0 m-0" />
									<div className="hr-line w-100 d-flex justify-content-center">
										<a href="#" id="go-top">
											<img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/back-to-top.svg" alt="" />
										</a>
									</div>
								</div>
								<div className="col-6 p-0">
									<ul className="pl-lg-0 mr-3">
										<li className="title-top-no-image">
											<a className="font-weight-bold" href="https://partnercenter.microsoft.com/en-us/pcv/solution-providers/axon-active-vietnam_4298586967/1061189_2"
												target="_blank">Certificates</a>
										</li>
										<li className="contact-us-content__detail-footer-menu-link pr-lg-4">
											<a className="font-weight-bold" href="https://partnercenter.microsoft.com/en-us/pcv/solution-providers/axon-active-vietnam_4298586967/1061189_2"
												target="_blank">
												<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/microsoft-gold-member-deac.png" alt="" />
											</a>
										</li>
									</ul>
								</div>
								<div className="col-6 p-0">
									<div className="pl-lg-0">
										<div className="title-top-no-image">
											<a className="font-weight-bold font-italic cursor-default">Follow Us</a>
										</div>
										<div>

											<div className="row p-0">

												<div className="col pb-2">
													<a target="_blank" href="https://www.facebook.com/AxonActiveVietnam">
														<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/facebook.svg" alt="" />
													</a>
												</div>


												<div className="col pb-2">
													<a target="_blank" href="http://www.meetup.com/Scrum-Breakfast-Vietnam-Agile-and-Scrum-Meetup/">
														<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/flickr.svg" alt="" />
													</a>
												</div>


												<div className="col pb-2">
													<a target="_blank" href="https://plus.google.com/113862750603505476555/posts">
														<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/ggplus.svg" alt="" />
													</a>
												</div>


												<div className="col pb-2">
													<a target="_blank" href="http://www.linkedin.com/company/axon-active-vietnam-ltd-">
														<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/linkedin.svg" alt="" />
													</a>
												</div>

											</div>
											<div className="row p-0">

												<div className="col pb-2">
													<a target="_blank" href="http://www.slideshare.net/AxonActiveVietnam">
														<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/slideshare.svg" alt="" />
													</a>
												</div>


												<div className="col pb-2">
													<a target="_blank" href="http://twitter.com/#!/AxonActiveVN">
														<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/twitter.svg" alt="" />
													</a>
												</div>


												<div className="col pb-2">
													<a target="_blank" href="http://www.xing.com/companies/axonactivevietnamco.ltd.">
														<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/xing.svg" alt="" />
													</a>
												</div>


												<div className="col pb-2">
													<a target="_blank" href="https://www.youtube.com/AxonActiveVietnam">
														<img src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/youtube.svg" alt="" />
													</a>
												</div>

											</div>


										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="footer-coppy-right py-lg-1">
							<section className="container row">
								<div className="col-5 d-flex justify-content-start p-0">
									<div className="aa-text-footer-left">
										<span>AXON ACTIVE VIETNAM</span> � 2018 | All Rights Reserved
                  </div>
								</div>
								<div className="col-7 d-flex justify-content-end p-0">
									<div className="aa-text-footer-right">
										<a href="https://www.axonactive.com/sitemap/">Sitemap</a>
										&nbsp;|&nbsp;
                    <a href="https://www.axonactive.com/privacy-policy/">Privacy Policy</a>
										&nbsp;|&nbsp;
                    <a href="https://www.axonactive.com/terms-conditions/">Terms & Conditions</a>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Section10;
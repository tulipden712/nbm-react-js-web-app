import React, { Component } from 'react';

class Section1 extends Component {
    render() {
        return (
            <div className="section fp-auto-height-responsive" id="section1">
                <img data-src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/home/sections/our-service/img/bg.jpg" alt="" className="lazy-bg" />
                <div className="container">
                    <div className="row service section-container">
                        <div className="mobile-only text-xl text-center font-italic my-5">"We do what we say, <br /> We say what we do."</div>
                        <div className="mobile-only text-right h5 mobile-title font-italic col-12 mb-3">
                            <h1 className="text-xl">Our services</h1>
                        </div>
                        <div className="service-content col-12 col-lg-6 offset-lg-6">
                            <span className="h1 text-xl font-italic fadeIn animated mb-3 pc-only">Services</span>
                            <div className="service-content__header ">
                                <div className="row row-eq-height h6 fadeIn animated">
                                    <div className="tab-menu col font-italic d-flex active" data-target="odc-content">Offshore
                                        <br /> Development
                                        <br /> Center
                                    </div>
                                    <div className="col text-center px-0 tab-separator">
                                        <img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/tab-separator.svg"
                                            className="h-100" alt="" />
                                    </div>
                                    <div className="tab-menu col font-italic d-flex justify-content-center" data-target="otc-content">Offshore
                                        <br /> Testing
                                        <br /> Center
                                    </div>
                                    <div className="col text-center px-0 tab-separator">
                                        <img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/tab-separator.svg"
                                            className="h-100" alt="" />
                                    </div>
                                    <div className="tab-menu col font-italic d-flex" data-target="other-services">Other
                                                                        <br /> Services</div>
                                </div>
                            </div>
                            <div className="service-content__detail tab-content odc-content" id="">
                                <p className="fadeInRight animated my-3">Start developing today with a team of 5 or more software
                                    engineers, equipped with modern work station and required
                                    technologies. This is an <span className="font-weight-bold font-italic h6">instant skill extension</span> and labor add-on to your in-house development team.</p>
                                <ul className="h6 font-weight-light font-italic list-arrow-icon fadeInRight animated animate--delay-400">
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/odc/web-app-development">Web App Development</a>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/odc/mobile-app-development">Mobile App Development</a>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/odc/big-data">Big Data</a>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/odc/business-intelligence">Business Intelligence</a>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/odc/internet-of-things">Internet of Things</a>
                                    </li>
                                </ul>
                                <p>
                                    <a className="d-flex justify-content-center mt-3 btn explore-btn explore-btn--orange fadeIn animated animate--delay-1200"
                                        href="/services/odc">Explore More <i className="icon-inside-btn d-flex align-items-center" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                            <div className="service-content__detail tab-content otc-content" id="">
                                <p className="fadeInRight animated my-3">Our OTC service provides you experienced test engineers with
                                    skills fitted to your specific requirements. The offshore
                                    team will <span className="font-weight-bold font-italic h6">work exclusively for you</span> and closely with your in-house development team.</p>
                                <ul className="h6 font-weight-light font-italic list-arrow-icon fadeInRight animated animate--delay-400">
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/otc/quality-assurance">Quality Assurance</a>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/otc/system-integration-testing">System Integration Testing</a>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/otc/automation-testing">Automation Testing</a>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/otc/software-maintenance">Software Maintenance</a>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <a className="service-content__detail-link" href="/services/otc/manual-testing">Manual Testing</a>
                                    </li>
                                </ul>
                                <p>
                                    <a className="d-flex justify-content-center mt-3 btn explore-btn explore-btn--orange fadeIn animated animate--delay-1000"
                                        href="/services/otc">Explore More <i className="icon-inside-btn d-flex align-items-center" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                            <div className="tab-content my-3 other-services" id="">
                                <div className="fadeInRight animated">
                                    <div className="font-weight-bold font-italic h6">Outsourcing ICT services</div>
                                    <p>We provide <span className="font-weight-bold">ICT team-as-a-service</span>, delivering powerful add-on ICT team to your company. Our outsourcing ICT engineers take care of infrastructure setup, maintenance, security, upgrade and cloud server services to help you stay focus on your core business.</p>
                                </div>
                                <div className="fadeInRight animated animate--delay-200">
                                    <div className="font-weight-bold font-italic h6">Agile coaching</div>
                                    <p>Agile can help solve complex problems, improve final
                                        product quality and increase business value. Our
                                        Agile coaching service will <span className="font-weight-bold font-italic h6"> guide you through difficulties</span> during the organizational transition to Agile.</p>
                                </div>
                                <p>
                                    <a className="d-flex justify-content-center mt-3 btn explore-btn explore-btn--orange fadeIn animated animate--delay-1000"
                                        href="/services/agile-coaching-ict/">Explore More <i className="icon-inside-btn d-flex align-items-center" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1;
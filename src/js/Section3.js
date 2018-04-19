import React, { Component } from 'react';

class Section3 extends Component {
    render() {
        return (
            <div className="section" id="section3">
                <img data-src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/home/sections/exclusive-team/img/bg.jpg"
                    alt="" className="lazy-bg" />
                <div className="container">
                    <div className="row exclusiveness section-container">
                        <div className="col-12 col-lg-6 exclusiveness__header fadeIn animated pc-only">
                            <h1 className="text-xl font-italic">Relationship can?t be shared.</h1>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-12 col-lg-5">
                            <h1 className="text-xl font-italic exclusiveness__header fadeIn animated pc-only">So is your development team.</h1>
                            <p className="animate--delay-0 fadeInLeft animated my-3">We believe that foundation for a long lasting relationship is
                                made of loyalty and trust. At Axon Active, we promise you
                                an
                                                                <span className="font-weight-bold font-italic h6">exclusive and dedicated</span> engineer team that puts you
                                                                first.</p>
                            <ul className="animate--delay-100 fadeInLeft animated mb-2">
                                <li className="mb-1">Higher flexibility</li>
                                <li className="mb-1">Easy to scale</li>
                                <li className="mb-1">Absolute concentration</li>
                                <li className="mb-1">Full control</li>
                                <li className="mb-1">Shorter time-to-market</li>
                            </ul>
                            <p>
                                <a className="d-flex justify-content-center btn explore-btn explore-btn--green animate--delay-900 fadeIn animated mt-3"
                                    href="/contact">Get a quote
                                                                    <i className="icon-inside-btn d-flex align-items-center"
                                        aria-hidden="true"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section3;
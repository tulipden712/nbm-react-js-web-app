import React, { Component } from 'react';

class Section2 extends Component {
    render() {
        return (
            <div className="section fp-auto-height-responsive" id="section2">
                <img data-src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/home/sections/benefits/img/bg.jpg"
                    alt="" className="lazy-bg" />
                <div className="container">
                    <div className="row benefits section-container">
                        <div className="col-12 col-lg-6 offset-lg-6 benefits-content__header fadeIn animated mobile-title pb-lg-3 mt-5 mt-lg-0">
                            <h1 className="text-xl font-italic ml-lg-4">Our sign is
                                                                <br className="mobile-only" /> our promise.</h1>
                        </div>
                        <div className="benefits-content col-12 col-lg-6 offset-lg-6">
                            <div className="benefits-content__detail ml-lg-4 pc-only">
                                <div className="text-lg benefit-pl-1 fadeInRight animated py-3">Trustworthy</div>
                                <div className="text-lg benefit-pl-2 fadeInRight animated animate--delay-200 py-3">Transparent</div>
                                <div className="text-lg benefit-pl-3 fadeInRight animated animate--delay-400 py-3">Sustainable</div>
                                <div className="text-lg benefit-pl-4 fadeInRight animated animate--delay-600 py-3">Professional</div>
                                <div className="text-lg benefit-pl-5 fadeInRight animated animate--delay-800 py-3">Flexible</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section2;
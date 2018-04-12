import React, { Component } from 'react';

class Section0 extends Component {
    render() {
        return (
            <div className="section" id="section0">
                <div id="header-video">
                    <source src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/video/intro.mp4" type="video/mp4" />
                </div>
                <div className="layer">
                    <div className="container ">
                        <div className="col-12 header-content section-container col-lg-5 offset-lg-7 text-right p-0 pl-3">
                            <div className="animated fadeInRight animate--delay-1500">
                                <div className="h1 pc-only text-xl font-italic">We exist in two places</div>
                                <div className="h1 pc-only text-xl font-italic">Here, and where you are.</div>
                                <br />
                                <div className="mobile-h1"> Welcome to your offshore software center
                                                                    <a className="pc-only"
                                        href="#services">
                                        <img className="animated infinite bounce-arrow" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/down-arrow.svg"
                                            alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="mobile-only down-arrow-btn">
                    <img className="animated infinite bounce-arrow" src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/down-arrow.svg"
                        alt="" />
                </span>

            </div>
        );
    }
}

export default Section0;
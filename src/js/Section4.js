import React, { Component } from 'react';

class Section4 extends Component {
    render() {
        return (
            <div className="section" id="section4">
                <img data-src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/home/sections/our-project/img/bg.jpg"
                    alt="" className="lazy-bg" />
                <div className="container">

                    <div className="row portfolio section-container">
                        <div className="col-12 col-lg-6 fadeIn animated mobile-title mt-5 mt-lg-0">
                            <h1 className="text-xl font-italic">Our Portfolio</h1>
                        </div>
                        <div className="our-portfolio-content col-12 col-lg-6">
                            <div className="our-portfolio-content__header ">
                                <div className="row my-4 h6 fadeIn animated animate--delay-200">
                                    <div data-target="highlight-tab-content" className="col font-italic orange d-flex align-items-center tab-menu active">Highlight
                                                                        <br />Projects</div>
                                    <div className="col text-center px-0 our-portfolio-content__header__tab-separator">
                                        <img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/tab-separator.svg"
                                            className="h-100" alt="" />
                                    </div>
                                    <div data-target="technology-tab-content" className="col font-italic d-flex align-items-center  justify-content-center tab-menu">By
                                                                        <br />Technology</div>
                                    <div className="col text-center px-0 our-portfolio-content__header__tab-separator">
                                        <img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/tab-separator.svg"
                                            className="h-100" alt="" />
                                    </div>
                                    <div data-target="industry-tab-content" className="col font-italic d-flex align-items-center tab-menu">By
                                                                        <br />Industry</div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content highlight-tab-content col-12 col-lg-4  fadeIn animated animate--delay-400">
                            <div className="carousel" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item animated fadeIn active">
                                        <a href="https://www.axonactive.com/account-opening-postfinance/">
                                            <img className="d-block w-100 h-100 portfolio-photo d-block" data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/postfinance.png" />
                                        </a>
                                    </div>
                                    <div className="carousel-item animated fadeIn ">
                                        <a href="https://www.axonactive.com/evolveit/">
                                            <img className="d-block w-100 h-100 portfolio-photo d-block" data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/evolveit.png" />
                                        </a>
                                    </div>
                                    <div className="carousel-item animated fadeIn ">
                                        <a href="https://www.axonactive.com/lake-lucerne/">
                                            <img className="d-block w-100 h-100 portfolio-photo d-block" data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/lake-lucern.png" />
                                        </a>
                                    </div>
                                    <div className="carousel-item animated fadeIn ">
                                        <a href="https://www.axonactive.com/metabiota-gemm/">
                                            <img className="d-block w-100 h-100 portfolio-photo d-block" data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/metabiota.png" />
                                            <video className="w-100 h-100 fadeIn animated d-none" controls="false" autoplay="autoplay" loop>
                                                <source data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/metabiota-1.mp4" type="video/mp4" />
                                            </video>
                                        </a>
                                    </div>
                                    <div className="carousel-item animated fadeIn ">
                                        <a href="https://www.axonactive.com/peax-2-0/">
                                            <img className="d-block w-100 h-100 portfolio-photo d-block" data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/peax.png" />
                                            <video className="w-100 h-100 fadeIn animated d-none" controls="false" autoplay="autoplay" loop>
                                                <source data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/Peax.mp4" type="video/mp4" />
                                            </video>
                                        </a>
                                    </div>
                                    <div className="carousel-item animated fadeIn ">
                                        <a href="https://www.axonactive.com/plm/">
                                            <img className="d-block w-100 h-100 portfolio-photo d-block" data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/plm.png" />
                                        </a>
                                    </div>
                                    <div className="carousel-item animated fadeIn ">
                                        <a href="https://www.axonactive.com/teledata/">
                                            <img className="d-block w-100 h-100 portfolio-photo d-block" data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/teledata.png" />
                                        </a>
                                    </div>
                                    <div className="carousel-item animated fadeIn ">
                                        <a href="https://www.axonactive.com/workforce-management/">
                                            <img className="d-block w-100 h-100 portfolio-photo d-block" data-src="https://newaxonactive-6113.kxcdn.com/wp-content/uploads/2018/03/workforce.png" />
                                        </a>
                                    </div>

                                    <span className="slider-prev mobile-only" role="button" data-slide="prev">
                                        <span className="slider-prev-icon" aria-hidden="true">
                                            <img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/arrow-left.svg" className="slider-prev-icon__circle" />
                                        </span>
                                    </span>
                                    <span className="slider-next mobile-only" role="button" data-slide="next">
                                        <span className="slider-next-icon" aria-hidden="true">
                                            <img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/arrow-right.svg" className="slider-next-icon__circle" />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="our-portfolio-content__descrtiptions">
                                <div className="col-4 col-lg-3 offset-lg-9 d-flex justify-content-between carousel-item__content-inner-detail-nav p-0 pc-only">

                                    <span className="slider-prev" role="button" data-slide="prev">
                                        <span className="slider-prev-icon" aria-hidden="true">
                                            <img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/arrow-left.svg" className="slider-prev-icon__circle" />
                                        </span>
                                    </span>
                                    <span className="slider-next" role="button" data-slide="next">
                                        <span className="slider-next-icon" aria-hidden="true">
                                            <img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/arrow-right.svg" className="slider-next-icon__circle" />
                                        </span>
                                    </span>

                                    <a href="https://www.axonactive.com/portfolio">
                                        <span className="view-all-icon" aria-hidden="true">
                                            <img src="https://newaxonactive-6113.kxcdn.com/wp-content/themes/axon-v3/page-templates/assets/img/view-all.svg" className="slider-next-icon__circle" />
                                        </span>
                                    </a>
                                </div>
                                <div className="carousel-item__content-inner mt-4">
                                    <div className="carousel-item__content-inner-detail fadeInLeft animated animate--delay-200 active">
                                        <div className="">
                                            <div className="h6 font-weight-bold font-italic">
                                                <a href="https://www.axonactive.com/account-opening-postfinance/">Account Opening PostFinance</a>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p>Account Opening PostFinance mobile app allows customers to open a new bank account from home within 10 minutes, without having to go to the bank. </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item__content-inner-detail fadeInLeft animated animate--delay-200 ">
                                        <div className="">
                                            <div className="h6 font-weight-bold font-italic">
                                                <a href="https://www.axonactive.com/evolveit/">EvolveIT</a>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p>CM EvolveIT reduces discovery time by 80% through compiler technology that automatically finds and documents business rules and system interactions. </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item__content-inner-detail fadeInLeft animated animate--delay-200 ">
                                        <div className="">
                                            <div className="h6 font-weight-bold font-italic">
                                                <a href="https://www.axonactive.com/lake-lucerne/">Lake Lucerne</a>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p>Lake Lucerne is a navigation app made for the region of Lake Lucern, Switzerland. Visitors can download the app for information
                                                about tourist spots and water sports areas.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item__content-inner-detail fadeInLeft animated animate--delay-200 ">
                                        <div className="">
                                            <div className="h6 font-weight-bold font-italic">
                                                <a href="https://www.axonactive.com/metabiota-gemm/">Metabiota</a>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p>
                                                A web application to monitor and analyze epidemic risk worldwide and in real time enabled us to build these new financial
                                                                                mechanisms. </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item__content-inner-detail fadeInLeft animated animate--delay-200 ">
                                        <div className="">
                                            <div className="h6 font-weight-bold font-italic">
                                                <a href="https://www.axonactive.com/peax-2-0/">Peax 2.0</a>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p>
                                                PEAX web services allow customers to scan, capture, archive documents and make invoice payment as well as a full output management
                                                                                system. </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item__content-inner-detail fadeInLeft animated animate--delay-200 ">
                                        <div className="">
                                            <div className="h6 font-weight-bold font-italic">
                                                <a href="https://www.axonactive.com/plm/">PLM</a>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p>
                                                PLM is a web-based application, designed to manage and control the development of Retailer private label products over the
                                                                                product life cycle. </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item__content-inner-detail fadeInLeft animated animate--delay-200 ">
                                        <div className="">
                                            <div className="h6 font-weight-bold font-italic">
                                                <a href="https://www.axonactive.com/teledata/">Teledata</a>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p>
                                                Teledata is relationship management system which maps out relationships and network connections between Swiss businesses,
                                                as well as between business and political
                                                                                parties. </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item__content-inner-detail fadeInLeft animated animate--delay-200 ">
                                        <div className="">
                                            <div className="h6 font-weight-bold font-italic">
                                                <a href="https://www.axonactive.com/workforce-management/">Workforce Management</a>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p>
                                                Workforce Management is H&L?s Labour Control Solution. It supplies the tools to assist management with planning, scheduling,
                                                rostering, tracking time & attendance and
                                                                                preparing payroll. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-only">
                                <a href="https://www.axonactive.com/portfolio" className="d-flex justify-content-center mobile-only btn explore-btn explore-btn--orange animate--delay-900 fadeIn animated mt-3">View all projects
                                                                    <span aria-hidden="true" className="icon-inside-btn d-flex align-items-center"></span>
                                </a>
                            </div>
                        </div>
                        <div className="tab-content technology-tab-content col-12 col-lg-4  fadeInLeft animated">
                            <br />
                            <br />
                            <div className="control-group">
                                <form action="https://www.axonactive.com/portfolio" id="select-technology-form" method="get">
                                    <select id="select-technology" name="filter" data-placeholder="Choose your technology...">
                                        <option value=""></option>
                                        <option value="Java">Java</option>
                                        <option value="Swift">Swift</option>
                                        <option value="Android">Android</option>
                                        <option value="iOS">iOS</option>
                                        <option value="Altus Map Framework">Altus Map Framework</option>
                                        <option value="Xcode">Xcode</option>
                                        <option value="SQLite">SQLite</option>
                                        <option value="Spring framework">Spring framework</option>
                                        <option value="ES">ES</option>
                                        <option value="jQuery">jQuery</option>
                                        <option value="iBATIS">iBATIS</option>
                                        <option value="MagicDraw">MagicDraw</option>
                                        <option value=".NET">.NET</option>
                                        <option value="ASP.NET">ASP.NET</option>
                                        <option value="Biztalk">Biztalk</option>
                                        <option value="C#">C#</option>
                                        <option value="COM+">COM+</option>
                                        <option value="Crystal Reports">Crystal Reports</option>
                                        <option value="CSS">CSS</option>
                                        <option value="JavaScript">JavaScript</option>
                                        <option value="Knockout JS">Knockout JS</option>
                                        <option value="VB6">VB6</option>
                                        <option value="MVC">MVC</option>
                                        <option value="SSRS">SSRS</option>
                                        <option value="Silverlight">Silverlight</option>
                                        <option value="MSSQL">MSSQL</option>
                                        <option value="T ? SQL">T ? SQL</option>
                                        <option value="Web API">Web API</option>
                                        <option value="WCF">WCF</option>
                                        <option value="XML">XML</option>
                                        <option value="XSLT">XSLT</option>
                                        <option value="XSD">XSD</option>
                                        <option value="Microsoft Azure .Net">Microsoft Azure .Net</option>
                                        <option value="Entity Framework">Entity Framework</option>
                                        <option value="Microsoft Visual Studio">Microsoft Visual Studio</option>
                                        <option value="Node.js">Node.js</option>
                                        <option value="AngularJS">AngularJS</option>
                                        <option value="HTML5">HTML5</option>
                                        <option value="Hbase">Hbase</option>
                                        <option value="MySQL">MySQL</option>
                                        <option value="PostgreSQL">PostgreSQL</option>
                                        <option value="Python">Python</option>
                                        <option value="Scala">Scala</option>
                                        <option value="Play Framework">Play Framework</option>
                                        <option value="D3">D3</option>
                                        <option value="Leaflet">Leaflet</option>
                                        <option value="OrientDB">OrientDB</option>
                                        <option value="Bootstrap">Bootstrap</option>
                                        <option value="SignalR">SignalR</option>
                                        <option value="TypeScript">TypeScript</option>
                                        <option value="MongoDB">MongoDB</option>
                                        <option value="Express.js">Express.js</option>
                                        <option value="Karma">Karma</option>
                                        <option value="Jasmine">Jasmine</option>
                                        <option value="Chart.js">Chart.js</option>
                                        <option value="Chai.js">Chai.js</option>
                                        <option value="Mocha">Mocha</option>
                                        <option value="openCRX">openCRX</option>
                                        <option value="LESS">LESS</option>
                                        <option value="Selenium">Selenium</option>
                                        <option value="SpecFlow">SpecFlow</option>
                                        <option value="Team Foundation Server">Team Foundation Server</option>
                                        <option value="BMP">BMP</option>
                                        <option value="xPert.ivy">xPert.ivy</option>
                                        <option value="EJB">EJB</option>
                                        <option value="Apache Solr">Apache Solr</option>
                                        <option value="Objective-C">Objective-C</option>
                                        <option value="WebView">WebView</option>
                                        <option value="Axon.ivy">Axon.ivy</option>
                                        <option value="WebRTC">WebRTC</option>
                                        <option value="SVN">SVN</option>
                                        <option value="Jenkins">Jenkins</option>
                                        <option value="Nginx">Nginx</option>
                                        <option value="JPA">JPA</option>
                                        <option value="JSF">JSF</option>
                                        <option value="PrimeFaces">PrimeFaces</option>
                                        <option value="RESTful">RESTful</option>
                                        <option value="SASS">SASS</option>
                                        <option value="JUnit Test">JUnit Test</option>
                                        <option value="Hibernate">Hibernate</option>
                                        <option value="RESTEasy">RESTEasy</option>
                                        <option value="Bower">Bower</option>
                                        <option value="Grunt">Grunt</option>
                                        <option value="JAX-RS">JAX-RS</option>
                                        <option value="IntelliJ IDEA">IntelliJ IDEA</option>
                                        <option value="Google Maps API">Google Maps API</option>
                                        <option value="Hexagon Maps">Hexagon Maps</option>
                                        <option value="Backbone.js">Backbone.js</option>
                                        <option value="PostGIS">PostGIS</option>
                                        <option value="UIKit">UIKit</option>
                                        <option value="GCD">GCD</option>
                                        <option value="HockeyApp SDK">HockeyApp SDK</option>
                                        <option value="Webflow">Webflow</option>
                                        <option value="Apache Geronimo">Apache Geronimo</option>
                                        <option value="Oracle">Oracle</option>
                                        <option value="Geoserver">Geoserver</option>
                                        <option value="Open Map Layer">Open Map Layer</option>
                                        <option value="React Redux JS">React Redux JS</option>
                                        <option value="BPM">BPM</option>
                                        <option value="Drools">Drools</option>
                                        <option value="SOAP">SOAP</option>
                                        <option value="Alamofire">Alamofire</option>
                                        <option value="TestNG">TestNG</option>
                                        <option value="EasyMock">EasyMock</option>
                                        <option value="HSQLDB">HSQLDB</option>
                                        <option value="SCSS">SCSS</option>
                                        <option value="Oauth">Oauth</option>
                                        <option value="Docker">Docker</option>
                                        <option value="OpenShift">OpenShift</option>
                                        <option value="Kubernetes">Kubernetes</option>
                                        <option value="Mockito">Mockito</option>
                                        <option value="Swagger">Swagger</option>
                                        <option value="Gitlab">Gitlab</option>
                                        <option value="JIRA">JIRA</option>
                                        <option value="Apache Tomcat">Apache Tomcat</option>
                                        <option value="Apache Maven">Apache Maven</option>
                                        <option value="NpgSQL">NpgSQL</option>
                                        <option value="PgAdmin">PgAdmin</option>
                                        <option value="AOP">AOP</option>
                                        <option value="ASM">ASM</option>
                                        <option value="JMS">JMS</option>
                                        <option value="ORM">ORM</option>
                                        <option value="Spring security">Spring security</option>
                                        <option value="Apache MyFaces">Apache MyFaces</option>
                                        <option value="iText">iText</option>
                                        <option value="Tomahawk">Tomahawk</option>
                                        <option value="JAXB">JAXB</option>
                                        <option value="JAX-WS">JAX-WS</option>
                                        <option value="Quartz">Quartz</option>
                                        <option value="Countly SDK">Countly SDK</option>
                                        <option value="Segment SDK">Segment SDK</option>
                                        <option value="Facebook SDK">Facebook SDK</option>
                                        <option value="Kendo UI">Kendo UI</option>
                                        <option value="Mobile application">Mobile application</option>
                                        <option value="Web Application">Web Application</option>
                                        <option value="Rich Internet Application">Rich Internet Application</option>
                                        <option value="Desktop Application">Desktop Application</option>
                                    </select>
                                    <br />
                                    <br />
                                    <br />
                                    <a onclick="document.getElementById('select-technology-form').submit()" className="d-flex justify-content-center btn explore-btn explore-btn--orange animate--delay-200 fadeIn animated w-50">Search
                                                                        <span aria-hidden="true" className="icon-inside-btn d-flex align-items-center"></span>
                                    </a>
                                </form>
                            </div>
                        </div>
                        <div className="tab-content industry-tab-content col-12 col-lg-4  fadeInLeft animated">
                            <br />
                            <br />
                            <div className="control-group">
                                <form action="https://www.axonactive.com/portfolio" id="select-industry-form" method="get">
                                    <select id="select-industry" name="filter" className="demo-default" data-placeholder="Choose your industry...">
                                        <option value=""></option>
                                        <option value="Tourism">Tourism</option>
                                        <option value="Management">Management</option>
                                        <option value="FMCG">FMCG</option>
                                        <option value="Postal">Postal</option>
                                        <option value="Biotech">Biotech</option>
                                        <option value="Labor">Labor</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Hospitality">Hospitality</option>
                                        <option value="Education">Education</option>
                                        <option value="Fintech">Fintech</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Advertising">Advertising</option>
                                        <option value="Real estate">Real estate</option>
                                        <option value="Banking">Banking</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Information Storage">Information Storage</option>
                                        <option value="Transportation">Transportation</option>
                                    </select>
                                    <br />
                                    <br />
                                    <br />
                                    <a onclick="document.getElementById('select-industry-form').submit()" className="d-flex justify-content-center btn explore-btn explore-btn--orange animate--delay-200 fadeIn animated w-50">Search <span aria-hidden="true" className="icon-inside-btn d-flex align-items-center"></span>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section4;
import React, { Component } from 'react';
import FullPage from '../Pages/FullPage';
import Section0 from './../../js/Section0';
import Section1 from './../../js/Section1';
import Section2 from './../../js/Section2';
import Section3 from './../../js/Section3';
import Section4 from './../../js/Section4';
import Section5 from './../../js/Section5';
import Section6 from './../../js/Section6';
import Section7 from './../../js/Section7';
import Section8 from './../../js/Section8';
import Section9 from './../../js/Section9';
import Section10 from './../../js/Section10';

class Careers extends Component {
	render() {
		return (
			<FullPage location={this.props.location}>
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
			</FullPage>
		);
	}
}

export default Careers;
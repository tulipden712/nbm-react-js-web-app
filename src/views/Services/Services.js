import React, { Component } from 'react';
import FullPage from '../Pages/FullPage';
import SectionTest from '../../js/SectionTest';

class Services extends Component {
	render() {
		return (
			<FullPage location={this.props.location}>
				this is Services
				<SectionTest />
			</FullPage>
		);
	}
}

export default Services;
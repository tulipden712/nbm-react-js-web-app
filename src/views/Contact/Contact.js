import React, { Component } from 'react';
//import { withRouter } from 'react-router';
import FullPage from '../Pages/FullPage';
import Section10 from '../../js/Section10';

class Contact extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

	componentDidMount() {
		console.log("Contact location => pathname: ", this.props.location);
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<FullPage location={this.props.location}>
				<Section10 />
			</FullPage>
		);
	}
}

export default Contact;
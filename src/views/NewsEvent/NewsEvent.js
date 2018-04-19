import React, { Component } from 'react';
import FullPage from '../Pages/FullPage';
class NewsEvent extends Component {
	render() {
		return (
			<FullPage location={this.props.location}>
				NewsEvent
			</FullPage>
		);
	}
}

export default NewsEvent;
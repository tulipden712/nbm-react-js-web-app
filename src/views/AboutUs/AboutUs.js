import React, { Component } from 'react';
import FullPage from '../Pages/FullPage';
import Section10 from '../../js/Section10';

class AboutUs extends Component {
    render() {
        return (
            <FullPage location={this.props.location}>
                AboutUs<Section10 />
            </FullPage>
        );
    }
}

export default AboutUs;
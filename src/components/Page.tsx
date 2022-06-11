import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Skills from './Skills';

export interface mobileStatus {
    mobile: boolean
}

class Page extends Component<mobileStatus> {


    render() {
        return (
            <main>
                <Home mobile={this.props.mobile} />
                <AboutMe mobile={this.props.mobile} />
                <Skills mobile={this.props.mobile} />
                <Portfolio mobile={this.props.mobile} />
                <Contact mobile={this.props.mobile} />
            </main>
        );
    }
}



export default Page;
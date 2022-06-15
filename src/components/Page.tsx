import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Skills from './Skills';

export interface defaultStatus {
    mobile: boolean,
    scrollY?: number,
    width?: number
}

interface myState {
    scrollY: number,
    width: number
}

class Page extends Component<defaultStatus, myState> {
    constructor(props: defaultStatus) {
        super(props)

        this.state = {
            scrollY: 0,
            width: window.innerWidth
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.calcScroll.bind(this));
        this.calcScroll();
        window.onresize = this.updateWidth.bind(this);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.calcScroll.bind(this));
    }

    updateWidth() {
        this.setState({
            width: window.innerWidth
        })
    }

    calcScroll() {
        this.setState({
            scrollY: window.scrollY
        })
    }

    render() {
        return (
            <main>
                <Home mobile={this.props.mobile} scrollY={this.state.scrollY} width={this.state.width} />
                <AboutMe mobile={this.props.mobile} scrollY={this.state.scrollY} width={this.state.width} />
                <Skills mobile={this.props.mobile} scrollY={this.state.scrollY} width={this.state.width} />
                <Portfolio mobile={this.props.mobile} scrollY={this.state.scrollY} width={this.state.width} />
                <Contact mobile={this.props.mobile} scrollY={this.state.scrollY} width={this.state.width} />
            </main>
        );
    }
}



export default Page;
import React, { Component } from 'react';
import CompHeader from './sub/CompHeader';

import gitHubIcon from "../gfx/github-svgrepo-com.svg";
import letterIcon from "../gfx/letter-svgrepo-com.svg";
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';
import { defaultStatus } from './Page';

import './SCSS/Contact.scss';

import { withTranslation, WithTranslation } from 'react-i18next';
import { timeToShow } from './helpers/Functions';

interface myProps extends defaultStatus, WithTranslation { }

interface myState {
    sHeader: boolean,
    show: boolean
}


class Contact extends Component<myProps, myState> {

    private myRef: React.RefObject<HTMLInputElement>;
    private myRef2: React.RefObject<HTMLInputElement>;

    constructor(props: myProps) {
        super(props)

        this.myRef = React.createRef();
        this.myRef2 = React.createRef();

        this.state = {
            sHeader: false,
            show: false
        }
    }

    componentDidUpdate() {
        this.calculateShow();
    }

    calculateShow() {
        let top1 = this.myRef.current?.offsetTop!
        let top2 = this.myRef2.current?.offsetTop!

        if (!this.state.show && timeToShow(top1 + top2)) {
            this.setState({ show: true })
        }

        if (!this.state.sHeader && timeToShow(top1)) {
            this.setState({ sHeader: true })
        }
    }

    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: true, x: '0px', y: '14%', size: 'xl' },
            { isTop: false, isLeft: false, x: '0px', y: '0%', size: 'xl' }
        ]
        return (
            <div id="contact" ref={this.myRef}>
                <CompHeader title={this.props.t("Header.contact")} show={this.state.sHeader} />
                <section className='restrictedWidth'>
                    <div id="contactInfo">
                        <div id="writeToMe" className={`active ${this.state.show ? 'active-Down' : ''}`} ref={this.myRef2}>
                            <h1>{this.props.t("Contact.contactMe")}</h1>
                            <a href="/#"> <img alt="GitHub icon" src={letterIcon} /> michaldakol@gmail.com</a>
                        </div>
                        <div id="myGithub" className={`active ${this.state.show ? 'active-Down' : ''}`} style={{ "--delay": 1 } as React.CSSProperties}>
                            <h1>{this.props.t("Contact.myGit")}</h1>
                            <a href="/#"> <img alt="GitHub icon" src={gitHubIcon} /> MSiorr</a>
                        </div>
                    </div>
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} scrollY={this.props.scrollY} />
            </div>
        );
    }
}


export default withTranslation()(Contact);
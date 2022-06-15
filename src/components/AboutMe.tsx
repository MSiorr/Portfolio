import React, { Component } from 'react';
import { defaultStatus } from './Page';
import CompHeader from './sub/CompHeader';
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';

import './SCSS/AboutMe.scss';

import { withTranslation, WithTranslation } from 'react-i18next';
import { timeToShow } from './helpers/Functions';

interface myProps extends defaultStatus, WithTranslation {

}

interface myState {
    sHeader: boolean,
    sTxt: boolean
}


class AboutMe extends Component<myProps, myState> {

    private myRef: React.RefObject<HTMLInputElement>;
    private myRef2: React.RefObject<HTMLInputElement>;

    constructor(props: any = null) {
        super(props)

        this.myRef = React.createRef();
        this.myRef2 = React.createRef();

        this.state = {
            sHeader: false,
            sTxt: false
        }
    }

    componentDidMount() {
        this.calculateShow();
    }

    componentDidUpdate() {
        this.calculateShow();
    }

    calculateShow() {
        let top1 = this.myRef.current?.offsetTop!
        let top2 = this.myRef2.current?.offsetTop!

        if (!this.state.sTxt && timeToShow(top1 + top2)) {
            this.setState({ sTxt: true })
        }

        if (!this.state.sHeader && timeToShow(top1)) {
            this.setState({ sHeader: true })
        }
    }

    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: true, x: '0px', y: '14%', size: 'l' },
            { isTop: false, isLeft: false, x: '0px', y: '14%', size: 'l' }
        ]

        return (
            <div id="aboutMe" className='dataComponent' ref={this.myRef}>
                <CompHeader title={this.props.t("Header.aboutMe")} show={this.state.sHeader} />
                <section className='restrictedWidth restrictedHeight'>
                    <p id="hi" className={`active ${this.state.sTxt ? `active-Down` : ''}`} style={{ "--delay": 0 } as React.CSSProperties} ref={this.myRef2}>
                        {this.props.t("AboutMe.hi")}
                    </p>
                    <p id="infoAboutMe" className={`active ${this.state.sTxt ? `active-Down` : ''}`} style={{ "--delay": 1 } as React.CSSProperties}>
                        {this.props.t("AboutMe.info1")}
                    </p>
                    <p id="experience" className={`active ${this.state.sTxt ? `active-Down` : ''}`} style={{ "--delay": 2 } as React.CSSProperties}>
                        {this.props.t("AboutMe.info2")}
                    </p>
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} scrollY={this.props.scrollY} />
            </div>
        );
    }
}



export default withTranslation()(AboutMe);
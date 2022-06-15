import React, { Component } from 'react';
import { defaultStatus } from './Page';
import CompHeader from './sub/CompHeader';
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';
import TechnologyBox from './sub/TechnologyBox';

import './SCSS/Skills.scss';

// import techData from '../data/technologies.json';
import { withTranslation, WithTranslation } from 'react-i18next';
import { timeToShow } from './helpers/Functions';
import { technologyBreakpoint } from './helpers/Var';

interface oneTech {
    name: string,
    info: string[]
}

interface myProps extends defaultStatus, WithTranslation { }

interface myState {
    sHeader: boolean,
    sTxt: boolean
}

class Skills extends Component<myProps, myState> {
    private refTab: Array<React.RefObject<HTMLInputElement>>;


    constructor(props: any = null) {
        super(props);

        this.refTab = [
            React.createRef(),
            React.createRef(),
            React.createRef()
        ]

        this.state = {
            sHeader: false,
            sTxt: false,
        }
    }


    componentDidUpdate() {
        this.calculateShow();
    }

    calculateShow() {
        let top1 = this.refTab[0].current?.offsetTop!
        let top2 = this.refTab[1].current?.offsetTop!

        if (!this.state.sTxt && timeToShow(top1 + top2)) {
            this.setState({ sTxt: true })
        }

        if (!this.state.sHeader && timeToShow(top1)) {
            this.setState({ sHeader: true })
        }
    }

    isLeft(index: number) {
        if (window.innerWidth <= technologyBreakpoint) {
            return index % 2 === 0;
        } else {
            return index < 5;
        }
    }

    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: true, x: '0px', y: '14%', size: 'xl' },
            { isTop: false, isLeft: false, x: '0px', y: '14%', size: 'xl' }
        ]
        let techData: Array<oneTech> = this.props.t("Skills.technologies", { returnObjects: true });

        let techRefTop = this.refTab[0].current?.offsetTop!



        return (
            <div id="skills" className='dataComponent' ref={this.refTab[0]}>
                <CompHeader title={this.props.t("Header.skills")} show={this.state.sHeader} />
                <section className='restrictedWidth restrictedHeight'>
                    <p id="favTech" className={`active ${this.state.sTxt ? `active-Down` : ''}`} ref={this.refTab[1]}>
                        {this.props.t("Skills.info")}
                    </p>
                    <div id="technologiesDiv" ref={this.refTab[2]}>
                        {techData.map((e, i) => <TechnologyBox name={e.name} info={e.info} swap={i % 2 === 0} key={`tech_${i}`} parentTop={techRefTop} animLeft={this.isLeft(i)} />)}
                    </div>
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} scrollY={this.props.scrollY} />
            </div>
        );
    }
}


export default withTranslation()(Skills);
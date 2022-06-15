import React, { Component } from 'react';
import CompHeader from './sub/CompHeader';
import ProjectBox from './sub/ProjectBox';

// import projecsData from "../data/projects.json";
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';
import { defaultStatus } from './Page';

import './SCSS/Portfolio.scss';

import { withTranslation, WithTranslation } from 'react-i18next';
import { timeToShow } from './helpers/Functions';

interface oneProj {
    title: string,
    description: string,
    technologies: string[],
    gitLink: string,
    playLink: string
}

interface myProps extends defaultStatus, WithTranslation {

}

interface myState {
    sHeader: boolean
}

class Portfolio extends Component<myProps, myState> {

    private myRef: React.RefObject<HTMLInputElement>;

    constructor(props: myProps) {
        super(props)

        this.myRef = React.createRef()

        this.state = {
            sHeader: false
        }
    }

    componentDidUpdate() {
        this.calculateShow();
    }

    calculateShow() {
        let top = this.myRef.current?.offsetTop!


        if (!this.state.sHeader && timeToShow(top)) {
            this.setState({ sHeader: true })
        }
    }

    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: false, x: '0px', y: '16%', size: 'l' },
            { isTop: true, isLeft: true, x: '0px', y: '36%', size: 'l' },
            { isTop: true, isLeft: false, x: '0px', y: '55.5%', size: 'l' },
            { isTop: true, isLeft: true, x: '0px', y: '75%', size: 'l' },
            { isTop: true, isLeft: false, x: '0px', y: '94.5%', size: 'l' }
        ]
        let projectsData: Array<oneProj> = this.props.t("Portfolio.projects", { returnObjects: true });

        return (
            <div id="portfolio" ref={this.myRef}>
                <CompHeader title={this.props.t("Header.portfolio")} show={this.state.sHeader} />
                <section id="projects" className='restrictedWidth'>
                    {projectsData.map((e, i) => <ProjectBox
                        title={e.title}
                        description={e.description}
                        technologies={e.technologies}
                        gitLink={e.gitLink}
                        playLink={e.playLink}
                        swap={i % 2 === 1}
                        parentTop={this.myRef.current?.offsetTop!}
                        key={`proj_${i}`}
                    />)}
                    {/* <ProjectBox /> */}
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} scrollY={this.props.scrollY} />
            </div>
        );
    }
}


export default withTranslation()(Portfolio);
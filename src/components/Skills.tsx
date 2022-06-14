import React, { Component } from 'react';
import { mobileStatus } from './Page';
import CompHeader from './sub/CompHeader';
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';
import TechnologyBox from './sub/TechnologyBox';

// import techData from '../data/technologies.json';
import { withTranslation, WithTranslation } from 'react-i18next';

interface oneTech {
    name: string,
    info: string[]
}

interface myProps extends mobileStatus, WithTranslation { }

class Skills extends Component<myProps> {
    constructor(props: any = null) {
        super(props);

    }

    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: true, x: '0px', y: '14%', size: 'xl' },
            { isTop: false, isLeft: false, x: '0px', y: '14%', size: 'xl' }
        ]
        let techData: Array<oneTech> = this.props.t("Skills.technologies", { returnObjects: true });

        return (
            <div id="skills" className='dataComponent'>
                <CompHeader title={this.props.t("Header.skills")} />
                <section className='restrictedWidth restrictedHeight'>
                    <p id="favTech">{this.props.t("Skills.info")}</p>
                    <div id="technologiesDiv">
                        {techData.map((e, i) => <TechnologyBox name={e.name} info={e.info} swap={i % 2 === 0} key={`tech_${i}`} />)}
                        {/* {techData.technologies.map((e, i) => <TechnologyBox name={e.name} info={e.info} swap={i % 2 === 0} key={`tech_${i}`} />)} */}
                        {/* {this.state.technologies.map((e, i) => <TechnologyBox name={e} swap={Math.floor((i + 1) / 2) % 2 == 0} key={`tech_${i}`} />)} */}
                    </div>
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} />
            </div>
        );
    }
}


export default withTranslation()(Skills);
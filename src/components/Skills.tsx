import React, { Component } from 'react';
import { mobileStatus } from './Page';
import CompHeader from './sub/CompHeader';
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';
import TechnologyBox from './sub/TechnologyBox';

// interface myProps { }

interface myState {
    technologies: string[]
}

class Skills extends Component<mobileStatus, myState> {
    constructor(props: any = null) {
        super(props);

        this.state = {
            technologies: [
                "JavaScript", "TypeScript", "HTML", "CSS", "React", "React Native", "Node.JS", "Express", "Python", "Unity"
            ]
        }
    }

    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: true, x: '0px', y: '14%', size: 'xl' },
            { isTop: false, isLeft: false, x: '0px', y: '14%', size: 'xl' }
        ]
        return (
            <div id="skills" className='dataComponent'>
                <CompHeader title={"UMIEJĘTNOŚCI"} />
                <section className='restrictedWidth restrictedHeight'>
                    <p id="favTech">Ulubione technologie z którymi miałem styczność</p>
                    <div id="technologiesDiv">
                        {this.state.technologies.map((e, i) => <TechnologyBox name={e} swap={i % 2 === 0} key={`tech_${i}`} />)}
                        {/* {this.state.technologies.map((e, i) => <TechnologyBox name={e} swap={Math.floor((i + 1) / 2) % 2 == 0} key={`tech_${i}`} />)} */}
                    </div>
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} />
            </div>
        );
    }
}


export default Skills;
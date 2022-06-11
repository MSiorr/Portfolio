import React, { Component } from 'react';
import CompHeader from './sub/CompHeader';
import ProjectBox from './sub/ProjectBox';

import projecsData from "../data/projects.json";
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';
import { mobileStatus } from './Page';



class Portfolio extends Component<mobileStatus> {
    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: false, x: '0px', y: '16%', size: 'l' },
            { isTop: true, isLeft: true, x: '0px', y: '36%', size: 'l' },
            { isTop: true, isLeft: false, x: '0px', y: '55.5%', size: 'l' },
            { isTop: true, isLeft: true, x: '0px', y: '75%', size: 'l' },
            { isTop: true, isLeft: false, x: '0px', y: '94.5%', size: 'l' }
        ]
        return (
            <div id="portfolio">
                <CompHeader title='PORTFOLIO' />
                <section id="projects" className='restrictedWidth'>
                    {projecsData.projects.map((e, i) => <ProjectBox
                        title={e.title}
                        description={e.description}
                        technologies={e.technologies}
                        gitLink={e.gitLink}
                        playLink={e.playLink}
                        swap={i % 2 === 1}
                        key={`proj_${i}`}
                    />)}
                    {/* <ProjectBox /> */}
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} />
            </div>
        );
    }
}


export default Portfolio;

// title: string,
//     description: string,
//     technologies: string[],
//     gitLink: string,
//     playLink: string,
//     swap: boolean
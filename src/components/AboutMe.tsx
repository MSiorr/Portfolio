import React, { Component } from 'react';
import { mobileStatus } from './Page';
import CompHeader from './sub/CompHeader';
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';

import { withTranslation, WithTranslation } from 'react-i18next';

interface myProps extends mobileStatus, WithTranslation {

}

class AboutMe extends Component<myProps> {
    constructor(props: any = null) {
        super(props)
    }

    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: true, x: '0px', y: '14%', size: 'l' },
            { isTop: false, isLeft: false, x: '0px', y: '14%', size: 'l' }
        ]
        return (
            <div id="aboutMe" className='dataComponent'>
                <CompHeader title={this.props.t("Header.aboutMe")} />
                <section className='restrictedWidth restrictedHeight'>
                    <p id="hi">{this.props.t("AboutMe.hi")}</p>
                    <p id="infoAboutMe">
                        {this.props.t("AboutMe.info1")}
                    </p>
                    <p id="experience">
                        {this.props.t("AboutMe.info2")}
                    </p>
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} />
            </div>
        );
    }
}



export default withTranslation()(AboutMe);
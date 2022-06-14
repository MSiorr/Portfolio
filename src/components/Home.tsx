import React, { Component } from 'react';
import { mobileStatus } from './Page';
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';

import { withTranslation, WithTranslation } from 'react-i18next';

interface myProps extends mobileStatus, WithTranslation {

}

class Home extends Component<myProps> {
    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: true, x: '0px', y: '14%', size: 'xl' },
            { isTop: false, isLeft: false, x: '0px', y: '14%', size: 'xl' }
        ]
        return (
            <div id="home">
                <div id="homeTxt">
                    <h1 id="homeTitle">{this.props.t("Home.name")}</h1>
                    <h2 id="homeSubTitle">Full stack developer</h2>
                </div>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} />
            </div>
        );
    }
}



export default withTranslation()(Home);
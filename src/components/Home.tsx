import React, { Component } from 'react';
import { defaultStatus } from './Page';
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';
import './SCSS/Home.scss';

import { withTranslation, WithTranslation } from 'react-i18next';

interface myProps extends defaultStatus, WithTranslation {

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
                    <h1 id="homeTitle" className='active active-Down' style={{ "--delay": this.props.mobile ? 6 : 9 } as React.CSSProperties}>{this.props.t("Home.name")}</h1>
                    <h2 id="homeSubTitle" className='active active-Down' style={{ "--delay": this.props.mobile ? 7 : 10 } as React.CSSProperties}>Full stack developer</h2>
                </div>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} scrollY={this.props.scrollY} />
            </div>
        );
    }
}



export default withTranslation()(Home);
import React, { Component } from 'react';
import Gear, { gearProps } from './Gear';

import '../SCSS/GearBase.scss';


interface myProps {
    gearsData: gearProps[]
    mobile: boolean,
    scrollY?: number
}

class GearBase extends Component<myProps> {

    render() {
        return (
            <div className="gearBaseBack">
                <div className="gearBase">
                    {this.props.gearsData.map((e, i) => <Gear isLeft={e.isLeft} isTop={e.isTop} x={e.x} y={e.y} size={e.size} key={`${i}`} mobile={this.props.mobile} scrollY={this.props.scrollY} />)}
                </div>
            </div>
        );
    }
}

export default GearBase;
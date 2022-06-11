import React, { Component } from 'react';
import Gear, { gearProps } from './Gear';


interface myProps {
    gearsData: gearProps[]
    mobile: boolean
}

class GearBase extends Component<myProps> {
    render() {
        return (
            <div className="gearBaseBack">
                <div className="gearBase">
                    {this.props.gearsData.map((e, i) => <Gear isLeft={e.isLeft} isTop={e.isTop} x={e.x} y={e.y} size={e.size} key={`${Date.now()}_${i}`} mobile={this.props.mobile} />)}
                </div>
            </div>
        );
    }
}

export default GearBase;
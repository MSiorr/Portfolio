import React, { Component } from 'react';

import javascriptImg from "../../gfx/technologies/javascript.png";

interface technologyProps {
    name: string,
    swap: boolean
}

class TechnologyBox extends Component<technologyProps> {
    render() {
        return (
            <div className='technologyBox'>
                {this.props.swap ?
                    <>
                        <div className="techInfo">
                            <img src={javascriptImg} alt="technologyImg" />
                            <p>{this.props.name}</p>
                        </div>
                    </>
                    : null
                }

                <div className="techData">
                    <ul>
                        <li>NIE UMIME UMIME UMIME</li>
                        <li>NIE UMIME</li>
                        <li>NIE UMIME</li>
                        <li>NIE UMIME UMIME</li>
                        <li>NIE UMIME</li>
                        <li>NIE UMIME</li>
                    </ul>
                </div>

                {this.props.swap ? null :
                    <>
                        <div className="techInfo">
                            <img src={javascriptImg} alt="technologyImg" />
                            <p>{this.props.name}</p>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default TechnologyBox;
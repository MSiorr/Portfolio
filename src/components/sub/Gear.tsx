import React, { Component } from 'react';
import gearSVG from "../../gfx/settings-gear-svgrepo-com.svg";


export interface gearProps {
    isLeft: boolean,
    isTop: boolean,
    y: string,
    x: string,
    size: "xs" | "s" | "m" | "l" | "xl",
    mobile?: boolean,
    scrollY?: number
}

interface myState {
    currentDeg: number
}

class Gear extends Component<gearProps, myState> {
    constructor(props: gearProps) {
        super(props);

        this.state = {
            currentDeg: 0
        }
    }


    // componentDidMount() {
    //     if (!this.props.mobile) {
    //         window.addEventListener('scroll', this.calcDeg.bind(this));
    //         this.calcDeg();
    //     }
    // }

    // componentWillUnmount() {
    //     if (!this.props.mobile) {
    //         window.removeEventListener('scroll', this.calcDeg.bind(this));
    //     }
    // }

    componentDidUpdate() {
        this.calcDeg();
    }


    calcDeg() {
        if (this.state.currentDeg !== window.scrollY / 8) {
            this.setState({
                currentDeg: window.scrollY / 8
            })
        }
    }

    render() {
        return (
            <div className={`gearBox ${this.props.size}`}
                style={
                    this.props.isLeft ?
                        this.props.isTop ? { left: this.props.x, top: this.props.y } : { left: this.props.x, bottom: this.props.y }
                        :
                        this.props.isTop ? { right: this.props.x, top: this.props.y } : { right: this.props.x, bottom: this.props.y }
                }
            >
                <img src={gearSVG} alt="gear img" className={`${this.props.isLeft ? 'left' : 'right'} ${this.props.mobile ? 'onMobile' : ''}`}
                    style={{ transform: `rotate(${this.props.isLeft ? this.state.currentDeg : -this.state.currentDeg}deg)` }}
                />
            </div>
        );
    }
}

export default Gear;
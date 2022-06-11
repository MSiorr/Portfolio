import React, { Component } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

class Background extends Component {

    async customInit(engine: Engine): Promise<void> {
        await loadStarsPreset(engine);
    }

    render() {
        const options = {
            background: {
                color: "transparent",
            },
            particles: {
                move: {
                    speed: 1
                },
                color: {
                    "value": ["#fbb03b", "#ffffff"]
                },
                number: { value: 64 }
            },
            preset: "stars"
        }
        return (
            <Particles options={options} init={this.customInit} />
            // <div></div>
        )
    }
}

export default Background;
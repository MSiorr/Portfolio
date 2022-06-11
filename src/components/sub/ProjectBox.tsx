import React, { Component } from 'react';

import gitHubIcon from "../../gfx/github-svgrepo-com.svg";
import gamepadIcon from "../../gfx/gamepad-svgrepo-com.svg";

import projectImg from "../../gfx/projects/wolfenstein3d.png";

interface myProps {
    title: string,
    description: string,
    technologies: string[],
    gitLink: string,
    playLink: string,
    swap: boolean
}

class ProjectBox extends Component<myProps> {
    render() {
        return (
            <div className={this.props.swap ? "projectBox reverse" : "projectBox"}>
                <div className="projectImgBox">
                    <img src={projectImg} alt="project img" />
                    <div className="imgOverlay"></div>
                </div>
                <div className={this.props.swap ? "projectInfo left" : "projectInfo right"}>
                    <div className="projectDetails">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                        <div className="projectButtons">
                            <button> <img alt="GitHub icon" src={gitHubIcon} className="gitImg" /> GITHUB</button>
                            <button> <img alt="GitHub icon" src={gamepadIcon} className="gameImg" /> PLAY</button>
                        </div>
                    </div>
                    <p className='projectTech'>{this.props.technologies.map((e, i) => i === 0 ? `${e}` : ` ${e}`)}</p>
                </div>
            </div>
        );
    }
}

export default ProjectBox;
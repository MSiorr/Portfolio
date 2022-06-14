import React, { Component } from 'react';

import gitHubIcon from "../../gfx/github-svgrepo-com.svg";
import gamepadIcon from "../../gfx/gamepad-svgrepo-com.svg";

import wolfensteinImg from "../../gfx/projects/wolfenstein3d.png";
import castleRoyaleImg from "../../gfx/projects/castleRoyale.png";
import drMarioImg from "../../gfx/projects/drMario.png";
import ludoImg from "../../gfx/projects/ludo.png";
import threejsShooterImg from "../../gfx/projects/threejsShooter.png";

import { withTranslation, WithTranslation } from 'react-i18next';

interface IimgSrc {
    [id: string]: string
}

const imgSrc: IimgSrc = {
    "Wolfenstein 3D": wolfensteinImg,
    "Castle Royale": castleRoyaleImg,
    "Dr Mario": drMarioImg,
    "Ludo": ludoImg,
    "Threejs Shooter": threejsShooterImg
}

interface myProps extends WithTranslation {
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
                    <img src={imgSrc[this.props.title]} alt="project img" />
                    <div className="imgOverlay"></div>
                </div>
                <div className={this.props.swap ? "projectInfo left" : "projectInfo right"}>
                    <div className="projectDetails">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                        <div className="projectButtons">
                            <a href={this.props.gitLink} rel="noreferrer" target="_blank"> <img alt="GitHub icon" src={gitHubIcon} className="gitImg" /> GITHUB</a>
                            <a href={this.props.playLink} rel="noreferrer" target="_blank"> <img alt="GamePad icon" src={gamepadIcon} className="gameImg" /> {this.props.t("Portfolio.play")}</a>
                            {/* <button> <img alt="GitHub icon" src={gitHubIcon} className="gitImg" /> GITHUB</button>
                            <button> <img alt="GamePad icon" src={gamepadIcon} className="gameImg" /> PLAY</button> */}
                        </div>
                    </div>
                    <p className='projectTech'>{this.props.technologies.map((e, i) => i === 0 ? `${e}` : ` ${e}`)}</p>
                </div>
            </div>
        );
    }
}

export default withTranslation()(ProjectBox);
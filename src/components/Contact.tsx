import React, { Component } from 'react';
import CompHeader from './sub/CompHeader';

import gitHubIcon from "../gfx/github-svgrepo-com.svg";
import letterIcon from "../gfx/letter-svgrepo-com.svg";
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';
import { mobileStatus } from './Page';

import { withTranslation, WithTranslation } from 'react-i18next';

interface myProps extends mobileStatus, WithTranslation { }


class Contact extends Component<myProps> {
    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: true, x: '0px', y: '14%', size: 'xl' },
            { isTop: false, isLeft: false, x: '0px', y: '0%', size: 'xl' }
        ]
        return (
            <div id="contact">
                <CompHeader title={this.props.t("Header.contact")} />
                <section className='restrictedWidth'>
                    <div id="contactInfo">
                        <div id="writeToMe">
                            <h1>{this.props.t("Contact.contactMe")}</h1>
                            <a href="/#"> <img alt="GitHub icon" src={letterIcon} /> michaldakol@gmail.com</a>
                        </div>
                        <div id="myGithub">
                            <h1>{this.props.t("Contact.myGit")}</h1>
                            <a href="/#"> <img alt="GitHub icon" src={gitHubIcon} /> MSiorr</a>
                        </div>
                    </div>
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} />
            </div>
        );
    }
}


export default withTranslation()(Contact);
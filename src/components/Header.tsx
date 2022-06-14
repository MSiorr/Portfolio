import React, { Component } from 'react';
import logo from '../gfx/logo.png';
import polandFlag from '../gfx/poland-svgrepo-com.svg'
import engFlag from '../gfx/united-kingdom-uk-svgrepo-com.svg'

import i18next from "i18next";
import { withTranslation, WithTranslation } from 'react-i18next';

interface myProps extends WithTranslation { }
interface myState {
    hambActive: boolean,
    topShadow: boolean,
    currentLang: string
}

class Header extends Component<myProps, myState> {
    constructor(props: myProps) {
        super(props)

        this.state = {
            hambActive: false,
            topShadow: false,
            currentLang: i18next.language,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.addShadow.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.addShadow.bind(this));
    }

    addShadow() {
        if (window.scrollY >= 16 && this.state.topShadow === false) {
            this.setState({ topShadow: true })
        } else if (window.scrollY === 0 && this.state.topShadow === true) {
            this.setState({ topShadow: false })
        }
    }

    showMobileMenu() {
        document.body.className = this.state.hambActive ? '' : 'noScroll';

        this.setState({
            hambActive: !this.state.hambActive
        })
    }

    disableMenu() {
        document.body.className = ''
        this.setState({
            hambActive: false
        })
    }

    changeLang() {
        if (this.state.currentLang === "pl") {
            this.setState({
                currentLang: "en"
            })
            i18next.changeLanguage("en")
        } else {
            this.setState({
                currentLang: "pl"
            })
            i18next.changeLanguage("pl")
        }
    }

    render() {
        return (
            <header className={this.state.topShadow ? 'start shadow' : 'start'}>
                <nav>
                    <div id="navOver" className={this.state.hambActive ? 'show' : 'hide'}></div>
                    <div id="leftHead">
                        <a href="#home" onClick={this.disableMenu.bind(this)}><img src={logo} alt="logo" id="logo" /></a>
                    </div>
                    <div id="rightHead" className={this.state.hambActive ? 'showNav' : ''}>
                        <a href="#aboutMe" onClick={this.disableMenu.bind(this)}>{this.props.t("Header.aboutMe")}</a>
                        <a href="#skills" onClick={this.disableMenu.bind(this)}>{this.props.t("Header.skills")}</a>
                        <a href="#portfolio" onClick={this.disableMenu.bind(this)}>{this.props.t("Header.portfolio")}</a>
                        <a href="#contact" onClick={this.disableMenu.bind(this)}>{this.props.t("Header.contact")}</a>
                        <div onClick={this.changeLang.bind(this)}>
                            <img src={this.state.currentLang === "pl" ? polandFlag : engFlag} alt="language" />
                        </div>
                    </div>
                    <div id="hambButton" className={this.state.hambActive ? 'open' : ''} onClick={this.showMobileMenu.bind(this)}>
                        <div className='hambBtn'></div>
                        <div className='hambBtn'></div>
                        <div className='hambBtn'></div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default withTranslation()(Header);
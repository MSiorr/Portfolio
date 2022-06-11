import React, { Component } from 'react';
import logo from '../gfx/logo.png';
import polandFlag from '../gfx/poland-flag.png'

interface myProps { }
interface myState {
    hambActive: boolean,
    topShadow: boolean
}

class Header extends Component<myProps, myState> {
    constructor(props: myProps) {
        super(props)

        this.state = {
            hambActive: false,
            topShadow: false
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

    render() {
        return (
            <header className={this.state.topShadow ? 'start shadow' : 'start'}>
                <nav>
                    <div id="navOver" className={this.state.hambActive ? 'show' : 'hide'}></div>
                    <div id="leftHead">
                        <a href="#home" onClick={this.disableMenu.bind(this)}><img src={logo} alt="logo" id="logo" /></a>
                    </div>
                    <div id="rightHead" className={this.state.hambActive ? 'showNav' : ''}>
                        <a href="#aboutMe" onClick={this.disableMenu.bind(this)}>O MNIE</a>
                        <a href="#skills" onClick={this.disableMenu.bind(this)}>UMIEJĘTNOŚCI</a>
                        <a href="#portfolio" onClick={this.disableMenu.bind(this)}>PORTFOLIO</a>
                        <a href="#contact" onClick={this.disableMenu.bind(this)}>KONTAKT</a>
                        <a href="/#" onClick={this.disableMenu.bind(this)}>
                            <img src={polandFlag} alt="language" />
                        </a>
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

export default Header;
import React, { Component } from 'react';

import './SCSS/Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer>
                <p>Designed &amp; Build by Michał Ślęzak 2022</p>
                <p>Icons: <span>
                    <a href="https://www.svgrepo.com/" target="_blank" rel="noreferrer">SVG Repo</a>
                </span> &amp; <span>
                        <a href="https://simpleicons.org/" target="_blank" rel="noreferrer">Simple Icons</a>
                    </span></p>
            </footer>
        );
    }
}

export default Footer;
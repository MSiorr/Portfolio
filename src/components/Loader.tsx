import React, { Component } from 'react';
import { ReactComponent as Logo } from '../gfx/logo.svg';

import "./SCSS/Loader.scss";

class Loader extends Component {
    render() {
        return (
            <div id="loaderBack">
                <Logo />
            </div>
        );
    }
}

export default Loader;
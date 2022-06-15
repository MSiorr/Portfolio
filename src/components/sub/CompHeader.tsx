import React, { Component } from 'react';

interface compHeaderInterface {
    title: string,
    show?: boolean
}

class CompHeader extends Component<compHeaderInterface> {
    render() {
        return (
            <div className={`compHeader active ${this.props.show ? 'active-Scale' : ''}`}>
                <div className="line"></div>
                <div className="compTitle"><span>{this.props.title}</span></div>
                <div className="line"></div>
            </div>
        );
    }
}


export default CompHeader;
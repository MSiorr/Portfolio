import React, { Component } from 'react';
import { mobileStatus } from './Page';
import CompHeader from './sub/CompHeader';
import { gearProps } from './sub/Gear';
import GearBase from './sub/GearBase';



class AboutMe extends Component<mobileStatus> {
    constructor(props: any = null) {
        super(props)
    }

    render() {
        let gearsData: gearProps[] = [
            { isTop: true, isLeft: true, x: '0px', y: '14%', size: 'l' },
            { isTop: false, isLeft: false, x: '0px', y: '14%', size: 'l' }
        ]
        return (
            <div id="aboutMe" className='dataComponent'>
                <CompHeader title={"O MNIE"} />
                <section className='restrictedWidth restrictedHeight'>
                    <p>
                        Cześć! Jestem Michał i mam 20 lat. Swoją przygodę z programowaniem zacząłem 4 lata temu.
                        Najlepiej czuję się w tworzeniu stron internetowych, aplikacji mobilnych oraz gier.
                    </p>
                    <p>
                        Obecnie ukończyłem technikum informatyczne.
                    </p>
                </section>
                <GearBase gearsData={gearsData} mobile={this.props.mobile} />
            </div>
        );
    }
}



export default AboutMe;
import React, { useRef } from 'react'
import Navbar from '../../components/navbar/navbar'
import space from './space.gif'
import './home.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import AboutUS from '../../components/home/aboutus/aboutus'
import prices from './prices.png'
import Prices from '../../components/home/Prices/prices'
import Contact from '../../components/contact/contact'

const Home = () => {
    // offset={window.innerWidth < 768 ? 2.1 : 1.2}
    const parallax = useRef();

    return (
        <div>
            <Navbar />
            <Parallax pages={4} ref={parallax}>
                <ParallaxLayer
                    offset={0}
                    factor={1}
                    speed={0.0}
                    style={{
                        backgroundImage: `url(${space})`,
                        backgroundSize: 'cover'
                    }}
                />
                <ParallaxLayer offset={0.1} speed={1}>
                    <p className='header'>
                        Get the best<br />
                        Haircut<br />
                        in town
                    </p>
                </ParallaxLayer>

                <ParallaxLayer offset={1} factor={1} speed={0}>
                    <AboutUS></AboutUS>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={window.innerWidth < 768 ? 2 : 2}
                    factor={1.3}
                    speed={0.1}
                    style={{
                        backgroundImage: `url(${prices})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}></ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1}>
                    <Prices></Prices>
                </ParallaxLayer>

                <ParallaxLayer offset={3.2} factor={1} speed={0} >
                    <Contact></Contact>
                </ParallaxLayer>

            </Parallax>
        </div >
    )
}

export default Home
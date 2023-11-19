import React from 'react'
import './aboutus.css'
import woman from '../woman.png'

const AboutUS = () => {
    return (
        <div className='textContainer'>

            <div className='text'>
                <h2>About me</h2>
                <br></br>
                I studied hairdressing from the best in the profession, at TUE university.
                <br></br>
                <br></br>
                I spend 5 years in London at a very fancy saloon and giving haircuts everyday
                <br></br>
                <br></br>
                Hair is my canvas, and its my lifegoal to give out nice haircuts
                <br></br>
                <br></br>
                We only use the best avaible hair-cair products
            </div>
            <div className='imageContainer'>
                <img className='image' src={woman}></img>
            </div>
        </div>

    )
}

export default AboutUS

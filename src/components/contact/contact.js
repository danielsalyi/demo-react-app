import React from 'react'
import './contact.css'


const Contact = () => {
    return (
        <div className='contactContainer'>
            <h1>Contact me</h1>
            <div >
                <iframe
                    width="100%"
                    height="400px"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=API_KEY
&q=Space+Needle,Seattle+WA">
                </iframe>
            </div>
            <div>
                instagram:
                email:
                phone:
            </div>
        </div>
    )
}

export default Contact

import React from 'react';
import './About.css';

export default function About () {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Montserrat, serif'}}>
            <h2 className='about__title'>Amber Kamauoha</h2>
            <img src='http://www.ambershairandlashes.com/_/rsrc/1506869912282/contact-us/DSC_0344%20%283%29.JPG?height=320&width=212' alt=''/>
            <h4 className='about__description'>Hair Stylist and Eyelash Technician</h4>
        </div>
    )
}
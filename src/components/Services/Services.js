import React from 'react';
import './Services.css';

import image from './images/red-hair.jpg'

export default function Services () {
    return (
        <div className='services__fullscreen'>
            <div className='services__image'>
                <img src={image} alt=''
                    style={{height: '50vh', marginTop: '10px', marginLeft: '10px'}}/>
            </div>
            <div className='services__container'>
                <div className='services__header'>Services</div>
                <div style={{height: '3vh'}}></div>
                {/* <div className='services__eyelash-header'>Eyelash Extensions</div> */}
                <div style={{height: '2.5vh'}}></div>
                <div className='services__eyelash'>
                    <div className='services__eyelash-type'>Classic Lashes</div>
                    <div className='services__service-container'>
                        <div className='services__service'>Full Set:</div>
                        <div className='services__price'>$79</div>
                    </div>
                    <div className='services__service-container'>
                        <div className='services__service'>2 Week Fill:</div>
                        <div className='services__price'>$35</div>
                    </div>
                    <div className='services__service-container'>
                        <div className='services__service'>3 Week Fill:</div>
                        <div className='services__price'>$45</div>
                    </div>
                    <div className='services__service-container'>
                        <div className='services__service'>4 Week Fill:</div>
                        <div className='services__price'>$55</div>
                    </div>
                    <div className='services__service-container'>
                        <div className='services__service'>Mini Fill (30 minutes):</div>
                        <div className='services__price'>$25</div>
                    </div>
                </div>
                <div style={{height: '2vh'}}></div>
                <div className='services__eyelash'>
                    <div className='services__eyelash-type'>Volume Lashes</div>
                    <div className='services__service-container'>
                        <div className='services__service'>Full Set:</div>
                        <div className='services__price'>$89</div>
                    </div>
                    <div className='services__service-container'>
                        <div className='services__service'>2 Week Fill:</div>
                        <div className='services__price'>$45</div>
                    </div>
                    <div className='services__service-container'>
                        <div className='services__service'>3 Week Fill</div>
                        <div className='services__price'>$55</div>
                    </div>
                    <div className='services__service-container'>
                        <div className='services__service'>4 Week Fill:</div>
                        <div className='services__price'> $65</div>
                    </div>
                    <div className='services__service-container'>
                        <div className='services__service'>Mini Fill(40 minutes):</div>
                        <div className='services__price'>$30</div>
                    </div>
                </div>
                <div style={{height: '2vh'}}></div>
                <div className='services__eyelash'>
                    <div className='services__eyelash-type'>Extension Removal</div>
                    <div className='services__service-container'>
                        <div className='services__service'>Extension Removal:</div>
                        <div className='services__price'>$15</div>
                    </div>
                    <div className='services__service-container'>
                        <div className='services__service'>Add Colored Lashes:</div>
                        <div className='services__price'>$5</div>
                    </div>
                </div>
                
            </div>
        </div>
            
    )
}
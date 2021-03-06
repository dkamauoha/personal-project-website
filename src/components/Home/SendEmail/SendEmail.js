import React, { Component } from 'react';
import axios from 'axios';

import About from '../../About/About';
import './SendEmail.css';

class SendEmail extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    sendEmail = () => {
        const { name, email, message } = this.state;
        axios.post('/api/sendemail', {name: name, email: email, message: message})
            .then(() => {
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                })
                alert('Your Message has been sent!');
            })
    }

    render() {
        // console.log(this.state)
        return (
            <div style={{height: '100%'}}>
                <About />
                <div className='sendemail__content-container'>
                    <div style={{marginTop: '15px', marginBottom: '10px'}}>Send an Email</div>
                    <div style={{height: '12vh', width: '50%', display: 'flex', flexDirection: 'column'}}
                        >
                        <p className='sendemail__description'>Enter your name:</p>
                        <input 
                            name='name'
                            style={{border: 'none'}}
                            value={this.state.name}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div style={{height: '12vh', width: '50%', display: 'flex', flexDirection: 'column'}}>
                        <p className='sendemail__description'>Enter your email below:</p>
                        <input 
                            name='email'
                            style={{border: 'none'}}
                            value={this.state.email}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div style={{height: '12vh', width: '50%', display: 'flex', flexDirection: 'column'}}
                        >
                        <p className='sendemail__description'>Type your message below:</p>
                        <textarea  
                            name='message'
                            value={this.state.message}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <button className='sendemail__button' onClick={() => this.sendEmail()}>Send</button>
                </div>                     

            </div>
        )
    }
}

export default SendEmail;
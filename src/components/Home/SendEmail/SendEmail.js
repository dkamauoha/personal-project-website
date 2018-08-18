import React, { Component } from 'react';
import axios from 'axios';

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

    componentDidMount() {
        this.setState({name:'',email:'',message:''})
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    sendEmail = () => {
        const { name, email, message } = this.state;
        axios.post('/api/sendemail', {name: name, email: email, message: message})
            .then(() => {
                this.componentDidMount();
                alert('Your Message has been sent!');
            })
    }

    render() {
        console.log(this.state)
        return (
            <div style={{height: '100%'}}>
                <div className='sendemail__content-container'>
                    <div>SendEmail</div>
                    <div style={{height: '15vh', width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                        >
                        <p className='sendemail__description'>Enter your name:</p>
                        <input style={{maxWidth: '450px'}}
                            name='name'
                            defaultValue={this.state.name}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div style={{height: '15vh', width: '50%', display: 'flex', flexDirection: 'column'}}>
                        <p className='sendemail__description'>Enter your email below:</p>
                        <input name='email'
                            defaultValue={this.state.email}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div style={{height: '15vh', width: '50%', display: 'flex', flexDirection: 'column'}}
                        >
                        <p className='sendemail__description'></p>
                        <textarea  name='message'
                            defaultValue={this.state.message}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <button onClick={() => this.sendEmail()}>Send</button>
                </div>                     

            </div>
        )
    }
}

export default SendEmail;
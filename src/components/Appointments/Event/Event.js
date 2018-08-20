import React, { Component } from 'react';
import axios from 'axios';

import './Event.css';

class Event extends Component {
    constructor() {
        super();
        this.state = {
            editToggle: false,
            start_date: '',
            start_time: '',
            end_time: '',
            service: ''
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    toggleEdit = () => {
        this.setState(prevState => {
            return {editToggle: !prevState.editToggle}
        })
    }

    updateEvent = () => {
        let appointment = {
            appointment_id: this.props.event.appointment_id,
            start_date: this.state.start_date,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            service: this.state.service
        }
        axios.put('/api/event', appointment)
            .then(() => {
                this.toggleEdit()
                this.props.rerenderComponent()
            })
            .catch(res => console.log(res))
    }

    deleteEvent = (id) => {
        const {appointment_id} = this.props.event;
        axios.delete(`/api/event/${appointment_id}`)
            .then(() => {
                this.props.rerenderComponent()
            })
            .catch(console.log('Unable to delete the appointment'));
    }

    render () {
        let toggleDisplay = () => {
            return this.state.editToggle 
            ? <div className='event__event-edit-container'>
                <div className='event__info-div'>Date: <input name='start_date' defaultValue={this.props.event.start_date} onChange={(e) => this.handleChange(e) }/></div>
                <div className='event__info-div'>Start time: <input name='start_time' defaultValue={this.props.event.start_time} onChange={(e) => this.handleChange(e) }/></div>
                <div className='event__info-div'>End time: <input name='end_time' defaultValue={this.props.event.end_time} onChange={(e) => this.handleChange(e) }/></div>
                <div className='event__dropdown'>
                    Service: <select name='service' className='schedule-modal__services'
                                 onChange={(event) =>this.handleChange(event)}
                                 >
                                 <option className='schedule-modal__option' value='haircut'>Haircut</option>
                                 <option className='schedule-modal__option' value='Color'>Color</option>
                                 <option>test</option>
                                 <option>test</option>
                                 <option>test</option>
                                 <option>test</option>
                                 <option>test</option>
                                 <option>test</option>
                                 <option>test</option>
                             </select>
                </div>
                <div className='event__button-container'>
                    <button className='event__button' onClick={this.updateEvent}>Save Appointment</button>
                    <button className='event__button' onClick={this.deleteEvent}>Delete Appointment</button>
                </div>
              </div>
            : <div className='event__event-container'>
                <div className='event__info-div'>Date: {this.props.event.start_date}</div>
                <div className='event__info-div'>Time: {this.props.event.start_time} - {this.props.event.end_time}</div>
                <div className='event__info-div'>Service: {this.props.event.service}</div>
                <div className='event__button-container'>
                    <button className='event__button' onClick={this.toggleEdit}>Update Appointment</button>
                    <button className='event__button' onClick={this.deleteEvent}>Delete Appointment</button>
                </div>
              </div>
        }
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {toggleDisplay()}
            </div>
        )
    }
}

export default Event;
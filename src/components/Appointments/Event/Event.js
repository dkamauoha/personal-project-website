import React, { Component } from 'react';
import axios from 'axios';

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

    // componentDidMount() {
    //     this.setState({
    //         appointment_id: this.props.event.appointment_id,
    //         start_date: this.props.event.start_date,
    //         start_time: this.props.event.start_time,
    //         end_time: this.props.event.end_time,
    //         service: this.props.event.service
    //     });
    // };

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
        console.log(this.state)
        let toggleDisplay = () => {
            return this.state.editToggle 
            ? <div>
                <div>Date: <input name='start_date' defaultValue={this.props.event.start_date} onChange={(e) => this.handleChange(e) }/></div>
                <div>Start time: <input name='start_time' defaultValue={this.props.event.start_time} onChange={(e) => this.handleChange(e) }/></div>
                <div>End time: <input name='end_time' defaultValue={this.props.event.end_time} onChange={(e) => this.handleChange(e) }/></div>
                <div>
                    Service: <select name='service' className='schedule-modal__services'
                                 onChange={(event) =>this.handleChange(event)}
                                 name='service'>
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
                <div>
                    <button onClick={this.updateEvent}>Save Appointment</button>
                    <button onClick={this.deleteEvent}>Delete Appointment</button>
                </div>
              </div>
            : <div>
                <div>Date: {this.props.event.start_date}</div>
                <div>Time: {this.props.event.start_time} - {this.props.event.end_time}</div>
                <div>Service: {this.props.event.service}</div>
                <div>
                    <button onClick={this.toggleEdit}>Update Appointment</button>
                    <button onClick={this.deleteEvent}>Delete Appointment</button>
                </div>
              </div>
        }
        return (
            <div>
                {toggleDisplay()}
            </div>
        )
    }
}

export default Event;
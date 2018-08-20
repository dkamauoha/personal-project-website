import React, { Component } from 'react';
import axios from 'axios';
import './ScheduleModal.css';

class ScheduleModal extends Component {
    constructor () {
        super();
        this.state = {
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: '',
            service: ''
        }
    }

    componentDidUpdate (prevProps) {
        if (this.props.startDate !== prevProps.startDate) {
            this.setState({
                startDate: this.props.startDate,
                startTime: this.props.startTime,
                endDate: this.props.endDate,
                endTime: this.props.endTime
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createAppointment() {
        const { startDate, startTime, endDate, endTime, service } = this.state;
        axios.post('/api/appointment', {start_date: startDate, start_time: startTime, end_date: endDate, end_time: endTime, service: service})
            .then(() => {
                this.props.rerenderComponent()
                this.props.closeModal()
                this.setState({
                    startDate: '',
                    startTime: '',
                    endDate: '',
                    endTime: '',
                    service: ''
                })
            });
    }

    render() {
        // console.log(this.state);
        let drawerClasses = 'schedule-modal';
        if (this.props.show) {
            drawerClasses= 'schedule-modal open'
        }
        return (
            <div className={drawerClasses}>
                <div className='schedule-modal__header'>Book an Appointment</div>
                <div className='schedule-modal__appointment-info'>
                    <div className='schedule-modal__date'>{this.props.startDate}</div>
                    <div className='schedule-modal__time'>{this.props.startTime} - {this.props.endTime}</div>
                    <div className='schedule-modal__services-holder'>
                        <select className='schedule-modal__services'
                            onChange={(event) =>this.handleChange(event)}
                            name='service'>
                            <option>Select a Service:</option>
                            <option className='schedule-modal__option'>Classic Full Set</option>
                            <option className='schedule-modal__option'>Classic 2 Week Fill</option>
                            <option className='schedule-modal__option'>Classic 3 Week Fill</option>
                            <option className='schedule-modal__option'>Classic 4 Week Fill</option>
                            <option className='schedule-modal__option'>Classic Mini Fill</option>
                            <option className='schedule-modal__option'>Volume Full Set</option>
                            <option className='schedule-modal__option'>Volume 2 Week Fill</option>
                            <option className='schedule-modal__option'>Volume 3 Week Fill</option>
                            <option className='schedule-modal__option'>Volume 4 Week Fill</option>
                            <option className='schedule-modal__option'>Volume Mini Fill</option>
                            <option className='schedule-modal__option'>Extension Removal</option>
                            <option className='schedule-modal__option'>Add Colored Lashes</option>
                        </select>
                    </div>
                    <div style={{width: '100%', alignSelf: 'center'}}>
                        <button className='schedule-modal__button' onClick={() => this.createAppointment()}>Set Appointment</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ScheduleModal;
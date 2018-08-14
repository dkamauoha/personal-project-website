import React, { Component } from 'react';
import './ScheduleModal.css';

class ScheduleModal extends Component {
    constructor () {
        super();
        this.state = {
            startDate: '',
            endDate: '',
            service: ''
        }
    }

    // componentDidMount () {
    //     this.setState({
    //         startDate: this.props.startDate,
    //         endDate: this.props.endDate
    //     })
    // }

    componentDidUpdate (prevProps) {
        if (this.props.startDate !== prevProps.startDate) {
            this.setState({
                startDate: this.props.startDate,
                endDate: this.props.endDate
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        console.log(this.state);
        let drawerClasses = 'schedule-modal';
        if (this.props.show) {
            drawerClasses= 'schedule-modal open'
        }
        return (
            <div className={drawerClasses}>
                <div className='schedule-modal__header'>Book an Appointment</div>
                <div className='schedule-modal__time'>{this.props.startDate}</div>
                <div className='schedule-modal__time'>{this.props.endDate}</div>
                <div className='schedule-modal__services-holder'>
                    <select className='schedule-modal__services'
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
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default ScheduleModal;
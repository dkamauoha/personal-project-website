import React, { Component } from 'react';
import './ScheduleModal.css';

class ScheduleModal extends Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render() {
        let drawerClasses = 'schedule-modal';
        if (this.props.show) {
            drawerClasses= 'schedule-modal open'
        }
        return (
            <div className={drawerClasses}>
                <div>Book an Appointment</div>
                <div>{this.props.startDate}</div>
                <div>{this.props.endDate}</div>
            </div>
        )
    }
}

export default ScheduleModal;
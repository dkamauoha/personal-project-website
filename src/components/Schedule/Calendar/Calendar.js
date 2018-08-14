import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

import ScheduleModal from '../Modals/ScheduleModal';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false,
            startDate: '',
            endDate: ''
        }
    }

    modalToggle = (slotInfo) => {
        // console.log(this.state.modalOpen)
        this.setState({
            modalOpen: !this.state.modalOpen,
            startDate: moment(slotInfo.start.toLocaleString()).format('lll'),
            endDate: moment(slotInfo.end.toLocaleString()).format('lll')
        })
    }
    
    onEventClick = (event) => {
        alert(`Event start: ${event.start}, Event end: ${event.end}`)
    }

    render () {
        const dummyEvents = [
            {
              allDay: false,
              start: new Date('August 14 , 2018 11:00:00'),
              end: new Date('August 14 , 2018 11:00:00'),
              title: 'hi',
            },
            {
              allDay: true,
              
              start: new Date('August 14, 2018'),
              title: 'All Day Event',
            },
        ]
        // console.log(this.state);
        return (
            <div>
                <BigCalendar 
                    style={{zIndex: '0', maxWidth: '98vw'}}
                    selectable
                    onSelectEvent={event => this.onEventClick(event)}
                    onSelectSlot={slotInfo => this.modalToggle(slotInfo)}
                    events={dummyEvents}
                    step={30}
                    timeslots={2}
                    defaultView='day'
                    defaultDate={new Date()}/>
                <ScheduleModal 
                    show={this.state.modalOpen}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}/>
            </div>
        )
    }
}

export default Calendar;
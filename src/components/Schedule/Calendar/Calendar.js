import React, { Component } from 'react';
import axios from 'axios';
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
            events: [],
            modalOpen: false,
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: ''
        }
    }

    componentDidMount() {
        axios.post('/api/events')
            .then(res => {
                // console.log(res.data);
                this.setState({events: res.data})
            })
    }

    modalToggle = (slotInfo) => {
        // console.log(this.state.modalOpen)
        this.setState({
            modalOpen: !this.state.modalOpen,
            startDate: moment(slotInfo.start.toLocaleString()).format('ll'),
            startTime: moment(slotInfo.start.toLocaleString()).format('LT'),
            endDate: moment(slotInfo.end.toLocaleString()).format('ll'),
            endTime: moment(slotInfo.end.toLocaleString()).format('LT'),
        })
    }

    closeModal = () => {
        this.setState({modalOpen: false})
    }
    
    onEventClick = (event) => {
        alert(`Event start: ${event.start}, Event end: ${event.end}`)
    }

    render () {
        const events = this.state.events.map(el => {
            console.log(el);
            return {
                allDay: false,
                start: new Date(`${el.start_date} ${el.start_time}`),
                end: new Date(`${el.end_date} ${el.end_time}`),
                title: el.service,
            }
        })
        console.log(events);
        // const dummyEvents = [
        //     {
        //       allDay: false,
        //       start: new Date('August 14 , 2018 11:00:00'),
        //       end: new Date('August 14 , 2018 11:00:00'),
        //       title: 'hi',
        //     },
        //     {
        //       allDay: true,
              
        //       start: new Date('August 14, 2018'),
        //       title: 'All Day Event',
        //     },
        // ]
        // console.log(this.state);
        return (
            <div>
                <BigCalendar 
                    style={{zIndex: '0', maxWidth: '98vw'}}
                    selectable
                    onSelectEvent={event => this.onEventClick(event)}
                    onSelectSlot={slotInfo => this.modalToggle(slotInfo)}
                    events={events}
                    step={30}
                    timeslots={2}
                    defaultView='day'
                    defaultDate={new Date()}/>
                <ScheduleModal 
                    show={this.state.modalOpen}
                    startDate={this.state.startDate}
                    startTime={this.state.startTime}
                    endDate={this.state.endDate}
                    endTime={this.state.endTime}
                    closeModal={this.closeModal}/>
            </div>
        )
    }
}

export default Calendar;
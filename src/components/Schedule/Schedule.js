import React, { Component } from 'react'
import Calendar from './Calendar/Calendar';

import './Schedule.css';


class Schedule extends Component {
  state = {
    modalOpen: false,
  }

  modalToggle = () => {
    this.setState((prevState) => {
      return {modalOpen: !prevState.modalOpen};
    })
  }

  render() {
    return (
      <div className='schedule'>
        <Calendar />
      </div>
    )
  }
}

export default Schedule;
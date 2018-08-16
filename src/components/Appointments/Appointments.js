import React, { Component } from 'react'
import axios from 'axios';

class Appointments extends Component {
  constructor() {
    super();
    this.state ={
      events: [],
    };
  };

  componentDidMount () {
    axios.post('/api/appointments')
      .then(res => {
        console.log(res);
        this.setState({events: res.data})
      })
  }

  render() {
    console.log(this.state.events)
    let events = this.state.events.map(event => {
      <div>
        
      </div>
    })
    return (
      <div>
        {this.state.events[0] 
        ? <h2>Appointments for {this.state.events[0].full_name}</h2>
        : <h2>Sign in to view your appointments.</h2>}
        </div>
    )
  }
}

export default Appointments

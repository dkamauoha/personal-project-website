import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import Event from './Event/Event';

import { updateEvents } from '../../ducks/reducer';

import './Appointments.css';

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
        // console.log(res);
        this.props.updateEvents({events: res.data})
      })
  }

  rerenderComponent = () => {
    this.componentDidMount()
  }

  render() {
    // console.log(this.props.events[0])
    const events = this.props.events.map((event, i) => (
     <div key={i}>
        <Event
          event={event}
          rerenderComponent={this.rerenderComponent}
          style={{width: '100%'}}/>
      </div>
    ))
    return (
      <div style={{width: '100%'}}>
        <h2>
          {this.props.events[0] 
          ? <h2 style={{fontFamily: 'Montserrat, sans-serif', width: '100%', fontSize: '2.5em', textAlign: 'center', marginBottom:'5vh', marginTop: '80px'}}>Appointments for {this.props.events[0].full_name}</h2>
          : <h2 style={{fontFamily: 'Montserrat, sans-serif', width: '100%', fontSize: '2.5em', textAlign: 'center', marginBottom:'5vh', marginTop: '80px'}}>Sign in to view your appointments.</h2>}
        </h2>
        
          {this.props.events[1]
          ? <div /*style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}*/>{events}</div>
          : <div></div>}       
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
  }
}

export default connect(mapStateToProps, { updateEvents })(Appointments);

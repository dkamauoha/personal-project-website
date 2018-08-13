import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

class Toolbar extends Component  {
    constructor () {
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios.get('/api/user').then(res => {
            console.log('res.data', res.data);
            this.setState({user: res.data});
        })
      }

    login () {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${window.location.origin}/auth/callback`;
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
    };


    render () {
        console.log(this.state.user);
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    <Link to='/' className="toolbar__logo"><div >Amber</div></Link>
                    <div className='spacer'></div>
                    <div className="toolbar__navigation-items">
                        <ul>
                            <Link to='/services'><li>SERVICES</li></Link>
                            <Link to='/gallery'><li>GALLERY</li></Link>
                            <Link to='/about'><li>ABOUT</li></Link>
                            <Link to='/schedule'><li>BOOK</li></Link>
                            <Link to='/appointments'><li>APPOINTMENTS</li></Link>
                        </ul>
                    </div>
                    <div className='toolbar__login'>
                        <Link to='/'><button onClick={() => this.login()}>Login</button></Link>
                        <img src={this.state.user.profile_pic} alt=''
                            className='iStyle'/>
                    </div>
                </nav>
            </header>
        )
    }
    
};

export default connect()(Toolbar);
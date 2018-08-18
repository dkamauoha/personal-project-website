import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateUser, logout } from '../../../ducks/reducer';

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
            let {data} = res;
            this.props.updateUser({user: data});
        })
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.user !== prevProps.user) {
            this.setState({user: this.props.user})
        }
    } 

    login () {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${window.location.origin}/auth/callback`;
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
    };


    logout () {
        axios.get('/api/logout')
            .then(() => {
                this.props.logout();
                console.log('Successfully logged out');
            });
    }


    render () {
        // console.log(this.state.user);
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
                            <Link to='/services'><li>Services</li></Link>
                            <Link to='/contact'><li>Contact</li></Link>
                            <Link to='/about'><li>About</li></Link>
                            <Link to='/schedule'><li>Book</li></Link>
                            <Link to='/appointments'><li>Appointments</li></Link>
                        </ul>
                    </div>
                    <div className='toolbar__login'>
                        <Link to='/' className='toolbar__login-text'><div onClick={() => this.login()}>Login</div></Link>
                        <img src={this.state.user.profile_pic} alt=''
                            className='iStyle'
                            onClick={() => this.logout()}/>
                    </div>
                </nav>
            </header>
        )
    }
    
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {updateUser, logout})(Toolbar);
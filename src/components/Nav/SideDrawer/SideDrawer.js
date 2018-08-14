import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './SideDrawer.css'; 

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <Link to='/' className='side-drawer__links'><li>HOME</li></Link>
                <Link to='/services' className='side-drawer__links'><li>SERVICES</li></Link>
                <Link to='/gallery' className='side-drawer__links'><li>GALLERY</li></Link>
                <Link to='/about' className='side-drawer__links'><li>ABOUT</li></Link>
                <Link to='/schedule' className='side-drawer__links'><li>BOOK</li></Link>
                <Link to='/appointments' className='side-drawer__links'><li>APPOINTMENTS</li></Link>
            </ul>
        </nav>
    )
}

export default withRouter(SideDrawer);
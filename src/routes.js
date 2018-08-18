import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About/About';
import Appointments from './components/Appointments/Appointments';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Schedule from './components/Schedule/Schedule';
import SendEmail from './components/Home/SendEmail/SendEmail';

const routes = (
    <Switch>
        <Route exact path='/' render={() => (
            <div>
                <Home />
                <Gallery />
            </div>
        )}/>
        <Route component={About} path='/about'/>
        <Route component={Appointments} path='/appointments'/>
        <Route component={Services} path='/services'/>
        <Route component={Schedule} path='/schedule'/>
        <Route component={SendEmail} path='/contact'/>
    </Switch>
)

export default routes;
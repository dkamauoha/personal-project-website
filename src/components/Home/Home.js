import React from 'react';

import SendEmail from './SendEmail/SendEmail';
import './Home.css';

export default function Home () {
    return (
        <div>
            <h2>Home</h2>
            <SendEmail />
        </div>
    )
}
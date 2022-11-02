import React from 'react';
import DashNavBar from "../navigation/DashNavBar";
import {Container} from "react-bootstrap";

function Message(props) {
    return (
        <div>
            <Container>
                <h1 className='text-uppercase'>Dashboard</h1>
                <DashNavBar/>
                <h2>Message</h2>
            </Container>
        </div>
    );
}

export default Message;

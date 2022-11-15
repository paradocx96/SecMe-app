import React from 'react';
import DashNavBar from "../navigation/DashNavBar";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import MessagesList from "../messages/MessagesList";

function Message(props) {
    return (
        <div>
            <Container>
                <h1 className='text-uppercase'>Dashboard</h1>
                <DashNavBar/>

                <Link to={'/messages/add'}>Add New Message</Link>
                <MessagesList/>
            </Container>
        </div>
    );
}

export default Message;

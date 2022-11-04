import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button, Container, Table} from "react-bootstrap";
import axios from "axios";
import MessagesList from "../components/messages/MessagesList";
import {Link} from "react-router-dom";

const Messages = () => {

    return(
        <Container>
            <h1>Messages</h1>
            <Link to={'/messages/add'}>Add New Message</Link>
            <MessagesList/>
        </Container>
    );

}

export default Messages;
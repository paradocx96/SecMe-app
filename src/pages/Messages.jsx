import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button, Container, Table} from "react-bootstrap";
import axios from "axios";
import MessagesList from "../components/messages/MessagesList";

const Messages = () => {

    return(
        <Container>
            <h1>Messages</h1>
            <MessagesList/>
        </Container>
    );

}

export default Messages;
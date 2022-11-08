import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button, Container, Table} from "react-bootstrap";
import axios from "axios";


const BASE_URL_LOCALHOST = "http://localhost:443/api/messages/";

const MessagesList = () => {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
    const [messagesList, setMessagesList] = useState([]);

    useEffect( () => {
        privateCallGetAllMessagesWithToken();
    })

    const privateCallGetAllMessages = async () => {
        try {
            const response = await axios.get(BASE_URL_LOCALHOST);
            setMessagesList(response.data)
            console.log(response.data);
        }
        catch (exception){
            console.log("Exception in getting all messages :  " + exception);
        }
    }

    const privateCallGetAllMessagesWithToken = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get(BASE_URL_LOCALHOST, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setMessagesList(response.data)
            console.log(response.data);
        }
        catch (exception){
            console.log("Exception in getting all messages :  " + exception);
        }
    }

    return(
      <Container>
          <div>
              <h2>Messages</h2>
              <div>
                  <Table striped bordered hover size={"sm"}>
                      <thead>
                      <tr>
                          <th>Posted By</th>
                          <th>Message</th>
                      </tr>
                      </thead>
                      <tbody>
                      {messagesList.map( message => {
                          const {id, username, content} = message;
                          return(
                              <tr key={id}>
                                  <td>{username}</td>
                                  <td>{content}</td>
                              </tr>
                          )
                      })}
                      </tbody>
                  </Table>
              </div>
          </div>
      </Container>
    );

}

export default MessagesList;

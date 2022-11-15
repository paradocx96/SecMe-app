import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Container, Table} from "react-bootstrap";
import axios from "axios";
import MessagesService from "../../services/MessagesService";
import ToastMessages from "../common/ToastMessages";


const BASE_URL_LOCALHOST = "http://localhost:443/api/messages/";

const MessagesList = () => {
    const {getAccessTokenSilently} = useAuth0();
    const [messagesList, setMessagesList] = useState([]);

    useEffect( () => {
        //get all messages with token
        async function getAllMessagesWithToken(){
            //get the token
            const token = await getAccessTokenSilently();
            await MessagesService.getAllMessagesWithToken(token).then((response) => {
                console.log("Message Data : ",response.data);
                setMessagesList(response.data)
            }).catch((error) =>  {
                if(error.response.status === 403 || error.response.status === 401){
                    ToastMessages("Permission Issue", "You Do not have permission");
                }else{
                    ToastMessages("Error", "Something went wrong!");
                }
            })
        }

        getAllMessagesWithToken();
    },[])

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

    const showAlert = (message) => {
        alert(message);
    }

    const privateCallGetAllMessagesWithToken = async () => {
        try {
            const token = await getAccessTokenSilently();

            const response = await MessagesService.getAllMessagesWithToken(token);
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

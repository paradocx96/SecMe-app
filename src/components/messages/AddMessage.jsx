import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button, Container, Form, Table} from "react-bootstrap";
import axios from "axios";

const BASE_URL_LOCALHOST = "http://localhost:443/api/messages/";

const AddMessage = () => {

    const [content, setContent] = useState("");

    const privateCreateMessage = async (event) => {
        event.preventDefault();
        try {
            let message = {
                username : "user4",
                content : content
            }
            const response = await axios.post(BASE_URL_LOCALHOST, message);

            if (response.data != null && response.data.id != null){
                showAlert("Message Posted");
            }
            else {
                showAlert("Error in adding message")
            }


            console.log(response);
            console.log(response.data);
        }
        catch (exception){
            console.log("Exception in creating message entry : " + exception);
        }

    }

    const onContentChange = (event) => {
      setContent(event.target.value);
    }

    const showAlert = (message) => {
      alert(message);
    }

    return(
        <Container>
            <div>
                <h2>New Message</h2>
                <Form
                    onSubmit={privateCreateMessage}
                >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        placeholder={"Enter message content"}
                        as={"textarea"}
                        rows={5}
                        value={content}
                        onChange={onContentChange}
                    />

                    <Button type="submit">Post Message</Button>
                    <Button type="reset" className="btn-danger">Reset</Button>
                </Form>
            </div>
        </Container>
    )
}

export default AddMessage;
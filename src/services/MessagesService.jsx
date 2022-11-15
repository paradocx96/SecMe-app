import axios from "axios";

const REMOTE_API_URL = "https://secme-api.azurewebsites.net/";
const URI_PART_FOR_MESSAGES = "api/messages/";
const LOCAL_API_URL = "https://localhost:443/";

const URI_MESSAGES = LOCAL_API_URL + URI_PART_FOR_MESSAGES;

class MessagesService{

    //get all messages
    getAllMessagesWithToken(token){
        return axios.get(URI_MESSAGES, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
    }

    //create new message with token
    createMessageWithToken(message, token){
        return axios.post(URI_MESSAGES, message,  {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
    }

}

export default new MessagesService();

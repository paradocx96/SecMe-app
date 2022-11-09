import remote_url from './deployment.json'
import axios from "axios";

class AuthService {
    BASE_URL = remote_url.remoteAddress + "/api/auth/";


    publicCall(getAccessTokenSilently) {
        return axios
            .get(this.BASE_URL + 'public')
            .then(res => console.log(res))
            .catch(error => console.log(error.message));
    }

    privateCall = async (getAccessTokenSilently) => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get(this.BASE_URL + 'private', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log(token);
        } catch (error) {
            console.log(error.message)
        }
    }

    privateCallScopeAdmin = async (getAccessTokenSilently) => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get(this.BASE_URL + 'admin', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log(token);
        } catch (error) {
            console.log(error.message)
        }
    }

    privateCallScopeManager = async (getAccessTokenSilently) => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get(this.BASE_URL + 'manager', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log(token);
        } catch (error) {
            console.log(error.message)
        }
    }

    privateCallScopeWorker = async (getAccessTokenSilently) => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get(this.BASE_URL + 'worker', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log(token);
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default new AuthService();

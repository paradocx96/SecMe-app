import remote_url from './deployment.json'
import axios from "axios";

class AuthService {
    BASE_URL = remote_url.localAddress + "/api/auth/";


    publicCall() {
        return axios.get(this.BASE_URL + 'public');
    }

    privateCall = async (token) => {
        return await axios.get(this.BASE_URL + 'private', {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
    }

    privateCallScopeAdmin = async (token) => {
        return await axios.get(this.BASE_URL + 'admin', {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
    }

    privateCallScopeManager = async (token) => {
        return await axios.get(this.BASE_URL + 'manager', {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
    }

    privateCallScopeWorker = async (token) => {
        return await axios.get(this.BASE_URL + 'worker', {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
    }
}

export default new AuthService();

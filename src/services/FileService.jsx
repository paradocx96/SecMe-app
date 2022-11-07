import axios from "axios";

const REMOTE_API_URL = "https://sec-me-api.herokuapp.com/";
const URI_FOR_FILE = "api/files/";
const LOCAL_API_URL = "http://localhost:443/";

const API_URL_REMOTE = REMOTE_API_URL + URI_FOR_FILE;
const API_URL_LOCAL = LOCAL_API_URL + URI_FOR_FILE;

class FileService {

    //axios upload file call
    uploadFile(file) {
        return axios.post(API_URL_LOCAL + "add", file);
    }

    //axios get files by username call
    getFilesByUsername(username) {
        return axios.get(API_URL_LOCAL + "getByUsername/" + username);
    }

    //axios get file by id call
    getFileById(id) {
        return axios.get(API_URL_LOCAL + "getById/" + id);
    }

    deleteFileById(id) {
        return axios.delete(API_URL_LOCAL + id);
    }
}

export default new FileService();

/**
 * @Author: H.G. Malwatta - IT19240848
 * @Description: This is the file service class which is used to handle all the file related operations
 * @Version: 1.0
 */

import axios from "axios";
import Connection from "./deployment.json";
const URI_FOR_FILE = "/api/files/";

const API_URL_REMOTE = Connection.remoteAddress + URI_FOR_FILE;
const API_URL_LOCAL = Connection.localAddress + URI_FOR_FILE;

class FileService {

    //axios upload file call
    uploadFile(file) {
        return axios.post(API_URL_REMOTE + "add", file);
    }

    //axios get files by username call
    getFilesByUsername(username) {
        return axios.get(API_URL_REMOTE + "getByUsername/" + username);
    }

    //axios get file by id call
    getFileById(id) {
        return axios.get(API_URL_REMOTE + "getById/" + id);
    }

    //axios delete file by id call
    deleteFileById(id) {
        return axios.delete(API_URL_REMOTE + id);
    }
}

export default new FileService();

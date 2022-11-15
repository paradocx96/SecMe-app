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
    uploadFile(file, token) {
        return axios.post(API_URL_LOCAL + "add", file, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
    }

    //axios get files by username call
    getFilesByUsername(username, token) {
        return axios.get(API_URL_LOCAL + "getByUsername/" + username, {
            headers: {
                authorization: `Bearer ${token}`,
            }});
    }

    //axios get file by id call
    getFileById(id, token) {
        return axios.get(API_URL_LOCAL + "getById/" + id, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
    }

    //axios delete file by id call
    deleteFileById(id, token) {
        return axios.delete(API_URL_LOCAL + id, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
    }
}

export default new FileService();

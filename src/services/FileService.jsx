import axios from "axios";

class FileService {

    //axios upload file call
    uploadFile(file) {
        return axios.post("http://localhost:443/api/files/add", file);
    }

    //axios get files by username call
    getFilesByUsername(username) {
        return axios.get("http://localhost:443/api/files/getByUsername/" + username);
    }

    //axios get file by id call
    getFileById(id) {
        return axios.get("http://localhost:443/api/files/getById/" + id);
    }

    deleteFileById(id) {
        return axios.delete("http://localhost:443/api/files/" + id);
    }
}

export default new FileService();

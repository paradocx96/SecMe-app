/**
 * @Author: H.G. Malwatta - IT19240848
 * @Description: This component is used to upload files to the server and store them in the database
 * @Version: 1.0.0
 */

import React, {useState} from "react";
import ToastMessages from "../common/ToastMessages";
import FileService from "../../services/FileService";
import {ToastContainer} from "react-toastify";
import {Button} from "react-bootstrap";
import "../../assets/file.css";
import {useAuth0} from "@auth0/auth0-react";

const UploadFile = () => {
    const {user, getAccessTokenSilently} = useAuth0();
    const [selectedFile, setSelectedFile] = useState([]);
    const [fileBase64String, setFileBase64String] = useState("");
    const [fileName, setFileName] = useState("");
    const [isLoaded, setIsLoaded] = useState();

    //Handle file upload
    const onFileChange = (e) => {
        encodeFileBase64(e.target.files[0]);
        setSelectedFile(e.target.files);
        console.log("Files" + e.target.files[0]);
        console.log("name" + e.target.files[0].name);
        console.log("Size" + e.target.files[0].size);
        console.log("type " + e.target.files[0].type);
        setFileName(e.target.files[0].name);

        //Check file is loaded
        if (e.target.files[0]) {
            ToastMessages("info", "File Loaded Successfully!");
        }
    };

    //Encode file to base64
    const encodeFileBase64 = (file) => {
        const reader = new FileReader();

        //Convert the file to binary data
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                const Base64 = reader.result;
                setFileBase64String(Base64);
            };
            reader.onerror = (error) => {
                console.log("error: ", error);
                ToastMessages("error", "Something went wrong!");
            };

        }
    };

    //Upload file
    const onFileUpload = async () => {

        if (selectedFile === null || selectedFile === undefined || selectedFile.length === 0) {
            ToastMessages("warning", "Please select a file to upload!");
        } else {
            setIsLoaded(true);
            const dateTime = new Date().toISOString();
            const data = {
                "username": user.email,
                "dateTime": dateTime,
                "content": fileBase64String,
                "name": selectedFile[0].name,
                "type": selectedFile[0].type,
                "fileSize": selectedFile[0].size,
            }

            const token = await getAccessTokenSilently();

            await FileService.uploadFile(data, token).then((res) => {
                setSelectedFile(null);
                setFileBase64String("");
                setFileName("");
                setIsLoaded(false);
                if (res.status === 200) {
                    ToastMessages("success", "File Uploaded Successfully");
                } else {
                    ToastMessages("error", "File Upload Failed");
                }
            }).catch((err) => {
                if (err.response.status === 403 || err.response.status === 401) {
                    ToastMessages("error", "You can't upload any file!");
                } else {
                    ToastMessages("error", "Something went wrong!");
                }
                setSelectedFile(null);
                setFileBase64String("");
                setFileName("");
                setIsLoaded(false);
            });
        }
    }

    return (
        <div>
            <ToastContainer/>
            <br/>
            <br/>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className={"text-center"}>UPLOAD YOUR FILE HERE</h2>
                        <br/>
                        <div className="file-drop-area">
                            <span className="choose-file-button">Choose files</span>
                            <span className="file-message">or drag and drop files here</span>
                            <input
                                className="file-input"
                                type="file"
                                accept=".pdf,.txt,.png,.jpg,.jpeg"
                                onChange={onFileChange}/>
                        </div>
                        <br/>
                        <h5 className={"text-center font-monospace text-danger"}>{fileName ? `File name: ${fileName}` : "No file uploaded yet!"}</h5>
                        <br/>
                        <div className="d-flex justify-content-center">
                            <Button className={"btn btn-success text-center"} style={{padding: "8px 50px"}}
                                    onClick={() => onFileUpload()} disabled={isLoaded}>
                                {isLoaded && (
                                    <span className="spinner-border spinner-border-sm"> </span>
                                )}
                                Upload
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default UploadFile;

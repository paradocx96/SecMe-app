/**
 * @Author: H.G. Malwatta - IT19240848
 * @Description: This is used to display all files in a table format and also used to download and delete files
 * @Version: 1.0.0
 */

import React, {useEffect, useState} from "react";
import FileService from "../../services/FileService";
import FileDownload from "js-file-download";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button, Table} from "react-bootstrap";
import ToastMessages from "../common/ToastMessages";
import Modal from "react-bootstrap/Modal";

const ViewFileList = () => {

    const [files, setFiles] = useState([]);
    const [show, setShow] = useState(false);
    const [fileId, setFileId] = useState("");

    useEffect(() => {

        //Get current user email
        const userEmail = sessionStorage.getItem("user-email");

        //Get all files by username
        async function getFileByUsername() {
            await FileService.getFilesByUsername(userEmail).then((res) => {
                console.log("res.data: ", res.data);
                setFiles(res.data);
            }).catch((err) => {
                if(err.response.status === 403 || err.response.status === 401){
                ToastMessages("error", "You can't view any files!");
                }else{
                    ToastMessages("error", "Something went wrong!");
                }
            });
        }
        //Get current username
        getFileByUsername();

    }, []);

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = (id) => {
        setFileId(id);
        setShow(true);
    }

    const onClickFileDelete = (id) => {
        setShow(true);
        onDelete(id).then(r => {
            window.location.reload();
        });
    }
    const decodeFileBase64 = (base64String) => {
        const binaryString = window.atob(base64String);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; ++i) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    };

    //Download file
    const onDownload = (content, name) => {
        if(content === "" || name === ""){
            ToastMessages("error", "Sorry! failed to download file");
        }else{
            const decodeBase64 = decodeFileBase64(
                content.substring(content.indexOf(",") + 1)
            );
            FileDownload(decodeBase64, name);
            ToastMessages("success", "File Downloaded Successfully!");
        }
    };

    //Delete file
    const onDelete = async (id) => {
        console.log("id: ", id);
        await FileService.deleteFileById(id).then((res) => {
            if (res.data.status === "success") {
                window.location.reload();
                ToastMessages("success", res.data.message);
            } else {
                ToastMessages("error", res.data.message);
            }
        }).catch((err) => {
            if(err.response.status === 403 || err.response.status === 401){
                ToastMessages("error", "You can't delete any files!");
            }else{
                ToastMessages("error", "Something went wrong!");
            }
        });
    }

    //Create a table to display all files
    return (
        <div className="container">
            <ToastContainer/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>this delete cannot be undone!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={()=> onClickFileDelete(fileId)} >Delete</Button>
                </Modal.Footer>
            </Modal>
            <br/>
            <h2 className="text-center"><mark>All File Details</mark></h2>
            <br/>
            <Table striped bordered hover>
                <thead className={"fw-bold"}>
                <tr>
                    <td>File Name</td>
                    <td>File Type</td>
                    <td>File Size(KB)</td>
                    <td>Uploaded Date</td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {
                    files.length === 0 ?
                        <tr>
                            <td>{'Data Not Available!'}</td>
                            <td>{'Data Not Available!'}</td>
                            <td>{'Data Not Available!'}</td>
                            <td>{'Data Not Available!'}</td>
                            <td>{'Data Not Available!'}</td>
                            <td>{'Data Not Available!'}</td>
                        </tr>
                        :
                        files.map((file, key) => (
                            <tr key={file.id}>
                                <td>{file.name}</td>
                                <td>{file.type}</td>
                                <td>{ parseInt(parseInt(file.fileSize) / 1024)}</td>
                                <td>{file.dateTime}</td>
                                <td className={"text-center"}><Button onClick={() => onDownload(file.content, file.name)} className="btn btn-primary"
                                            id={"download-file"}>Download</Button></td>
                                <td className={"text-center"}><Button onClick={() => handleShow(file.id)} className="btn btn-danger">Delete</Button>
                                </td>
                            </tr>
                        ))
                }
                </tbody>
            </Table>
        </div>
    );
};
export default ViewFileList;

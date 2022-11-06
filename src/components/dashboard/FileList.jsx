import React from 'react';
import DashNavBar from "../navigation/DashNavBar";
import {Container} from "react-bootstrap";
import ViewFileList from "../files/ViewFileList";

function FileList(props) {
    return (
        <div>
            <Container>
                <h1 className='text-uppercase'>Dashboard</h1>
                <DashNavBar/>
                <ViewFileList/>
            </Container>
        </div>
    );
}

export default FileList;

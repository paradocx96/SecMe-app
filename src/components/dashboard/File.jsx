import React from 'react';
import DashNavBar from "../navigation/DashNavBar";
import {Container} from "react-bootstrap";
import UploadFile from "../files/UploadFile";

function File(props) {
    return (
        <div>
            <Container>
                <h1 className='text-uppercase'>Dashboard</h1>
                <DashNavBar/>
                <UploadFile/>
            </Container>
        </div>
    );
}

export default File;

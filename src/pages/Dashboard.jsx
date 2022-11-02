import React from 'react';
import {Container} from "react-bootstrap";
import DashNavBar from "../components/navigation/DashNavBar";

function Dashboard(props) {
    return (
        <div>
            <Container>
                <h1 className='text-uppercase'>Dashboard</h1>
                <DashNavBar/>
            </Container>
        </div>
    );
}

export default Dashboard;

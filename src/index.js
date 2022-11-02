import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Auth0Provider
            domain="paradocx.us.auth0.com"
            clientId="DCbhi0zAeI59ihuuQVc8UdDbrRX3NCDR"
            redirectUri={window.location.origin}
            audience="https://sec-me-api.herokuapp.com"
            scope="openid profile email"
        >
            <App/>
        </Auth0Provider>
    </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="paradocx.us.auth0.com"
            clientId="DCbhi0zAeI59ihuuQVc8UdDbrRX3NCDR"
            redirectUri={window.location.origin}
        >
            <App/>
        </Auth0Provider>
    </React.StrictMode>
);

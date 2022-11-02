import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import Error from "./pages/Error";
import MainNavBar from "./components/navigation/MainNavBar";

function App() {
    return (
        <div className="App">
            <MainNavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/error" element={<Error/>}/>
            </Routes>
        </div>
    );
}

export default App;

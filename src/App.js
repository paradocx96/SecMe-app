import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import Error from "./pages/Error";
import MainNavBar from "./components/navigation/MainNavBar";
import Dashboard from "./pages/Dashboard";
import Message from "./components/dashboard/Message";
import File from "./components/dashboard/File";
import FileList from "./components/dashboard/FileList";

function App() {
    return (
        <div className="App">
            <MainNavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/message" element={<Message/>}/>
                <Route path="/file" element={<File/>}/>
                <Route path="/file-list" element={<FileList/>}/>
            </Routes>
        </div>
    );
}

export default App;

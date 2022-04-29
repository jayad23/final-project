import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Login from "./Pages/Login/Login";

import { Link } from "react-router-dom";
function Error(){
    return(
        <div>
            <h1>This route is not valid</h1>
            <Link to="/access-registration">Back to Home Page</Link>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/access-registration" element={<Login/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
    </BrowserRouter>
    )
}

export default App;

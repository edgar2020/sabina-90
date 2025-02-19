// src/App.js
import React from "react";
import Form from "./components/Form"
import Admin from "./components/Admin"
import SaveTheDate from "./components/SaveTheDate"


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


// Save the Date Page Component
const Home = () => {
    return (
        <div className="SaveTheDateOuterDiv">
            <SaveTheDate/>
        </div>
    );
};

// RSVP Page Component 
const RSVP = () => (
    <div>
        <h2>RSVP</h2>
        <Form/>
    </div>
);
// Admin Page Component 
const AdminPage = () => (
    <div>
        <h2>Submitions</h2>
        <Admin/>
    </div>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/RSVP" element={<RSVP />}/>
                <Route path="/admin" element={<AdminPage />}/>
            </Routes>
        </Router>
    );
}

export default App;

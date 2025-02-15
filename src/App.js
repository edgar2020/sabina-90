// src/App.js
import React from "react";
import Form from "./components/Form"


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";


// Save the Date Page Component
const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Save the Date</h2>
            <button onClick={() =>
                 navigate("/contact")}>Go to Contact</button>
        </div>
    );
};

// RSVP Page Component 
const RSVP = () => (
    <div>
        <h2>RSVP</h2>
        <nav>
            <ul>
                <li>
                    <Link to="team">Our Team</Link>
                </li>
                <li>
                    <Link to="company">Our Company</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        <Form/>
    </div>
);

// Components for other pages
const Contact = () => <h2>Contact Page</h2>;
const Team = () => <h2>Team Page</h2>;
const Company = () => <h2>Company Page</h2>;

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/RSVP">RSVP</Link>
                    </li>
                </ul>
            </nav>
            {/*Implementing Routes for respective Path */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/RSVP" element={<RSVP />}>
                    <Route path="team" element={<Team />} />
                    <Route path="company" element={<Company />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;

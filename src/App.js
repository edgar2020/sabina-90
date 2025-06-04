/* eslint-disable no-unused-vars */
// src/App.js
import React, { useRef } from "react";
import Form from "./components/Form"
import Admin from "./components/Admin"
import SaveTheDate from "./components/SaveTheDate"
import Header from "./components/Header"

import ImageCarousel from './components/ImageCarousel'; // Import the component
import Invitation from './components/Invitation'; // Import the component

import s1 from './images/ofSabina/s01.jpg'
import s2 from './images/ofSabina/s02.JPG'
import s3 from './images/ofSabina/s03.JPG'
import s4 from './images/ofSabina/s04.JPG'
import s5 from './images/ofSabina/s05.JPG'
import s6 from './images/ofSabina/s06.jpg'
import s7 from './images/ofSabina/s07.jpg'
// import s8 from '../images/ofSabina/s08.jpg'
import s9 from './images/ofSabina/s09.jpg'
import s10 from './images/ofSabina/s10.jpg'
import s11 from './images/ofSabina/s11.jpg'
import s12 from './images/ofSabina/s12.jpg'
import s13 from './images/ofSabina/s13.jpg'
import s14 from './images/ofSabina/s14.jpg'
import s15 from './images/ofSabina/s15.jpg'
import s16 from './images/ofSabina/s16.jpg'
import s17 from './images/ofSabina/s17.jpg'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {

    const formRef = useRef(null); // Ref to the Form component

    const scrollToForm = () => {
        if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Save the Date Page Component
    const Home = () => {
        return (
            <div className="header_and_courasel">
                <Header/>
                <div className="home_header">
                    <ImageCarousel images={imageURLs} /> 
                </div>
                <div className="donation_paragraph_container">
                    <p className="donation_paragraph">Sabina agradece a Dios poder celbrar la vida junto con sus familiares y amigos. Su presencia es lo unico que ella necesita, pero si insiste en obsquiarle algo, les invita a donar la caridad de su eleccion. Gracias</p>
                    <div className="donation_paragraph_inner_container">
                        <p className="donation_paragraph_strong"><strong>Ubicación</strong></p>
                        <p className="donation_paragraph_inner">Salon Las Palmas</p>
                        <p className="donation_paragraph_inner">Calle Cristobal Colon #66</p>
                        <p className="donation_paragraph_strong"><strong>Fecha</strong></p>
                        <p className="donation_paragraph_inner">28 de Julio, 2025</p>
                    </div>
                </div>
                <div className="SaveTheDateOuterDiv">
                    <SaveTheDate/>
                </div>
            </div>
        );
    };

    const imageURLs = [
        s1,s2,s3,s4,s5,s6,s7,s9,s10,s11,s12,s13,s14,s15,s16,s17
    ];

    // RSVP Page Component 
    const RSVP = () => (
        <div className="rsvpPagecontainer">
            <Form ref={formRef} />
        </div>
    );
    // Admin Page Component 
    const AdminPage = () => (
        <div>
            <h2>Submitions</h2>
            <Admin/>
        </div>
    );


    

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

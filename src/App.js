/* eslint-disable no-unused-vars */
// src/App.js
import React, { useRef, useState } from "react";
import Form from "./components/Form"
import Admin from "./components/Admin"
import SaveTheDate from "./components/SaveTheDate"
import Header from "./components/Header"
import Information from "./components/Information"

import ImageCarousel from './components/ImageCarousel'; // Import the component

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
import s18 from './images/ofSabina/photo1.png'
import s19 from './images/ofSabina/photo2.png'
import s20 from './images/ofSabina/photo3.png'
import s21 from './images/ofSabina/photo4.png'
import s22 from './images/ofSabina/photo5.png'
import s23 from './images/ofSabina/photo6.png'
import s24 from './images/ofSabina/photo7.png'
import s25 from './images/ofSabina/photo8.png'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
        document.body.style.overflow = 'hidden';
    };
    const handleButtonExit = () => {
        setShowForm(false);
        document.body.style.overflow = '';
    };

    const handleFormClose = () => {
    setShowForm(false);
    };

    // Save the Date Page Component
    const Home = () => {
        return (
            <div className="header_and_courasel">
                
                <ToastContainer />
                <Header open={handleButtonClick}/>
                <div className="home_header">
                    <ImageCarousel images={imageURLs} /> 
                </div>
                <Information open={handleButtonClick}/>

                {showForm && 
                <div className='saveTheDateOuterOuterContainer sway'>
                    <div className='saveTheDateOuterContainer sway'>
                        <div className='saveTheDateContainer sway'>
                            <div className='saveTheDateContent '>
                                <button className='ExitButton shimmer atkinson-200' onClick={handleButtonExit}>X</button>
                                <Form onClose={handleFormClose}/> 
                            </div>
                        </div>
                    </div>
                </div>
                } 
            </div>
        );
    };

    const imageURLs = [
        s25,s22,s19,s18,s21,s23,s24,s1,s2,s3,s4,s5,s6,s7,s9,s10,s11,s12,s13,s20,s14,s15,s16,s17
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

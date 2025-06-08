/* eslint-disable no-unused-vars */
// src/App.js
import React, { useRef, useState, useEffect } from "react";
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
import n1 from './images/ofSabina/new1.png'
import n2 from './images/ofSabina/new2.png'
import n3 from './images/ofSabina/new3.png'
import n4 from './images/ofSabina/new4.png'
import n5 from './images/ofSabina/new5.png'
import n6 from './images/ofSabina/new6.png'
import n7 from './images/ofSabina/new7.png'
import n8 from './images/ofSabina/new8.png'
import n9 from './images/ofSabina/new9.png'
import n10 from './images/ofSabina/new10.png'
import n11 from './images/ofSabina/new11.png'
import n12 from './images/ofSabina/new12.png'
import n13 from './images/ofSabina/new13.png'
import n14 from './images/ofSabina/new14.png'
// import n15 from './images/ofSabina/new15.png'
import n16 from './images/ofSabina/new16.png'
import n17 from './images/ofSabina/new17.png'
import n18 from './images/ofSabina/new18.png'
import n19 from './images/ofSabina/new19.png'
import n20 from './images/ofSabina/new20.png'
import n21 from './images/ofSabina/new21.png'
import n22 from './images/ofSabina/new22.png'
import n23 from './images/ofSabina/new23.png'
import n24 from './images/ofSabina/new24.png'
import n25 from './images/ofSabina/new25.png'
import n26 from './images/ofSabina/new26.png'


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

    const imageURLs = [
        s25,s22,s19,s18,s21,s23,s24,s1,s2,s3,s4,s5,s6,s7,s9,s10,s11,s12,s13,s20,
        s14,s15,s16,s17,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n16,n17,
        n18,n19,n20,n21,n22,n23,n24,n25,n26
    ];

    const [shuffledImages, setShuffledImages] = useState([]);

    const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
    };
    useEffect(() => {
        const shuffled = shuffleArray(imageURLs);
        setShuffledImages(shuffled);
    }, []);

    // Save the Date Page Component
    const Home = () => {
        return (
            <div className="header_and_courasel">
                
                <ToastContainer />
                <Header open={handleButtonClick}/>
                <div className="home_header">
                    <ImageCarousel images={shuffledImages} /> 
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

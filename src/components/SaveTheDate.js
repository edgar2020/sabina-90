import React, { useState } from 'react';
import StainedPaper from '../images/stained-old-paper-texture-130.jpg'
import Finger from '../images/pointing-finger-3170418_1280.png'
import Calendar from '../images/calendar.png'

import Form from './Form'

function SaveTheDate() {

    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
    setShowForm(false);
    };


  return (
    <div className='saveTheDateContainer sway'>
        <div className='saveTheDateContent '>
            <h1 className='geist-mono-900  old-text mainContentHeader'><span className='exclamation'>¡</span>EXTRA<span className='exclamation'>!</span></h1>
            <h2 className='geist-mono-900 old-text contentSubHeader'>EXTRA-EXTRA</h2>
            <h2 className='geist-mono-500 old-text reserveHeader'>MARCA TU CALENDARIO</h2>
            <div className='calendarContainer'>
                <div className='titleInsideCalendarContainer'>
                    <div className='fingerSpan'>
                        <img className="finger" src={Finger} alt=''/>
                    </div>
                    <div className='fingerSpan fingerText'>
                        <h2 className='geist-mono-500 old-text reserveTheDate'>Y RESERVA LA FECHA</h2>
                    </div>
                </div>
                <img className="calendar" src={Calendar} alt=''/>

            </div>
            <h2 className='geist-mono-500 old-text celebrarText'>ESTAREMOS CELEBRANDO EL 90<sup className='th-tag'>th</sup> CUMPLEÑOS DE LA SEÑORA</h2>
            <h2 className='arbutus-font old-text gwendolyn-bold name'>Sabina Lomelí</h2>
            <h2 className='geist-mono-500 old-text fechaText'>LUNES, 28 DE JULIO, 2025, EN NOCHISTLÁN ZACATECAS</h2>
            <button className='RSVPbutton shimmerButton shimmer atkinson-200' onClick={handleButtonClick}>Confirme su Asistencia</button>
            {showForm && <Form onClose={handleFormClose} />}
            
            <img className="overlay" src={StainedPaper} alt=''/>
            
        </div>

    </div>
  )
}

export default SaveTheDate
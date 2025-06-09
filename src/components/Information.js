import React, { useState } from 'react';
import Form from "./Form"

import Frame from "../images/ofSabina/frame.png"

function Information({open}) {
  const handleOpen = (event) => {
    open(true); // Pass data back to parent
  };


  return (
    <div className="donation_paragraph_container">
      <div className="donation_paragraph_inner_container">
        <div className="donation_paragraph_left">
            <img className="picture_frame" src={Frame} alt=''/>
        </div>
        
        <div className="donation_paragraph_right">
          <p className="donation_paragraph">Sabina agradece a Dios poder celebrar la vida junto con sus familiares y amigos. Su presencia es lo único que ella necesita, pero si insiste en obsequiarle algo, les invita a donar a la caridad de su elección. Gracias.</p>
          <p className="donation_paragraph"><strong>Por favor, confirme su asistencia antes del 10 de Julio.</strong></p>
          <div className="donation_paragraph_inner_inner_container">
              <p className="donation_paragraph_strong"><strong>Ubicación</strong></p>
              <p className="donation_paragraph_inner">Salón Las Palmas</p>
              <p className="donation_paragraph_inner">Calle Cristóbal Colón #66</p>
              <p className="donation_paragraph_strong"><strong>Fecha</strong></p>
              <p className="donation_paragraph_inner">28 de Julio, 2025</p>
              <br></br>
              <button className='RSVPbutton3 shimmer atkinson-200' onClick={handleOpen}>Para confirmar presione aquí</button>
          </div>

            
        </div>
      </div>
    </div>
  )
} 

export default Information
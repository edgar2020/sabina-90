import React, { useState } from 'react';
import Form from "./Form"

function Information({open}) {
  const handleOpen = (event) => {
    open(true); // Pass data back to parent
  };


  return (
    <div className="donation_paragraph_container">
        <p className="donation_paragraph">Sabina agradece a Dios poder celbrar la vida junto con sus familiares y amigos. Su presencia es lo unico que ella necesita, pero si insiste en obsquiarle algo, les invita a donar la caridad de su eleccion. Gracias</p>
        <div className="donation_paragraph_inner_container">
            <p className="donation_paragraph_strong"><strong>Ubicación</strong></p>
            <p className="donation_paragraph_inner">Salon Las Palmas</p>
            <p className="donation_paragraph_inner">Calle Cristobal Colon #66</p>
            <p className="donation_paragraph_strong"><strong>Fecha</strong></p>
            <p className="donation_paragraph_inner">28 de Julio, 2025</p>

            
            <button className='RSVPbutton3 shimmer atkinson-200' onClick={handleOpen}>Confirmar su Asistencia</button>

          
        </div>
    </div>
  )
}

export default Information
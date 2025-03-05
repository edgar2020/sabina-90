import React from 'react'
import StainedPaper from '../images/stained-old-paper-texture-130.jpg'
function Invitation({ onButtonClick }) {



  return (
    <div className='invitation'>
        <div className='invitation-container'>
            {/* <img className="overlay-2" src={StainedPaper} alt=''/> */}
            <h3 className='invitation-preheader'>Estan Invitados Para Celebar el Cumpleanos de</h3>
            <h1 className='invitation-header'>Sabina Lomeli</h1>
            <h3 className='invitation-este'>este</h3>
            <h2 className='invitation-date'>28 de Julio, 2025</h2>
            <h2 className='invitation-location'>En el Salon Las Palmas De Nochistalon Zac.</h2>
            <button className='RSVP-button' onClick={onButtonClick}>Confirmar su Asistencia</button>
        </div>
    </div>
  )
}

export default Invitation
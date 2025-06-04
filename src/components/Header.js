import React, { useState } from 'react';

function Header({formData}) {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
    setShowForm(false);
    };


  return (
    <div className='header_container'>
      <h1 className='main_header_h1 gwendolyn-exbold'>Los 90 de Sabina Lomelí</h1>
      <button className='RSVPbutton2 shimmer atkinson-200' onClick={handleButtonClick}>Confirmar su Asistencia</button>
    </div>
  )
}

export default Header
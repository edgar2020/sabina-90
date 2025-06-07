import React, { useState } from 'react';
import Form from "./Form"

function Header({open}) {

    const handleOpen = (event) => {
        open(true); // Pass data back to parent
      };

  return (
    <div className='header_container'>
      <h1 className='main_header_h1 gwendolyn-exbold'>Los 90 de Sabina Lomelí</h1>
      <button className='RSVPbutton2 shimmer atkinson-200' onClick={handleOpen}>RSVP</button>

      
    </div>
  )
}

export default Header
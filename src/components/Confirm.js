import React from 'react'

function Confirm({formData}) {

    // is or is not attending
  const printStatus = () =>
    {
      if(formData.isAttending === 0) {
        return <p className='confirmation-paragraphs'>No nos vas acompañar</p>
      }
      else if(formData.isAttending === 1 && formData.numberOfGuests === '1') {
        return <p className='confirmation-paragraphs'>Solo nos acompañará 1 persona</p>
      }
      else {
        return <p className='confirmation-paragraphs'>Nos acompañarán {formData.numberOfGuests} personas.</p>
      }
    }

  return (
    <div className='confirmation Page'>
      <h2 className='confirmation-header'>¿Lo siguiente esta correcto?</h2>
      <p className='confirmation-paragraphs'>Nombre: {formData.firstName}</p>
      <p className='confirmation-paragraphs'>Apellido: {formData.lastName}</p>
      {printStatus()}
  

    </div>
  )
}

export default Confirm
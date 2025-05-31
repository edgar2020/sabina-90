import React from 'react'
// import React, { useState }  from 'react'

function GuestInfo({formData, setFormData}) {


  // const [isAttending, setAttendance] = useState(0);
  // const [isMoreThan9, setMoreGuests] = useState(0);

  const askNumberOfAttendees = () =>
    {
      if(formData.isAttending === 1) {
        return <div className='form-input-2' id='input-numberOfGuests'>
          <p className='form-label-2'>¿Con cuántas personas podemos contar?</p>
          <select  value={formData.numberOfGuests} id="input-numberOfGuests-select" name="numberOfGuests" onChange={(event) => setFormData({...formData, numberOfGuests: event.target.value})}>
          {/* <select id="input-numberOfGuests" name="numberOfGuests" onChange={(event) => alert(event.target.value)}> */}
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            {/* <option value="more">More</option> */}
        </select>
        </div>
      }
      else
      {
        return
      }
    }

  return (
    <div className='guestInfoContainer'>
      <div className='form-input-row'>
        <div className='form-input-box'>
        <p className='form-label'>Nombre</p><input type='text' placeholder='Nombre' id='input-firstName' className='form-input' value={formData.firstName} onChange={(event) => setFormData({...formData, firstName: event.target.value})}/>
        </div>
        
        <div className='form-input-box'>
        <p className='form-label'>Apellido</p><input type='text' placeholder='Apellido' id='input-lastName' className='form-input' value={formData.lastName} onChange={(event) => setFormData({...formData, lastName: event.target.value})}/>
        </div>
      </div>
      
      <div className='form-input-row-2'>
        <p className='form-label-2'>¿Podemos contar con tu presencia?</p>

      <div className='form-radio-row'>
        <input type="radio" value="true" id="isAttendingButton" name="attendingButtons" checked={formData.isAttending === 1} className='form-radio-input' onChange={(event) => setFormData({...formData, isAttending: 1})}/>
        <label for="isAttendingButton">Si</label>
        <input type="radio" value="false" id="notAttendingButton" name="attendingButtons" checked={formData.isAttending === 0} className='form-radio-input' onChange={(event) => setFormData({...formData, isAttending: 0})}/>
        <label for="notAttendingButton">No</label>
      </div>
      </div>
        {askNumberOfAttendees()}
        
    </div>
  )
}

export default GuestInfo
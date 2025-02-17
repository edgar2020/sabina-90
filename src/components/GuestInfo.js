import React, { useState } from 'react'

function GuestInfo({formData, setFormData}) {


  // const [isAttending, setAttendance] = useState(0);
  // const [isMoreThan9, setMoreGuests] = useState(0);

  const askNumberOfAttendees = () =>
    {
      if(formData.isAttending === 1) {
        return <div className='form-input' id='input-numberOfGuests'>
          <p className='form-label'>How many individuals will be joining us?</p>
          <select id="input-numberOfGuests" name="numberOfGuests">
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
      <p className='form-label'>First Name</p>
        <input type='text' placeholder='First Name...' id='input-firstName' className='form-input' value={formData.firstName} onChange={(event) => setFormData({...formData, firstName: event.target.value})}/>
      
      <p className='form-label'>Last Name</p>
        <input type='text' placeholder='Last Name...' id='input-lastName' className='form-input' value={formData.lastName} onChange={(event) => setFormData({...formData, lastName: event.target.value})}/>
      
      <p className='form-label'>Will you be Attending?</p>
        <input type="radio" value="true" id="isAttendingButton" name="attendingButtons" checked={formData.isAttending === 1} className='form-input' onChange={(event) => setFormData({...formData, isAttending: 1})}/>
        <label for="isAttendingButton">Yes</label>
        <input type="radio" value="false" id="notAttendingButton" name="attendingButtons" checked={formData.isAttending === 0} className='form-input' onChange={(event) => setFormData({...formData, isAttending: 0})}/>
        <label for="notAttendingButton">No</label>
      {askNumberOfAttendees()}
        
    </div>
  )
}

export default GuestInfo
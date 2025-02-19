import React from 'react'

function Confirm({formData}) {

    // is or is not attending
  const printStatus = () =>
    {
      if(formData.isAttending === 0) {
        return <p>You are unable to attend</p>
      }
      else if(formData.isAttending === 1 && formData.numberOfGuests === '1') {
        return <p>Just 1 person will be joining us</p>
      }
      else {
        return <p>{formData.numberOfGuests} people will be joining us.</p>
      }
    }

  return (
    <div className='confirmation Page'>
      <h2>Is the following correct?</h2>
      <p>First name {formData.firstName}</p>
      <p>Last name {formData.lastName}</p>
      {printStatus()}
  

    </div>
  )
}

export default Confirm
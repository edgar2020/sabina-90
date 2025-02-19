import React, { useState } from 'react'
import GuestInfo from './GuestInfo'
import Confirm from './Confirm'

function Form() {

  // will controll which page of the form user is currently at
  const [page, setPage] = useState(0);
  
  // will give header of each page
  const FormTitles = ["Primary Guest", "Confirmation"]

  // will save user's input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isAttending: 2,
    numberOfGuests: '-',
  })

   // Validation state to hold error messages
   const [errors, setErrors] = useState({
    isAttending: "", // Error for the attending radio button
    firstName: "",// Error for firstnames
    lastName: "",// Error for last names
    numberOfGuests: "",// Missing number of guests
  });

  // Function to handle form submission
  const handleNext = () => {
    // alert('adf');
    if(validateInputs())
    {
      setPage((curPage) => curPage+1);
    }
  };

    // Validation function
    const validateInputs = () => {
      let formErrors = { ...errors };
      let foundErrors = false;


      // Validate how many people are attending
      if (formData.isAttending !== 0 && formData.isAttending !== 1) {
        formErrors.isAttending = 'Please select an attendance option.';
        foundErrors = true;
      } else {
        formErrors.isAttending = ''; // Clear any previous errors
      }

      if (formData.isAttending === 1 && formData.numberOfGuests === '-') {
        formErrors.numberOfGuests = 'Please select number of guests who will be attending';
        foundErrors = true;
      } else {
        formErrors.numberOfGuests = ''; // Clear any previous errors
      }
      
      // Validate that the first name is not empty
      if (formData.firstName.trim() === '') {
        foundErrors = true;
        formErrors.firstName = 'First Name is required.';
      } else {
        formErrors.firstName = ''; // Clear any previous errors
      }
      
      // Validate that the last name is not empty
      if (formData.lastName.trim() === '') {
        formErrors.lastName = 'Last Name is required.';
        foundErrors = true;
      } else {
        formErrors.lastName = ''; // Clear any previous errors
      }
  
      // Set errors in state
      setErrors(formErrors);
  
      // Optionally, return true if validation passes or false if errors are present
      return !foundErrors;
    };

  // return the html for each page
  const PageDisplay = () =>
  {
    if(page === 0) {
      return <GuestInfo formData={formData} setFormData={setFormData}/>
    }
    else
    {
      return <Confirm formData={formData}/>
    }
  }

  const nextorSubmit = () =>
    {
      if(page === 0) {
        return <button className='FormNext'  onClick={() => {handleNext()}}>Next</button>
      }
      else
      {
        return <button className='FormSubmit'  onClick={() => {handleNext()}}>Submit</button>
      }
    }

  return (
    <div className='Form'>
        {/* <div className='FormProgressBar'>

        </div> */}
        <div className='FormContainer'>
            <div className='FormHeader'>
              <h1 className='FormHeaderTitle'>{FormTitles[page]}</h1>
            </div>
            <div className='FormBody'>
              {PageDisplay()}
              {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
              {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
              {errors.isAttending && <p style={{ color: 'red' }}>{errors.isAttending}</p>}
              {errors.numberOfGuests && <p style={{ color: 'red' }}>{errors.numberOfGuests}</p>}
            </div>
            <div className='FormFooter'>
                <button className='FormPrev' disabled={page === 0} onClick={() => {setPage((curPage) => curPage-1);}}>Previous</button>
                {nextorSubmit()}
            </div>
        </div>
    </div>
  )
}

export default  Form
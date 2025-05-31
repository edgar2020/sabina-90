/* eslint-disable no-unused-vars */
import React, { useState, forwardRef } from 'react'
import GuestInfo from './GuestInfo'
import Confirm from './Confirm'

import StainedPaper from '../images/stained-old-paper-texture-130.jpg'
import { db } from '../firebase'; // adjust path to your actual file
// images


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

function Form({ref}) {
  // for linking to

  // will controll which page of the form user is currently at
  const [page, setPage] = useState(0);
  // will be used to exit form when done
  const [isDone, setDone] = useState(false)
  
  // will give header of each page
  const FormTitles = ["ESTAN INVITADOS", "Confirmación"]
  // will save user's input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isAttending: 2,
    numberOfGuests: '-',
  })

  // Function to handle form submission
  const handleNext = () => {
    // alert('adf');
    if(validateInputs())
      {
        setPage((curPage) => curPage+1);
      }
    };


  const sendSuccess = async (msg) => {
    toast.success('¡Éxito! Tu acción se completó.', {
      position: 'top-right', // Customize position
      autoClose: 3000,                    // Auto-close after 3 seconds
      hideProgressBar: false,             // Show or hide progress bar
      closeOnClick: true,                 // Close on click
      pauseOnHover: true,                 // Pause on hover
      draggable: false,                   // Make it draggable
      progress: undefined,               // Progress bar value (if any)
    });
  }
  
  const handleSubmit = async (e) => {

    e.preventDefault();
        let guestResponse = {
          firstName: formData.firstName,
          lastName: formData.lastName,
        }
        
        if(formData.isAttending === 0)
          {
            guestResponse.isAttending = false;
            guestResponse.numberOfGuests = 0;
          }
          else
          {
            guestResponse.isAttending = true;
            guestResponse.numberOfGuests = formData.numberOfGuests;
        }

          
        const db = getFirestore();

        try {
          const docRef = await addDoc(collection(db, "responses"), guestResponse);
          sendSuccess('¡Éxito! Tu acción se completó.');
          console.log(docRef)
          setDone(true);
        } catch (error) {
          sendError("Hubo un error");
        }
    }

    // Validation function
    const sendError = async (err) => toast.error(err, {
      position: 'top-right', // Customize position
      autoClose: 2000,                    // Auto-close after 3 seconds
      hideProgressBar: false,             // Show or hide progress bar
      closeOnClick: true,                 // Close on click
      pauseOnHover: true,                 // Pause on hover
      draggable: false,                   // Make it draggable
      progress: undefined,               // Progress bar value (if any)
    });
  
    
    const validateInputs = () => {
      // let formErrors = { ...errors };
      let foundErrors = false;
      
      // Validate that the first name is not empty
      if (formData.firstName.trim() === '') {
        foundErrors = true;
        sendError('El nombre es obligatorio.');
      } 
      
      // Validate that the last name is not empty
      if (formData.lastName.trim() === '') {
        sendError('El apellido es obligatorio.');
        foundErrors = true;
      } 

      if (formData.isAttending !== 0 && formData.isAttending !== 1) {
        // formErrors.isAttending = 'Please select an attendance option.';
        sendError('Por favor seleccione una opción de asistencia.');
        foundErrors = true;
      } 
      
      // Validate how many people are attending
      if (formData.isAttending === 1 && formData.numberOfGuests === '-') {
        sendError('Por favor seleccione el número de invitados que asistirán')
        foundErrors = true;
      }
      

  
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
  const RSVP_stage = () =>
  {
    if(!isDone) {
      // when form is not considered done
      return (
      <div className='Form' ref={ref}>
        <div className='FormContainer'>
          <div className='FormHeader'>
            <h1 className='FormHeaderTitle'>{FormTitles[page]}</h1>
            <h2 className='FormHeadersubheader gwendolyn-bold' >a la fiesta de 90 años de</h2>
            <h1 className='ForHeaderName gwendolyn-bold'>Sabina Lomelí</h1>
            <p className='FormHeaderParagraph'>
                Le pedimos que por favor complete la siguiente información para 
                saber si podemos contar con tu presencia el <strong>28 de Julio, 
                  2025</strong> en el <strong>Salon Las Palmas:</strong></p>
            <br className='br-divider'></br>
            <p className='FormHeaderParagraph'>
                Sabina agradece a Dios poder celbrar la vida junto con sus familiares y amigos. Su presencia es lo unico que ella necesita, pero si insiste en obsquiarle algo, les invita a donar la caridad de su eleccion. Gracias</p>
            
          </div>
          <div className='FormBody'>
            {PageDisplay()}
          </div>
          <div className='FormFooter'>
              {showPrev()}
              {nextorSubmit()}
          </div>
          <img className="overlay" src={StainedPaper} alt=''/>
        </div>
        
      </div>
    )}
    else
    {
      // when form is successfuly submited 
      return <></>
      
    }
  }

  const nextorSubmit = () =>
    {
      if(page === 0) {
        return <button className='FormNext formNavButton'  onClick={() => {handleNext()}}>Continuar</button>
      }
      else
      {
        return <button className='FormSubmit formNavButton'  onClick={(event) => {handleSubmit(event)}}>Entregar</button>
      }
    }
  const showPrev = () =>
    {
      if(page > 0) {
        return <button className='FormPrev formNavButton' onClick={() => {setPage((curPage) => curPage-1);}}>Volver</button>
      }
      else
      {
        return (<></>)
      }
    }





  return (
    <>
      <ToastContainer />
      {RSVP_stage()}
      {/* {RSVP_stage()} */}
    </>
)}

export default  Form
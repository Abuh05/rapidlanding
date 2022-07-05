import React, { useState } from 'react';


import { db } from "../firebase"

const PatientForm = () => {

  const [firstName, setName] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  db.collection('contacts').add({
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
  })
  .then(() => {
    alert("Message has been submitted");
  })
  .catch((error) => {
    alert(error.message);
  })
  setName("");
  setLast("");
  setEmail("");
  setMessage("");
}

  return (
    <div className='relative antialised bg-[url("https://media.istockphoto.com/photos/african-american-video-conference-call-picture-id1276732131?k=20&m=1276732131&s=612x612&w=0&h=slZkHoOl8HmDd-UtD5w4mEZ3O5yBWd5D2UYTi1Q1y7U=")]  h-screen w-full bg-cover bg-center'>
      <div className='absolute inset-0 bg-indigo-700 bg-opacity-50'></div>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-indigo-500 w-full max-w-7xl max-h-68 p-12 sm:p-12 rounded-xl shadow-md text-white z-50'>
          <div className='flex flex-col justify-center'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide '>Consult Verified Doctor</h1>
            </div>
            <div>
            <p className='text-lg pt-8 text-gray-200'>RapidMedicare is a unique online marketplace that allows you to find the doctor or pharmacist that
                 fits your needs fast, so you can get the treatment you need anytime, anywhere.</p>
            </div>
            <div className='text-lg pt-8 text-gray-200'>
            <ul>
                  <li>It is fast and safe</li>
                  <li>It is convenient and flexible</li>
                  <li> It improves results</li>
                 </ul>
            </div>
            <div className='text-lg pt-8 text-gray-200'>
            <p>When you choose RapidMedicare, you're getting uncompromised quality and convenience. 
                  We match you to the right doctor in less than 24 hours! Save time in crowded
                   waiting rooms and get the care you need quickly, so you can get back to feeling your best.</p>
            </div>
          </div>
          <div>
          <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
            <form action="" onSubmit={handleSubmit}  className='flex flex-col space-y-4'>
              <div>
                <label htmlFor="" className='text-sm'>First Name</label>
                <input type="text" placeholder="Your FirstName"  className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2
                 focus:ring-teal-300'value={firstName} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="" className='text-sm'>Last Name</label>
                <input type="text" placeholder="Your LastName" className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 
                focus:ring-teal-300' value={lastName} onChange={(e) => setLast(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="" className='text-sm'>Email</label>
                <input type="email" placeholder="Email" className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 
                focus:ring-teal-300'  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="" className='text-sm'>Why do you want to see the doctor?</label>
                <textarea
                rows="4" placeholder="Kindly tell us about your challenge so that we can match you with the right doctor. Be detailed as much as possible"
                 className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
              </div>
              <button className='inline-block self-end bg-indigo-500 text-white font-bold rounded-lg px-6 py-2  text-sm'>Book Appointment</button>
            </form>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default PatientForm
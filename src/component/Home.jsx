import React from 'react'
import {HiOutlineLocationMarker} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"

import appleDownload from '../img/appledownload.png'
import googleplay from '../img/googleplay.png'
import { Link } from 'react-router-dom'
import Doctor from '../img/Cards.png'
import Doc from '../img/Dr.png'
import Map from '../img/map.png'
import Pharm from '../img/pharm.png'




function Home() {

    
  return (
    <div>
      <div className=' flex mt-5 justify-between w-[90%] mx-auto'>
        <div className='text-2xl text-blue-500'>RapidMedicare</div>


        <div className='flex'>
          <p className='px-3 py-1 text-blue-500  h-fit border-b-4 border-b-blue-500 decoration-blue-500 '><Link to="/patient-signup">Doctors</Link></p>
          <p className='px-3 py-1'> <Link to="/doctors-booking">Pharmacies</Link></p>
          <p className='px-3 py-1'><Link to="/doctors-booking">Consultations</Link></p>
          <p className='px-3 py-1'><Link to="/doctors-appointment">Appointments</Link></p>
          <p className='px-3 py-1'><Link to="/doctors-booking">Your Orders</Link></p>
          <p className='px-3 py-1'><Link to="/doctors-booking">Your Records</Link></p>

          <button className=' p-3 bg-blue-500 text-white'><Link to="/">Sign Up Free!</Link></button>
        </div>
      </div>

      <div>
        <h1 className='text-5xl text-center mt-6'>The Smartest way to find <span className='text-blue-500'>doctors</span> near You.</h1>

        <div className='w-fit mx-auto'> 
          <div className="flex justify-between mt-11 mb-2 h-fit">
            <div className='flex'>
              {/* states */}
              <div className='  p-3 border text-gray-500 bg-gray-100'><HiOutlineLocationMarker className='inline' /> Abuja
              </div>
              <div  className="bg-gray-100 p-0 rounded-lg">
                {/* search bar */}
              <input 
              type="search" 
              name="search" 
              placeholder='Search Doctors, clinics etc.'
              className='border border-gray-300 pl-3 bg-transparent inline-block p-3 w-[30em] placeholder:text-gray-500 outline-blue-400 '
              />
              </div>
            </div>

            {/* search button */}
            <button className='p-3 ml-5 bg-blue-500 text-white'><BiSearch className="inline px-1 h-6 w-6 " />Search</button> 
          </div>

          <div className='w-fit'>
          {/* popular searches */}

          <div className='text-gray-500'>Popular Searches: <span className='px-2'>Dermatologist</span> <span className='px-2'>Pediatrician</span> <span className='px-2'>Gynaecologist</span> <span className='px-2'>other</span> </div>
          </div>
          
        </div>
      </div>

      {/* main section */}
      <div className='flex justify-center mt-16 mb-10'>
          <div className='text-5xl font-bold max-w-sm pt-5 h-auto '>
            See Doctors {"&"} pharmacies <span className=' text-blue-500'>near</span> you.
          </div>
          <div className=' h-[40vh] w-[30vw] grid place-items-center text-3xl text-white'>
            <img src={Map} alt="" />
          </div>
      </div>


      <div className='flex justify-center mt-32'>
          <div className='text-5xl font-bold max-w-sm pt-5 h-auto '>
            <p>Find the perfect <span className=' text-blue-500'>doctor</span> for your health needs.</p>
          </div>
          <div className=' h-[40vh] w-[30vw] grid place-items-center text-3xl text-white'>
            <img src={Doc} alt="" />
          </div>
      </div>

    <div className=' text-center text-5xl mt-32 mb-10'>
      <p>No Monthly Subscription or Exchange charges.</p>
      <p>It is 100% <span className=' text-blue-500 '>free</span>!</p>
    </div>

    <div className='h-80 flex justify-center mt-16'>
      {/* doctor image */}
      <img src={Doctor} alt="" className='w-110 -h-80' />
    </div>

    <p className='text-5xl text-center mt-16 mb-10'>Why choose <span className='text-blue-500'>RapidMedicare</span>?</p>

    <div className=' p-3 text-white mt-6 w-[80%] mx-auto bg-blue-500'>
      <p className=' mx-auto max-w-2xl mt-10 text-2xl '>RapidMedicare is a unique marketplace that allows you to find the doctor or pharmacist that fits your needs fast, so you can get the treatment you need anytime, anywhere.</p>

      <div className='flex gap-20 mx-auto w-fit mt-20 mb-7 '>
        <div className=''>
          <p className='text-5xl text-center'>01.</p>
          <p className='mt-5'>It is fast and safe</p>
        </div>

        <div>
          <p className='text-5xl text-center'>02.</p>
          <p className='mt-5'>It is convenient and flexible</p>
        </div>

        <div>
          <p className='text-5xl text-center'>03.</p>
          <p className='mt-5'>It improves results</p>

        </div>

      </div>
    </div>  

    <p className='font-bold text-center text-5xl mt-11'>Your Health Records Are <span className='text-blue-500'>Safe</span> With Us</p>
    <p className='text-center mt-5 text-4xl max-w-2xl mx-auto'>No <span className=' text-blue-500'>Doctor</span> Can View Your Health Records Unless You Grant Them <span className=' text-blue-500'>Access</span>.</p>


    <div className='flex gap-4 w-4/5 mx-auto mt-20 '>
        <div className='h-100% w-1/2 bg-gray-500'>
        </div>

        <div className="w-1/2">
          <h2 className=' text-4xl font-bold'>Download Our <span className='text-blue-500'>App.</span></h2>
          <p className="text-lg text-gray-600">Access video consultation with Nigeria's top doctors on the RapidMedicare App. Connect with doctors online, available 24/7, from the comfort of your home</p>


          <p className='text-lg mt-8 text-gray-600'>Get the link to download the app</p>

          <div className="flex mt-5 mb-2 h-fit">
            <div className='flex'>
              {/* states */}
              <div className='  p-3 border text-gray-500 bg-gray-100'>
                +234
              </div>
              <div  className="bg-gray-100 p-0 rounded-lg">
                {/* search bar */}
              <input 
              type="search" 
              name="search" 
              placeholder='Enter your phone number'
              className='border border-gray-300 pl-3 bg-transparent inline-block p-3 w-[20em] placeholder:text-gray-500 outline-blue-400 '
              />
              </div>
            </div>

            {/* search button */}
            <button className='p-3 ml-5 bg-blue-500 text-white'>Send SMS</button> 
          </div>

          <div>
            <img src={appleDownload} className="h-20 w-56 mx-auto m-5" alt="apple download button" />

            <img src={googleplay} className="h-20 w-56 mx-auto m-5" alt="google download button" />

          </div>

        </div>
    </div>

    <div className='flex gap-10 justify-center items-center mt-40'>

      <div>
        <p className='text-5xl font-bold'>Quality <span className='text-blue-500'>Healthcare</span> made handy.</p>
        <div className='flex mt-20 gap-6 justify-center'>
          <button className='p-4 bg-blue-500 text-white'>
            Buy Medicine
          </button>

          <button className='p-4 border border-blue-500 text-blue-500'>
            Consult a Doctor
          </button>
        </div>

      </div>

      <div className=' gap-5'>
        <img src={Pharm} alt="" />
      </div>
    </div>

    <div className='mt-40 grid place-items-center'>
        <p className='text-3xl font-bold'>Register to get consultation</p>
        <p className='m-3 text-gray-500'>Health always begins with a healthy lifestyle</p>


      <div >

        <input 
              type="text" 
              name="search" 
              placeholder='Enter your email'
              className='border border-gray-300 pl-3 bg-gray-200 inline-block p-3 w-[20em] placeholder:text-gray-500 outline-blue-400'
              />

          <button className='p-3 ml-5 bg-blue-500 text-white'>Get Started</button> 
      </div>
          
    </div>  

    <div className='mt-40 flex bg-blue-100'>
      <div className='flex'>
        <div>
          <p className='text-lg '>Home</p>

          <p>Home</p>
          <p>Community</p>
          <p>Events</p>
          <p>Contact</p>

        </div>

        <div>
          <p className='text-lg'>Resources</p>

          <p>Blogs</p>
          <p>News</p>
          <p>Guides</p>
          <p>Help Center</p>

        </div>

        <div className='text-lg'>
          <p>Community</p>

          <p>NewsFeed</p>
          <p>Profile</p>
          <p>Friends</p>
          <p>Forums</p>

        </div>

        <div className='text-lg'>

          <p>Main Links</p>

          <p>Members</p>
          <p>Activity</p>
          <p>Groups</p>
          <p>Private Group</p>

        </div>
      </div>

      <div>

        <p>Subscribe our Newsletter</p>

        <p>Subscribe to be the first one to know about updates. Enter your email</p>

        <div>
        <input 
              type="text" 
              name="search" 
              placeholder='Email Address'
              className='border border-gray-900 pl-3 bg-transparent inline-block p-3 w-[20em] placeholder:text-gray-500 outline-blue-400'
              />

          <button className='p-3  bg-blue-500 text-white'>Subscribe</button>
        </div>

      </div>
    </div>
      
    </div>
  )
}

export default Home
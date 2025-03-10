import React, { useContext } from 'react'
import jobsphere from "../assets/jobsphere.png";
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate()
  const { openSignIn } = useClerk()
  const { user } = useUser()
  const {setShowRecruiterLogin} = useContext(AppContext)

  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        <img src={jobsphere} onClick={()=>navigate('/')} alt="JobSphere Logo" className="w-50 h-10 cursor-pointer" />
        {
          user  ? <div className='flex items-center gap-3'>
                    <Link to={'/applications'}>Applied Jobs</Link>
                    <p>|</p>
                    <p className='max-sm:hidden'>Hi, {user.firstName + " " + user.lastName}</p>
                    <UserButton />
                </div>
                : <div className='flex gap-4 max-sm:text-xs'>
                    <button onClick={e=>setShowRecruiterLogin(true)} className='text-gray-600 ml-2'>Recruiter Login</button>
                    <button onClick={e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full sm:mr-3'>Login</button>
                </div>
        }
      </div>
    </div>
  )
}

export default Navbar

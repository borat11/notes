import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='w-full bg-black py-3'>
        <div className="container flex justify-between items-center px-5">
            <div className='text-white'>
              Logo
            </div>
            <div >
                <Link to="/" className='text-white font-mono font-bold text-lg px-3'>Home</Link>
                <Link to="/notes" className='text-white font-mono font-bold text-lg px-3'>Notes</Link>
                <Link to="/contacts"className='text-white font-mono font-bold text-lg '>Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default Navber
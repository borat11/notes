import React from 'react'
import Navber from '../components/menubar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
    </div>
  )
}

export default RootLayout
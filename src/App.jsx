import React from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './RootlayOut/RootLayout'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Notes from './pages/Notes'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout/> }>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/notes' element={<Notes/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        </Route>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App

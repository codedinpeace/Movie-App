import React, { useEffect } from 'react'
import LandingPage from './Pages/HomePage/LandingPage'
import Routers from './Routes/Routers'
import { Toaster } from 'react-hot-toast'
import useAuthStore from './States/useAuthStore'
import Loader from './Components/Loader'
import Navbar from './Components/Navbar'

const App = () => {

  const {check, isAuthentiCating} = useAuthStore()

  useEffect(()=>{
    check()
  },[])

  if(isAuthentiCating) {
    return (
      <Loader />
    )
  }

  return (
    <>
    <Toaster />
      <Routers /> 
    </>
  )
}

export default App
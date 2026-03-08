import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/HomePage/LandingPage'
import Login from '../Pages/Authentication/Login'
import Register from '../Pages/Authentication/Register'
import EditInfo from '../Pages/Authentication/EditInfo'
import All_Movies from '../Pages/Movies_Shows/All_Movies'
import All_Shows from '../Pages/Movies_Shows/All_Shows'
import Profile from '../Pages/ProfilePage/Profile'
import Information from '../Pages/Info_Page/Information'

const Routers = () => {
  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/edit' element={<EditInfo />} />

        <Route path='/movies' element={<All_Movies />}/>
        <Route path='/shows' element={<All_Shows />}/>
        
        <Route path='/profile' element={<Profile />} />

        <Route path='/details/:id' element={<Information />} />
      </Routes>
  )
}

export default Routers
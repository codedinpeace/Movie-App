  import React from 'react'
  import { Route, Routes } from 'react-router-dom'
  import LandingPage from '../Pages/HomePage/LandingPage'
  import Login from '../Pages/Authentication/Login'
  import Register from '../Pages/Authentication/Register'
  import EditInfo from '../Pages/Authentication/EditInfo'
  import All_Movies from '../Pages/Movies_Shows/All_Movies'
  import Profile from '../Pages/ProfilePage/Profile'
  import Information from '../Pages/Info_Page/Information'
  import useAuthStore from '../States/useAuthStore'
import Movies from '../Pages/Movies_Shows/Movies/Movies'
import Shows from '../Pages/Movies_Shows/Shows/Shows'

  const Routers = () => {

    const {isLoggedIn} = useAuthStore()

    return (
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={isLoggedIn ? <All_Movies/> : <Login />} />
          <Route path='/register' element={isLoggedIn ? <All_Movies /> : <Register />} />
          <Route path='/profile/edit' element={isLoggedIn ?  <EditInfo /> : <Login />} />

          <Route path='/recommendations' element={<All_Movies />}/>

          <Route path='/movies' element={<Movies />}/>
          <Route path='/shows' element={<Shows />}/>
          
          <Route path='/profile' element={isLoggedIn ? <Profile /> : <Login />} />

          <Route path='/details/:id' element={isLoggedIn ?  <Information /> : <Login />} />
          <Route path='/recommendations/details/:id' element={isLoggedIn ?  <Information /> : <Login />} />
        </Routes>
    )
  }

  export default Routers
import React from 'react'
import HeroSection from './Sections/HeroSection'
import MoviesByCategory from './Sections/MoviesByCategory'
import EverythingYouNeed from './Sections/EverythingYouNeed'
import DiscoverNow from '../../Components/DiscoverNow'
import Footer from '../../Components/Footer'

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <MoviesByCategory />
      <EverythingYouNeed />
      <DiscoverNow />
      <Footer />
    </div>
  )
}

export default LandingPage
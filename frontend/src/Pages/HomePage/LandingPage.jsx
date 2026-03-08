import React from 'react'
import HeroSection from './Sections/HeroSection'
import MoviesByCategory from './Sections/MoviesByCategory'
import EverythingYouNeed from './Sections/EverythingYouNeed'

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <MoviesByCategory />
      <EverythingYouNeed />
    </div>
  )
}

export default LandingPage
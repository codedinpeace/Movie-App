import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border border-[#1a1a1a] w-full">
      
      {/* Main links */}
      <div className="flex flex-wrap justify-around gap-10 p-8 md:p-10">
        
        {/* Home */}
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold mb-1">Home</p>
          <Link to="/categories" className="text-gray-400 hover:text-white text-sm no-underline">Categories</Link>
          <Link to="/devices" className="text-gray-400 hover:text-white text-sm no-underline">Devices</Link>
          <Link to="/pricing" className="text-gray-400 hover:text-white text-sm no-underline">Pricing</Link>
          <Link to="/faq" className="text-gray-400 hover:text-white text-sm no-underline">FAQ</Link>
        </div>

        {/* Movies */}
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold mb-1">Movies</p>
          <Link to="/movies/genres" className="text-gray-400 hover:text-white text-sm no-underline">Genres</Link>
          <Link to="/movies/trending" className="text-gray-400 hover:text-white text-sm no-underline">Trending</Link>
          <Link to="/movies/new-release" className="text-gray-400 hover:text-white text-sm no-underline">New Release</Link>
          <Link to="/movies/popular" className="text-gray-400 hover:text-white text-sm no-underline">Popular</Link>
        </div>

        {/* Shows */}
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold mb-1">Shows</p>
          <Link to="/shows/genres" className="text-gray-400 hover:text-white text-sm no-underline">Genres</Link>
          <Link to="/shows/trending" className="text-gray-400 hover:text-white text-sm no-underline">Trending</Link>
          <Link to="/shows/new-release" className="text-gray-400 hover:text-white text-sm no-underline">New Release</Link>
          <Link to="/shows/popular" className="text-gray-400 hover:text-white text-sm no-underline">Popular</Link>
        </div>

        {/* Connect With Us */}
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold mb-1">Connect With Us</p>
          <div className="flex gap-3 mt-1">
            <a href="https://facebook.com" className="bg-[#1a1a1a] border border-[#2a2a2a] p-2.5 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-all">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" className="bg-[#1a1a1a] border border-[#2a2a2a] p-2.5 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-all">
              <Twitter size={18} />
            </a>
            <a href="https://linkedin.com" className="bg-[#1a1a1a] border border-[#2a2a2a] p-2.5 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="h-px bg-[#1a1a1a]" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-8 md:px-10 py-5">
        <p className="text-gray-500 text-sm">©2023 CineVibe. All Rights Reserved</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link to="/terms" className="text-gray-500 hover:text-white text-sm no-underline">Terms of Use</Link>
          <Link to="/privacy" className="text-gray-500 hover:text-white text-sm no-underline">Privacy Policy</Link>
          <Link to="/cookies" className="text-gray-500 hover:text-white text-sm no-underline">Cookie Policy</Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer
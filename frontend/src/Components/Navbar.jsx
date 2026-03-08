import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Movies & Shows', to: '/movies' },
  { label: 'Support', to: '/support' },
  { label: 'Subscriptions', to: '/subscriptions' },
]

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const Logo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="17" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="17" stroke="url(#lg)" strokeWidth="1.5" strokeDasharray="60 107" />
    <path d="M14 12.5L25 18L14 23.5V12.5Z" fill="#dc2626" />
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#dc2626" /><stop offset="1" stopColor="#991b1b" />
      </linearGradient>
    </defs>
  </svg>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/[0.06]
          ${scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.5)]'
            : 'bg-[#0a0a0a]/60 backdrop-blur-md'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
            <Logo />
            <span className="text-white font-bold text-xl tracking-tight">
              Cine<span className="text-red-600">Vibe</span>
            </span>
          </Link>

          {/* Desktop pill nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.07] border border-white/10 rounded-full px-1.5 py-1.5">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 no-underline whitespace-nowrap
                  ${isActive(to)
                    ? 'bg-white/[0.12] text-white font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.08]'
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              aria-label="Search"
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer border-none bg-transparent"
            >
              <SearchIcon />
            </button>
            <button
              aria-label="Notifications"
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer border-none bg-transparent"
            >
              <BellIcon />
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] bg-white/[0.07] border border-white/10 rounded-[10px] hover:bg-white/[0.14] transition-all duration-200 ml-1 cursor-pointer"
            >
              <span
                className={`block w-5 h-0.5 bg-white rounded-sm transition-all duration-300 origin-center
                  ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 bg-white rounded-sm transition-all duration-300
                  ${menuOpen ? 'w-0 opacity-0' : 'w-5 opacity-100'}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white rounded-sm transition-all duration-300 origin-center
                  ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[68px] bg-black/60 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed top-[68px] left-0 right-0 z-50
          bg-[#0e0e0e] backdrop-blur-2xl border-b border-white/[0.08]
          px-4 pb-6 pt-3
          transition-all duration-300 ease-out
          ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center no-underline text-base font-medium py-3.5 px-4 rounded-xl transition-all duration-200 mb-1
              border-b border-white/[0.05] last:border-b-0
              ${isActive(to)
                ? 'text-white bg-red-600/15 border-l-4 border-l-red-600 pl-3'
                : 'text-white/70 hover:text-white hover:bg-white/[0.07]'
              }`}
          >
            {isActive(to) && (
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-3 flex-shrink-0" />
            )}
            {label}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Navbar
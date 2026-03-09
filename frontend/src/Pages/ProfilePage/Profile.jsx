import { Link } from 'react-router-dom'
import { Mail, Calendar, LogOut, Heart, User } from 'lucide-react'
import useAuthStore from '../../States/useAuthStore'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar'

const Profile = () => {

  const {user, logout} = useAuthStore()
  const navigate = useNavigate()
 

  const handleLogout = () => {
    logout(navigate)
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4 py-16">

      {/* Background glow */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/[0.04] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative w-full max-w-md">

        {/* Avatar + Name */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center mb-4">
            <User size={36} className="text-gray-500" />
          </div>
          <h1 className="text-white text-2xl font-bold">{user?.name}</h1>
          <p className="text-gray-500 text-sm mt-1">Member</p>
        </div>

        {/* Info Card */}
        <div className="bg-[#111113] border border-white/[0.07] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">

          {/* Email */}
          <div className="flex items-center gap-4 px-6 py-4 border-b border-white/[0.05]">
            <div className="w-9 h-9 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0">
              <Mail size={16} className="text-red-500" />
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-0.5">Email</p>
              <p className="text-white text-sm font-medium">{user?.email}</p>
            </div>
          </div>

          {/* Created At */}
          <div className="flex items-center gap-4 px-6 py-4 border-b border-white/[0.05]">
            <div className="w-9 h-9 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0">
              <Calendar size={16} className="text-red-500" />
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-0.5">Member Since</p>
              <p className="text-white text-sm font-medium">{user?.createdAt.split("T")[0]}</p>
            </div>
          </div>

          {/* Favourites */}
          <Link
            to="/favourites"
            className="flex items-center gap-4 px-6 py-4 border-b border-white/[0.05] no-underline hover:bg-white/[0.03] transition-colors group"
            >
            <div className="w-9 h-9 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0">
              <Heart size={16} className="text-red-500" />
            </div>
            <div className="flex-1">
              <p className="text-gray-500 text-xs mb-0.5">Favourites</p>
              <p className="text-white text-sm font-medium">View your saved movies</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-gray-400 transition-colors">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 hover:bg-red-600/[0.06] transition-colors group cursor-pointer bg-transparent border-none text-left"
            >
            <div className="w-9 h-9 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0">
              <LogOut size={16} className="text-red-500" />
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-0.5">Account</p>
              <p className="text-red-500 text-sm font-medium group-hover:text-red-400 transition-colors">Log Out</p>
            </div>
          </button>

        </div>

      </div>
    </div>
            </>
  )
}

export default Profile
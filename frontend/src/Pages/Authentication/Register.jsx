import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import useAuthStore from '../../States/useAuthStore'
import Loader from '../../Components/Loader'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  // --- form state (wire up your logic here) ---
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isSigningUp, register} = useAuthStore()

  const obj = {
    name,
    email,
    password
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    register(obj, navigate)
    // TODO: add register logic
  }



    if(isSigningUp){
      return(
        <Loader />
      )
    }


  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4 py-16">

      {/* Subtle red glow behind card */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="17" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <path d="M14 12.5L25 18L14 23.5V12.5Z" fill="#dc2626" />
            </svg>
            <span className="text-white font-bold text-xl tracking-tight">
              Cine<span className="text-red-600">Vibe</span>
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-[#111113] border border-white/[0.07] rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">

          <h1 className="text-white text-2xl font-bold mb-1">Create an account</h1>
          <p className="text-gray-500 text-sm mb-8">Join CineVibe and start exploring movies.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/30 transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/30 transition-all"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-600 rounded-xl px-4 py-3 pr-11 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/30 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 text-sm mt-1 cursor-pointer border-none shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:shadow-[0_4px_24px_rgba(220,38,38,0.45)]"
            >
              Create Account
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#222]" />
            <span className="text-gray-600 text-xs">or</span>
            <div className="flex-1 h-px bg-[#222]" />
          </div>

          {/* Login link */}
          <p className="text-center text-gray-500 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-red-500 hover:text-red-400 font-medium no-underline transition-colors">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Register
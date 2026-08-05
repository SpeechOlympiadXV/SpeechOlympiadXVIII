import { Link } from 'react-router-dom'

export function RegistrationCTA() {
  return (
    <div 
      className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl"
      style={{ background: 'radial-gradient(circle at center, #ffe55c 0%, #d4af37 50%, #996515 100%)' }}
    >
      <div className="absolute inset-0 bg-black/10 opacity-20"></div>
      <div className="relative px-6 py-16 sm:px-12 sm:py-20 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#181818] tracking-tight mb-4">
          Ready to Take the Stage?
        </h2>
        <p className="max-w-2xl text-lg sm:text-xl text-[#181818]/80 font-medium mb-8">
          Join Speech Olympiad XVIII today. Register now and let your voice be heard by the world.
        </p>
        <Link to="/register" className="inline-block">
          <button className="bg-[#181818] text-white hover:bg-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  )
}

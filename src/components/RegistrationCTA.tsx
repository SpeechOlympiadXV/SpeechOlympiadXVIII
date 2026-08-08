import { Link } from 'react-router-dom'

export function RegistrationCTA() {
  return (
    <div 
      className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl bg-[#D4B34C]"
    >
      <div className="absolute inset-0 bg-black/10 opacity-20"></div>
      <div className="relative px-6 py-16 sm:px-12 sm:py-20 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#181818] tracking-tight mb-4">
          Ready to Take the Stage?
        </h2>
        <p className="max-w-2xl text-lg sm:text-xl text-[#181818]/80 font-medium mb-8">
          Join Speech Olympiad XIX today. Register now and let your voice be heard by the world.
        </p>
        {/* <Link to="/register" className="inline-block"> */}
          <button className="bg-[#181818] text-white opacity-80 cursor-not-allowed px-8 py-4 rounded-full text-lg font-bold transition-all duration-300">
            Registration Opening Soon
          </button>
        {/* </Link> */}
      </div>
    </div>
  )
}

import React from 'react'

export function BookletSection() {
  return (
    <div className="w-full flex justify-center items-center mb-9">
      <div className="w-[90%] md:w-[80%] bg-[#121212]/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
        <div>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-wide leading-2 w-[80%]">
            Path to the Crown
          </h2>
          <p className="mt-4 text-gray-300 leading-6 text-left text-lg font-thin">
            Master the art of public speaking with our comprehensive{' '}
            <a
              href="https://drive.google.com/file/d/1q593UEqVGyOmJeEzJoMwOyjGEroa8Ksz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EDC001] hover:text-[#d5c060] hover:cursor-pointer transition-colors duration-200 font-bold underline"
            >
              Competition Guidelines
            </a>{' '}
            and expert tips to elevate your speaking skills!
          </p>
        </div>
      </div>
    </div>
  )
}

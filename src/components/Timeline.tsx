import { useState } from 'react'

interface Stage {
  id: number
  name: string
  date: string
  upcoming: boolean
  lineStyle: string
  diamondStyle: string
}

interface CompetitionTimelineProps {}

export function CompetitionTimeline({}: CompetitionTimelineProps) {
  const [stages] = useState<Stage[]>([
    {
      id: 1,
      name: 'Preliminary Round',
      date: '31st August, 2025',
      upcoming: false,
      lineStyle: 'bg-gradient-to-b from-[#edc00133] to-[#edc00133]',
      diamondStyle: 'bg-[#594d1b]',
    },
    {
      id: 2,
      name: 'Semi Finals',
      date: '14th September, 2025',
      upcoming: false,
      lineStyle: 'bg-gradient-to-b from-[#edc00133] to-[#edc001]',
      diamondStyle: 'bg-[#594d1b]',
    },
    {
      id: 3,
      name: 'Finals',
      date: '30th September, 2025',
      upcoming: true,
      lineStyle: 'bg-gradient-to-t from-[#edc00133] to-[#edc001]',
      diamondStyle: 'color-pulse',
    },
  ])

  return (
    <div className="p-9 my-9 bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-xl w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tighter leading-tight w-[80%]">
          Timeline
        </h2>
        <p className="mt-4 text-gray-300 leading-6 text-left text-lg font-light">
          Key stages and dates
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {stages.map((stage, index) => (
            <div
              key={stage.name}
              className="relative my-8 w-full sm:w-[100%] mx-auto"
            >
              {/* Vertical Line */}
              <div
                className={`absolute overflow-visible top-12 sm:left-[52%] md:left-[51.5%] lg:left-[50.5%] xl:left-[48.5%] transform sm:-translate-x-1/2 w-[1px] ${
                  stage.id === stages.length ? 'h-0' : 'h-[120%]'
                } ${stage.lineStyle}`}
              />

              {/* Diamond Shape */}
              <div
                className={`absolute top-12 sm:left-[52%] md:left-[51.5%] lg:left-[50.5%] xl:left-[48.5%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 ${stage.diamondStyle}`}
              >
                {/* Inner diamond for non-focused sections */}
                {!stage.upcoming && (
                  <div className="absolute w-2 h-2 bg-[#272722] left-[25%] top-[25%]" />
                )}
              </div>

              {/* Content Box */}
              <div className="sm:ml-8 flex flex-col sm:flex-row items-center sm:justify-between sm:items-start mb-4">
                <div className="pl-[10%] w-[90%] sm:pl-8">
                  <div
                    className={`flex w-[100%] items-center mb-2 ${
                      stage.id % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`ml-0 w-full sm:w-[45%] p-4 flex flex-col mb-5 rounded-lg ${
                        stage.id % 2 === 0 ? 'sm:text-end' : ''
                      } ${
                        stage.upcoming
                          ? 'backdrop-brightness-200 border-[1px] border-[#edc00155]'
                          : 'backdrop-brightness-125'
                      }`}
                    >
                      <h3
                        className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-4 ${
                          stage.upcoming
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-[#EDC001]'
                            : 'text-gray-400'
                        }`}
                      >
                        {stage.name}
                      </h3>
                      <time
                        className={`text-sm xl:text-base ${
                          stage.upcoming ? 'text-gray-200' : 'text-gray-400'
                        }`}
                      >
                        {stage.date}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Animations */}
      <style>{`
        @keyframes color-pulse {
          40% {
            background-color: #edc001;
          }
          50% {
            background-color: #edc001;
          }
          80% {
            background-color: #ffe675;
          }
        }

        .color-pulse {
          background-color: #edc001;
          animation: color-pulse 3s linear infinite;
        }
      `}</style>
    </div>
  )
}

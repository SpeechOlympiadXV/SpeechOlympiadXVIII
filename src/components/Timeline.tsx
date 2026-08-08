import { useState } from 'react'

interface Stage {
  id: number
  name: string
  date: string
  upcoming: boolean
  lineStyle: string
  diamondStyle: string
  highlightStyle?: 'gold' | 'silver'
}

interface CompetitionTimelineProps { }

export function CompetitionTimeline({ }: CompetitionTimelineProps) {
  const [stages] = useState<Stage[]>([
    {
      id: 1,
      name: 'Preliminary Round',
      date: '6th September, 2026',
      upcoming: false,
      lineStyle: 'bg-gradient-to-b from-[#edc00133] to-[#edc00133]',
      diamondStyle: 'bg-[#594d1b]',
    },
    {
      id: 2,
      name: 'Semi Finals',
      date: '20th September, 2026',
      upcoming: false,
      lineStyle: 'bg-gradient-to-b from-[#edc00133] to-[#edc001]',
      diamondStyle: 'bg-[#594d1b]',
      highlightStyle: 'silver',
    },
    {
      id: 3,
      name: 'Finals',
      date: '1st October, 2026',
      upcoming: true,
      lineStyle: 'bg-gradient-to-t from-[#edc00133] to-[#edc001]',
      diamondStyle: 'color-pulse',
      highlightStyle: 'gold',
    },
  ])

  return (
    <div className="p-9 my-9 bg-[#121212]/80 backdrop-blur-sm rounded-xl w-full border border-[#282828]">
      {/* Header */}
      <div className="mb-8">
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-wide leading-tight w-[80%]">
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
                className={`absolute overflow-visible top-12 sm:left-[52%] md:left-[51.5%] lg:left-[50.5%] xl:left-[48.5%] transform sm:-translate-x-1/2 w-[1px] ${stage.id === stages.length ? 'h-0' : 'h-[120%]'
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
                    className={`flex w-[100%] items-center mb-2 ${stage.id % 2 === 0 ? 'justify-start' : 'justify-end'
                      }`}
                  >
                    <div
                      className={`ml-0 w-full sm:w-[45%] p-6 flex flex-col mb-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${stage.id % 2 === 0 ? 'sm:text-end' : ''
                        } ${stage.highlightStyle === 'gold'
                          ? 'bg-gradient-to-br from-[#282828] to-[#EDC00144] backdrop-blur-md border-[#EDC001]/50 shadow-[0_0_20px_rgba(237,192,1,0.15)]'
                          : stage.highlightStyle === 'silver'
                          ? 'bg-gradient-to-br from-[#2a2a2a] to-[#c0c0c044] backdrop-blur-md border-[#c0c0c0]/60 shadow-[0_0_20px_rgba(192,192,192,0.2)]'
                          : 'bg-[#1e1e1e] backdrop-blur-sm border border-[#4a4a4a] shadow-lg'
                        }`}
                    >
                      <h3
                        className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-2 ${stage.highlightStyle
                            ? 'text-transparent bg-clip-text'
                            : 'text-gray-200'
                          }`}
                        style={
                          stage.highlightStyle === 'gold' ? { backgroundImage: 'linear-gradient(to bottom right, #FFF3B0 0%, #EDC001 50%, #A87F0A 100%)' } :
                          stage.highlightStyle === 'silver' ? { backgroundImage: 'linear-gradient(to bottom right, #ffffff 0%, #c0c0c0 50%, #808080 100%)' } :
                          {}
                        }
                      >
                        {stage.name}
                      </h3>
                      <time
                        className={`text-sm xl:text-base font-light ${stage.highlightStyle ? 'text-gray-200' : 'text-gray-400'
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

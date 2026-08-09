import { useMemo } from 'react'

interface Stage {
  id: number
  name: string
  /** Machine-readable, drives which stage is "next". */
  isoDate: string
  /** What the user sees. */
  date: string
}

/** done = already happened · next = the soonest still ahead · later = after that */
type StageStatus = 'done' | 'next' | 'later'

const STAGES: Stage[] = [
  { id: 1, name: 'Preliminary Round', isoDate: '2026-09-06', date: '6th September, 2026' },
  { id: 2, name: 'Semi Finals', isoDate: '2026-09-20', date: '20th September, 2026' },
  { id: 3, name: 'Finals', isoDate: '2026-10-01', date: '1st October, 2026' },
]

interface CompetitionTimelineProps { }

export function CompetitionTimeline({ }: CompetitionTimelineProps) {
  // One source of truth for emphasis. Previously two competing ideas ran in
  // parallel — `upcoming` (time) drove the nodes while `highlightStyle`
  // (gold/silver medals) drove the cards, so the lit node and the lit card
  // were on different rows. Status is now derived from the date, which also
  // means the highlight advances on its own as rounds pass.
  const statuses = useMemo<StageStatus[]>(() => {
    const today = new Date().toISOString().slice(0, 10)
    const nextIndex = STAGES.findIndex((s) => s.isoDate >= today)
    return STAGES.map((_, i) => {
      if (nextIndex === -1) return 'done'
      if (i < nextIndex) return 'done'
      return i === nextIndex ? 'next' : 'later'
    })
  }, [])

  const stages = STAGES

  return (
    <div className="p-9 my-9 bg-[#121212]/80 backdrop-blur-sm rounded-xl w-full border border-[#282828]">
      {/* Header */}
      <div className="mb-8">
        <h2 className="heading-section text-white w-[80%]">
          Timeline
        </h2>
        <p className="mt-4 text-gray-300 leading-6 text-left text-lg font-light">
          Key stages and dates
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {stages.map((stage, index) => {
            const status = statuses[index]
            const isNext = status === 'next'
            const isDone = status === 'done'

            return (
            <div
              key={stage.name}
              className="relative my-8 w-full sm:w-full mx-auto"
            >
              {/* Connector. One flat tone rather than a per-segment gradient —
                  each stage previously ran from-ember/20 to-ember, so the line
                  snapped back to 20% at every junction and read as a patchy
                  stripe. Segments after the next round dim out. */}
              <div
                className={`absolute overflow-visible top-12 sm:left-[52%] md:left-[51.5%] lg:left-[50.5%] xl:left-[48.5%] transform sm:-translate-x-1/2 w-px ${
                  stage.id === stages.length ? 'h-0' : 'h-[120%]'
                } ${isDone || isNext ? 'bg-ember/30' : 'bg-white/10'}`}
              />

              {/* Node. Hollow by default; the next round fills and breathes. */}
              <div
                className={`absolute top-12 sm:left-[52%] md:left-[51.5%] lg:left-[50.5%] xl:left-[48.5%] transform -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 border ${
                  isNext
                    ? 'border-ember node-active'
                    : isDone
                    ? 'bg-ember/30 border-ember/40'
                    : 'bg-[#141414] border-white/20'
                }`}
              />

              {/* Content Box */}
              <div className="sm:ml-8 flex flex-col sm:flex-row items-center sm:justify-between sm:items-start mb-4">
                <div className="pl-[10%] w-[90%] sm:pl-8">
                  <div
                    className={`flex w-[100%] items-center mb-2 ${stage.id % 2 === 0 ? 'justify-start' : 'justify-end'
                      }`}
                  >
                    <div
                      className={`ml-0 w-full sm:w-[45%] p-6 flex flex-col mb-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                        stage.id % 2 === 0 ? 'sm:text-end' : ''
                      } ${
                        isNext
                          ? 'bg-linear-to-br from-[#241608] to-ember/15 border-ember/55 shadow-[0_0_24px_rgba(255,122,24,0.22)]'
                          : isDone
                          ? 'bg-[#1a1a1a] border-white/10 opacity-70'
                          : 'bg-[#1e1e1e] border-[#3a3a3a] shadow-lg'
                      }`}
                    >
                      {isNext && (
                        <span className="eyebrow mb-2 text-ember">Next up</span>
                      )}
                      <h3
                        className={`heading-sub lg:text-3xl mb-2 ${
                          isNext ? 'text-ember-light' : 'text-gray-200'
                        }`}
                      >
                        {stage.name}
                      </h3>
                      <time
                        dateTime={stage.isoDate}
                        className={`text-sm xl:text-base font-light ${
                          isNext ? 'text-gray-200' : 'text-gray-400'
                        }`}
                      >
                        {stage.date}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>

      {/* Global Animations */}
      <style>{`
        /* The active node breathes via its glow rather than by swapping
           background-color between three keyframes, which flickered. */
        @keyframes nodeGlow {
          0%, 100% { box-shadow: 0 0 8px 0 rgba(255, 122, 24, 0.45); }
          50%      { box-shadow: 0 0 16px 3px rgba(255, 122, 24, 0.75); }
        }

        .node-active {
          background-color: var(--color-ember);
          animation: nodeGlow 3.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .node-active {
            animation: none;
            box-shadow: 0 0 12px 1px rgba(255, 122, 24, 0.55);
          }
        }
      `}</style>
    </div>
  )
}
